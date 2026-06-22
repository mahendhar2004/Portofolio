import { site } from "@/config/site";
import { RevealText, Reveal } from "@/components/ui/Kinetic";
import { GuideNote } from "@/components/ui/GuideNote";

export function Education() {
  const e = site.education;
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <p className="label mb-4">(Education)</p>
      <GuideNote>the foundation — and yes, i&apos;m out and job-ready in 2026.</GuideNote>
      <RevealText as="h2" text="Foundations" className="display mb-12 text-4xl md:text-6xl" />

      <div className="grid gap-4 md:grid-cols-2">
        {/* primary degree */}
        <Reveal className="md:row-span-2">
          <div className="tile h-full p-7 md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="mono text-xs uppercase tracking-[0.18em] text-accent">Degree</span>
              <span className="mono rounded-full border border-accent/40 px-2.5 py-1 text-[10px] text-accent">
                {e.status}
              </span>
            </div>
            <h3 className="display text-2xl md:text-3xl">{e.school}</h3>
            <p className="mt-2 text-base text-text">{e.degree}</p>
            <p className="mono mt-1 text-sm text-accent">{e.period}</p>
            <p className="mt-1 text-sm text-text/60">{e.fullName}</p>

            <div className="mt-6 border-t border-line pt-5">
              <p className="label mb-3 !text-text">Relevant coursework</p>
              <div className="flex flex-wrap gap-2">
                {e.coursework.map((c) => (
                  <span key={c} className="rounded-lg border border-line bg-ground/40 px-3 py-1.5 text-sm text-text/85">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* prior schooling */}
        {e.extra.map((x, i) => (
          <Reveal key={x.school} delay={0.08 + i * 0.06}>
            <div className="tile p-6">
              <p className="text-base font-medium text-text">{x.detail}</p>
              <p className="mt-1 text-sm text-text/60">{x.school}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
