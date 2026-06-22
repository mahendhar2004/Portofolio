"use client";

import { createContext, useCallback, useContext, useRef, type ReactNode } from "react";
import { BASE_ACCENT } from "@/config/projects";

type AccentCtx = { setAccent: (hex: string) => void; resetAccent: () => void };

const Ctx = createContext<AccentCtx>({ setAccent: () => {}, resetAccent: () => {} });

export function useAccent() {
  return useContext(Ctx);
}

/* Holds the global accent. Project cards call setAccent on hover to re-tint
   the whole page (④); leaving resets to the base teal. */
export function AccentProvider({ children }: { children: ReactNode }) {
  const raf = useRef<number>(0);

  const apply = useCallback((hex: string) => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const root = document.documentElement;
      root.style.setProperty("--accent", hex);
      // a barely-there ground shift toward the accent keeps it subtle, never neon
      root.style.setProperty(
        "--accent-soft",
        `color-mix(in srgb, ${hex} 16%, transparent)`
      );
    });
  }, []);

  const setAccent = useCallback((hex: string) => apply(hex), [apply]);
  const resetAccent = useCallback(() => apply(BASE_ACCENT), [apply]);

  return <Ctx.Provider value={{ setAccent, resetAccent }}>{children}</Ctx.Provider>;
}
