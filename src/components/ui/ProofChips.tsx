import type { ProofLink, ProofKind } from "@/config/projects";

/* ③ — verifiable proof: clickable, recruiter can open and confirm. */
const ICON: Record<ProofKind, string> = {
  patent: "▣",
  playstore: "▶",
  live: "◉",
  github: "↗",
  case: "❯",
};

export function ProofChips({ links }: { links: ProofLink[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.label + l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mono group inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] text-muted transition-colors hover:border-accent hover:text-text"
        >
          <span className="text-accent">{ICON[l.kind]}</span>
          {l.label}
          <span className="text-faint transition-colors group-hover:text-accent">↗</span>
        </a>
      ))}
    </div>
  );
}
