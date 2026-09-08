// ai-toolscore — category tree (IA only, no tools).
// Grounded in a live GitHub scan (2026-09-08): six dense buyer segments.
// Tools live in reviews.ts; live GitHub numbers in github-stats.json (script-fetched).

export interface Subcategory {
  id: string;
  title: string;
}

export interface Category {
  id: string;
  title: string;
  /** one self-explanatory line so nobody needs to decode the category name */
  blurb: string;
  subcategories: Subcategory[];
}

export const SITE_TAGLINE =
  "AI dev tools are a firehose of stars and hype. This scores the real ones straight off GitHub — live adoption numbers, plus a straight read on what's substance and what's noise.";

export const categories: Category[] = [
  {
    id: "code-writing-agents",
    title: "AI coding agents",
    blurb: "Agents that plan, write and edit code for you — terminal CLIs, IDE agents, and self-hosted platforms.",
    subcategories: [
      { id: "terminal-agents", title: "Terminal agents" },
      { id: "ide-agents", title: "IDE agents" },
      { id: "self-hosted-agents", title: "Self-hosted / open-source agents" },
    ],
  },
  {
    id: "build-your-own-agent",
    title: "Build your own agent",
    blurb: "Assemble your own agent from parts — orchestration frameworks, and gateways that put every model behind one API.",
    subcategories: [
      { id: "agent-frameworks", title: "Agent frameworks" },
      { id: "model-gateways", title: "Model gateways & API access" },
    ],
  },
  {
    id: "browser-computer-use",
    title: "Browser & computer-use",
    blurb: "Agents that operate the web and your desktop — clicking, typing and driving real UIs instead of just editing files.",
    subcategories: [
      { id: "web-agents", title: "Web / browser agents" },
      { id: "computer-use-agents", title: "Computer-use agents" },
    ],
  },
  {
    id: "extend-your-agent",
    title: "Extend your agent",
    blurb: "MCP servers, skills and prompts that bolt new abilities onto the agent you already run.",
    subcategories: [
      { id: "mcp-servers", title: "MCP servers" },
      { id: "skills-prompts", title: "Skills & prompts" },
    ],
  },
  {
    id: "ship-it-safely",
    title: "Ship it safely",
    blurb: "Evals and observability — measure an agent before it ships and watch it after.",
    subcategories: [
      { id: "evals-observability", title: "Evals & observability" },
    ],
  },
  {
    id: "media-generation",
    title: "Media generation",
    blurb: "Images, video and audio from text — creator tools, curated hard because the top of this list is noisy.",
    subcategories: [
      { id: "image-gen", title: "Image generation" },
      { id: "video-audio-gen", title: "Video & audio generation" },
    ],
  },
];
