"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function GlobalNexusUIUXFeatures() {
  const t = useTranslations("UIUXService.Features");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  // جلب مصفوفة الخدمات ديناميكياً بناءً على اللغة المفعلة
  const services = t.raw("services") as string[];

  return (
    <section className="w-full py-10 bg-transparent text-white" dir={currentDir}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* ضبط محاذاة عناصر الجريد ديناميكياً مع الاتجاه */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 text-center ${currentDir === "rtl" ? "lg:text-right" : "lg:text-left"
          }`}>

          {/* الجزء الأول: ماذا نقدم؟ (Grid) */}
          <motion.div
            variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className={`flex items-center gap-3 text-blue-600 text-xs uppercase tracking-widest justify-center ${currentDir === "rtl" ? "lg:justify-start" : "lg:justify-start"
              }`}>
              <span className="w-6 h-[1px] bg-blue-600" />
              {t("sectionTitle")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t("mainTitle")}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <motion.div
                  key={idx} variants={item}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-600/30 transition-all duration-300 group"
                >
                  <div className={`flex items-center gap-4 justify-center ${currentDir === "rtl" ? "lg:justify-start" : "lg:justify-start"
                    }`}>
                    <span className="text-blue-600/50 font-mono text-lg font-bold group-hover:text-blue-500">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-white/90 font-medium">{service}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* الجزء الثاني: لمن الخدمة + النتيجة */}
          <div className="lg:col-span-5 space-y-12">

            {/* لمن هذه الخدمة مناسبة؟ */}
            <motion.div variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <div className={`flex items-center gap-3 text-blue-600 font-mono text-xs uppercase tracking-widest justify-center ${currentDir === "rtl" ? "lg:justify-start" : "lg:justify-start"
                }`}>
                <span className="w-6 h-[1px] bg-blue-600" />
                {t("targetTitle")}
              </div>
              <h3 className="text-2xl font-bold">{t("targetHeading")}</h3>
              <p className="text-white/85 leading-relaxed">{t("targetDesc")}</p>
            </motion.div>

            {/* النتيجة المتوقعة */}
            <motion.div variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <div className={`flex items-center gap-3 text-blue-600 font-mono text-xs uppercase tracking-widest justify-center ${currentDir === "rtl" ? "lg:justify-start" : "lg:justify-start"
                }`}>
                <span className="w-6 h-[1px] bg-blue-600" />
                {t("resultTitle")}
              </div>
              <div className="p-8 rounded-3xl bg-blue-900/10 border border-blue-500/20">
                <h4 className="text-xl font-bold mb-3 text-blue-600">{t("resultHeading")}</h4>
                <p className="text-white/85 leading-relaxed">{t("resultDesc")}</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}