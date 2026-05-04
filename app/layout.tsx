import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/main/Navbar";
import Footer from "@/src/components/main/Footer";
import GlobalBackground from "@/src/components/main/GlobalBackground";
import WhatsAppFloat from "@/src/components/main/WhatsAppFloat";
import SmoothScroll from "@/src/components/main/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
