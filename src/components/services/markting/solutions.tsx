"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function ServiceOverview() {
  const t = useTranslations("DigitalMarketingService.Overview");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="relative py-10 overflow-hidden" dir={currentDir}>
      {/* توهج الخلفية لمحاكاة الهيرو */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* النص الجانبي - جعلنا حركة الدخول من اليمين في الـ RTL ومن اليسار في الـ LTR بشكل متناظر هندسياً */}
          <motion.div
            initial={{ opacity: 0, x: currentDir === "rtl" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-center lg:text-start"
          >
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            />
            {/* خط الزخرفة السفلي: ضبط محاذاة الـ Margin لليسار واليمين بشكل شرطي وديناميكي */}
            <div className={`w-20 h-1.5 bg-blue-600 rounded-full mb-8 mx-auto ${currentDir === "ltr" ? "lg:ml-0" : "lg:mr-0"}`} />

            <p className="text-base md:text-lg text-white leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          {/* الكارت المميز والزخارف الهندسية */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-6 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_0_30px_-10px_rgba(37,99,235,0.2)]">
              {/* زخرفة زاوية: تم تعديل كلاسات الاتجاه لتلتف وتتناظر هندسياً حسب لغة الصفحة الحالية بالملي */}
              <div className={`absolute -top-3 w-8 h-8 md:w-10 md:h-10 border-t-2 border-blue-600/50 ${currentDir === "ltr" ? "-left-3 border-l-2" : "-right-3 border-r-2"}`} />
              <div className={`absolute -bottom-3 w-8 h-8 md:w-10 md:h-10 border-b-2 border-blue-600/50 ${currentDir === "ltr" ? "-right-3 border-r-2" : "-left-3 border-l-2"}`} />

              <p
                className="text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.raw("cardText") }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}