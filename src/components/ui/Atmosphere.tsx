"use client";

import { useEffect, useRef } from "react";

/* Fixed dot-grid texture + a soft accent light that trails the cursor.
   This is the quiet "alive" layer — kept low-opacity so it never shouts. */
export function Atmosphere() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = glow.current!;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const tick = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #fff 0.8px, transparent 0.8px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        ref={glow}
        aria-hidden
        className="cursor-glow pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 13%, transparent), transparent 60%)",
        }}
      />
    </>
  );
}
