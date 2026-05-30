import type { Metadata, Viewport } from "next";
import { Cairo, Geist } from "next/font/google"; // 1. استدعاء Cairo
import "./globals.css";
import Navbar from "@/src/components/main/Navbar";
import Footer from "@/src/components/main/Footer";
import GlobalBackground from "@/src/components/main/GlobalBackground";
import WhatsAppFloat from "@/src/components/main/WhatsAppFloat";
import SmoothScroll from "@/src/components/main/SmoothScroll";

// 2. إعداد الخطوط
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

const geistSans = Geist({
  variable: "--font-geist-sans", // ده هو الـ Git Sans بتاعك
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Global Nexus",
  description: "Global Nexus is a platform for sharing and discovering knowledge across the globe.",
  openGraph: {
    title: "Global Nexus",
    description: "Build your digital future with Global Nexus",
    url: "https://global-nexus-new.vercel.app",
    siteName: "Global Nexus",
    images: [
      {
        url: "/og-main.webp",
        width: 1200,
        height: 630,
        alt: "Global Nexus Preview Image",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 3. هنا بنحدد اللغة (ممكن تجيبها من الـ state أو الـ cookies)
  // هنفترض إنك بتعرف اللغة هنا أو هي ثابتة
  const lang = "AR"; 

  return (
    <html lang={lang === "AR" ? "ar" : "en"} dir={lang === "AR" ? "rtl" : "ltr"}>
      <body
        // 4. دمج الخطوط ديناميكياً
        className={`${cairo.variable} ${geistSans.variable} ${lang === "AR" ? "font-cairo" : "font-geist-sans"} antialiased`}
      >
        <SmoothScroll />
        <Navbar />

        <GlobalBackground />
        <WhatsAppFloat />
        {children}

        <Footer />
      </body>
    </html>
  );
}