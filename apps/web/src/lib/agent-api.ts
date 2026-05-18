export function getAgentApiBase() {
  // NEXT_PUBLIC_AGENT_API_URL is set in Vercel dashboard (points to Railway backend)
  // AGENT_API_URL is for server-side (Docker / local)
  // Falls back to localhost for local dev
  const url =
    process.env.NEXT_PUBLIC_AGENT_API_URL ||
    process.env.AGENT_API_URL ||
    "http://localhost:8000";
  return url.replace(/\/$/, "");
}
