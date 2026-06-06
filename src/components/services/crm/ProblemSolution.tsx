"use client";

import { motion } from "framer-motion";
import { FiDatabase, FiSettings, FiTrendingUp } from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";

export default function CRMServiceOverview() {
  const t = useTranslations("CRMService.Overview");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  // الأيقونات ثابتة ومرتبطة بالمصفوفة بنفس الترتيب ميكانيكياً
  const icons = [<FiDatabase />, <FiSettings />, <FiTrendingUp />];

  // جلب مصفوفة الكروت المترجمة من ملفات الـ JSON مباشرة
  const featuresKeys = ["0", "1", "2"];

  return (
    <section className="relative w-full py-10 px-6 text-center md:text-start border-t border-white/10" dir={currentDir}>
      <div className="max-w-7xl mx-auto w-full">

        {/* العنوان والنبذة مع التحكم الديناميكي لحجم الخط الأجنبي لمنع التضخم */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-24 border-b border-white/10 pb-12">
          <h2 className={`font-black text-white tracking-tight mb-8 md:mb-0 ${currentDir === "rtl"
            ? "text-4xl md:text-6xl"
            : "text-3xl md:text-5xl"
            }`}>
            {t("sectionTitle")}
          </h2>
          <div className="max-w-xl">
            <p className={`text-white font-medium mb-6 ${currentDir === "rtl" ? "text-xl" : "text-lg"
              }`}>
              {t("mainDescription")}
            </p>
            <p className={`text-white/90 font-light leading-relaxed ${currentDir === "rtl" ? "text-lg" : "text-base"
              }`}>
              {t("subDescription")}
            </p>
          </div>
        </div>

        {/* شبكة الكروت بتنسيق نظيف وهادئ متناظر بالملي */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {featuresKeys.map((key, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative flex flex-col items-center md:items-start"
            >
              <div className="text-blue-600 text-3xl mb-8">
                {icons[index]}
              </div>
              <h3 className={`font-bold text-white mb-4 ${currentDir === "rtl" ? "text-2xl" : "text-xl"
                }`}>
                {t(`features.${key}.title`)}
              </h3>
              <p className={`text-white/90 leading-relaxed font-light ${currentDir === "rtl" ? "text-base" : "text-sm"
                }`}>
                {t(`features.${key}.desc`)}
              </p>

              {/* الخط السفلي الزخرفي التناظري الخفيف */}
              <div className="mt-12 h-[1px] w-12 bg-blue-600/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}