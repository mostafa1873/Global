"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function GlobalNexusPhilosophy() {
  const t = useTranslations("AboutPage.Philosophy");
  const locale = useLocale();
  const isAr = locale === "ar";

  // كلاس توحيد اتجاه النصوص بناءً على اللغة المفتوحة
  const textAlignClass = isAr ? "text-center md:text-right" : "text-center md:text-left";

  return (
    <section className="w-full py-10 bg-transparent text-white overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="space-y-0">
          
          {/* سكشن 1: فلسفة العمل */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 border-b border-white/10"
          >
            {/* العنوان - ثابت (Sticky) على الشاشات الكبيرة */}
            <div className={`w-full md:w-5/12 md:sticky md:top-32 self-start ${textAlignClass}`}>
              <span className="text-blue-600 text-sm tracking-widest uppercase mb-4 block">
                {t("sec1Badge")}
              </span>
              <h2 className="text-2xl md:text-4xl font-black leading-tight">
                {t("sec1Title1")} <br/><span className="text-white">{t("sec1Title2")}</span>
              </h2>
            </div>
            
            {/* المحتوى */}
            <div className="w-full md:w-7/12">
              <div className={`bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md ${textAlignClass}`}>
                <p className="text-lg text-white/90 leading-relaxed font-light">
                  {t("sec1Desc")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* سكشن 2: طريقة التفكير */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 border-b border-white/10"
          >
            <div className={`w-full md:w-5/12 md:sticky md:top-32 self-start ${textAlignClass}`}>
              <span className="text-blue-600 text-sm tracking-widest uppercase mb-4 block">
                {t("sec2Badge")}
              </span>
              <h2 className="text-2xl md:text-4xl font-black leading-tight">
                {t("sec2Title1")} <br/><span className="text-white">{t("sec2Title2")}</span>
              </h2>
            </div>
            
            <div className="w-full md:w-7/12">
              <div className={`bg-blue-600/10 border border-blue-600/20 p-8 md:p-10 rounded-3xl ${textAlignClass}`}>
                <p className="text-lg text-white/90 leading-relaxed font-medium">
                  {t("sec2Desc")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* سكشن 3: ماذا يميزنا */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 border-b border-white/10"
          >
            <div className={`w-full md:w-5/12 md:sticky md:top-32 self-start ${textAlignClass}`}>
              <span className="text-blue-600 text-sm tracking-widest uppercase mb-4 block">
                {t("sec3Badge")}
              </span>
              <h2 className="text-2xl md:text-4xl font-black leading-tight">
                {t("sec3Title1")} <br/><span className="text-white">{t("sec3Title2")}</span>
              </h2>
            </div>
            
            <div className="w-full md:w-7/12">
              <div className={`bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 md:p-10 rounded-3xl ${textAlignClass}`}>
                <p className="text-lg text-white/90 leading-relaxed">
                  {t("sec3Desc")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* سكشن 4: رؤيتنا */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 relative"
          >
            {/* إضاءة الخلفية للسكشن الأخير */}
            <div className={`absolute top-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none ${isAr ? "left-1/4" : "right-1/4"}`} />

            <div className={`w-full md:w-5/12 md:sticky md:top-32 self-start relative z-10 ${textAlignClass}`}>
              <span className="text-blue-600 text-sm tracking-widest uppercase mb-4 block">
                {t("sec4Badge")}
              </span>
              <h2 className="text-2xl md:text-4xl font-black leading-tight">
                {t("sec4Title1")} <br/><span className="text-white">{t("sec4Title2")}</span>
              </h2>
            </div>
            
            <div className="w-full md:w-7/12 relative z-10">
              <div className={`bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl ${textAlignClass}`}>
                <p className="text-lg text-white/90 leading-relaxed font-light">
                  {t("sec4Desc")}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}