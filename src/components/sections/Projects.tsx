"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/config/projects";
import { useAccent } from "@/components/AccentProvider";
import { ProjectDemo } from "@/components/demos/ProjectDemos";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { ProofChips } from "@/components/ui/ProofChips";
import { RevealText } from "@/components/ui/Kinetic";
import { GuideNote } from "@/components/ui/GuideNote";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { setAccent, resetAccent } = useAccent();
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setAccent(project.accent)}
      onMouseLeave={resetAccent}
      className="tile grid items-center gap-8 p-7 md:grid-cols-2 md:gap-12 md:p-10"
    >
      {/* live demo in a device frame */}
      <div className={reversed ? "md:order-2" : ""}>
        <DeviceFrame frame={project.frame}>
          <ProjectDemo kind={project.key} />
        </DeviceFrame>
      </div>

      {/* info */}
      <div className={reversed ? "md:order-1" : ""}>
        <div className="mb-3 flex items-center gap-3">
          <span className="mono text-[11px] text-accent">
            {String(index + 1).padStart(2, "0")} / {project.category}
          </span>
        </div>
        <h3 className="display text-4xl md:text-5xl">{project.title}</h3>
        {project.badge && (
          <p className="mono mt-2 text-[12px] text-accent">{project.badge}</p>
        )}
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{project.blurb}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-text/85">
              <span className="mt-2 h-px w-3.5 shrink-0 bg-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
          {project.tech.map((t) => (
            <span key={t} className="mono text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <ProofChips links={project.proof} />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
      <p className="label mb-4">(Selected Work)</p>
      <GuideNote>psst — these aren&apos;t screenshots. they&apos;re the real apps, running. hover any of them.</GuideNote>
      <RevealText
        as="h2"
        text="Four things I've actually shipped"
        className="display mb-3 text-4xl md:text-6xl"
      />
      <p className="mb-14 max-w-xl text-sm text-muted md:text-base">
        Each tile is a tiny working version of the real product — payments, chat, alerts and all.
        Hover any project and the page takes on its colors.
      </p>

      <div className="flex flex-col gap-6">
        {projects.map((p, i) => (
          <ProjectRow key={p.key} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
