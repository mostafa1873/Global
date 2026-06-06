"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function CRMHeroSection() {
  const t = useTranslations("CRMService.Hero");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="relative w-full h-auto lg:min-h-screen flex items-center overflow-hidden pt-28 pb-12 md:pt-20 md:pb-0" dir={currentDir}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* قسم النصوص - دعم المحاذاة التناظرية لليمين واليسار حسب الاتجاه الحالي */}
          <motion.div
            initial={{ opacity: 0, x: currentDir === "rtl" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-start"
          >
            <div className="inline-block px-4 py-1 mb-6 text-xs font-mono text-white border border-white/[0.2] bg-white/[0.03] rounded-full">
              {t("badge")}
            </div>

            {/* العنوان الرئيسي: التحكم في حجم الخط بشكل منفصل تماماً للإنجليزي دون المساس بالعربي */}
            <h1
              className={`font-extrabold text-white leading-[1.2] tracking-tight mb-6 ${currentDir === "rtl"
                  ? "text-3xl md:text-5xl lg:text-6xl" // حجم خطك الأصلي للعربي بالملي دون أي تغيير
                  : "text-2xl md:text-4xl lg:text-5xl" // حجم خط منسق وأصغر خصيصاً للإنجليزي لمنع الضخامة والفرش
                }`}
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            />

            <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mb-8">
              {t("description")}
            </p>

            {/* الزرار الموحد - تم التحكم في أبعاده والـ Padding والخط للإنجليزي بشكل منفصل ومنع تمدده */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="/contact"
                className={`group/btn inline-flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3.5 bg-white text-black hover:bg-blue-600 hover:text-white font-bold rounded-full transition-colors duration-300 ease-in-out tracking-tight shadow-sm ${currentDir === "rtl"
                    ? "text-sm sm:text-base pr-8 pl-4 sm:pr-10 sm:pl-5" // التنسيق والبادينج العربي الأصلي كما هو بالملي
                    : "text-xs sm:text-sm pl-5 pr-3 sm:pl-7 sm:pr-4"   // تضييق البادينج وتصغير الخط للإنجليزي لمنع الامتداد والتمطيط
                  }`}
              >
                <span>{t("ctaText")}</span>

                <span className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-blue-600 text-white group-hover/btn:bg-white group-hover/btn:text-blue-600 transition-colors duration-300 ease-in-out shrink-0">
                  <svg
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform duration-300 ease-in-out ${currentDir === "ltr"
                        ? "rotate-180 group-hover/btn:translate-x-1.5"
                        : "group-hover/btn:-translate-x-1.5"
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* شکل توضيحي للنظام (الجانب التقني) - معالجة تماثل زوايا البوردر في الـ LTR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="w-full h-[350px] rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-600/30">
                  <div className="w-5 h-5 border-2 border-blue-600 rounded-lg" />
                </div>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-3 w-3/4 bg-white/5 rounded-full" />
                <div className="h-3 w-1/2 bg-white/5 rounded-full" />
              </div>

              {/* زخرفة الزوايا: تم ضبط كلاسات الاتجاه لتتبع ركن البداية والنهاية بشكل سيمتري تلقائي */}
              <div className={`absolute -top-3 w-8 h-8 border-t-4 border-blue-600 ${currentDir === "ltr" ? "-left-3 border-l-4" : "-right-3 border-r-4"}`} />
              <div className={`absolute -bottom-3 w-8 h-8 border-b-4 border-blue-600 ${currentDir === "ltr" ? "-right-3 border-r-4" : "-left-3 border-l-4"}`} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}