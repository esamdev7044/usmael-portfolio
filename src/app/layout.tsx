import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";
import { gilroy } from "./fonts";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  applicationName: `${siteConfig.name} Portfolio`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0C" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      email: `mailto:${siteConfig.email}`,
      address: { "@type": "PostalAddress", addressCountry: "ET" },
      knowsAbout: [
        "Full-Stack Development",
        "System Architecture",
        "Next.js",
        "React",
        "Node.js",
        "Flutter",
        "TypeScript",
      ],
      sameAs: Object.values(siteConfig.links),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} Portfolio`,
      inLanguage: "en",
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className={`${gilroy.className} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-fg"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
        <JsonLd data={jsonLd} />
      </body>
    </html>
  );
}
