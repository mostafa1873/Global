"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const reasonIds = ["01", "02", "03", "04", "05"];

export default function WhyGlobalNexus() {
  const t = useTranslations("WhyGlobalNexus");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="relative w-full py-10 border-t border-white/5 z-10 select-none" dir={isAr ? "rtl" : "ltr"}>
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-12">

          {/* الجزء الأيمن: الثابت في الديسكتوب والمتسنتر في الموبايل */}
          <div className={`w-full lg:w-1/2 flex flex-col items-center space-y-6 lg:sticky lg:top-40 transform-gpu ${
            isAr ? "lg:items-start text-center lg:text-right" : "lg:items-start text-center lg:text-left"
          }`}>
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.2] bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-white tracking-widest text-xs uppercase pt-0.5">
                {t("badge")}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-text">
              {t("titleLine1")} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80">
                {t("titleLine2")}
              </span>
            </h2>

            <p className="text-white/85 text-base md:text-lg font-light leading-relaxed select-text pt-2 max-w-md">
              {t("description")}
            </p>
          </div>

          {/* الجزء الأيسر: التدفق العمودي الشفاف والنظيف */}
          <div className={`w-full lg:w-1/2 relative flex flex-col space-y-16 md:space-y-24 ${
            isAr ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"
          }`}>

            {/* خط رأسي أنيق يظهر في الديسكتوب بس يفصل المسار - يتكيف حسب الاتجاه */}
            <div className={`hidden md:block absolute top-4 bottom-4 w-[1px] bg-gradient-to-b from-white/20 via-white/50 to-transparent pointer-events-none ${
              isAr ? "right-0" : "left-0"
            }`} />

            {reasonIds.map((id, index) => {
              const title = t(`reasons.${id}.title`);
              const desc = t(`reasons.${id}.desc`);

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                  className={`group relative flex flex-col items-center text-center transform-gpu ${
                    isAr ? "md:items-start md:text-right" : "md:items-start md:text-left"
                  }`}
                >
                  {/* الدائرة المضيئة الصامتة على الخط في الديسكتوب - تتكيف بالملي حسب اتجاه اللغة */}
                  <div className={`hidden md:block absolute top-2 w-2 h-2 rounded-full bg-[#020617] border border-white/30 group-hover:border-white group-hover:scale-125 transition-all duration-300 z-20 ${
                    isAr ? "-right-[53px] lg:-right-[69px]" : "-left-[53px] lg:-left-[69px]"
                  }`} />

                  {/* الرقم */}
                  <span className="font-mono text-xs text-white tracking-widest mb-3 block font-bold group-hover:text-white/50 transition-colors duration-300">
                    {id}
                  </span>

                  {/* العنوان */}
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-3 select-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                    {title}
                  </h3>

                  {/* الوصف الأصلي كامل */}
                  <p className="text-white text-sm md:text-base font-light leading-relaxed max-w-md select-text group-hover:text-white/50 transition-colors duration-300">
                    {desc}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}