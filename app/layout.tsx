import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./summer-night.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogUrl = `${protocol}://${host}/og-summer-night.png`;

  return {
    title: "CBD 草本忘憂系列｜讓夜晚，慢慢鬆開",
    description: "從草本放鬆到貼合支撐，上品寢具 CBD 草本忘憂系列陪身體回到舒服的睡眠節奏。",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "讓夜晚，慢慢鬆開。｜上品寢具",
      description: "CBD 草本忘憂系列｜草本放鬆・貼合支撐・慢回彈包覆",
      type: "website",
      locale: "zh_TW",
      images: [{ url: ogUrl, width: 1200, height: 630, alt: "上品寢具 CBD 草本忘憂系列夜晚睡眠情境" }],
    },
    twitter: { card: "summary_large_image", title: "CBD 草本忘憂系列｜讓夜晚，慢慢鬆開", images: [ogUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
