"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

interface ServiceItem {
  title: string;
  desc: string;
}

export default function ServicesDetailed() {
  const t = useTranslations("DigitalMarketingService.ServicesDetailed");
  const locale = useLocale();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  // استدعاء مصفوفة الكروت المترجمة بشكل آمن
  const services = t.raw("services") as ServiceItem[];

  return (
    <section className="relative py-10 overflow-hidden border border-white/10" dir={currentDir}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <h2 
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-10 text-center"
          dangerouslySetInnerHTML={{ __html: t.raw("mainTitle") }}
        />

        {/* الخط الزمني: تم ضبط الـ Margins بدقة متناهية لمنع أي ترحيل بيكسلي في الـ LTR */}
        <div className={`relative space-y-8 md:space-y-12 ${
          currentDir === "rtl" 
            ? "border-r border-blue-600/30 mr-4 ml-0" 
            : "border-l border-blue-600/30 ml-4 mr-0"
        }`}>
          {services.map((item, index) => (
            /* ضبط المسافات الجانبية للـ Padding للقطع داخل الـ Timeline بالتبادل */
            <div 
              key={index} 
              className={`relative w-full ${
                currentDir === "rtl" ? "pr-6 md:pr-8 pl-0" : "pl-6 md:pl-8 pr-0"
              }`}
            >
              
              {/* النقطة المضيئة: محاذاتها أصبحت هندسية مطلقة ومطابقة تماماً لمركز الخط العمودي في الاتجاهين */}
              <div className={`absolute top-1.5 w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)] ${
                currentDir === "rtl" ? "-right-1.5" : "-left-1.5"
              }`} />
              
              {/* الكرت الداخلي مع ضبط محاذاة النصوص التلقائية لجهة البداية */}
              <div className="p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-600/30 transition-colors text-start">
                <h3 className="text-blue-600 font-bold text-lg md:text-xl mb-2">{item.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* قسم لمن تناسب والنتيجة (تصميم هندسي متقاطع فاخر) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-24">
          
          <div className="relative p-6 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 text-start">
            {/* زخرفة زاوية البداية العلوية */}
            <div className={`absolute -top-3 w-8 h-8 md:w-10 md:h-10 border-t-2 border-blue-600/50 ${
              currentDir === "ltr" ? "-left-3 border-l-2" : "-right-3 border-r-2"
            }`} />
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              {t("forWhomTitle")}
            </h3>
            <p className="text-white/90 leading-relaxed text-sm md:text-base mb-4">
              {t("forWhomDesc1")}
            </p>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              {t("forWhomDesc2")}
            </p>
          </div>

          <div className="relative p-6 md:p-10 rounded-3xl bg-blue-600/10 border border-blue-600/20 text-start">
            {/* زخرفة زاوية النهاية السفلية */}
            <div className={`absolute -bottom-3 w-8 h-8 md:w-10 md:h-10 border-b-2 border-blue-600/50 ${
              currentDir === "ltr" ? "-right-3 border-r-2" : "-left-3 border-l-2"
            }`} />
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              {t("resultTitle")}
            </h3>
            <p className="text-white leading-relaxed text-sm md:text-base">
              {t("resultDesc")}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}