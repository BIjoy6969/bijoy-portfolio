import type { Metadata } from "next";
import { Cursor } from "@/components/Cursor";
import { site } from "@/data/site";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${profile.name} — ${profile.role}`,
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: profile.name }],
  creator: profile.name,
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${profile.name} — ${profile.role}`,
    description: site.description,
    siteName: `${profile.name} (AZM/B)`,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
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
  alternateName: "Bijoy",
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "Bangladesh" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "BRAC University" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Full-Stack Web Development",
    "MERN Stack",
    "Applied Machine Learning",
    "Deep Learning",
    "Explainable AI",
    "Computer Graphics",
    "REST APIs",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;450;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        <Cursor />
      </body>
    </html>
  );
}
