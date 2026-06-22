"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/config/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 240);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: hidden ? -90 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="mono text-sm tracking-[0.2em]">
          S—M—G
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline mono text-xs text-muted transition-colors hover:text-text">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mono text-xs text-muted transition-colors hover:text-text"
        >
          GitHub ↗
        </a>
      </nav>
    </motion.header>
  );
}
