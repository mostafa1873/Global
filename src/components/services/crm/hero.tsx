"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CRMHeroSection() {
  return (
    // التعديل الوحيد والآمن هنا: جعلنا الارتفاع h-auto على الموبايل عشان يلم الفراغ الميت، وبيفضل فخم بكامل الشاشة على الديسكتوب lg:min-h-screen مع ضبط البادينج
    <section className="relative w-full h-auto lg:min-h-screen flex items-center overflow-hidden pt-28 pb-12 md:pt-20 md:pb-0" dir="rtl">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* قسم النصوص - تم إضافة text-center و flex-col و items-center لضمان التوسط في الموبايل */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-right"
          >
            <div className="inline-block px-4 py-1 mb-6 text-xs font-mono text-blue-600 bg-blue-600/10 border border-blue-600/20 rounded-full">
              SYSTEM_ARCHITECTURE.READY
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] tracking-tight mb-6">
              أنظمة رقمية تساعد شركتك على<br />
              <span className="text-blue-600">تنظيم العمليات وإدارة العملاء</span>
            </h1>

            <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mb-8">
              مع نمو الشركات، تصبح إدارة العملاء والطلبات والبيانات أكثر تعقيدًا. في Global Nexus نطوّر أنظمة رقمية تساعد الشركات على تنظيم العمل، تحسين المتابعة، وتسهيل إدارة العمليات اليومية.
            </p>

            {/* الزرار الموحد */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <Link
                    href="/contact"
                    className="group/btn inline-flex items-center gap-4 pr-8 pl-4 py-3 sm:pr-10 sm:pl-5 sm:py-4 bg-white text-black hover:bg-blue-600 hover:text-white font-bold text-sm sm:text-base rounded-full transition-colors duration-300 ease-in-out tracking-tight shadow-sm"
                >
                    <span>ابدأ تنظيم عملياتك الرقمية</span>
                    <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 text-white group-hover/btn:bg-white group-hover/btn:text-blue-600 transition-colors duration-300 ease-in-out shrink-0">
                        <svg
                            className="w-4 h-4 transform transition-transform duration-300 ease-in-out group-hover/btn:-translate-x-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </span>
                </Link>
            </motion.div>
          </motion.div>

          {/* شكل توضيحي للنظام (الجانب التقني) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="w-full h-[350px] rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                 <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-600/30">
                    <div className="w-5 h-5 border-2 border-blue-600 rounded-lg" />
                 </div>
                 <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                 </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-3 w-3/4 bg-white/5 rounded-full" />
                <div className="h-3 w-1/2 bg-white/5 rounded-full" />
              </div>

              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-blue-600" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-blue-600" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}