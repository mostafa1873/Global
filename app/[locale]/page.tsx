import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import Hero from "@/src/components/home/Hero";
import Services from "@/src/components/home/Services";
import About from "@/src/components/home/About";
import WorkProcess from "@/src/components/home/WorkProcess";
import TargetAudience from "@/src/components/home/TargetAudience";
import Vision from "@/src/components/home/Vision";
import CompactClosing from "@/src/components/home/CTA";

import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

// دالة توليد الميتا داتا الديناميكية المتوافقة تماماً مع هيكل الـ JSON الحالي عندك
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // القراءة من نفس الـ namespace والملف الأساسي بتاعك بدون تغيير
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  // تحويل نص الكلمات المفتاحية لمصفوفة متوافقة مع Next.js
  const keywordsString = t("keywords") || "";
  const keywordsArray = keywordsString.split(",").map((item: string) => item.trim()).filter(Boolean);

  // تمييز تايتل الصفحة الرئيسية ديناميكياً حسب اللغة (Home أو الرئيسية) من غير تعديل الـ JSON
  const pageTitle = locale === "ar" ? `الرئيسية - ${t("title")}` : `Home - ${t("title")}`;

  return {
    title: pageTitle,
    description: t("description"),
    keywords: keywordsArray,
    openGraph: {
      title: pageTitle,
      description: t("ogDescription") || t("description"),
      images: [
        {
          url: "/og-main.webp",
          width: 1200,
          height: 630,
          alt: "Global Nexus Preview Image",
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen relative">

      <Hero />

      <About />

      <Services />

      <WorkProcess />

      <WhyChooseUs />

      <TargetAudience />

      <Vision />

      <CompactClosing />

    </main>
  );
}