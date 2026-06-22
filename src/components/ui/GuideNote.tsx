import { Reveal } from "@/components/ui/Kinetic";

/* A quiet first-person aside that threads the reader through the page —
   the "subtle guide" voice. Sits above a section heading; stays out of the way. */
export function GuideNote({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="mb-6">
      <p className="max-w-md font-serif text-base italic leading-relaxed text-muted">
        <span className="mr-2 not-italic text-accent">▸</span>
        {children}
        <span className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[1px] animate-pulse bg-accent/70 align-middle" />
      </p>
    </Reveal>
  );
}
