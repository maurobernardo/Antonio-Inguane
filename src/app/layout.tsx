import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const TITLE = "Antonio Inguane; International Development, Land and Environment";
const DESCRIPTION =
  "Antonio (Paulo) Inguane, Co-Founder and Advisor at Data4Moz and Data4Angola, Managing Director of Mozambique Flying Labs. 19+ years in public policy, natural resource management, land tenure and environment worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Antonio Inguane",
    "International Development",
    "public policy",
    "natural resource management",
    "land tenure",
    "environment",
    "GIS",
    "Mozambique",
    "Angola",
    "Data4Moz",
    "Data4Angola",
    "Mozambique Flying Labs",
  ],
  authors: [{ name: "Antonio Inguane", url: SITE_URL }],
  creator: "Antonio Inguane",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: TITLE,
    description:
      "19+ years of experience in public policy, natural resource management, land tenure and environment across Mozambique, Angola and a dozen other countries.",
    url: SITE_URL,
    siteName: "Antonio Inguane",
    type: "profile",
    locale: "en_US",
    alternateLocale: "pt_PT",
    images: [
      {
        url: "/perfil.jpg",
        width: 800,
        height: 800,
        alt: "Antonio Inguane",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description:
      "19+ years of experience in public policy, natural resource management, land tenure and environment across Mozambique, Angola and a dozen other countries.",
    images: ["/perfil.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-text font-body">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
