# 🚀 Ops Copilot — AI-Powered Operations Intelligence Agent

> **AI Agent Olympics Hackathon 2026 — Milan AI Week**  
> Built for the next generation of autonomous DevOps & business operations.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-brightgreen?style=for-the-badge)](https://ops-copilot.vercel.app)
[![API Status](https://img.shields.io/badge/API-Railway-blue?style=for-the-badge)](https://ops-copilot-api.up.railway.app/health)

---

## 🎯 What is Ops Copilot?

Ops Copilot is a **multi-agent AI system** that takes a natural language business goal and autonomously generates a full operational strategy — including market analysis, risk assessment, resource planning, and a step-by-step execution roadmap.

Simply type your goal (e.g., *"Launch a SaaS product in the European fintech market"*) and watch the AI agents collaborate in real-time to produce a boardroom-ready operations plan.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **Multi-Agent Pipeline** | LangGraph-powered agents: Planner → Researcher → Analyst → Strategist |
| ⚡ **Real-Time Streaming** | Watch each agent step complete live via Server-Sent Events |
| 🌍 **Industry + Region Aware** | Contextual plans tailored to your market and geography |
| 📄 **Export to PDF** | Download your full operations plan instantly |
| 🎨 **Premium UI** | Next.js 15 + Tailwind, fully responsive |

---

## 🏗️ Architecture

```
┌──────────────────────┐      ┌────────────────────────────┐
│   Vercel (Frontend)  │ ───► │   Railway (Backend API)    │
│   Next.js 15 + React │      │   FastAPI + LangGraph      │
└──────────────────────┘      │   Gemini 2.0 Flash LLM     │
                               └────────────────────────────┘
```

**Agent Pipeline:**
```
Goal Input → [Planner] → [Researcher] → [Analyst] → [Strategist] → Report
```

---

## 🚀 Live Demo (For Judges)

**👉 Frontend:** https://ops-copilot.vercel.app  
**👉 API Health:** https://ops-copilot-api.up.railway.app/health  
**👉 API Docs:** https://ops-copilot-api.up.railway.app/docs

### Try This Demo Goal:
> *"Expand a B2B logistics software company into Southeast Asia"*
- Industry: `Technology`
- Region: `Southeast Asia`

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Backend | FastAPI, Python 3.11, Uvicorn |
| AI Agents | LangGraph, LangChain, Google Gemini 2.0 Flash |
| Database | SQLite (aiosqlite + SQLAlchemy async) |
| Hosting | Vercel (frontend) + Railway (backend) |

---

## 🔧 Local Development

### Prerequisites
- Python 3.11+
- Node.js 18+
- Google Gemini API key (free at [aistudio.google.com](https://aistudio.google.com))

### Setup
```bash
# Clone the repo
git clone https://github.com/SRIKRISH-S/ops-copilot.git
cd ops-copilot

# Copy env file and add your API key
copy env.example .env
# Edit .env: set GOOGLE_API_KEY=your_key_here

# Start API
cd apps/agent-api
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload

# Start Frontend (new terminal)
cd apps/web
npm install
npm run dev
```

Open http://localhost:3000

---

## 🌐 Deployment

### Backend → Railway
1. New project → Deploy from GitHub → Select `ops-copilot`
2. Root Directory: `apps/agent-api`
3. Set env vars: `GOOGLE_API_KEY`, `LLM_PROVIDER=gemini`, `LLM_MODEL=gemini-2.0-flash`, `CORS_ORIGINS=https://your-vercel-url.vercel.app`

### Frontend → Vercel
1. Import from GitHub → Select `ops-copilot`
2. Root Directory: `apps/web`
3. Set env var: `NEXT_PUBLIC_AGENT_API_URL=https://your-railway-url.up.railway.app`

---

## 👤 Team

Built with ❤️ for the **AI Agent Olympics Hackathon 2026** at Milan AI Week.

---

*Powered by Google Gemini 2.0 Flash + LangGraph multi-agent orchestration*

