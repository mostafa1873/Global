import type { Metadata, Viewport } from "next";
import { Cairo, Geist } from "next/font/google"; // 1. استدعاء Cairo
import "../globals.css";
import Navbar from "@/src/components/main/Navbar";
import Footer from "@/src/components/main/Footer";
import GlobalBackground from "@/src/components/main/GlobalBackground";
import WhatsAppFloat from "@/src/components/main/WhatsAppFloat";
import SmoothScroll from "@/src/components/main/SmoothScroll";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

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

// 3. تحويل الميتا داتا لدالة ديناميكية تقرأ حسب اللغة من غير تعديل في هيكل بياناتك القديم
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
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
      locale: locale === "ar" ? "ar_EG" : "en_US",
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
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // استقبال الـ params بالتحديث الجديد لنكست 16
}>) {
  // فك الـ Promise للحصول على الـ locale الحالي (ar أو en)
  const { locale } = await params;

  // حماية: لو كتب لغة مش مدعومة يروح 404
  if (!['ar', 'en'].includes(locale)) {
    notFound();
  }

  // جلب ملفات الترجمة الخاصة باللغة دي للسيرفر والـ Components بشكل آمن ومضمون
  const messages = await getMessages({ locale });

  // تحويل الـ locale لمتغير lang بنفس المنطق بتاعك بالظبط عشان الكود القديم يفضل شغال صبابة
  const lang = locale === "ar" ? "AR" : "EN";

  return (
    <html lang={lang === "AR" ? "ar" : "en"} dir={lang === "AR" ? "rtl" : "ltr"}>
      <body
        // 4. دمج الخطوط ديناميكياً بنفس تنسيقك بالظبط
        className={`${cairo.variable} ${geistSans.variable} ${lang === "AR" ? "font-cairo" : "font-geist-sans"} antialiased`}
      >
        {/* الـ Provider عشان يمرر الترجمات للـ Components بسلاسة */}
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll />

          {/* بنمرر الـ locale للـ Navbar عشان نستخدمه جوه زرار الترجمة */}
          <Navbar locale={locale} />

          <GlobalBackground />
          <WhatsAppFloat />
          {children}

          {/* تم تعديل التمرير هنا لحل مشكلة الـ TypeScript في الـ Type Checking */}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}