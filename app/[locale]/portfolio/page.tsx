import PortfolioSalesClosing from "@/src/components/portfolio/CTA";
import AvantGardeShowcase from "@/src/components/portfolio/InteractiveShowcase";
import PortfolioSection from "@/src/components/portfolio/Portfolio";
import StructuralHeader from "@/src/components/portfolio/StructuralHeader";

import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

// دالة توليد الميتا داتا الديناميكية المخصصة لصفحة أعمالنا (Portfolio) باسمها في الترجمة
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // القراءة من الـ namespace المخصص لصفحة أعمالنا
  const t = await getTranslations({ locale, namespace: 'MetadataPortfolio' });

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
          alt: "Global Nexus Portfolio Page Preview",
        },
      ],
    },
  };
}

export default function PortfolioPage() {
  return (

    <main>

      <StructuralHeader />

      <PortfolioSection />

      <AvantGardeShowcase />

      <PortfolioSalesClosing />

    </main>

  );
}