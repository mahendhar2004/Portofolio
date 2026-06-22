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
      "Grid began as the chaos of a hostel buy/sell WhatsApp group. I turned it into a real marketplace — 400+ students trade on it today, every payment reconciles to the rupee, and it's live on the Play Store at 4.9★.",
    highlights: [
      "Live on the Play Store — 400+ students, 4.9★",
      "Every payment reconciled to the rupee — double-entry ledger + HMAC webhooks",
      "Buyers and sellers chat in real time (Supabase Realtime) + push alerts",
      "A moderation dashboard and an SEO landing page to pull in installs",
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
      "~200 classmates trust this with their attendance, grades and money every day. It predicts your CPI, lets you simulate 'what if I get an A,' and quietly rewards you just for showing up.",
    highlights: [
      "Used daily by ~200 real students",
      "Weighted CPI/SPI engine with a live What-If grade simulator",
      "Coins & streaks that survive race conditions (Firestore transactions)",
      "Everything syncs across your devices in real time",
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
      "A band that calls for help when you can't. A year of work with my team — it earned an 'O' grade and, to our surprise, a published patent. It fires SMS with a live location, a Telegram alert, and an auto emergency call.",
    highlights: [
      "Published — Indian Patent No. 202521062326",
      "ESP32 + SIM800L firmware on a 5-state response machine",
      "A 10-second Telegram window to cancel a false alarm",
      "Two independent triggers — a force sensor and an SOS button",
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
      "I wanted a good place to write about building software, so I built the place too. Tild is a full Next.js platform — subscriptions, full-text search, newsletters, and an AI pipeline that drafts a post then critiques its own work. “Ship real software, one post at a time.”",
    highlights: [
      "My own platform — Next.js 16 (RSC + ISR), 100% Lighthouse SEO",
      "Razorpay subscriptions on an idempotent 7-event webhook machine",
      "Postgres full-text search (tsvector) with Row-Level Security",
      "An AI writing pipeline that self-scores on a 10-point rubric",
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
