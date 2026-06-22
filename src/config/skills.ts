export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "C++"] },
  {
    category: "Frontend",
    items: ["React 19", "Next.js", "React Native / Expo", "Tailwind CSS", "Framer Motion", "Redux / Zustand"],
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "REST APIs", "API Gateway", "Message Queues", "Prisma / TypeORM"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Schema Design", "Concurrency Control"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (S3, SQS)", "Vercel", "Docker", "Git / GitHub", "CI/CD"],
  },
  {
    category: "AI / GenAI",
    items: ["LLM Integration", "AI Agent Pipelines", "Prompt Engineering", "RAG (learning)"],
  },
];
