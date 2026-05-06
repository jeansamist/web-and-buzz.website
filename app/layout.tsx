import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Web & Buzz — Client Acquisition Systems for Service Businesses",
  description:
    "We build conversion-focused websites with built-in automation that captures, qualifies, and follows up with every lead — so you never miss an opportunity again.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body style={{ fontFamily: "var(--font-outfit, 'Outfit', system-ui, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
