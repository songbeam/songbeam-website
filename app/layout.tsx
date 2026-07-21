import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogUrl = `${protocol}://${host}/og.png`;

  return {
    title: "上品睡眠相談室｜找到肩頸真正放鬆的位置",
    description: "從睡姿、肩寬與習慣枕高出發，上品睡眠顧問陪你找到適合自己的支撐。認識草本忘憂好眠親水枕。",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "今晚，找到肩頸真正放鬆的位置｜上品寢具",
      description: "日系睡眠相談室｜從睡姿與肩頸出發",
      type: "website",
      locale: "zh_TW",
      images: [{ url: ogUrl, width: 1200, height: 630, alt: "上品寢具日系睡眠相談室與輪廓枕" }],
    },
    twitter: { card: "summary_large_image", title: "上品睡眠相談室｜找到肩頸真正放鬆的位置", images: [ogUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
