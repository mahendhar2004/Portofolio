"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { DemoKind } from "@/config/projects";

/* ① — each project rendered as a tiny working demo, not a screenshot. */

export function ProjectDemo({ kind }: { kind: DemoKind }) {
  if (kind === "grid") return <GridDemo />;
  if (kind === "tracker") return <TrackerDemo />;
  if (kind === "iot") return <IotDemo />;
  return <BlogDemo />;
}

/* ---- Grid: a taller in-phone carousel cycling through every feature ---- */
function Row({ e, n, s, p }: { e: string; n: string; s: string; p: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-line bg-ground/60 p-2.5">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-tile to-tile-2 text-base">
        {e}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px]">{n}</p>
        <p className="mono truncate text-[10px] text-muted">{s}</p>
      </div>
      <span className="mono shrink-0 text-[12px] text-accent">{p}</span>
    </div>
  );
}

const GRID_SCREENS: { label: string; node: React.ReactNode }[] = [
  {
    label: "Marketplace",
    node: (
      <div className="space-y-2">
        <Row e="📱" n="iPhone 12 — mint" s="@rahul · Hostel C" p="₹28,000" />
        <Row e="🎧" n="Sony WH-1000XM4" s="@vikram · Block A" p="₹12,500" />
        <Row e="📚" n="GATE CS notes set" s="@anita · Library" p="₹450" />
      </div>
    ),
  },
  {
    label: "Wanted Board",
    node: (
      <div className="space-y-2">
        <div className="rounded-xl border border-line bg-ground/60 p-3">
          <p className="mono text-[9px] tracking-wider text-accent">WANTED</p>
          <p className="mt-1 text-[13px]">Casio fx-991 calculator</p>
          <p className="mono mt-0.5 text-[10px] text-muted">by @arjun · willing ₹600</p>
          <div className="mono mt-2.5 inline-block rounded-md bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] text-accent">
            Respond →
          </div>
        </div>
        <div className="rounded-xl border border-line bg-ground/60 p-3">
          <p className="mono text-[9px] tracking-wider text-accent">WANTED</p>
          <p className="mt-1 text-[13px]">Cycle on rent — 2 days</p>
        </div>
      </div>
    ),
  },
  {
    label: "Real-time chat",
    node: (
      <div className="flex flex-col gap-2">
        <p className="mono text-[10px] text-muted">@rahul · iPhone 12</p>
        <span className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-tile px-3 py-1.5 text-[12px]">
          is this still available?
        </span>
        <span className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-[var(--accent-soft)] px-3 py-1.5 text-[12px] text-text">
          yes! free this evening
        </span>
        <span className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-tile px-3 py-1.5 text-[12px]">
          great — meet at 5? 🙌
        </span>
      </div>
    ),
  },
  {
    label: "Wallet · Razorpay",
    node: (
      <div className="space-y-2.5">
        <div className="rounded-xl border border-line bg-ground/60 p-3">
          <p className="mono text-[9px] tracking-wider text-muted">WALLET BALANCE</p>
          <p className="display mt-1 text-3xl">₹1,250</p>
          <div className="mono mt-2.5 inline-block rounded-md bg-accent px-3 py-1.5 text-[10px] text-ground">
            + Add money
          </div>
        </div>
        <div className="mono flex justify-between text-[11px] text-muted">
          <span>Top-up</span>
          <span className="text-accent">+₹500</span>
        </div>
        <div className="mono flex justify-between text-[11px] text-muted">
          <span>Listing fee</span>
          <span>−₹20</span>
        </div>
      </div>
    ),
  },
  {
    label: "Alerts",
    node: (
      <div className="space-y-2">
        {[
          { i: "🔔", t: "New offer on iPhone 12", s: "₹26,500 from @neha" },
          { i: "💬", t: "Rahul sent a message", s: "is this available?" },
          { i: "📉", t: "Price drop you follow", s: "Sony XM4 → ₹11,800" },
        ].map((n) => (
          <div key={n.t} className="flex items-start gap-2.5 rounded-xl border border-line bg-ground/60 p-2.5">
            <span className="text-sm">{n.i}</span>
            <div className="min-w-0">
              <p className="truncate text-[12px]">{n.t}</p>
              <p className="mono truncate text-[10px] text-muted">{n.s}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

function GridDemo() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % GRID_SCREENS.length), 2800);
    return () => clearInterval(t);
  }, [paused]);
  const screen = GRID_SCREENS[i];
  return (
    <div
      className="flex h-[340px] flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-2.5 flex items-center justify-between">
        <span className="mono text-[10px] text-muted">grid</span>
        <span className="mono text-[10px] text-accent">{screen.label}</span>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -22 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 overflow-y-auto"
          >
            {screen.node}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* clickable dots — jump to any feature, incl. Alerts */}
      <div className="mt-2.5 flex justify-center gap-2">
        {GRID_SCREENS.map((s, d) => (
          <button
            key={s.label}
            onClick={() => setI(d)}
            aria-label={s.label}
            className={`h-1.5 rounded-full transition-all duration-300 ${d === i ? "w-5 bg-accent" : "w-1.5 bg-line hover:bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---- Academic Tracker: a feature carousel ---- */
function AttendanceRing() {
  const [pct, setPct] = useState(0);
  const target = 86;
  const circ = 2 * Math.PI * 26;
  useEffect(() => {
    let v = 0;
    const t = setInterval(() => {
      v += 3;
      if (v >= target) {
        v = target;
        clearInterval(t);
      }
      setPct(v);
    }, 26);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 62 62" className="h-16 w-16 -rotate-90">
        <circle cx="31" cy="31" r="26" fill="none" stroke="var(--line)" strokeWidth="6" />
        <circle
          cx="31" cy="31" r="26" fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ - (circ * pct) / 100}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
      </svg>
      <div>
        <div className="font-serif text-2xl">{pct}%</div>
        <div className="text-[11px] text-muted">overall attendance</div>
      </div>
    </div>
  );
}

function Bar({ n, p }: { n: string; p: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 text-[11px] text-muted">{n}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full bg-accent" style={{ width: `${p}%` }} />
      </div>
      <span className="mono w-8 shrink-0 text-right text-[11px] text-text/80">{p}%</span>
    </div>
  );
}

const TRACKER_SCREENS: { label: string; node: React.ReactNode }[] = [
  {
    label: "Attendance",
    node: (
      <div className="space-y-3">
        <AttendanceRing />
        <div className="space-y-2 border-t border-line pt-3">
          <Bar n="Maths" p={92} />
          <Bar n="DBMS" p={81} />
          <Bar n="OS" p={88} />
        </div>
      </div>
    ),
  },
  {
    label: "CPI · What-If",
    node: (
      <div className="space-y-3">
        <div className="flex items-end justify-between">
          <div>
            <p className="mono text-[9px] tracking-wider text-muted">CUMULATIVE · CPI</p>
            <p className="display text-4xl">8.42</p>
          </div>
          <svg viewBox="0 0 120 40" preserveAspectRatio="none" className="h-10 w-28">
            <polyline points="0,34 24,28 48,30 72,18 96,16 120,6" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="rounded-lg border border-line bg-ground/60 p-2.5">
          <p className="mono text-[10px] text-muted">What-If simulator</p>
          <p className="mt-1 text-[12px]">A in DBMS → <span className="text-accent">CPI 8.61</span></p>
        </div>
      </div>
    ),
  },
  {
    label: "Deadlines",
    node: (
      <div className="space-y-2">
        {[
          { t: "DBMS assignment", d: "Tomorrow", warn: true },
          { t: "OS lab record", d: "Fri" },
          { t: "Semester fee", d: "Mar 28" },
        ].map((x) => (
          <div key={x.t} className="flex items-center justify-between rounded-xl border border-line bg-ground/60 p-2.5">
            <span className="text-[12px]">{x.t}</span>
            <span className="mono text-[11px]" style={{ color: x.warn ? "#e08e7d" : "var(--muted)" }}>{x.d}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Expenses",
    node: (
      <div className="space-y-3">
        <div className="rounded-xl border border-line bg-ground/60 p-3">
          <div className="flex items-baseline justify-between">
            <span className="mono text-[10px] text-muted">THIS MONTH</span>
            <span className="mono text-[11px] text-muted">₹4,200 / ₹6,000</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-accent" style={{ width: "70%" }} />
          </div>
        </div>
        <div className="mono flex justify-between text-[11px] text-muted"><span>🍔 Food</span><span>₹2,100</span></div>
        <div className="mono flex justify-between text-[11px] text-muted"><span>🚌 Travel</span><span>₹800</span></div>
      </div>
    ),
  },
  {
    label: "Coins · Streak",
    node: (
      <div className="space-y-2.5">
        <div className="flex items-center justify-between rounded-xl border border-line bg-ground/60 p-3">
          <span className="text-[12px]">🪙 Coins earned</span>
          <span className="display text-xl text-accent">1,240</span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-line bg-ground/60 p-3">
          <span className="text-[12px]">🔥 Daily streak</span>
          <span className="mono text-[12px]">12 days</span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-line bg-ground/60 p-3">
          <span className="text-[12px]">🏆 Leaderboard</span>
          <span className="mono text-[12px]">#3 this week</span>
        </div>
      </div>
    ),
  },
];

function TrackerDemo() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % TRACKER_SCREENS.length), 2800);
    return () => clearInterval(t);
  }, [paused]);
  const screen = TRACKER_SCREENS[i];
  return (
    <div
      className="flex h-[250px] flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-2.5 flex items-center justify-between">
        <span className="mono text-[10px] text-muted">academic tracker</span>
        <span className="mono text-[10px] text-accent">{screen.label}</span>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -22 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 overflow-y-auto"
          >
            {screen.node}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-2.5 flex justify-center gap-2">
        {TRACKER_SCREENS.map((s, d) => (
          <button
            key={s.label}
            onClick={() => setI(d)}
            aria-label={s.label}
            className={`h-1.5 rounded-full transition-all duration-300 ${d === i ? "w-5 bg-accent" : "w-1.5 bg-line hover:bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---- Sakhiya: pulsing distress beacon + status loop ---- */
const STATES = [
  { t: "GPS locked · standby", warn: false },
  { t: "motion detected · arming…", warn: false },
  { t: "⚠ ALERT SENT · SMS + call", warn: true },
  { t: "location shared · resolved", warn: false },
];
function IotDemo() {
  const [s, setS] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setS((x) => (x + 1) % STATES.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex flex-col items-center gap-3 py-1">
      <div className="relative grid h-14 w-14 place-items-center">
        {[0, 0.8, 1.6].map((d) => (
          <span
            key={d}
            className="absolute inset-0 rounded-full border border-accent"
            style={{ animation: `beacon 2.4s ${d}s ease-out infinite`, opacity: 0 }}
          />
        ))}
        <span className="z-10 h-3.5 w-3.5 rounded-full bg-accent" />
        <style>{`@keyframes beacon{0%{transform:scale(.3);opacity:.7}100%{transform:scale(1.7);opacity:0}}`}</style>
      </div>
      <p className="mono text-center text-[11px]" style={{ color: STATES[s].warn ? "#e08e7d" : "var(--muted)" }}>
        {STATES[s].t}
      </p>
    </div>
  );
}

/* ---- My Blogs: typewriter title + publish toast ---- */
const TITLES = [
  "Why I rebuilt our API gateway",
  "Shipping real-time chat to thousands",
  "Concurrency control, explained",
  "Idea to Play Store in 6 weeks",
];
function BlogDemo() {
  const [text, setText] = useState("");
  const [published, setPublished] = useState(false);
  useEffect(() => {
    let ti = 0;
    let timer: ReturnType<typeof setTimeout>;
    const run = () => {
      const full = TITLES[ti];
      let i = 0;
      setPublished(false);
      setText("");
      const type = setInterval(() => {
        i += 1;
        setText(full.slice(0, i));
        if (i >= full.length) {
          clearInterval(type);
          timer = setTimeout(() => setPublished(true), 500);
          timer = setTimeout(() => {
            ti = (ti + 1) % TITLES.length;
            run();
          }, 3000);
        }
      }, 55);
      return () => clearInterval(type);
    };
    run();
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col gap-2.5">
      <div className="min-h-[58px] rounded-xl border border-line bg-ground/60 p-3 font-serif text-[17px]">
        {text}
        <span className="ml-0.5 inline-block h-[18px] w-0.5 translate-y-1 animate-pulse bg-accent align-middle" />
      </div>
      <p className="mono text-[11px] text-accent transition-opacity duration-500" style={{ opacity: published ? 1 : 0 }}>
        ✓ Published · newsletter sent
      </p>
    </div>
  );
}
