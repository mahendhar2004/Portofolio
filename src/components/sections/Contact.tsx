"use client";

import { useRef } from "react";
import { site } from "@/config/site";
import { RevealText } from "@/components/ui/Kinetic";
import { GuideNote } from "@/components/ui/GuideNote";

const KINETIC = "Mahendhar";

// email is shown once, as the big link above — keep it out of this row
const channels = [
  { label: "GitHub", value: "github.com/mahendhar2004", href: site.links.github },
  { label: "LinkedIn", value: "in/mahendhar-seelam", href: site.links.linkedin },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const chars = ref.current?.querySelectorAll<HTMLElement>(".kch");
    if (!chars) return;
    chars.forEach((ch) => {
      const r = ch.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const f = Math.max(0, 1 - Math.hypot(dx, dy) / 360);
      ch.style.transform = `translateY(${-46 * f}px) scale(${1 + 0.18 * f})`;
      ch.style.color = f > 0.05 ? `color-mix(in srgb, var(--accent) ${35 + 65 * f}%, var(--faint))` : "";
    });
  };
  const reset = () => {
    ref.current?.querySelectorAll<HTMLElement>(".kch").forEach((ch) => {
      ch.style.transform = "";
      ch.style.color = "";
    });
  };

  return (
    <footer id="contact" className="relative z-10 mt-24 border-t border-line pt-20">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <p className="label mb-4">(Contact)</p>
        <div className="flex justify-center">
          <GuideNote>made it this far? then we should probably talk.</GuideNote>
        </div>
        <RevealText as="h2" text="Let's build something great!" className="display text-4xl md:text-6xl" />
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
          I&apos;m looking for a team where I can keep shipping and learn from people better than me.
          The fastest way to reach me is email — I actually reply.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="link-underline mt-7 inline-block font-serif text-2xl transition-colors hover:text-accent md:text-3xl"
        >
          {site.email}
        </a>

        {/* C — living kinetic name */}
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={reset}
          className="mt-16 select-none whitespace-nowrap py-3 text-center font-serif text-[15vw] italic leading-[1.15] md:text-[9.5rem]"
          style={{ letterSpacing: "0.06em" }}
        >
          {KINETIC.split("").map((c, i) => (
            <span
              key={i}
              className="kch inline-block text-faint"
              style={{ transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1), color 0.25s" }}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-x-16 gap-y-8 border-t border-line pt-10">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5"
            >
              <span className="label">{c.label}</span>
              <span className="link-underline text-sm text-text/80 group-hover:text-text">{c.value}</span>
            </a>
          ))}
        </div>

        <p className="label py-8">© ’{site.education.year.slice(2)} {site.name} · Built with Next.js · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
