// toolscore — category tree (IA only, no tools).
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
    title: "Code-writing agents",
    blurb: "AI that plans, writes and edits code for you.",
    subcategories: [
      { id: "terminal-agents", title: "Terminal agents" },
      { id: "ide-agents", title: "IDE agents" },
      { id: "self-hosted-agents", title: "Self-hosted / open-source agents" },
    ],
  },
  {
    id: "extending-your-agent",
    title: "Extending your agent",
    blurb: "MCP servers, skills and rules that bolt new abilities onto your agent.",
    subcategories: [
      { id: "mcp-servers", title: "MCP servers" },
      { id: "skills-and-prompts", title: "Skills & prompts" },
      { id: "rules-and-config", title: "Rules / CLAUDE.md config" },
    ],
  },
  {
    id: "models-api-access",
    title: "Models & API access",
    blurb: "Which model to call, quality vs price, and how to reach it from where you are.",
    subcategories: [
      { id: "model-quality-price", title: "Model quality & price" },
      { id: "access-and-multimodal", title: "Access & multimodal APIs" },
    ],
  },
  {
    id: "media-generation",
    title: "Media generation",
    blurb: "Images, video and audio from text — for products, not prompts.",
    subcategories: [
      { id: "image-gen", title: "Image generation" },
      { id: "video-audio-gen", title: "Video & audio generation" },
    ],
  },
  {
    id: "agent-ops",
    title: "Agent ops",
    blurb: "Observe, evaluate and harden AI agents before they hurt you.",
    subcategories: [
      { id: "observability", title: "Observability & tracing" },
      { id: "evals-and-audit", title: "Evals & audit" },
      { id: "deploy", title: "Deploy & run" },
    ],
  },
];
