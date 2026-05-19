from datetime import datetime
from typing import Any, Literal
from pydantic import BaseModel, Field

class WorkflowStartRequest(BaseModel):
    goal: str = Field(min_length=10, max_length=2000)
    industry: str | None = None
    region: str | None = None

class WorkflowStartResponse(BaseModel):
    run_id: str
    status: Literal["queued", "running"]

class AgentStepEvent(BaseModel):
    run_id: str
    agent: str
    status: Literal["started", "completed", "failed"]
    message: str
    progress: int
    payload: dict[str, Any] | None = None

class PlannerOutput(BaseModel):
    goal_summary: str
    objectives: list[str]
    phases: list[dict[str, str]]
    success_metrics: list[str]
    assumptions: list[str]

class ResearchOutput(BaseModel):
    market_overview: str
    target_audience: str
    competitors: list[dict[str, str]]
    opportunities: list[str]
    threats: list[str]
    trends: list[str]

class ContentOutput(BaseModel):
    tagline: str
    elevator_pitch: str
    social_posts: list[str]
    email_outreach: str
    landing_page_hero: str
    ad_copy_variants: list[str]

class TaskItem(BaseModel):
    title: str
    owner: str
    priority: Literal["high", "medium", "low"]
    due_in_days: int
    description: str

class ExecutionOutput(BaseModel):
    tasks: list[TaskItem]
    milestones: list[dict[str, str]]
    resources_needed: list[str]
    budget_estimate: str

class ReviewOutput(BaseModel):
    strategy_summary: str
    risk_analysis: list[dict[str, str]]
    quality_score: int = Field(ge=0, le=100)
    gaps: list[str]
    next_actions: list[str]
    executive_brief: str

class WorkflowResult(BaseModel):
    run_id: str
    goal: str
    status: Literal["queued", "running", "completed", "failed"]
    created_at: datetime
    completed_at: datetime | None = None
    planner: PlannerOutput | None = None
    research: ResearchOutput | None = None
    content: ContentOutput | None = None
    execution: ExecutionOutput | None = None
    review: ReviewOutput | None = None
    error: str | None = None
