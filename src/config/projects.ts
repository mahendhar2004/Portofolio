export type ProofKind = "patent" | "playstore" | "live" | "github" | "case";
export type ProofLink = { label: string; href: string; kind: ProofKind };
export type DemoKind = "grid" | "tracker" | "iot" | "blog";
export type Frame = "phone" | "browser";

export type Project = {
  key: DemoKind;
  title: string;
  category: string;
  badge?: string;
  blurb: string;
  highlights: string[];
  tech: string[];
  proof: ProofLink[];
  accent: string; // muted, never neon — drives the hover accent-shift
  frame: Frame;
};

export const projects: Project[] = [
  {
    key: "grid",
    title: "Grid",
    category: "Campus Marketplace",
    badge: "Live on Play Store · 400+ users · 4.9★",
    blurb:
      "A peer-to-peer campus marketplace to buy, sell, exchange, and request services — a React Native app with Razorpay payments, real-time chat, and an operator analytics dashboard.",
    highlights: [
      "Launched on Google Play Store — 400+ active users, 4.9★ rating",
      "Razorpay payments with HMAC webhook verification",
      "Double-entry PostgreSQL ledger for payment integrity",
      "Real-time chat (Supabase Realtime) + push notifications",
      "Admin panel for moderation & a separate SEO landing page",
    ],
    tech: ["React Native", "Supabase", "PostgreSQL", "Razorpay", "Tailwind"],
    proof: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.galvam.grid", kind: "playstore" },
      { label: "gridmarketplace.in", href: "https://gridmarketplace.in/", kind: "live" },
      { label: "GitHub", href: "https://github.com/mahendhar2004", kind: "github" },
    ],
    accent: "#79b0a8", // muted teal (base)
    frame: "phone",
  },
  {
    key: "tracker",
    title: "Academic Tracker",
    category: "Student Web App",
    badge: "~200 active users",
    blurb:
      "An 8-page semester companion used by ~200 real students — live Firestore sync, a weighted CPI/SPI GPA engine with a What-If simulator, finances, and a gamified coin system.",
    highlights: [
      "Adopted by ~200 real college students",
      "Weighted CPI/SPI GPA engine + What-If grade simulator",
      "Coin gamification via race-safe Firestore transactions",
      "Real-time multi-device sync (onSnapshot), Recharts dashboards",
    ],
    tech: ["React 19", "Firebase", "Zustand", "Recharts", "Framer Motion"],
    proof: [
      { label: "Live app", href: "https://academictracker.vercel.app/", kind: "live" },
      { label: "GitHub", href: "https://github.com/mahendhar2004", kind: "github" },
    ],
    accent: "#7fa7c4", // muted sky-blue
    frame: "browser",
  },
  {
    key: "iot",
    title: "Sakhiya",
    category: "Patented IoT Device",
    badge: "Patent No. 202521062326 · ‘O’ grade",
    blurb:
      "A patented wearable safety band that fires multi-channel distress alerts — a GSM voice call + SMS with a live Google Maps link, and a Telegram cancellation window, on a 5-state response machine.",
    highlights: [
      "Published — Indian Patent No. 202521062326",
      "ESP32 + SIM800L firmware, TinyGPS++ (NMEA) parsing",
      "5-state response machine with a 10s Telegram cancel window",
      "Dual-redundancy trigger: force sensor + debounced SOS button",
    ],
    tech: ["ESP32", "Embedded C++", "SIM800L", "TinyGPS++", "Telegram API"],
    proof: [
      { label: "Patent 202521062326", href: "https://drive.google.com/file/d/1QdXpPOOE8wpyZLi-nLFTSVjlE7RqfRX2/view?usp=drive_link", kind: "patent" },
    ],
    accent: "#cf8a7d", // muted clay/rose
    frame: "phone",
  },
  {
    key: "blog",
    title: "tild~",
    category: "Blog Platform",
    blurb:
      "Tild — my own full-stack blog platform on Next.js 16 (RSC + ISR): Razorpay subscriptions, Postgres full-text search, Resend newsletters, and an AI-assisted writing pipeline that drafts and self-critiques posts. “Ship real software, one post at a time.”",
    highlights: [
      "Next.js 16 App Router — RSC + ISR, 100% Lighthouse SEO",
      "Razorpay subscription state machine (7 webhook types, idempotent)",
      "Postgres full-text search (tsvector) with Row-Level Security",
      "AI writing pipeline with a 10-point self-critique rubric",
    ],
    tech: ["Next.js 16", "Supabase", "PostgreSQL", "Razorpay", "Resend"],
    proof: [
      { label: "Live — tild~", href: "https://my-blogs-mauve.vercel.app/", kind: "live" },
      { label: "GitHub", href: "https://github.com/mahendhar2004", kind: "github" },
    ],
    accent: "#a99bc4", // muted lilac
    frame: "browser",
  },
];

export const BASE_ACCENT = "#79b0a8";
