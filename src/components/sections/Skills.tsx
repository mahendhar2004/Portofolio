import { skills } from "@/config/skills";
import { RevealText, Reveal } from "@/components/ui/Kinetic";

const all = skills.flatMap((g) => g.items);

function Marquee() {
  const doubled = [...all, ...all];
  return (
    <div className="flex overflow-hidden border-y border-line py-5">
      <div className="marquee-track gap-6">
        {doubled.map((s, i) => (
          <span key={i} className="mono flex items-center gap-6 text-sm tracking-wide text-faint">
            {s}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <p className="label mb-4">(Toolkit)</p>
      <RevealText as="h2" text="What I build with" className="display mb-12 text-4xl md:text-6xl" />

      {/* category tiles with interactive chips */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 0.06}>
            <div className="tile h-full p-6">
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="mono text-xs uppercase tracking-[0.18em] text-accent">{group.category}</h3>
                <span className="mono text-[11px] text-faint">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-lg border border-line bg-ground/40 px-3 py-1.5 text-sm text-text/85 transition-colors duration-200 hover:border-accent hover:text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* subtle living marquee */}
      <div className="mt-12">
        <Marquee />
      </div>
    </section>
  );
}
