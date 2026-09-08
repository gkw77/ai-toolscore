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
    title: "Coding agents",
    blurb: "Write, edit and run code for you.",
    subcategories: [
      { id: "terminal-agents", title: "Terminal" },
      { id: "ide-agents", title: "In your IDE" },
      { id: "self-hosted-agents", title: "Self-hosted" },
    ],
  },
  {
    id: "build-your-own-agent",
    title: "Frameworks & gateways",
    blurb: "Build your own agent — or put every model behind one key.",
    subcategories: [
      { id: "agent-frameworks", title: "Agent frameworks" },
      { id: "model-gateways", title: "Model gateways" },
    ],
  },
  {
    id: "browser-computer-use",
    title: "Web & desktop agents",
    blurb: "Agents that click, type and drive real UIs.",
    subcategories: [
      { id: "web-agents", title: "On the web" },
      { id: "computer-use-agents", title: "On your desktop" },
    ],
  },
  {
    id: "extend-your-agent",
    title: "MCP servers & skills",
    blurb: "Bolt new abilities onto the agent you already run.",
    subcategories: [
      { id: "mcp-servers", title: "MCP servers" },
      { id: "skills-prompts", title: "Skills & prompts" },
    ],
  },
  {
    id: "ship-it-safely",
    title: "Evals & observability",
    blurb: "Measure an agent before it ships, watch it after.",
    subcategories: [
      { id: "evals-observability", title: "Evals & observability" },
    ],
  },
  {
    id: "media-generation",
    title: "Media generation",
    blurb: "Images, video and audio from a prompt.",
    subcategories: [
      { id: "image-gen", title: "Image generation" },
      { id: "video-audio-gen", title: "Video & audio" },
    ],
  },
];
