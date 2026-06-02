"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const 
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    // التعديل الوحيد والآمن هنا: جعلنا الارتفاع h-auto على الموبايل عشان يلم الفراغ الميت، وبيفضل فخم بكامل الشاشة على الديسكتوب lg:min-h-screen
    <section 
      className="relative w-full h-auto lg:min-h-screen flex items-center overflow-hidden pt-30 pb-12 md:pt-18 md:pb-0" 
      dir="rtl"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* قسم النصوص */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-right"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-8">
              <span className="px-5 py-2 text-sm font-medium tracking-wide text-blue-400 bg-blue-600/10 border border-blue-600/20 rounded-full backdrop-blur-sm">
                استراتيجيات نمو ذكية
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl lg:text-5xl font-extrabold text-white leading-[1.5] lg:leading-[1.2] tracking-tight mb-8"
            >
              تسويق رقمي يساعد شركتك <br />
              <span className="text-blue-500 block md:mt-2">على الوصول والنمو</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white max-w-2xl leading-relaxed mb-12"
            >
              التسويق الرقمي الناجح لا يعتمد فقط على نشر المحتوى أو تشغيل الإعلانات، بل يحتاج إلى فهم الجمهور، وضوح الرسالة، وتنظيم رحلة العميل من أول ظهور حتى التواصل. في Global Nexus نساعد الشركات على حضور تسويقي أكثر فاعلية واتساقًا.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              <Link href="/contact" className="group/btn inline-flex items-center gap-4 pr-8 pl-4 py-4 bg-white text-black font-bold text-base rounded-full transition-colors duration-300 ease-in-out tracking-tight shadow-sm hover:bg-blue-600 hover:text-white">
                <span>ابدأ تطوير تسويقك الرقمي</span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white group-hover/btn:bg-white group-hover/btn:text-blue-600 transition-colors duration-300 ease-in-out shrink-0">
                  <svg className="w-4 h-4 transform transition-transform duration-300 ease-in-out group-hover/btn:-translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* قسم الفيجوالز */}
          <motion.div
            className="lg:col-span-5 relative h-[400px] md:h-[500px] hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* الكارت الأول */}
            <motion.div 
              variants={floatVariants} 
              animate="animate"
              className="absolute right-0 top-10 w-60 bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 z-10"
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-full mb-6 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-blue-500 rounded-sm" />
              </div>
              <h3 className="text-white font-bold mb-3">فهم الجمهور</h3>
              <div className="space-y-3">
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
              </div>
            </motion.div>

            {/* الكارت الثاني */}
            <motion.div 
              variants={floatVariants} 
              animate="animate"
              style={{ animationDelay: "-2s" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-64 bg-[#0f172a] p-6 rounded-3xl shadow-[0_0_50px_-15px_rgba(37,99,235,0.3)] border border-blue-500/30 z-20"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex space-x-2 space-x-reverse">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-white/10 rounded-full" />
                </div>
                <span className="text-xs text-blue-400 font-medium">جاري التحليل...</span>
              </div>
              <div className="h-24 rounded-xl bg-blue-600/40 mb-6 flex items-center justify-center border border-blue-500/10">
                 <div className="w-12 h-12 bg-blue-600/20 rounded-full opacity-50 blur-sm" />
              </div>
              <h3 className="text-white font-bold text-lg">وضوح الرسالة</h3>
            </motion.div>

            {/* الكارت الثالث */}
            <motion.div 
              variants={floatVariants} 
              animate="animate"
              style={{ animationDelay: "-1s" }}
              className="absolute right-10 bottom-0 w-52 bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 z-10"
            >
               <div className="flex items-end gap-2 h-16 mb-6">
                  <div className="w-full bg-white/5 h-1/3 rounded-t-sm" />
                  <div className="w-full bg-blue-600/20 h-2/3 rounded-t-sm" />
                  <div className="w-full bg-blue-600 h-full rounded-t-sm shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
               </div>
              <h3 className="text-white font-bold mb-1">رحلة العميل</h3>
              <p className="text-sm text-blue-600 tracking-wider">تحويل فعال</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}