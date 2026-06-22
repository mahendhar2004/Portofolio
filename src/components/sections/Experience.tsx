"use client";

import { motion } from "framer-motion";
import { experience } from "@/config/experience";
import { RevealText, Reveal } from "@/components/ui/Kinetic";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <p className="label mb-4">(Experience)</p>
      <RevealText as="h2" text="What I shipped at work" className="display mb-12 text-4xl md:text-6xl" />

      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((job, j) => (
          <Reveal key={job.company} delay={j * 0.1} className="tile p-7 md:p-8">
            <div className="flex items-baseline justify-between">
              <h3 className="display text-3xl">{job.company}</h3>
              <span className="mono text-xs text-accent">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-text/90">{job.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{job.summary}</p>

            <div className="mono mt-6 border-t border-line pt-5 text-[12.5px]">
              <p className="mb-3 text-faint">$ git log --oneline</p>
              <ul className="space-y-2.5">
                {job.commits.map((c, i) => (
                  <motion.li
                    key={c.hash}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex flex-wrap items-baseline gap-2"
                  >
                    <span className="text-accent">{c.hash}</span>
                    <span className="text-text/85">{c.message}</span>
                    {c.tag && (
                      <span className="rounded-sm bg-[var(--accent-soft)] px-1.5 text-[10px] text-accent">
                        {c.tag}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
              {job.tech.map((t) => (
                <span key={t} className="mono text-[11px] text-muted">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
