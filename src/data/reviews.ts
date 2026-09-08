// toolscore — curated judgment layer.
// One entry per tool. `fullName` is the single key that also looks up live
// numbers in github-stats.json (script-fetched, never hand-typed).
// The score blends current GitHub standing (adoption, activity) with a read of
// the repo: real software vs marketing wrapper, active vs stalled, category fit.
// 8+ reach for it · 6-7 depends · <=5 avoid.

export type Verdict = "use" | "depends" | "avoid";

export interface Review {
  /** category id, must exist in categories.ts */
  cat: string;
  /** subcategory id, must exist under that category */
  sub: string;
  /** GitHub owner/repo — repo link + live-stats lookup key */
  fullName: string;
  /** display name (falls back to repo name) */
  name: string;
  /** one line: what the tool is (from the repo's own description where possible) */
  intro: string;
  /** my score out of 10 */
  score: number;
  /** one line: why this score + when it's the wrong call */
  reason: string;
  updated: string; // ISO date of this judgment
}

export function verdictFor(score: number): Verdict {
  if (score >= 8) return "use";
  if (score >= 6) return "depends";
  return "avoid";
}

export const reviews: Review[] = [
  // ── Code-writing agents · terminal ─────────────────────────────────────────
  {
    cat: "code-writing-agents",
    sub: "terminal-agents",
    fullName: "anthropics/claude-code",
    name: "Claude Code",
    intro:
      "Agentic coding tool that lives in your terminal — reads the codebase, handles git, runs tasks through natural language.",
    score: 9.1,
    reason:
      "The category benchmark and the ecosystem reference — but closed: the repo is docs and issue tracking, the tool needs an Anthropic account. Best inside the Claude model family; docked for lock-in.",
    updated: "2026-09-08",
  },
  {
    cat: "code-writing-agents",
    sub: "terminal-agents",
    fullName: "anomalyco/opencode",
    name: "opencode",
    intro: "The open-source coding agent. Terminal-native, model-agnostic, built to be extended.",
    score: 9.0,
    reason:
      "Largest open-source agent by stars and still shipping daily — the default when you want a self-hostable, provider-free alternative to the closed CLIs.",
    updated: "2026-09-08",
  },
  {
    cat: "code-writing-agents",
    sub: "terminal-agents",
    fullName: "openai/codex",
    name: "Codex",
    intro: "Lightweight coding agent that runs in your terminal.",
    score: 8.5,
    reason:
      "OpenAI's entry — thin, fast, and strong on API-heavy use. Slimmer scope than claude-code or opencode; that's the point if you want a lean agent, the limit if you want depth.",
    updated: "2026-09-08",
  },
  {
    cat: "code-writing-agents",
    sub: "terminal-agents",
    fullName: "paul-gauthier/aider",
    name: "aider",
    intro: "AI pair programming in your terminal — a git-native pairing tool with a long track record.",
    score: 6.8,
    reason:
      "The OSS elder statesman and hugely influential, but its default branch has gone quiet since May 2026 while issues pile up. Stable and cheap if you already use it; hard to recommend starting fresh on a repo that isn't shipping.",
    updated: "2026-09-08",
  },
  {
    cat: "code-writing-agents",
    sub: "terminal-agents",
    fullName: "QwenLM/qwen-code",
    name: "Qwen Code",
    intro: "An open-source AI coding agent that lives in your terminal.",
    score: 7.6,
    reason:
      "Alibaba's terminal agent — capable and Apache-licensed, strongest paired with Qwen models. Smaller community and third-party ecosystem than the leaders.",
    updated: "2026-09-08",
  },
  {
    cat: "code-writing-agents",
    sub: "terminal-agents",
    fullName: "esengine/DeepSeek-Reasonix",
    name: "DeepSeek Reasonix",
    intro:
      "DeepSeek-native coding agent for your terminal, engineered around prefix-cache stability — leave it running.",
    score: 7.1,
    reason:
      "Solves a real cost problem (long-lived sessions on DeepSeek's cache) but bets entirely on one model family. Young and narrower than multi-model peers — interesting, unproven for most teams.",
    updated: "2026-09-08",
  },

  // ── Code-writing agents · IDE ──────────────────────────────────────────────
  {
    cat: "code-writing-agents",
    sub: "ide-agents",
    fullName: "cline/cline",
    name: "Cline",
    intro: "Autonomous coding agent that runs as an IDE extension, CLI assistant, or embeddable SDK.",
    score: 8.4,
    reason:
      "The strongest open-source 'hand the whole task to the agent inside your editor' tool — genuinely autonomous and provider-agnostic. Setup and permissions take real attention; it's power, not autocomplete.",
    updated: "2026-09-08",
  },
  {
    cat: "code-writing-agents",
    sub: "ide-agents",
    fullName: "continuedev/continue",
    name: "Continue",
    intro: "Open-source coding agent for your IDE.",
    score: 7.4,
    reason:
      "Rebuilt from the widely-used assistant into an agent; the IDE-centric workflow is the appeal. Trailers Cline on autonomy and momentum — solid, but no longer the obvious IDE pick.",
    updated: "2026-09-08",
  },

  // ── Code-writing agents · self-hosted ──────────────────────────────────────
  {
    cat: "code-writing-agents",
    sub: "self-hosted-agents",
    fullName: "earendil-works/pi",
    name: "pi",
    intro:
      "AI agent toolkit: a unified LLM API, an agent loop, a TUI, and a coding-agent CLI in one TypeScript codebase.",
    score: 8.2,
    reason:
      "A toolkit more than a turnkey agent — you compose the loop you want and can run it fully locally. Enormously capable, but you build more yourself; not the pick if you want agent-in-a-box.",
    updated: "2026-09-08",
  },
  {
    cat: "code-writing-agents",
    sub: "self-hosted-agents",
    fullName: "All-Hands-AI/OpenHands",
    name: "OpenHands",
    intro:
      "AI-driven development platform — a self-hostable web app where an autonomous agent works your repo end to end.",
    score: 8.0,
    reason:
      "The heavyweight of self-hosted autonomy: full workspace, browser, and API in a deployable platform rather than a CLI. That scale is the cost — a system to run, not a tool to bolt on.",
    updated: "2026-09-08",
  },
  {
    cat: "code-writing-agents",
    sub: "self-hosted-agents",
    fullName: "block/goose",
    name: "Goose",
    intro:
      "An open-source, extensible AI agent that goes beyond code — install, execute, edit and test with any LLM.",
    score: 7.2,
    reason:
      "Built by Block and pitched at machine-use broadly, not just coding. Solid engineering and local-first, but less specialized for dev workflows than dedicated coding agents.",
    updated: "2026-09-08",
  },
];
