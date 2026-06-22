// ───────────────────────────────────────────────────────────────────────────
// EDIT ME: All personal info lives here. Swap the placeholders below anytime.
// ───────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Seelam Mahendhar Goud",
  shortName: "Mahendhar",
  role: "Full-Stack + AI Engineer",
  tagline:
    "I build production software end-to-end — web, mobile, backend, and even patented hardware. Final-year CSE @ IIITDM Jabalpur.",
  about:
    "I'm a full-stack engineer who ships real products people actually use — two live apps with 600+ combined users, a marketplace on the Play Store, a monetized blog platform, and a patented IoT device. I like owning problems from database to UI, and I'm going deep on AI/LLM engineering.",

  email: "mahendhar2004@gmail.com",
  phone: "+91 91005 67616",
  location: "Hyderabad, India · Open to relocation",

  // Used for SEO/OpenGraph absolute URLs. Update to your real domain.
  url: "https://mahendhar.vercel.app",

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
