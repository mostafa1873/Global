import { Clock, ChevronLeft, ChevronRight, TrendingUp, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import blogData from "../../../blog.json";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";

// دالة توليد الميتا داتا الديناميكية المخصصة لصفحة المقالات (Blog) باسمها في الترجمة
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // القراءة من الـ namespace المخصص لصفحة المقالات
  const t = await getTranslations({ locale, namespace: 'MetadataBlog' });

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
          alt: "Global Nexus Blog Page Preview",
        },
      ],
    },
  };
}

export default async function BlogPage() {
  const t = await getTranslations("BlogPage");
  const locale = await getLocale();
  const isRtl = locale === "ar";

  // حماية في حال كان ملف الـ JSON فارغاً تماماً
  const safeBlogData = Array.isArray(blogData) ? blogData : [];

  const featuredPost = safeBlogData[0]; // المقال الرئيسي الأول
  const remainingPosts = safeBlogData.slice(1); // باقي المقالات
  const trendingPosts = safeBlogData.slice(0, 2); // الأكثر تفاعلاً (مقالين فقط)

  // صورة افتراضية في حال عدم وجود صورة بالمقال منعاً لـ Undefined
  const defaultImage = "/img/blog_1.webp";

  return (
    <main className="min-h-screen text-white pt-32 pb-24 px-6 md:px-12" dir={isRtl ? "rtl" : "ltr"}>

      {/* --- Minimalist Official Header --- */}
      <header className="max-w-7xl mx-auto mb-16 px-6 border-b border-white/[0.08] pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-start">

          <div className="flex-1 w-full md:w-auto flex flex-col items-center md:items-start">
            <span className="inline-block px-4 py-1.5 rounded-full text-white text-[10px] font-black tracking-[0.25em] uppercase mb-4 border border-white/[0.2] bg-white/[0.03]">
              {t("badge")}
            </span>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-none whitespace-nowrap md:whitespace-normal">
              {t("title_part1")} <br className="block md:hidden" /><span className="text-blue-600">{t("title_part2")}</span>
            </h1>
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Link
              href="/contact"
              className="w-fit md:w-auto px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-blue-600/50 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-2.5 md:gap-3 text-xs md:text-[13px] font-bold tracking-wide text-white group"
            >
              <span>{t("cta_consultation")}</span>
              {isRtl ? (
                <ArrowUpLeft size={15} className="md:size-[16px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              ) : (
                <ArrowUpRight size={15} className="md:size-[16px] group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform" />
              )}
            </Link>
          </div>

        </div>
      </header>

      {/* --- Executive Bento Grid Layout --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 1. المقال الرئيسي الكبير */}
        {featuredPost && (
          <Link
            href={isRtl ? `/blog/${featuredPost.slug_ar || ""}` : `/blog/${featuredPost.slug_en || ""}`}
            className="lg:col-span-2 p-6 md:p-8 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] flex flex-col justify-between gap-6 group items-center text-center"
          >
            <div className="w-full h-72 md:h-96 relative rounded-[1.5rem] overflow-hidden bg-slate-900">
              <Image
                src={featuredPost.image?.startsWith('/') ? featuredPost.image : (featuredPost.image ? `/${featuredPost.image}` : defaultImage)}
                alt={isRtl ? featuredPost.title_ar || "" : featuredPost.title_en || ""}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                fill
                priority
              />
            </div>

            <div className="flex flex-col flex-1 justify-between w-full">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                  {isRtl ? featuredPost.title_ar : featuredPost.title_en}
                </h2>
                <p className="text-white text-sm md:text-base font-light leading-relaxed line-clamp-2">
                  {isRtl ? featuredPost.mainTitle_ar : featuredPost.mainTitle_en}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.04] flex justify-center w-full">
                <div className="group/btn flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 group-hover:border-blue-600/40 group-hover:bg-blue-600/10 transition-all duration-400 text-white w-fit shadow-lg shadow-black/20">
                  <span className="text-sm font-bold tracking-wide">{t("read_more")}</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* 2. كارت الأكثر تفاعلاً */}
        <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] flex flex-col justify-between order-2 lg:order-none">
          <div className="text-center lg:text-start">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 pb-5 border-b border-white/[0.06]">
              <TrendingUp size={18} className="text-blue-600" />
              <h3 className="text-base font-bold text-white">{t("trending_title")}</h3>
            </div>

            <div className="flex flex-col gap-4">
              {trendingPosts.map((trendPost, i) => (
                <Link
                  key={trendPost.id}
                  href={isRtl ? `/blog/${trendPost.slug_ar || ""}` : `/blog/${trendPost.slug_en || ""}`}
                  className="group/item flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-start p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-blue-600/20 transition-all duration-300 w-full"
                >
                  <span className="font-mono text-sm text-slate-600 group-hover/item:text-blue-600 transition-colors pt-0.5">
                    0{i + 1}
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-xs font-bold text-white group-hover/item:text-blue-600 transition-colors leading-relaxed line-clamp-2">
                      {isRtl ? trendPost.title_ar : trendPost.title_en}
                    </h4>

                    <p className="text-white/50 text-[11px] font-light leading-relaxed line-clamp-2 mt-1.5 text-center lg:text-start">
                      {isRtl ? trendPost.mainTitle_ar : trendPost.mainTitle_en}
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-3">
                      <span className="text-white/20 text-[9px]">•</span>

                      <div className="flex items-center gap-1 text-[10px] text-white/50 group-hover/item:text-white/70 transition-colors">
                        <Clock size={11} className="text-blue-500/80" />
                        <span>{t("read_time")}</span>
                      </div>

                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium border ${i === 0
                        ? 'bg-blue-600/10 text-white border-blue-600/20 shadow-[0_0_12px_rgba(37,99,235,0.15)]'
                        : 'bg-white/[0.04] text-white/80 border-white/10'
                        }`}>
                        {i === 0 ? t("trending_tag") : t("strategic_tag")}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <h4 className="text-xs font-bold text-white mb-2 text-center">{t("ready_title")}</h4>
            <p className="text-[11px] text-white/60 mb-4 text-center leading-relaxed">
              {t("ready_desc")}
            </p>

            <Link
              href="/call"
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white border border-white/10 hover:border-blue-600/30 px-5 py-3 rounded-xl text-xs font-bold transition-all duration-300 backdrop-blur-sm active:scale-[0.98]"
            >
              {t("ready_cta")}
            </Link>
          </div>
        </div>

        {/* 3. باقي المقالات */}
        {remainingPosts.map((post) => (
          <Link
            key={post.id}
            href={isRtl ? `/blog/${post.slug_ar || ""}` : `/blog/${post.slug_en || ""}`}
            className="p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.06] hover:border-blue-600/30 transition-all duration-400 flex flex-col justify-between group items-center text-center"
          >
            <div className="w-full">
              <div className="w-full h-48 relative rounded-2xl overflow-hidden bg-slate-900 mb-5">
                <Image
                  src={post.image?.startsWith('/') ? post.image : (post.image ? `/${post.image}` : defaultImage)}
                  alt={isRtl ? post.title_ar || "" : post.title_en || ""}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-blue-600 transition-colors line-clamp-2 mb-3 leading-snug">
                {isRtl ? post.title_ar : post.title_en}
              </h3>
              <p className="text-white text-xs font-light leading-relaxed line-clamp-2">
                {isRtl ? post.mainTitle_ar : post.mainTitle_en}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.04] flex justify-center w-full">
              <div className="group/btn flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-blue-600/30 group-hover:bg-blue-600/10 transition-all duration-300 text-xs font-bold text-white w-fit">
                <span>{t("read_more")}</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {isRtl ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}