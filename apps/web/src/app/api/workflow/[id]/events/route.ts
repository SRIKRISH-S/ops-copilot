import { NextRequest } from "next/server";
import { getAgentApiBase } from "@/lib/agent-api";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const upstream = await fetch(`${getAgentApiBase()}/api/workflow/${id}/events`, {
    headers: { Accept: "text/event-stream" },
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
