"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/config/site";

const REVEAL_DELAY = 3900; // ~1.9s smooth zoom, ~2s hold, then panel lifts

export function Intro() {
  const [show, setShow] = useState(true);
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    // play once per browser session; instant on repeat visits
    if (sessionStorage.getItem("smg-intro-seen")) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("smg-intro-seen", "1");
    }, REVEAL_DELAY);
    return () => clearTimeout(t);
  }, []);

  const replay = () => {
    setPlayKey((k) => k + 1);
    setShow(true);
    setTimeout(() => setShow(false), REVEAL_DELAY);
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[1000] grid place-items-center overflow-hidden bg-ground"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <h1
              key={playKey}
              className="intro-word whitespace-nowrap px-6 text-center"
            >
              {site.shortName}
            </h1>
            <motion.p
              className="label absolute bottom-[16%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {site.role}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={replay}
        className="label fixed bottom-4 left-4 z-50 rounded-full border border-line bg-tile px-3 py-1.5 transition-colors hover:border-accent hover:text-accent"
        aria-label="Replay intro animation"
      >
        ↺ Replay intro
      </button>
    </>
  );
}
