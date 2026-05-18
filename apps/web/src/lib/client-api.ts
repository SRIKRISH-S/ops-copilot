import type { AgentStepEvent, WorkflowResult } from "./types";
import { getAgentApiBase } from "./agent-api";

export async function startWorkflow(payload: { goal: string; industry?: string; region?: string }) {
  const res = await fetch(`${getAgentApiBase()}/api/workflow`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).detail || "Failed to start workflow");
  return res.json() as Promise<{ run_id: string }>;
}
export function subscribeWorkflow(runId: string, handlers: { onStep?: (e: AgentStepEvent) => void; onComplete?: (r: WorkflowResult) => void; onError?: (m: string) => void }) {
  const source = new EventSource(`${getAgentApiBase()}/api/workflow/${runId}/events`);
  source.addEventListener("step", (e) => { try { handlers.onStep?.(JSON.parse((e as MessageEvent).data)); } catch {} });
  source.addEventListener("complete", (e) => { try { handlers.onComplete?.(JSON.parse((e as MessageEvent).data)); } finally { source.close(); } });
  source.addEventListener("error", (e) => {
    if ((e as MessageEvent).data) try { handlers.onError?.(JSON.parse((e as MessageEvent).data).message); } catch { handlers.onError?.("Workflow failed"); }
    else handlers.onError?.("Connection closed");
    source.close();
  });
  return () => source.close();
}
