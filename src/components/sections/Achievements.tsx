import { site } from "@/config/site";
import { TOTAL_CONTRIBUTIONS } from "@/config/experience";
import { ContributionHeatmap } from "@/components/ui/ContributionHeatmap";
import { RevealText, Reveal } from "@/components/ui/Kinetic";
import { GuideNote } from "@/components/ui/GuideNote";

const highlights = [
  {
    tag: "Real users · gold",
    title: "An app real people actually use",
    detail: "Grid is live on the Play Store at 4.9★ with 400+ students — a shipped product beats a folder of demos.",
  },
  {
    tag: "Patent",
    title: "A published patent at 21",
    detail: "Sakhiya, our IoT safety wearable — Indian Patent No. 202521062326.",
  },
  {
    tag: "Academic honour",
    title: "An ‘O’ grade for building it",
    detail: "Top grade for the year-long design project — for the engineering, not just the report.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <p className="label mb-4">(Achievements / Open source)</p>
      <GuideNote>this is the part i&apos;m proudest of.</GuideNote>
      <RevealText as="h2" text="Proof of work" className="display mb-12 text-4xl md:text-6xl" />

      {/* the "gold" highlight cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.07}>
            <div className="tile h-full p-6">
              <span className="mono text-[10px] uppercase tracking-wider text-accent">{h.tag}</span>
              <h3 className="mt-3 font-serif text-xl leading-snug">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* GitHub activity — contribution heatmap */}
      <Reveal className="mt-4">
        <div className="tile p-7 md:p-9">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label">GitHub activity · internships</p>
              <p className="mt-2 max-w-sm text-sm text-muted">A year of shipping across production codebases.</p>
            </div>
            <div className="flex items-end gap-8">
              <Stat n={`${TOTAL_CONTRIBUTIONS.commits}`} l="commits" />
              <Stat n={`${TOTAL_CONTRIBUTIONS.repos}`} l="repos" />
              <Stat n={`${Math.round(TOTAL_CONTRIBUTIONS.loc / 1000)}k`} l="lines" />
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mono link-underline self-center text-xs text-muted hover:text-text"
              >
                View GitHub ↗
              </a>
            </div>
          </div>
          <ContributionHeatmap />
        </div>
      </Reveal>

      {/* leadership + certifications */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="tile h-full p-6">
            <h3 className="mono mb-5 text-xs uppercase tracking-[0.18em] text-accent">Leadership</h3>
            <ul className="space-y-4">
              {site.leadership.map((l) => (
                <li key={l} className="flex gap-3 text-sm leading-relaxed text-text/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="tile h-full p-6">
            <h3 className="mono mb-5 text-xs uppercase tracking-[0.18em] text-accent">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {site.certifications.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-lg border border-line bg-ground/40 px-3 py-1.5 text-sm text-text/90 transition-colors hover:border-accent hover:text-text"
                >
                  {c.name}
                  <span className="text-faint transition-colors group-hover:text-accent">↗</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="display text-2xl md:text-3xl">{n}</div>
      <div className="label mt-1 !tracking-[0.15em]">{l}</div>
    </div>
  );
}
