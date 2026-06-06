import BookACall from "@/src/components/main/book-a-call";

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