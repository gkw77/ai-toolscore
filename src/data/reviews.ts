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

  // ── Build your own agent · frameworks ─────────────────────────────────────
  {
    cat: "build-your-own-agent",
    sub: "agent-frameworks",
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
    cat: "build-your-own-agent",
    sub: "agent-frameworks",
    fullName: "langchain-ai/langchain",
    name: "LangChain",
    intro: "The agent engineering platform — a framework for composing LLM apps and agents.",
    score: 7.6,
    reason:
      "The biggest general-purpose framework by adoption and still shipping daily. The catch is the abstraction tax: APIs churn fast, and the framework is heavy once your needs firm up — many teams shed it for a thin SDK.",
    updated: "2026-09-08",
  },
  {
    cat: "build-your-own-agent",
    sub: "agent-frameworks",
    fullName: "microsoft/autogen",
    name: "AutoGen",
    intro: "A programming framework for building agentic AI — the project that popularized multi-agent orchestration.",
    score: 5.6,
    reason:
      "A giant, hugely influential repo whose main branch has gone quiet since April 2026 — Microsoft's active agent work moved to microsoft/agent-framework. The stars hide the stall: start on the successor, not this parked repo.",
    updated: "2026-09-08",
  },
  {
    cat: "build-your-own-agent",
    sub: "agent-frameworks",
    fullName: "crewAIInc/crewAI",
    name: "crewAI",
    intro: "Framework for orchestrating role-playing autonomous agents that collaborate on complex tasks.",
    score: 7.0,
    reason:
      "Active and the most popular take on role-based multi-agent teams. The role-play framing is a real but narrow pattern: a genuine win when a crew structure maps to your problem, pure overhead when it doesn't.",
    updated: "2026-09-08",
  },

  // ── Code-writing agents · self-hosted ──────────────────────────────────────
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

  // ── Build your own agent · model gateways ─────────────────────────────────
  {
    cat: "build-your-own-agent",
    sub: "model-gateways",
    fullName: "QuantumNous/new-api",
    name: "new-api",
    intro: "A unified, self-hosted model hub — cross-converts many LLM providers into OpenAI-, Claude- or Gemini-compatible endpoints.",
    score: 7.4,
    reason:
      "The practical pick when you route many providers: one aggregator, one key format, actively maintained. It's infra you run (AGPL, self-hosted), not a hosted service — budget for operating it.",
    updated: "2026-09-08",
  },
  {
    cat: "build-your-own-agent",
    sub: "model-gateways",
    fullName: "maximhq/bifrost",
    name: "Bifrost",
    intro: "An enterprise AI gateway with adaptive load balancing, guardrails and cluster mode.",
    score: 6.8,
    reason:
      "Solid, fast Go gateway with a clean enterprise pitch. '50x faster than LiteLLM' in its own headline is the marketing language this site reads skeptically — benchmark against your own traffic before trusting it.",
    updated: "2026-09-08",
  },

  // ── Browser & computer-use · web agents ───────────────────────────────────
  {
    cat: "browser-computer-use",
    sub: "web-agents",
    fullName: "browser-use/browser-use",
    name: "browser-use",
    intro: "The standard library for making websites accessible to AI agents — automate the web with a real browser.",
    score: 8.6,
    reason:
      "The category's biggest and most active library — near-daily shipping and the default foundation for web-agent tooling. It's a building block: you bring the model and the loop, not a turnkey agent.",
    updated: "2026-09-08",
  },
  {
    cat: "browser-computer-use",
    sub: "web-agents",
    fullName: "vercel-labs/agent-browser",
    name: "agent-browser",
    intro: "Browser automation CLI for AI agents, written in Rust.",
    score: 7.6,
    reason:
      "Vercel Labs' fast, clean browser CLI — great for scripted agent browsing and very actively developed. Younger and narrower than browser-use: a strong component, not yet the ecosystem.",
    updated: "2026-09-08",
  },

  // ── Browser & computer-use · computer-use agents ──────────────────────────
  {
    cat: "browser-computer-use",
    sub: "computer-use-agents",
    fullName: "feder-cr/AIHawk",
    name: "AIHawk",
    intro: "Open-source web + computer-use agent in plain English, with a Browser MCP for Claude Code.",
    score: 7.2,
    reason:
      "Unusually complete for an open project — web browsing, computer use and an MCP bridge to coding agents all in one. Broad ambition means a heavier, more opinionated setup than a focused library.",
    updated: "2026-09-08",
  },
  {
    cat: "browser-computer-use",
    sub: "computer-use-agents",
    fullName: "trycua/cua",
    name: "cua",
    intro: "Open infrastructure for computer-use 2.0 — drivers, cross-OS fleets and benchmarks.",
    score: 7.0,
    reason:
      "A toolset for teams building and measuring computer-use agents — drivers, fleets, evals — rather than an agent you point at your own screen. Real value if you're shipping CU systems; the '2.0' bet is early.",
    updated: "2026-09-08",
  },
  {
    cat: "browser-computer-use",
    sub: "computer-use-agents",
    fullName: "simular-ai/Agent-S",
    name: "Agent S",
    intro: "An open agentic framework that operates computers the way a person does.",
    score: 6.6,
    reason:
      "Research-grounded open computer-use agent with real architecture behind it. Adoption is still small and the 'uses a computer like a human' promise runs ahead of today's reliability — promising, not proven.",
    updated: "2026-09-08",
  },

  // ── Extend your agent · MCP servers ───────────────────────────────────────
  {
    cat: "extend-your-agent",
    sub: "mcp-servers",
    fullName: "github/github-mcp-server",
    name: "GitHub MCP server",
    intro: "GitHub's official MCP server — issues, PRs, repos and code straight into your agent.",
    score: 8.4,
    reason:
      "First-party and maintained by GitHub itself, which is exactly what you want from a permissions-heavy server. The standard bridge if your agent lives on GitHub — mind the token scope you grant it.",
    updated: "2026-09-08",
  },
  {
    cat: "extend-your-agent",
    sub: "mcp-servers",
    fullName: "microsoft/playwright-mcp",
    name: "Playwright MCP",
    intro: "Give any MCP-capable agent a real browser through Playwright.",
    score: 8.2,
    reason:
      "The most dependable way to hand a coding agent a working browser — built on Playwright, maintained by the same team, active. If you need your agent to click a real page, start here.",
    updated: "2026-09-08",
  },
  {
    cat: "extend-your-agent",
    sub: "mcp-servers",
    fullName: "DeusData/codebase-memory-mcp",
    name: "codebase-memory-mcp",
    intro: "A code-intelligence MCP that indexes a codebase into a persistent knowledge graph.",
    score: 7.7,
    reason:
      "Attacks a real pain — context starvation on large repos — by answering queries from an index instead of re-reading files. '99% fewer tokens' is the marketing headline; the actual win is not re-sending unchanged files every turn.",
    updated: "2026-09-08",
  },

  // ── Extend your agent · skills & prompts ──────────────────────────────────
  {
    cat: "extend-your-agent",
    sub: "skills-prompts",
    fullName: "obra/superpowers",
    name: "superpowers",
    intro: "An agentic skills framework and software-development methodology.",
    score: 8.0,
    reason:
      "The most influential open methodology for working with coding agents — a skills-first workflow with real teeth. It's doctrine, not software: adopt it because you want the workflow, not because stars translate into features.",
    updated: "2026-09-08",
  },
  {
    cat: "extend-your-agent",
    sub: "skills-prompts",
    fullName: "affaan-m/ECC",
    name: "ECC",
    intro: "A harness-performance system — skills, instincts, memory and security rules for coding agents.",
    score: 7.6,
    reason:
      "Strong, actively-shipped doctrine for tuning how an agent harness behaves — instincts, memory, security, research-first. The value is proportional to how much of an opinionated rule regime you want layered on your agent.",
    updated: "2026-09-08",
  },

  // ── Ship it safely · evals & observability ────────────────────────────────
  {
    cat: "ship-it-safely",
    sub: "evals-observability",
    fullName: "langfuse/langfuse",
    name: "Langfuse",
    intro: "Open-source AI engineering platform — evals, observability, prompt management, all self-hostable.",
    score: 8.2,
    reason:
      "The most complete open answer to 'is my agent any good, and what is it doing?' — tracing, evals and prompt management in one stack, active and well-integrated. The price is running it yourself.",
    updated: "2026-09-08",
  },
  {
    cat: "ship-it-safely",
    sub: "evals-observability",
    fullName: "openai/evals",
    name: "OpenAI Evals",
    intro: "A framework for evaluating LLMs and LLM systems, with an open registry of benchmarks.",
    score: 6.0,
    reason:
      "Still the canonical public registry of eval benchmarks and hugely influential. But the repo has sat quiet since April 2026 — treat it as a reference to draw from, not a maintained framework to build on.",
    updated: "2026-09-08",
  },
  {
    cat: "ship-it-safely",
    sub: "evals-observability",
    fullName: "AgentOps-AI/agentops",
    name: "AgentOps",
    intro: "Python SDK for AI-agent monitoring, LLM cost tracking and benchmarking.",
    score: 6.4,
    reason:
      "A focused SDK that plugs monitoring and cost tracking into most agent frameworks with a few lines. Real but smaller — and redundant if you're already on a broader observability platform.",
    updated: "2026-09-08",
  },

  // ── Media generation · image ──────────────────────────────────────────────
  {
    cat: "media-generation",
    sub: "image-gen",
    fullName: "Comfy-Org/ComfyUI",
    name: "ComfyUI",
    intro: "The most powerful, modular diffusion-model GUI and backend — a graph-and-nodes interface.",
    score: 8.6,
    reason:
      "The power-user standard, still shipping daily, with a huge ecosystem of shareable node workflows. The flexibility is the cost: you learn its graph model, and GPL licensing matters if you embed it commercially.",
    updated: "2026-09-08",
  },
  {
    cat: "media-generation",
    sub: "image-gen",
    fullName: "huggingface/diffusers",
    name: "Diffusers",
    intro: "The reference PyTorch library for state-of-the-art diffusion models — image, video and audio.",
    score: 7.6,
    reason:
      "If you build media generation into software instead of clicking a GUI, this is the library: Hugging Face-maintained, near-daily releases, every major architecture. It's a dependency, not an app — you bring the weights and the compute.",
    updated: "2026-09-08",
  },
  {
    cat: "media-generation",
    sub: "image-gen",
    fullName: "invoke-ai/InvokeAI",
    name: "InvokeAI",
    intro: "A professional, Apache-licensed creative engine and web UI for Stable Diffusion.",
    score: 7.2,
    reason:
      "The polished option — clean professional UI, node canvas, built for artists and commercial work under Apache. Smaller community than the big two but genuinely active; pick it for workflow polish over raw ecosystem size.",
    updated: "2026-09-08",
  },
  {
    cat: "media-generation",
    sub: "image-gen",
    fullName: "AUTOMATIC1111/stable-diffusion-webui",
    name: "AUTOMATIC1111",
    intro: "Stable Diffusion web UI — the tool that started the local-image-generation wave.",
    score: 6.4,
    reason:
      "The most-starred repo on this whole board (165k) and hugely influential — but momentum moved to ComfyUI long ago and releases have slowed to a trickle. Fine if it already does your job; a fresh start should look at the active options, not the legacy giant.",
    updated: "2026-09-08",
  },
  {
    cat: "media-generation",
    sub: "image-gen",
    fullName: "lllyasviel/Fooocus",
    name: "Fooocus",
    intro: "A local image generator focused on prompting — start typing, get images, no node graphs.",
    score: 6.2,
    reason:
      "The friendliest on-ramp to local generation: lllyasviel stripped it down to prompt-and-generate. It's a one-person project with a bursty release cadence (quiet since late 2025) — great for beginners, not a bet to build a pipeline on.",
    updated: "2026-09-08",
  },

  // ── Media generation · video & audio ──────────────────────────────────────
  {
    cat: "media-generation",
    sub: "video-audio-gen",
    fullName: "RVC-Boss/GPT-SoVITS",
    name: "GPT-SoVITS",
    intro: "Few-shot voice cloning and text-to-speech — about a minute of audio to train a usable voice model.",
    score: 8.0,
    reason:
      "The standard open voice-cloning toolkit — MIT, active, and the quality from a minute of reference audio is striking. Clone only voices you have rights to, and budget training time; it's a training tool, not a drop-in TTS.",
    updated: "2026-09-08",
  },
  {
    cat: "media-generation",
    sub: "video-audio-gen",
    fullName: "2noise/ChatTTS",
    name: "ChatTTS",
    intro: "A generative speech model tuned for natural daily dialogue.",
    score: 6.2,
    reason:
      "Best-in-class at sounding conversational rather than read-aloud — a real edge for voice agents and dialogue. AGPL, and development has slowed through 2026; capable, but you assemble more yourself.",
    updated: "2026-09-08",
  },
  {
    cat: "media-generation",
    sub: "video-audio-gen",
    fullName: "calesthio/OpenMontage",
    name: "OpenMontage",
    intro: "An agentic video-production system that turns an AI coding assistant into a video studio.",
    score: 6.0,
    reason:
      "A methodology-and-skills package more than a model or engine, and the pitch is maximal — 'world's first', 100+ tools. Five months and 56k stars is a viral-growth signal, not a maturity signal: interesting if you already run agent skills, young otherwise.",
    updated: "2026-09-08",
  },
  {
    cat: "media-generation",
    sub: "video-audio-gen",
    fullName: "coqui-ai/TTS",
    name: "Coqui TTS",
    intro: "A battle-tested text-to-speech toolkit with a large model zoo.",
    score: 4.5,
    reason:
      "46k stars but the company shut down in 2024 and the repo hasn't been touched since — the clearest case on this board of stars not meaning maintained. Mine it for models and ideas; don't start a project on unmaintained code.",
    updated: "2026-09-08",
  },
];
