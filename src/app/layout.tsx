// filename: src/app/layout.tsx
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "법무법인 서평",
  description: "서울특별시 서초구 위치. 탁월한 법률 서비스 제공.",
  keywords: "법무법인, 서평, 이재순, 채동욱",
  openGraph: {
    type: "website",
    title: "법무법인 서평",
    siteName: "법무법인 서평",
    description: "서울특별시 서초구 위치. 탁월한 법률 서비스 제공.",
    url: "https://www.seopyeong.com",
  },
  verification: {
    google: "h56_6k81zkpS5ni39EHlhoCNCsSz1fFmisLMc0vTbI0",
  },
  robots: "index,follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/images/favicon_seopyeong.ico" />
        <meta name="naver-site-verification" content="0e25248cf92d2c3acdb7b72f3523be4b5b6952c8" />
        <link rel="canonical" href="https://www.seopyeong.com/" />
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b36253d2fe67d0211c0055b24168feef"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
