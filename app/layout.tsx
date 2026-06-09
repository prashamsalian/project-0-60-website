import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project 0-60 | Performance Mods & Repairs — Cary, NC",
  description:
    "Premium automotive modifications, ECU tuning, exhaust systems, suspension, engine repairs, and performance upgrades in Cary/Raleigh, NC. Built for speed. Engineered for excellence.",
  keywords:
    "car modifications, automotive tuning, ECU tuning, exhaust systems, performance upgrades, Cary NC, Raleigh NC, Project 0-60",
  authors: [{ name: "Project 0-60" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://project0-60.com",
    siteName: "Project 0-60",
    title: "Project 0-60 | Performance Mods & Repairs",
    description:
      "Premium automotive modifications, ECU tuning, exhaust systems, and performance upgrades in Cary/Raleigh, NC.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Project 0-60 - Performance Automotive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project 0-60 | Performance Mods & Repairs",
    description:
      "Premium automotive modifications and performance upgrades in Cary/Raleigh, NC.",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    ],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-dark text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
