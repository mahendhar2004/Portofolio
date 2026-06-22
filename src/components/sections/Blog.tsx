import { site } from "@/config/site";
import { RevealText, Reveal } from "@/components/ui/Kinetic";
import { GuideNote } from "@/components/ui/GuideNote";

const posts = [
  {
    title: "Monolith → microservices → API gateway: the three-diagram explainer",
    href: "https://my-blogs-mauve.vercel.app/blog/monolith-microservices-api-gateway-three-diagrams",
  },
  {
    title: "Five AI models, five jobs: the 2026 stack",
    href: "https://my-blogs-mauve.vercel.app/blog/five-ai-models-five-jobs-2026-stack",
  },
  {
    title: "Claude in 2026: the engineer's field guide",
    href: "https://my-blogs-mauve.vercel.app/blog/claude-2026-engineers-field-guide",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label mb-4">(Writing · tild~)</p>
          <GuideNote>i build it, then i write about how. here are three.</GuideNote>
          <RevealText as="h2" text="I write about what I build" className="display text-4xl md:text-6xl" />
          <p className="mt-3 text-sm text-muted">Ship real software, one post at a time.</p>
        </div>
        <a
          href={site.links.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="mono link-underline text-sm text-muted hover:text-text"
        >
          Read all on tild~ ↗
        </a>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.href} delay={i * 0.07}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tile flex h-full flex-col justify-between gap-8 p-6"
            >
              <span className="mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")} · Article</span>
              <h3 className="font-serif text-xl leading-snug">{p.title}</h3>
              <span className="mono text-xs text-muted">Read on tild~ ↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
