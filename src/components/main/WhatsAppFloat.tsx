"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Download } from "lucide-react"; // أيقونة التحميل للزرار الجديد
import { useTranslations } from "next-intl"; // استدعاء هوك الترجمة

// ضفنا هنا البروب (isMenuOpen) عشان يستقبل حالة المنيو إذا كانت مفتوحة أو لأ
export default function CompactWhatsApp({ isMenuOpen = false }) {
  // كود الواتساب الأصلي بتاعك (زي ما هو بالظبط)
  const [showText, setShowText] = useState(true);

  // حالات زرار البورتفوليو الجديد (يبدأ بالظهور أول ما الموقع يفتح زي الواتساب)
  const [showPortText, setShowPortText] = useState(true);

  // تفعيل هوك الترجمة الخاص بسيكشن WhatsApp
  const t = useTranslations("WhatsApp");

  // إخفاء النصوص الترحيبية للزرارين بعد ثانيتين (2000 مللي ثانية) من فتح الموقع
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
      setShowPortText(false); // النص بيختفي هنا ومبيظهرش بوب تاني خلاص
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "201109458238";
  const message = t("message");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // الإبقاء على الاتجاه الثابت والمكان الأصلي بالمللي في اليمين bottom-6 right-6
    // التعديل الوحيد هنا: إذا كانت المنيو مفتوحة (isMenuOpen === true) هيتم إضافة كلاس hidden ليختفي تماماً
    <div className={`fixed bottom-6 right-6 z-[99] ${isMenuOpen ? "hidden" : ""}`}>

      {/* ========================================================= */}
      {/* 1. زرار البورتفوليو الجديد (يفتح أول ما الموقع يفتح وخلاص) */}
      {/* ========================================================= */}
      <div className="absolute bottom-[64px] right-0 flex flex-col items-end z-10">

        {/* الزرار نفسه بنفس حجم وتنسيق الواتساب بالمللي وبدون البوب الطاير */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600/10 blur-[20px] rounded-full pointer-events-none"></div>
          <motion.a
            href="/company-portfolio.pdf" // مسار ملف البورتفوليو بتاعك
            download="Company_Portfolio.pdf"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseEnter={() => setShowPortText(true)}
            onMouseLeave={() => setShowPortText(false)}
            className="group relative flex items-center bg-white/5 border border-white/10 backdrop-blur-md p-1.5 rounded-full overflow-hidden transition-colors duration-300 hover:bg-white/10 hover:border-blue-500/30 shadow-xl shadow-black/20"
            dir="rtl"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 rounded-full group-hover:scale-105 transition-transform duration-300">
              <Download size={18} className="text-blue-400" strokeWidth={2.5} />
              <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping opacity-75"></span>
            </div>

            <motion.div
              initial={false}
              animate={{
                width: showPortText ? "auto" : 0,
                opacity: showPortText ? 1 : 0,
                marginRight: showPortText ? 12 : 0,
                paddingLeft: showPortText ? 16 : 0
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col items-start whitespace-nowrap"
            >
              <span className="text-[8px] text-blue-300/80 font-bold tracking-[0.15em] uppercase leading-none mb-1">
                Company Profile
              </span>
              {/* ربط نص الزرار بنظام الترجمة */}
              <span className="text-white font-medium text-xs tracking-wide leading-tight">
                {t("portfolioText")}
              </span>
            </motion.div>
          </motion.a>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. كود زرار الواتساب الأصلي بتاعك (ملمسناش فيه الهوا) */}
      {/* ========================================================= */}
      <div className="absolute bottom-0 right-0">
        {/* توهج خلفي خفيف جداً ومصغر */}
        <div className="absolute inset-0 bg-blue-600/10 blur-[20px] rounded-full pointer-events-none"></div>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
          className="group relative flex items-center bg-white/5 border border-white/10 backdrop-blur-md p-1.5 rounded-full overflow-hidden transition-colors duration-300 hover:bg-white/10 hover:border-blue-500/30 shadow-xl shadow-black/20"
          dir="rtl" // ثابت rtl للحفاظ على نفس هيكل وترتيب الأيقونة والنص بالظبط في الجهتين
        >
          {/* أيقونة الواتساب (حجم مصغر وأنيق) */}
          <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#25D366]/20 to-transparent border border-[#25D366]/30 rounded-full group-hover:scale-105 transition-transform duration-300">
            <MessageSquare size={18} className="text-[#25D366]" strokeWidth={2.5} />

            {/* نقطة الأونلاين مدمجة فوق الأيقونة */}
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-[#25D366] border-2 border-transparent rounded-full z-10"></span>
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full animate-ping opacity-75"></span>
          </div>

          {/* النص بتأثير الانكماش والظهور */}
          <motion.div
            initial={false}
            animate={{
              width: showText ? "auto" : 0,
              opacity: showText ? 1 : 0,
              marginRight: showText ? 12 : 0,
              paddingLeft: showText ? 16 : 0 // مسافة داخلية من اليسار قبل الإغلاق
            }}
            transition={{ duration: 0.4, ease: "easeInOut" as const }}
            className="overflow-hidden flex flex-col items-start whitespace-nowrap"
          >
            <span className="text-[8px] text-blue-300/80 font-bold tracking-[0.15em] uppercase leading-none mb-1">
              Live Support
            </span>
            <span className="text-white font-medium text-xs tracking-wide leading-tight">
              {t("text")}
            </span>
          </motion.div>
        </motion.a>
      </div>

    </div>
  );
}