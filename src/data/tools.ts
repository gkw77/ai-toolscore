// Tool Autopsy data model.
// Each tool carries a one-line intro and a score out of 10 from real use.
// No tool gets a card until it has been run on real work. Empty categories are honest gaps, not content.

export type Verdict = "use" | "depends" | "avoid";

export interface Review {
  /** short slug, used for anchor + id */
  slug: string;
  name: string;
  /** vendor/README link */
  repo?: string;
  /** approx GitHub stars — external signal, filled by a later refresh script, never hand-invented */
  stars?: string;
  /** one line: what the tool is */
  intro: string;
  /** my score out of 10, from real use — not a README. 8+ keep, 6-7 depends, <=5 avoid */
  score: number;
  /** one line: why this score + when it's the wrong call */
  reason: string;
  updated: string; // ISO date
}

/** verdict derived from the score: 8+ use, 6-7 depends, <=5 avoid */
export function verdictFor(score: number): Verdict {
  if (score >= 8) return "use";
  if (score >= 6) return "depends";
  return "avoid";
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
  "AI developer tools are directories of noise. I run the ones that matter and score them out of 10 — from real work, not a README.";

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
            intro:
              "Anthropic's agentic coding tool: lives in your terminal, reads your repo, edits files, runs commands and delegates subtasks.",
            score: 9,
            reason:
              "The category reference — daily driver across web, games and research repos. Skip it if you want IDE autocomplete, not an agent that touches your filesystem.",
            updated: "2026-09-08",
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
