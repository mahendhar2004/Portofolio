import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/config/site";
import { AccentProvider } from "@/components/AccentProvider";
import { Atmosphere } from "@/components/ui/Atmosphere";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Seelam Mahendhar Goud — Full-Stack + AI Engineer",
  description:
    "Full-stack + AI engineer who ships real products: two live apps with 600+ users, a 4.9★ Play Store marketplace, a monetized blog platform, and a patented IoT device (Patent No. 202521062326). B.Tech CSE @ IIITDM Jabalpur.",
  keywords: [
    "Seelam Mahendhar Goud",
    "Full-Stack Engineer",
    "AI Engineer",
    "Software Engineer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Seelam Mahendhar Goud" }],
  openGraph: {
    title: "Seelam Mahendhar Goud — Full-Stack + AI Engineer",
    description:
      "Full-stack + AI engineer shipping real products — web, mobile, backend, and a patented IoT device.",
    type: "website",
    images: ["/mahendhar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seelam Mahendhar Goud — Full-Stack + AI Engineer",
    description: "Full-stack + AI engineer shipping real products people use.",
    images: ["/mahendhar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AccentProvider>
          <Atmosphere />
          {children}
        </AccentProvider>
      </body>
    </html>
  );
}
