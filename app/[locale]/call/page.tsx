import BookACall from "@/src/components/main/book-a-call";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// دالة توليد الميتا داتا الديناميكية المخصصة لصفحة حجز المكالمات الاستراتيجية
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // القراءة من الـ namespace المخصص لصفحة حجز المكالمات
  const t = await getTranslations({ locale, namespace: 'MetadataCall' });

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
          alt: "Global Nexus Book a Call Page Preview",
        },
      ],
    },
  };
}

// إذا كان الملف داخل [locale]، يجب استقبال الـ params
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <BookACall locale={locale} />
    </>
  );
}