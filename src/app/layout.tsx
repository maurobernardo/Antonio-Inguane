import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antonio Inguane; International Development, Land and Environment",
  description:
    "Antonio (Paulo) Inguane, Co-Founder and Advisor at Data4Moz and Data4Angola, Managing Director of Mozambique Flying Labs. 15+ years in public policy, natural resource management, land tenure and environment worldwide.",
  openGraph: {
    title: "Antonio Inguane; International Development, Land and Environment",
    description:
      "15+ years of experience in public policy, natural resource management, land tenure and environment across Mozambique, Angola and a dozen other countries.",
    type: "website",
    locale: "en_US",
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
