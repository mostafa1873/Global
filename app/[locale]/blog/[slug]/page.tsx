import blogData from "../../../../blog.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, ChevronRight, Tag, ArrowRight, ArrowLeft, ChevronLeft, Quote } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

// إنشاء المسارات الثابتة للـ Static Export لدعم اللغتين معاً عبر الـ Slugs العربية والإنجليزية
export async function generateStaticParams() {
  const locales = ["ar", "en"];
  const params: { locale: string; slug: string }[] = [];

  blogData.forEach((post) => {
    locales.forEach((locale) => {
      const rawSlug = locale === "ar" ? post.slug_ar : post.slug_en;
      if (rawSlug) {
        params.push({
          locale,
          slug: decodeURIComponent(rawSlug),
        });
      }
    });
  });

  return params;
}

interface PostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { locale, slug } = await params;
  const isRtl = locale === "ar";
  const t = await getTranslations("BlogPost");

  // فك تشفير الـ slug القادم من الرابط لضمان قراءته بشكل صحيح
  const decodedSlug = decodeURIComponent(slug);
  
  // حل مشكلة الـ 404 نهائياً: البحث المرن الذكي
  // بيبحث الأول في لغة المسار، لو ملقاش بيبحث في اللغة التانية كـ Fallback عشان لو السلوج إنجليزي والمسار عربي يشتغل برضه
  const post = blogData.find((p) => {
    const slugArDecoded = p.slug_ar ? decodeURIComponent(p.slug_ar) : "";
    const slugEnDecoded = p.slug_en ? decodeURIComponent(p.slug_en) : "";
    
    if (isRtl) {
      return slugArDecoded === decodedSlug || slugEnDecoded === decodedSlug;
    } else {
      return slugEnDecoded === decodedSlug || slugArDecoded === decodedSlug;
    }
  });

  if (!post) notFound();

  // جلب المقالات المقترحة باستثناء المقال الحالي ودعم الـ Fallback لمنع التكرار
  const relatedPosts = blogData
    .filter((p) => {
      const slugArDecoded = p.slug_ar ? decodeURIComponent(p.slug_ar) : "";
      const slugEnDecoded = p.slug_en ? decodeURIComponent(p.slug_en) : "";
      return slugArDecoded !== decodedSlug && slugEnDecoded !== decodedSlug;
    })
    .slice(0, 3);

  // صورة افتراضية احتياطية للحماية
  const defaultImage = "/img/blog_1.webp";

  return (
    <main className="min-h-screen text-white pt-26 md:pt-32 pb-20 px-6 relative overflow-hidden selection:bg-blue-600/30">
      <div className="max-w-7xl mx-auto">

        {/* --- 1. Executive Breadcrumb --- */}
        <div className={`flex ${isRtl ? "justify-center md:justify-start" : "justify-center md:justify-start"} mb-8`} dir={isRtl ? "rtl" : "ltr"}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <Link href="/blog" className="text-slate-400 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
              {t("badge")}
            </Link>
            {isRtl ? <ChevronLeft size={12} className="text-blue-600" /> : <ChevronRight size={12} className="text-blue-600" />}
            <span className="text-blue-500 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
              <Tag size={10} /> {t("tag")}
            </span>
          </div>
        </div>

        {/* --- 2. Combined Bento Hero Section --- */}
        <header className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] mb-6" dir={isRtl ? "rtl" : "ltr"}>
          <div className="max-w-5xl mx-auto">
            <h1 className={`text-2xl md:text-4xl font-black leading-[1.4] text-zinc-100 mb-6 tracking-tight ${isRtl ? "text-center md:text-right" : "text-center md:text-left"}`}>
              {isRtl ? post.title_ar : post.title_en}
            </h1>

            <p className={`text-slate-300 text-base md:text-lg font-normal leading-[1.7] mb-8 ${isRtl ? "border-r-4 border-blue-600 pr-4 text-center md:text-right" : "border-l-4 border-blue-600 pl-4 text-center md:text-left"}`}>
              {isRtl ? post.mainTitle_ar : post.mainTitle_en}
            </p>

            <div className={`flex flex-wrap items-center ${isRtl ? "justify-center md:justify-between" : "justify-center md:justify-between"} gap-4 mb-10 pt-6 border-t border-white/[0.06]`}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-slate-300 text-[11px] font-bold">
                <Calendar size={14} className="text-blue-600" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-slate-300 text-[11px] font-bold">
                <Clock size={14} className="text-blue-600" />
                <span>{t("read_time")}</span>
              </div>
            </div>

            {/* الصورة داخل الكرت الفخم */}
            <div className="relative aspect-video md:aspect-[21/9] w-full rounded-[2rem] overflow-hidden bg-slate-900 border border-white/[0.04]">
              <Image
                src={post.image?.startsWith('/') ? post.image : (post.image ? `/${post.image}` : defaultImage)}
                alt={isRtl ? post.title_ar : post.title_en}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        {/* --- 3. Main Content Section --- */}
        <div className="w-full p-8 md:p-12 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] mb-6" dir={isRtl ? "rtl" : "ltr"}>
          <div className="space-y-16 relative max-w-5xl mx-auto">

            {/* خط التايم لاين الهندسي الموزون حسب الاتجاه لغوياً */}
            <div className={`absolute top-1 bottom-1 w-px bg-gradient-to-b from-blue-600/40 via-white/5 to-transparent hidden md:block ${isRtl ? "right-4" : "left-4"}`} />

            {((isRtl ? post.subSections_ar : post.subSections_en) || []).map((section, index) => (
              <div key={index} className={`relative group ${isRtl ? "md:pr-12 text-center md:text-right" : "md:pl-12 text-center md:text-left"}`}>

                {/* دقة التموضع الهندسي للدائرة على الخط الطولي */}
                <div className={`absolute top-0 w-8 h-8 rounded-full bg-[#020202] border border-white/10 hidden md:flex items-center justify-center group-hover:border-blue-500/50 transition-colors z-10 ${isRtl ? "right-0" : "left-0"}`}>
                  <span className="w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                </div>

                <h3 className={`text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight ${isRtl ? "justify-center md:justify-start" : "justify-center md:justify-start"}`}>
                  <span className="md:hidden w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  {section.subtitle}
                </h3>
                <p className={`text-slate-200 text-base md:text-[17px] font-normal leading-[1.9] tracking-wide opacity-95 text-center ${isRtl ? "md:text-justify pl-0 md:pl-2" : "md:text-justify pr-0 md:pr-2"}`}>
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 4. Bottom Cards Block --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24" dir={isRtl ? "rtl" : "ltr"}>

          {/* Summary Card */}
          <div className="p-8 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className={`flex items-center gap-3 mb-6 pb-5 border-b border-white/[0.06] ${isRtl ? "justify-center md:justify-start" : "justify-center md:justify-start"}`}>
                <Quote size={20} className="text-blue-600" />
                <h3 className="text-lg font-bold text-white">{t("summary_title")}</h3>
              </div>
              <p className={`text-slate-400 text-sm leading-[1.7] mb-8 font-light italic ${isRtl ? "text-center md:text-right" : "text-center md:text-left"}`}>
                "{isRtl ? post.title_ar : post.title_en} {t("summary_desc")}"
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex items-center justify-between w-full bg-blue-600/10 hover:bg-blue-600 border border-blue-600/30 text-white px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-wide transition-all duration-300"
            >
              <span>{t("cta_project")}</span>
              {isRtl ? (
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              )}
            </Link>
          </div>

          {/* Newsletter Card */}
          <div className="p-8 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] flex flex-col justify-center">
            <div className={`w-full ${isRtl ? "text-center md:text-right" : "text-center md:text-left"}`}>
              <h3 className="text-base font-bold text-white mb-2">{t("newsletter_title")}</h3>
              <p className="text-slate-500 text-[11px] mb-6 font-medium">{t("newsletter_desc")}</p>

              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder={t("newsletter_placeholder")}
                  className={`w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600 transition-colors text-white placeholder:text-slate-600 ${isRtl ? "text-center md:text-right" : "text-center md:text-left"}`}
                />
                <button className="w-full bg-white text-black hover:bg-blue-600 hover:text-white py-3 rounded-xl text-xs font-bold transition-colors duration-300">
                  {t("newsletter_btn")}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* --- 5. Related Posts (Bento Style) --- */}
        <section className="pt-16 border-t border-white/[0.08]" dir={isRtl ? "rtl" : "ltr"}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-600 rounded-full" />
              {t("related_title")} <span className="text-slate-400">{t("related_subtitle")}</span>
            </h2>
            <Link href="/blog" className="text-slate-500 hover:text-blue-500 transition-colors text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 group">
              {t("view_all")}
              {isRtl ? (
                <ChevronLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
              )}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedPosts.map((p, idx) => (
              <Link key={idx} href={`/blog/${isRtl ? (p.slug_ar || p.slug_en) : (p.slug_en || p.slug_ar)}`} className="p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.06] hover:border-blue-600/30 transition-all duration-400 flex flex-col group">
                <div className="w-full h-48 relative rounded-2xl overflow-hidden bg-slate-900 mb-5 border border-white/5">
                  <Image
                    src={p.image?.startsWith('/') ? p.image : (p.image ? `/${p.image}` : defaultImage)}
                    alt={isRtl ? p.title_ar : p.title_en}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 text-[10px] text-white font-medium mb-3">
                  <span className="text-blue-600/70">{t("suggested")}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-slate-400">{p.date}</span>
                </div>

                <h4 className={`text-base font-bold text-white group-hover:text-blue-500 transition-colors line-clamp-2 leading-snug mb-4 ${isRtl ? "text-center" : "text-center"}`}>
                  {isRtl ? p.title_ar : p.title_en}
                </h4>

                <div className={`mt-auto pt-4 border-t border-white/[0.04] flex ${isRtl ? "justify-center md:justify-center" : "justify-center md:justify-center"}`}>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-blue-600/30 group-hover:bg-blue-600/10 transition-all duration-300 text-[11px] font-bold text-white">
                    <span>{t("read")}</span>
                    {isRtl ? <ChevronLeft size={12} className="text-blue-500" /> : <ChevronRight size={12} className="text-blue-500" />}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}