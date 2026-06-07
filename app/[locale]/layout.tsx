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
  display: "swap", // تحسين أداء تحميل الخط العربي للـ SEO وسرعة الصفحة
});

const geistSans = Geist({
  variable: "--font-geist-sans", // ده هو الـ Git Sans بتاعك
  subsets: ["latin"],
  display: "swap", // تحسين أداء تحميل الخط الإنجليزي
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

  // الدومين الجديد بتاعك
  const SITE_URL = "https://globalnexuseg.com";
  // تحديد رابط الصفحة الحالي بشكل ديناميكي (لو اللغة إنجليزي وهي الأساسية مش هيحط /en)
  const canonicalUrl = `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}`;

  // جلب الكلمات المفتاحية كـ نص يفصله فواصل من ملف الترجمة وتحويله لمصفوفة لـ Next.js
  const keywordsString = t("keywords") || "";
  const keywordsArray = keywordsString.split(",").map((item: string) => item.trim()).filter(Boolean);

  return {
    title: t("title"),
    description: t("description"),
    keywords: keywordsArray, // إضافة الكلمات المفتاحية ديناميكياً هنا كـ Array
    metadataBase: new URL(SITE_URL), // تحديد الرابط الأساسي لحل مشاكل الروابط النسبية في نكست

    // تاجز الـ الروابط البديلة (مهمة جداً لجوجل عشان يعرف إن الصفحة ليها نسختين عربي وإنجليزي)
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}`,
        ar: `${SITE_URL}/ar`,
      },
    },

    // إعدادات زواحف الأرشفة (Robots) لضمان أرشفة الموقع بالكامل وبأعلى كفاءة
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      url: canonicalUrl, // استخدام الرابط الجديد والديناميكي هنا
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

    // كروت تويتر (X) عشان لما اللينك يتبعت على تويتر يظهر بشكل فخم وصورة كبيرة
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("ogDescription") || t("description"),
      images: ["/og-main.webp"],
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
  // فك الـ Promise للحصول على الـ locale الحالي (ar أو en) كما كان في ملفك الأصلي
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