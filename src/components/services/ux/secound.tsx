"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function GlobalNexusUIUXDetails() {
  const t = useTranslations("UIUXService.Details");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="w-full py-0 md:py-10 bg-transparent text-white overflow-hidden" dir={currentDir}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* عنوان السكشن الرئيسي - ضبط التباعد والمحاذاة ديناميكياً مع الاتجاه */}
        <div className={`mb-16 flex items-center justify-center gap-4 text-center ${currentDir === "rtl" ? "lg:justify-start lg:text-right" : "lg:justify-start lg:text-left"
          }`}>
          <div className="h-[1px] w-12 bg-blue-600 hidden lg:block" />
          <h2 className="text-xl font-mono text-blue-500 uppercase tracking-[0.2em]">{t("sectionTitle")}</h2>
        </div>

        {/* شبكة البينتو - تمت إزالة auto-rows-fr لتجنب تمدد الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* كارت 1: نبذة عن الخدمة */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`md:col-span-8 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md relative group hover:border-blue-600/30 transition-all duration-500 flex flex-col items-center ${currentDir === "rtl" ? "text-center lg:text-right lg:items-start" : "text-center lg:text-left lg:items-start"
              }`}
          >
            {/* الخلفية المضيئة - تتبدل الزاوية حسب اتجاه اللغة لجمالية التصميم البصري */}
            <div className={`absolute top-0 w-32 h-32 bg-blue-600/[0.03] ${currentDir === "rtl" ? "right-0 rounded-bl-3xl" : "left-0 rounded-br-3xl"
              }`} />

            <div className={`relative z-10 space-y-6 w-full flex flex-col ${currentDir === "rtl" ? "items-center lg:items-start" : "items-center lg:items-start"
              }`}>
              <span className="text-blue-500 font-mono text-sm block">{t("card1.num")}</span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{t("card1.title")}</h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">{t("card1.desc")}</p>

              <div className="flex gap-4 pt-4 border-t border-white/10 pt-6 w-full">
                <div className="flex-1">
                  <p className="text-white/90 font-medium leading-relaxed italic">{t("card1.quote")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* كارت 2: المشكلة - تم تقليل المساحات وتغيير الـ flex */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-red-950/[0.05] border border-red-900/20 backdrop-blur-md flex flex-col gap-6 group hover:border-red-600/30 transition-all duration-500 text-center items-center justify-between"
          >
            <div className="space-y-4 w-full">
              <span className="text-red-500 font-mono text-sm block">{t("card2.num")}</span>
              <h3 className="text-2xl font-bold">{t("card2.title")}</h3>
              <p className="text-white/90 leading-relaxed text-sm">{t("card2.desc")}</p>
            </div>
            <div className="p-4 rounded-xl bg-red-600/10 border border-red-500/20 w-full">
              <p className="text-white/90 text-xs font-semibold">{t("card2.alert")}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}