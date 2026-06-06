"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function ServiceDetails() {
  const t = useTranslations("WebDevelopmentService.Details");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  // جلب مصفوفة المميزات ديناميكياً من ملف الترجمة
  const featuresList = t.raw("featuresList") as string[];

  return (
    <section className="w-full py-10 border-t border-white/10 px-6 md:px-24 bg-transparent text-white" dir={currentDir}>
      <div className="max-w-6xl mx-auto">

        {/* المشكلة التي تعالجها الخدمة - تناظر كامل للحواف والبوردر والاتجاهات */}
        <div className={`mb-20 p-8 md:p-12 bg-white/5 backdrop-blur-md text-center lg:text-start ${currentDir === "rtl"
            ? "border-r-4 border-blue-600 rounded-l-3xl"
            : "border-l-4 border-blue-600 rounded-r-3xl"
          }`}>
          <h3 className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">
            {t("problemTitle")}
          </h3>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-white">
            {t("problemText")}
          </p>
        </div>

        {/* ماذا نقدم داخل الخدمة - روت يدعم الـ rich text للـ span الملونة */}
        <div className="mb-20">
          <h3
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            dangerouslySetInnerHTML={{ __html: t.raw("featuresTitle") }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 border border-white/10 rounded-2xl bg-white/[0.03] hover:border-blue-600/50 hover:bg-blue-600/5 transition-all duration-300 text-center"
              >
                <div className="flex flex-col items-center">
                  <span className="text-blue-600 font-bold mb-2">0{index + 1}.</span>
                  <p className="font-medium text-white">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* لمن هذه الخدمة + النتيجة - محاذاة مرنة وتناظرية بالكامل */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center lg:text-start">
          <div className="p-8 border border-white/10 rounded-3xl bg-white/5 flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-4 text-blue-600">{t("audienceTitle")}</h3>
            <p className="text-white leading-relaxed">
              {t("audienceText")}
            </p>
          </div>

          {/* كرت النتيجة مع تأثير Glow ملفت */}
          <div className="relative p-8 rounded-3xl bg-blue-600/10 border border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.2)] flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-4 text-white">{t("resultTitle")}</h3>
            <p className="text-white leading-relaxed font-medium">
              {t("resultText")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}