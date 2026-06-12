import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import { SITE_NAME, SITE_URL } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import LayoutWrapper from "@/components/layoutWrapper";

const headingFont = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Providing world-class education that honors our heritage while preparing students for the challenges of tomorrow. CBSE & IB Affiliated.",
  keywords: ["school", "education", "CBSE", "IB", "Delhi", "admissions", "heritage academy"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stheritage",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
    <html
  lang="en"
  className={`${displayFont.variable} ${bodyFont.variable} ${headingFont.variable}`}
>
      <body className="font-body antialiased bg-neutral-50 text-neutral-900">
        {/* <AnnouncementBanner />
        <Navbar />
        <main>{children}</main>
        <Footer /> */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}