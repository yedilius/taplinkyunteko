import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const siteTitle = "YUNTEKO | Каталог товаров в Kaspi";
const siteDescription =
  "Техника и гаджеты YUNTEKO для дома, спорта и комфорта. Быстрый мобильный каталог с переходом к покупке в Kaspi.";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap"
});

const unbounded = Unbounded({
  subsets: ["cyrillic", "latin"],
  variable: "--font-unbounded",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taplinkyunteko.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "YUNTEKO Catalog",
  keywords: [
    "YUNTEKO",
    "Kaspi",
    "товары для дома",
    "гаджеты",
    "виброплатформа",
    "смарт-часы",
    "массажер"
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://taplinkyunteko.vercel.app",
    siteName: "YUNTEKO",
    images: [
      {
        url: "/brand/yunteko-hero-bg.png",
        width: 1792,
        height: 1024,
        alt: "YUNTEKO premium catalog background"
      }
    ],
    locale: "ru_KZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/brand/yunteko-hero-bg.png"]
  },
  icons: {
    icon: "/brand/yunteko-logo-circle.png",
    shortcut: "/brand/yunteko-logo-circle.png",
    apple: "/brand/yunteko-logo-circle.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d0d0f"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${unbounded.variable}`}>{children}</body>
    </html>
  );
}
