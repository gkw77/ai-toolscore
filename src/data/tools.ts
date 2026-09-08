// Tool Autopsy data model.
// Every review carries: what the vendor claims → how I actually tested it → a verdict.
// Nothing gets a verdict until it has been run on real work. Empty categories are honest gaps, not content.

export type Verdict = "use" | "depends" | "avoid";

export interface Review {
  /** short slug, used for anchor + id */
  slug: string;
  name: string;
  /** vendor/README link */
  repo?: string;
  /** approx stars, filled by a later refresh script — never hand-invented */
  stars?: string;
  /** what the README / vendor claims the tool does */
  claim: string;
  /** what I actually did with it (real project, real work) */
  tested: string;
  /** USE IT / DEPENDS / AVOID + one-line reason */
  verdict: Verdict;
  verdictNote: string;
  /** when this tool is the wrong call */
  whenNot?: string;
  updated: string; // ISO date
}

export interface Subcategory {
  id: string;
  title: string;
  reviews: Review[];
}

export interface Category {
  id: string;
  title: string;
  /** one self-explanatory line so nobody needs to decode the category name */
  blurb: string;
  subcategories: Subcategory[];
}

export const SITE_TAGLINE =
  "AI developer tools are directories of noise. I run the ones that matter and tell you the truth — what holds up on real work, what doesn't, and when to avoid it.";

export const categories: Category[] = [
  {
    id: "code-writing-agents",
    title: "Code-writing agents",
    blurb: "AI that plans, writes and edits code for you.",
    subcategories: [
      {
        id: "terminal-agents",
        title: "Terminal agents",
        reviews: [
          {
            slug: "claude-code",
            name: "Claude Code",
            repo: "https://github.com/anthropics/claude-code",
            claim:
              "Anthropic's official agentic coding tool — lives in your terminal, reads your repo, edits files, runs commands and delegates subtasks.",
            tested:
              "Used as a primary development agent on real projects: a web game platform (Fastify + SQLite + nginx on a VPS), Godot games, an Astro website, and two public research repositories — spanning planning, implementation, debugging and deployment.",
            verdict: "use",
            verdictNote: "The reference for the whole category; everything else is compared to it.",
            whenNot:
              "You want a thin autocomplete in your existing IDE and don't want an agent touching your filesystem.",
            updated: "2026-09-07",
          },
        ],
      },
      {
        id: "ide-agents",
        title: "IDE agents",
        reviews: [],
      },
      {
        id: "self-hosted-agents",
        title: "Self-hosted / open-source agents",
        reviews: [],
      },
    ],
  },
  {
    id: "extending-your-agent",
    title: "Extending your agent",
    blurb: "MCP servers, skills and rules that bolt new abilities onto your agent.",
    subcategories: [
      {
        id: "mcp-servers",
        title: "MCP servers",
        reviews: [],
      },
      {
        id: "skills-and-prompts",
        title: "Skills & prompts",
        reviews: [],
      },
      {
        id: "rules-and-config",
        title: "Rules / CLAUDE.md config",
        reviews: [],
      },
    ],
  },
  {
    id: "models-api-access",
    title: "Models & API access",
    blurb: "Which model to call, quality vs price, and how to reach it from where you are.",
    subcategories: [
      {
        id: "model-quality-price",
        title: "Model quality & price",
        reviews: [],
      },
      {
        id: "access-and-multimodal",
        title: "Access & multimodal APIs",
        reviews: [],
      },
    ],
  },
  {
    id: "media-generation",
    title: "Media generation",
    blurb: "Images, video and audio from text — for products, not prompts.",
    subcategories: [
      {
        id: "image-gen",
        title: "Image generation",
        reviews: [],
      },
      {
        id: "video-audio-gen",
        title: "Video & audio generation",
        reviews: [],
      },
    ],
  },
  {
    id: "agent-ops",
    title: "Agent ops",
    blurb: "Observe, evaluate and harden AI agents before they hurt you.",
    subcategories: [
      {
        id: "observability",
        title: "Observability & tracing",
        reviews: [],
      },
      {
        id: "evals-and-audit",
        title: "Evals & audit",
        reviews: [],
      },
      {
        id: "deploy",
        title: "Deploy & run",
        reviews: [],
      },
    ],
  },
];
