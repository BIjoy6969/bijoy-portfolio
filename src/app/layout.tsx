import type { Metadata } from "next";
import { Cursor } from "@/components/Cursor";
import { site } from "@/data/site";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: profile.name,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
};

// Apply theme before first paint to avoid a flash of the wrong theme.
const noFlash = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',t||(d?'dark':'light'));}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "Bangladesh" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "BRAC University" },
  sameAs: [profile.github, profile.linkedin],
};

/**
 * Fonts load via <link> (Google Fonts) rather than next/font so the app builds
 * without a build-time network fetch. Families are declared as CSS variables in
 * globals.css. To self-host instead, swap this for next/font/google.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;450;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
        <Cursor />
      </body>
    </html>
  );
}
