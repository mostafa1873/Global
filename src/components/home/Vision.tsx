"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const valueKeys = ["0", "1", "2"];

export default function Vision() {
  const t = useTranslations("Vision");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="relative w-full py-10 z-10 select-none overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* لوح الزجاج الرئيسي الفخم (Glassmorphism Panel) */}
        <div className="relative w-full border border-white/10 rounded-3xl p-5 sm:p-8 md:p-16 lg:p-20 overflow-hidden transform-gpu group/canvas bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl shadow-2xl shadow-black/50">
          
          {/* لمحة الضوء أو الانعكاس الزجاجي العالي (Glass Highlight Top-Light) */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          {/* زوايا استوديو حادة ونحيفة على الأطراف تفتح وتضيء مع الـ Hover - متكيفة ديناميكياً مع الاتجاه */}
          <div className={`absolute top-0 w-8 h-[1px] bg-white/20 group-hover/canvas:bg-white/60 transition-colors duration-500 ${isAr ? "right-0" : "left-0"}`} />
          <div className={`absolute top-0 w-[1px] h-8 bg-white/20 group-hover/canvas:bg-white/60 transition-colors duration-500 ${isAr ? "right-0" : "left-0"}`} />
          <div className={`absolute bottom-0 w-8 h-[1px] bg-white/20 group-hover/canvas:bg-white/60 transition-colors duration-500 ${isAr ? "left-0" : "right-0"}`} />
          <div className={`absolute bottom-0 w-[1px] h-8 bg-white/20 group-hover/canvas:bg-white/60 transition-colors duration-500 ${isAr ? "left-0" : "right-0"}`} />

          {/* محاذاة الجريد الداخلي الفخم */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start relative z-10">
            
            {/* الجزء الأيمن/الأيسر حسب اللغة: العنوان الأصلي مفرود بفخامة */}
            <div className={`lg:col-span-5 flex flex-col items-center space-y-4 sm:space-y-6 ${
              isAr ? "lg:items-start text-center lg:text-right" : "lg:items-start text-center lg:text-left"
            }`}>
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.2] bg-white/[0.03] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-white tracking-widest text-xs uppercase pt-0.5">
                  {t("badge")} 
                </span>
              </div>
              
              <h2 className={`font-black text-white tracking-tight leading-tight select-text ${
                isAr 
                  ? "text-3xl md:text-5xl lg:text-6xl" 
                  : "text-2xl md:text-4xl lg:text-5xl"
              }`}>
                {t("titleLine1")} <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/75">
                  {t("titleLine2")}
                </span>
              </h2>
            </div>

            {/* الجانب المقابل: الفقرة والركائز ككتلة بصرية واحدة محترمة */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 sm:space-y-10 lg:pt-4">
              
              {/* النص ديناميكي بالكامل ومحاذاته تتبع اتجاه اللغة */}
              {isAr ? (
                <p className="text-lg md:text-2xl lg:text-3xl font-light text-white/80 leading-relaxed sm:leading-loose select-text text-center lg:text-right">
                  نسعى إلى مساعدة الشركات على بناء أنظمة رقمية تدعم النمو طويل المدى من خلال حلول تجمع بين{" "}
                  <span className="text-white font-medium underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors duration-300">{t("strategy")}</span>،{" "}
                  <span className="text-white font-medium underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors duration-300">{t("design")}</span>
                  <span className="text-white font-medium underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors duration-300"> ، والـتقنية</span>.
                </p>
              ) : (
                <p className="text-md md:text-xl lg:text-2xl font-light text-white/80 leading-relaxed sm:leading-loose select-text text-center lg:text-left">
                  We strive to help companies build digital systems that support long-term growth through solutions that combine{" "}
                  <span className="text-white font-medium underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors duration-300">{t("strategy")}</span>,{" "}
                  <span className="text-white font-medium underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors duration-300">{t("design")}</span>
                  <span className="text-white font-medium underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors duration-300">, and {t("tech")}</span>.
                </p>
              )}

              {/* الكبسولات الزجاجية التفاعلية للركائز الثلاثة - تتكيف في المحاذاة للـ ltr والـ rtl */}
              <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 ${
                isAr ? "lg:justify-start" : "lg:justify-start"
              }`}>
                {valueKeys.map((key, idx) => (
                  <motion.div
                    key={key}
                    whileHover={{ y: -2 }}
                    className="px-5 py-2.5 sm:px-6 sm:py-3 border border-white/5 hover:border-white/20 bg-white/[0.02] backdrop-blur-md rounded-xl flex items-center gap-3 transition-all duration-300 group cursor-default transform-gpu shadow-sm"
                  >
                    <span className="font-mono text-xs text-white/30 group-hover:text-white/60 transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <span className="text-sm md:text-base font-medium text-white/50 group-hover:text-white transition-colors duration-300">
                      {t(`values.${key}`)}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}