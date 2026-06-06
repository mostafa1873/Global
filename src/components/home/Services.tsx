"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const serviceIds = ["01", "02", "03", "04", "05", "06"];

export default function Services() {
  const t = useTranslations("Services");
  const locale = useLocale();
  const isAr = locale === "ar";

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    <section className="relative w-full py-10 border-t border-white/5 overflow-hidden z-10 select-none" dir={isAr ? "rtl" : "ltr"}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.02] blur-[150px] rounded-full pointer-events-none z-0 transform-gpu translate-z-0 will-change-transform" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center text-center space-y-5 transform-gpu">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.2] bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-white tracking-widest text-xs uppercase pt-0.5">
              {t("badge")}
            </span>
          </div>

          {/* التعديل هنا: حجم الخط بيصغر في الإنجليزي ويحافظ على حجمه الطبيعي الفخم في العربي */}
          <h2 className={`font-black text-white tracking-tight leading-tight select-text ${
            isAr 
              ? "text-3xl md:text-5xl lg:text-6xl" 
              : "text-2xl md:text-4xl lg:text-5xl"
          }`}>
            {t("titleLine1")} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/75">
              {t("titleLine2")}
            </span>
          </h2>

          <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-2xl select-text pt-2">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceIds.map((id, index) => {
            // سحب البيانات من ملف الـ JSON بناءً على المعرف لضمان عدم حدوث Undefined
            const enTitle = t(`items.${id}.enTitle`);
            const arTitle = t(`items.${id}.arTitle`);
            const desc = t(`items.${id}.desc`);

            // توليد الـ Slug من الاسم الإنجليزي ثابت دائماً للحفاظ على بنية المسارات
            const serviceSlug = enTitle.toLowerCase().replace(/ & /g, '-').replace(/ \/ /g, '-').replace(/\s+/g, '-');

            return (
              <motion.a
                key={id}
                href={`/services/${serviceSlug}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariant}
                custom={index}
                className="group relative flex flex-col justify-between p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:border-blue-600/30 hover:bg-white/[0.02] transition-all duration-500 h-full min-h-[350px] transform-gpu cursor-pointer active:scale-[0.99]"
              >
                <div className="absolute inset-0 bg-radial-gradient from-blue-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

                {/* الهيدر العلوي */}
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start w-full mb-8 gap-3 sm:gap-0">
                  <span className={`font-mono text-xs text-white/75 uppercase tracking-widest border-b border-white/10 pb-1 text-center ${isAr ? "sm:text-right" : "sm:text-left"}`}>
                    {enTitle}
                  </span>
                  <span className="font-mono text-lg text-blue-600 group-hover:text-blue-600 transition-colors duration-300 font-bold mt-2 sm:mt-0">
                    {id}
                  </span>
                </div>

                {/* محاذاة النص والزرار */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-auto w-full">
                  
                  {/* النصوص */}
                  <div className={`flex flex-col items-center text-center space-y-3 select-text w-full sm:max-w-[70%] ${isAr ? "sm:items-start sm:text-right" : "sm:items-end sm:text-left"}`}>
                    {/* التعديل الجوهري هنا: إضافة dir للتأكد من اتجاه النص الصحيح 100% ومنع الفراغات البصرية الناتجة عن محاذاة الفليكس */}
                    <h3 
                      className="text-xl font-bold text-white group-hover:text-blue-600 transition-colors duration-300 leading-snug w-full"
                      dir={isAr ? "rtl" : "ltr"}
                    >
                      {isAr ? arTitle : enTitle}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm font-light leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* الزرار الفخم */}
                  <div className={`flex justify-center w-full sm:w-auto sm:pb-1 ${isAr ? "sm:justify-end" : "sm:justify-start"}`}>
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 group-hover:text-white bg-white/[0.02] border border-white/[0.2] group-hover:border-blue-600/50 group-hover:bg-blue-600/[0.04] rounded-full transition-all duration-300 backdrop-blur-md whitespace-nowrap overflow-hidden relative">
                      <span>{t("exploreBtn")}</span>
                      
                      {/* منطقة حركة السهم المودرن - تتكيف ديناميكياً حسب الاتجاه اللغوي */}
                      <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                        <svg 
                          className={`w-4 h-4 text-white/80 group-hover:text-blue-600 transform transition-all duration-300 absolute ${
                            isAr ? "group-hover:-translate-x-5" : "group-hover:translate-x-5"
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          {isAr ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          )}
                        </svg>
                        
                        {/* السهم الثاني اللى بيظهر مكانه */}
                        <svg 
                          className={`w-4 h-4 text-blue-600 transform transition-all duration-300 absolute ${
                            isAr ? "translate-x-5 group-hover:translate-x-0" : "-translate-x-5 group-hover:translate-x-0"
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          {isAr ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          )}
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-blue-600/0 to-transparent group-hover:via-blue-600/40 transition-all duration-700 pointer-events-none transform-gpu" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}