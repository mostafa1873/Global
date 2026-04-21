"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function CompactWhatsApp() {
  const [showText, setShowText] = useState(true);

  // إخفاء النص بعد ثانيتين (2000 مللي ثانية)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "201109458238"; 
  const message = "أهلاً بيك، محتاج تفاصيل أكتر عن خدمات Global Nexus.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
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
        dir="rtl"
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
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden flex flex-col items-start whitespace-nowrap"
        >
          <span className="text-[8px] text-blue-300/80 font-bold tracking-[0.15em] uppercase leading-none mb-1">
            Live Support
          </span>
          <span className="text-white font-medium text-xs tracking-wide leading-none">
            تواصل معنا
          </span>
        </motion.div>
      </motion.a>
    </div>
  );
}