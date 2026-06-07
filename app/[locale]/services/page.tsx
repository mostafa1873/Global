import CtaAbout from "@/src/components/services/Cta";
import ServicesHero from "@/src/components/services/hero";
import ServicesList from "@/src/components/services/services";

import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

// دالة توليد الميتا داتا الديناميكية المخصصة لصفحة الخدمات (Services) باسمها في الترجمة
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // القراءة من الـ namespace المخصص لصفحة الخدمات
  const t = await getTranslations({ locale, namespace: 'MetadataServices' });

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
          alt: "Global Nexus Services Page Preview",
        },
      ],
    },
  };
}

export default function ServicesPage() {

  return (

    <>
      <ServicesHero />

      <ServicesList />

      <CtaAbout />
    </>

  );
}