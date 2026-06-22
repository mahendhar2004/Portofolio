"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { RevealText } from "@/components/ui/Kinetic";
import { GuideNote } from "@/components/ui/GuideNote";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[92svh] max-w-6xl items-center gap-12 px-6 pt-28 pb-16 md:grid-cols-[1.4fr_1fr] md:px-10"
    >
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="label mb-5 inline-flex items-center gap-2.5"
        >
          <span className="h-2 w-2 rounded-full bg-accent" style={{ boxShadow: "0 0 0 4px var(--accent-soft)" }} />
          {site.name}
        </motion.p>

        <h1 className="display text-[15vw] leading-[0.92] md:text-7xl lg:text-8xl">
          <RevealText text="I build things" className="block" delay={0.1} />
          <RevealText text="people actually use." className="block text-muted" delay={0.24} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease }}
          className="mono mt-6 text-sm tracking-wide text-accent"
        >
          {site.role.toUpperCase()} · {site.education.school.toUpperCase()} ’{site.education.year.slice(2)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease }}
          className="mt-5 max-w-lg text-base leading-relaxed text-muted"
        >
          {site.tagline}
        </motion.p>

        <div className="mt-7">
          <GuideNote>give me 60 seconds — i&apos;d rather show you than tell you.</GuideNote>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7, ease }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#work" className="mono rounded-full bg-text px-6 py-3 text-sm text-ground transition-colors hover:bg-accent">
            View work
          </a>
          <a href={site.links.resume} target="_blank" rel="noopener noreferrer" className="mono rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent">
            Download résumé
          </a>
          <a href="#contact" className="mono rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent">
            Contact
          </a>
        </motion.div>

        {/* links visible — no hunting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mono mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted"
        >
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-text">GitHub ↗</a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-text">LinkedIn ↗</a>
          <a href={`mailto:${site.email}`} className="link-underline hover:text-text">{site.email}</a>
        </motion.div>
      </div>

      {/* circular photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1, ease }}
        className="relative mx-auto aspect-square w-56 md:w-full md:max-w-[360px]"
      >
        <motion.div
          aria-hidden
          className="absolute -inset-3 rounded-full border border-transparent"
          style={{ borderTopColor: "var(--accent)", opacity: 0.5 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 overflow-hidden rounded-full border border-line">
          <Image
            src="/mahendhar.png"
            alt={site.name}
            fill
            priority
            draggable={false}
            sizes="(max-width: 768px) 224px, 360px"
            className="select-none object-cover grayscale transition-all duration-700 hover:grayscale-0"
            style={{ objectPosition: "50% 22%", WebkitUserDrag: "none" } as React.CSSProperties}
          />
        </div>
      </motion.div>
    </section>
  );
}
