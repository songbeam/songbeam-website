import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogUrl = `${protocol}://${host}/og.png`;

  return {
    title: "上品 CBD 草本忘憂系列｜舒服入睡的日常",
    description: "上品 CBD 草本忘憂系列，以親膚材質、透氣結構與貼合支撐，陪你建立更舒服的睡前日常。",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "把夜晚，還給舒服的自己。",
      description: "上品 CBD 草本忘憂系列",
      type: "website",
      locale: "zh_TW",
      images: [{ url: ogUrl, width: 1200, height: 630, alt: "上品 CBD 草本忘憂系列" }],
    },
    twitter: { card: "summary_large_image", title: "把夜晚，還給舒服的自己。", images: [ogUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
