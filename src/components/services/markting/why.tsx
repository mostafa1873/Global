"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function ProblemAndServices() {
  const t = useTranslations("DigitalMarketingService.ProblemAndServices");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  // استدعاء المصفوفة المترجمة برمجياً بشكل سليم وآمن تماماً من ملف الـ JSON
  const services = t.raw("services") as string[];

  return (
    <section className="relative py-10 overflow-hidden" dir={currentDir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* المشكلة والحل */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
          <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
              {t("problemTitle")}
            </h3>
            <p className="text-white leading-relaxed text-sm md:text-base">
              {t("problemDesc")}
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
              {t("solutionTitle")}
            </h3>
            <p className="text-white leading-relaxed text-sm md:text-base">
              {t("solutionDesc")}
            </p>
          </div>
        </div>

        {/* ماذا نقدم */}
        <div className="relative p-6 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10">
          {/* زخرفة زاوية: تم ضبط كلاسات الاتجاه ديناميكياً لتتحاذى بالتناظر حسب اتجاه الصفحة */}
          <div className={`absolute -top-3 w-8 h-8 md:w-10 md:h-10 border-t-2 border-blue-600/50 ${currentDir === "ltr" ? "-left-3 border-l-2" : "-right-3 border-r-2"}`} />
          <div className={`absolute -bottom-3 w-8 h-8 md:w-10 md:h-10 border-b-2 border-blue-600/50 ${currentDir === "ltr" ? "-right-3 border-r-2" : "-left-3 border-l-2"}`} />

          {/* محاذاة النص: تم تحويل الـ md:text-right إلى md:text-start ديناميكياً ليناسب الـ LTR */}
          <h3 className="text-xl md:text-3xl font-extrabold text-blue-600 mb-10 text-center lg:text-start">
            {t("sectionTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-blue-600 font-bold shrink-0">•</span>
                <p className="text-white text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}