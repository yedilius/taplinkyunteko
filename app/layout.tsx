import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "YUNTEKO | Каталог товаров в Kaspi";
const siteDescription =
  "Техника и гаджеты YUNTEKO для дома, спорта и комфорта. Быстрый мобильный каталог с переходом к покупке в Kaspi.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yunteko-catalog.vercel.app"),
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
    url: "https://yunteko-catalog.vercel.app",
    siteName: "YUNTEKO",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "YUNTEKO premium catalog"
      }
    ],
    locale: "ru_KZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
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
      <body>{children}</body>
    </html>
  );
}
