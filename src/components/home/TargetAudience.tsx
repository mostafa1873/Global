"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const sectorIds = ["01", "02", "03", "04", "05", "06", "07"];

export default function TargetAudience() {
  const t = useTranslations("TargetAudience");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="relative w-full py-10 z-10 select-none border-t border-white/5 overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* الهيدر في المنتصف تماماً ليتناسب مع التوزيع الحر */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6 max-w-3xl transform-gpu">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.2] bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-white tracking-widest text-xs uppercase pt-0.5">
              {t("badge")}
            </span>
          </div> 

          {/* حجم الخط بيصغر في الإنجليزي ويحافظ على حجمه الطبيعي الفخم في العربي */}
          <h2 className={`font-black text-white tracking-tight leading-tight select-text ${
            isAr 
              ? "text-4xl md:text-5xl lg:text-6xl" 
              : "text-3xl md:text-4xl lg:text-5xl"
          }`}>
            {t("titleLine1")} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80">
              {t("titleLine2")}
            </span>
          </h2>

          <p className="text-white/80 text-lg font-light leading-relaxed select-text pt-2 max-w-2xl">
            {t("description")}
          </p>
        </div>

        {/* تم تحديث الحاوية هنا إلى Grid متساوي ومنظم بالكامل في الموبايل والتابلت لتوحيد المقاسات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:items-center gap-4 md:gap-6 mt-4 w-full px-2 md:px-0">
          {sectorIds.map((id, index) => {
            const sectorName = t(`sectors.${id}`);

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group flex lg:inline-flex items-center justify-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-all duration-500 transform-gpu cursor-default w-full lg:w-auto min-h-[60px] md:min-h-[80px]"
              >
                <span className="font-mono text-xs md:text-sm text-white/30 group-hover:text-white/60 transition-colors duration-300 shrink-0">
                  {id}
                </span>
                
                <span className="text-sm md:text-lg lg:text-xl font-bold text-white/80 group-hover:text-white transition-colors duration-300 select-text text-center lg:text-right">
                  {sectorName}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}