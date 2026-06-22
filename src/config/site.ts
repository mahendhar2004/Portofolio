// ───────────────────────────────────────────────────────────────────────────
// EDIT ME: All personal info lives here. Swap the placeholders below anytime.
// ───────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Seelam Mahendhar Goud",
  shortName: "Mahendhar",
  role: "Full-Stack + AI Engineer",
  tagline:
    "Final-year CS student who'd rather ship than talk about shipping — two live apps, 600+ real users, a patent, and a habit of finishing what I start.",
  about:
    "I'm happiest with a real problem in front of me and real users on the other side of it. I've taken three things from 'annoying gap' to 'live product people rely on' — a campus marketplace, a semester tracker, and a safety device that earned a patent. I own the whole path: schema, backend, UI, and the unglamorous-but-critical parts like payments and concurrency. Lately I've been going deep on AI engineering.",

  email: "mahendhar2004@gmail.com",
  phone: "+91 91005 67616",
  location: "Hyderabad, India · Open to relocation",

  // Used for SEO/OpenGraph absolute URLs.
  url: "https://mahendhar-port.vercel.app",

  links: {
    github: "https://github.com/mahendhar2004",
    linkedin: "https://www.linkedin.com/in/mahendhar-seelam-22259325a/",
    resume: "/resume.pdf", // 1-page
    resumeLong: "/resume-long.pdf", // detailed
    blog: "https://my-blogs-mauve.vercel.app/",
  },

  education: {
    school: "IIITDM Jabalpur",
    fullName: "PDPM IIIT, Design & Manufacturing, Jabalpur",
    degree: "B.Tech, Computer Science & Engineering",
    year: "2026",
    period: "2022 – 2026",
    status: "Graduating 2026",
    coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP", "System Design"],
    extra: [
      { school: "Resonance Junior College, Hyderabad", detail: "Intermediate (MPC) — 96.9%" },
      { school: "Gowtham Model School, Hyderabad", detail: "SSC — 10.0 / 10.0 GPA" },
    ],
  },

  leadership: [
    "Co-convener, Central Mess Committee, IIITDM Jabalpur — operations & feedback for 1000+ students",
    "Volunteer — Jagriti (tribal community service) & DeW 9.0 (flagship design event logistics)",
  ],
  certifications: [
    { name: "React Development", href: "https://drive.google.com/file/d/1vFRrmfLwkEgwsS6LujRqHAijE6Ck_4RS/view?usp=drive_link" },
    { name: "JavaScript", href: "https://drive.google.com/file/d/1fUKGFCyHMgiQ_9jHDtokRV0MCf08A1ku/view?usp=drive_link" },
    { name: "Object-Oriented Programming", href: "https://drive.google.com/file/d/1CFRtF0xbR_D510xvx7sPbQZFogFLyxhx/view?usp=drive_link" },
    { name: "Computer Networks", href: "https://drive.google.com/file/d/1nePrfRZRRohoHLvaGYjGqf1D_0ALL7CS/view?usp=drive_link" },
  ],

  // Headline stats in the About strip
  stats: [
    { value: "600+", label: "real users across two live apps" },
    { value: "4.9★", label: "Grid rating on the Play Store" },
    { value: "Patent", label: "published — IoT safety device" },
    { value: "2", label: "engineering internships" },
  ],
} as const;

export type Site = typeof site;
