export type CommitLine = { hash: string; message: string; tag?: string };

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  commits: CommitLine[];
  tech: string[];
  stats?: { commits: number; repos: number; loc: number };
};

export const experience: Experience[] = [
  {
    company: "CampX",
    role: "Associate Software Engineering Intern",
    period: "2026",
    summary:
      "My first taste of real production scale — a multi-tenant ERP serving many colleges. I shipped features end-to-end across NestJS microservices and React micro-frontends, and learned to sweat the things that bite at scale: concurrency, idempotency, indexing.",
    stats: { commits: 375, repos: 17, loc: 165500 },
    commits: [
      { hash: "a1f9c2e", message: "feat: end-to-end Event Management system (multi-tenant)", tag: "shipped" },
      { hash: "c9e57a1", message: "feat: Platform Updates broadcast across microservices", tag: "live" },
      { hash: "2d8f6b3", message: "perf: -35% outbound API calls, faster TTI (React Query + memo)" },
      { hash: "7b3d014", message: "feat: RabbitMQ + Amazon SQS event-driven messaging" },
      { hash: "e4a1d90", message: "chore: 2-week UI migration → 2 days via Claude Code agents", tag: "7× faster" },
    ],
    tech: ["NestJS", "TypeScript", "React", "MySQL / TypeORM", "MongoDB", "RabbitMQ", "AWS SQS"],
  },
  {
    company: "Docsile",
    role: "Remote Developer Intern",
    period: "2025",
    summary:
      "Where I learned to build for real users on real deadlines — the web presence and core features of a 16-module hospital-management SaaS, from a pixel-faithful marketing rebuild to serverless data flows on AWS.",
    commits: [
      { hash: "f02b7c8", message: "perf: -25% First Contentful Paint (code splitting + lazy load)", tag: "shipped" },
      { hash: "9a4e1d2", message: "feat: event-driven serverless backend on AWS Lambda" },
      { hash: "b67c305", message: "feat: secure REST APIs via API Gateway (throttling + stages)" },
    ],
    tech: ["React", "Node.js", "AWS Lambda", "API Gateway", "Tailwind"],
  },
];

// Drives the contribution heatmap (⑤). Deterministic so SSR and client match.
export const TOTAL_CONTRIBUTIONS = { commits: 378, repos: 17, loc: 165500 };
