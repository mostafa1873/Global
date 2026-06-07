import ContactForm from "@/src/components/contact/Form";

import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

// دالة توليد الميتا داتا الديناميكية المخصصة لصفحة اتصل بنا (Contact) باسمها في الترجمة
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // القراءة من الـ namespace المخصص لصفحة اتصل بنا
  const t = await getTranslations({ locale, namespace: 'MetadataContact' });

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
          alt: "Global Nexus Contact Page Preview",
        },
      ],
    },
  };
}

export default function ContactPage() {


  return (
    <>

      <ContactForm />

    </>
  );
}