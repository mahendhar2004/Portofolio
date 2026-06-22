import { Reveal } from "@/components/ui/Kinetic";

/* A quiet first-person aside that threads the reader through the page —
   the "subtle guide" voice. Sits above a section heading; stays out of the way. */
export function GuideNote({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="mb-6">
      <p className="flex max-w-md items-start gap-2.5 font-serif text-base italic leading-relaxed text-muted">
        <span className="mt-[0.35em] not-italic text-accent">▸</span>
        <span>
          {children}
          <span className="ml-1 inline-block h-[0.95em] w-[2px] translate-y-[2px] animate-pulse bg-accent/70 align-middle" />
        </span>
      </p>
    </Reveal>
  );
}
