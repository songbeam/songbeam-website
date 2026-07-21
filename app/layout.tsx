import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogUrl = `${protocol}://${host}/og.png`;

  return {
    title: "CBD 草本忘憂系列｜把一天的疲憊，輕輕交給夜晚",
    description: "從貼合支撐到放鬆睡感，上品寢具 CBD 草本忘憂系列陪你找回舒服入睡的節奏。認識草本忘憂好眠親水枕。",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "把一天的疲憊，輕輕交給夜晚｜上品寢具",
      description: "CBD 草本忘憂系列｜從貼合支撐到放鬆睡感",
      type: "website",
      locale: "zh_TW",
      images: [{ url: ogUrl, width: 1200, height: 630, alt: "上品寢具 CBD 草本忘憂系列夜晚睡眠情境" }],
    },
    twitter: { card: "summary_large_image", title: "CBD 草本忘憂系列｜把一天的疲憊，輕輕交給夜晚", images: [ogUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
