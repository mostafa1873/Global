import AboutHero from "@/src/components/about/Hero";
import HeartMessage from "@/src/components/about/Message";
import SalesClosing from "@/src/components/about/SalesClosing";

import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

// دالة توليد الميتا داتا الديناميكية المخصصة لصفحة من نحن (About) باسمها في الترجمة
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // القراءة من الـ namespace المخصص لصفحة من نحن
  const t = await getTranslations({ locale, namespace: 'MetadataAbout' });

  // تحويل نص الكلمات المفتاحية لمصفوفة متوافقة مع Next.js
  const keywordsString = t("keywords") || "";
  const keywordsArray = keywordsString.split(",").map((item: string) => item.trim()).filter(Boolean);

  return {
    title: t("title"),
    description: t("description"),
    keywords: keywordsArray,
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/og-main.webp",
          width: 1200,
          height: 630,
          alt: "Global Nexus About Page Preview",
        },
      ],
    },
  };
}

export default function AboutPage() {

  return (

    <>

      <AboutHero />

      <HeartMessage />

      <SalesClosing />

    </>
  );
}