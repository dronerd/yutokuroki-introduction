
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Yuto Kuroki",
  description: "Profile page of Yuto Kuroki, second-year computer science student at Waseda University working in AI research and development",
  icons: {
    icon: "/favicon.ico",        // ← public/favicon.ico (192x192)
    apple: "/icon.png",       // iOS Safari 対応（任意だが推奨）
  },

  alternates: {
    languages: {
      "en-US": "https://yutokuroki.vercel.app",
      "ja-JP": "https://yutokuroki.vercel.app/ja",
    },
  },

  openGraph: {
    images: ["https://yutokuroki.vercel.app/images/profile3.JPG"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuto Kuroki",
    description: "Profile page of Yuto Kuroki, second-year computer science student at Waseda University working in AI research and development",
    images: ["https://yutokuroki.vercel.app/images/profile3.JPG"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Analytics is now used so the import isn't unused */}
        <Analytics />
      </body>
    </html>
  );
}
