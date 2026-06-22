"use client";

import { motion } from "framer-motion";

const WEEKS = 53;
const DAYS = 7;

// Deterministic pseudo-random (no Math.random → SSR and client agree).
function level(i: number) {
  const r = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
  if (r > 0.82) return 4;
  if (r > 0.62) return 3;
  if (r > 0.4) return 2;
  if (r > 0.2) return 1;
  return 0;
}

const cellColor = (lv: number) =>
  lv === 0
    ? "var(--line)"
    : `color-mix(in srgb, var(--accent) ${lv * 24 + 8}%, var(--tile-2))`;

export function ContributionHeatmap() {
  const cells = Array.from({ length: WEEKS * DAYS }, (_, i) => i);

  return (
    <div className="overflow-x-auto">
      <motion.div
        className="grid w-max gap-[3px]"
        style={{ gridTemplateRows: `repeat(${DAYS}, 1fr)`, gridAutoFlow: "column", gridAutoColumns: "1fr" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ show: { transition: { staggerChildren: 0.004 } } }}
      >
        {cells.map((i) => (
          <motion.span
            key={i}
            className="h-3 w-3 rounded-[3px]"
            style={{ background: cellColor(level(i)) }}
            variants={{
              hidden: { opacity: 0, scale: 0.4 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
