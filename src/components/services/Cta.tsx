"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function CtaAbout() {
  const t = useTranslations("ServicesPage.Cta");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="relative w-full py-10 px-4 bg-transparent overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto relative z-10 text-center">

        {/* العنوان - تم ضبط حجم الخط للموبايل في الإنجليزي ليكون متناسقاً ومريحاً جداً في الرؤية */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white mb-5 sm:mb-8 tracking-tight leading-tight"
        >
          {/* الجملة الأساسية الحاسمة - تم معالجة حجمها في الموبايل للغة الإنجليزية لتجنب الضخامة والتكدس */}
          <span className={`block font-black mb-2 sm:mb-4 tracking-tight ${isAr
              ? "text-xl sm:text-2xl md:text-4xl"
              : "text-lg sm:text-xl md:text-3xl px-2 sm:px-0"
            }`}>
            {t("titleLine1")} <br />
            <span className="text-blue-600">{t("titleHighlight")}</span>
          </span>

          {/* المحتوى الفرعي الطويل - تم تحسين تباينه وحجمه ليكون مريحاً على الشاشات الصغيرة */}
          <span className={`block font-light text-white/90 max-w-3xl mx-auto leading-relaxed ${isAr ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-lg md:text-xl px-1 sm:px-0"
            }`}>
            {t("description")}
          </span>
        </motion.h2>

        {/* الزرار المركزي الضخم والمحكم */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-2 bg-white/[0.02] border border-white/5 rounded-3xl sm:rounded-full backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full sm:w-auto"
        >
          {/* زرار الاستشارة الأساسي - تم معالجة الـ Link ليكون block متوافق مع أبعاد الزرار */}
          <Link href="/call" className="w-full sm:w-auto block sm:inline-block">
            <motion.button
              whileHover={{ x: isAr ? -5 : 5 }}
              className={`w-full sm:w-auto bg-white text-black font-black rounded-full flex items-center justify-center gap-3 transition-transform cursor-pointer ${isAr
                  ? "px-6 py-4 text-base sm:px-10 sm:py-5 sm:text-lg md:text-xl whitespace-nowrap"
                  : "px-6 py-4 text-base sm:px-10 sm:py-5 sm:text-lg md:text-xl whitespace-nowrap"
                }`}
            >
              {t("ctaButton")}
              {isAr ? <FiArrowLeft className="text-xl md:text-2xl shrink-0" /> : <FiArrowRight className="text-xl md:text-2xl shrink-0" />}
            </motion.button>
          </Link>

          {/* زرار الواتساب (المكمل) */}
          <motion.a
            href="https://wa.me/201109458238"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-5 text-[#25D366] hover:text-white group transition-colors cursor-pointer"
          >
            <FaWhatsapp className="text-3xl" />
          </motion.a>
        </motion.div>

        {/* جملة ختامية بسيطة جداً */}
        <p className="mt-16 text-slate-500 text-sm font-light tracking-wide opacity-50">
          Your Digital Transformation Starts Here — 2026
        </p>

      </div>
    </section>
  );
}