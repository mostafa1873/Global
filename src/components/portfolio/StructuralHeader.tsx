"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BrutalistPremiumHero() {
  return (
    <section
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-transparent px-6"
      dir="rtl"
    >
      {/* عناصر ديكورية - كما هي */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 text-[10px] font-mono text-white/10 rotate-90 tracking-[1em] uppercase">
          Innovation Results
        </div>
        <div className="absolute bottom-1/4 right-10 text-[10px] font-mono text-white/10 -rotate-90 tracking-[1em] uppercase">
          Case Studies 2026
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* الـ Badge العلوي */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-[1px] w-8 bg-blue-600" />
          <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em]">
            Impact Driven Portfolio
          </span>
        </motion.div>

        {/* --- شكل الكتابة الجديد (Clean & Refined) --- */}
        <div className="flex flex-col space-y-2 md:space-y-4">
          
          {/* سطر واحد يجمع البداية بأسلوب هادئ */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/40 text-lg md:text-2xl font-light tracking-wide"
          >
            نحن لا نعرض مجرد أعمال
          </motion.p>

          {/* الكلمة البطلة مع توهج خفيف */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[5vw] lg:text-[100px] font-black text-white"
            >
              نحن نصنع <span className="text-blue-600">نتائج</span>
            </motion.h1>
          </div>

          {/* السطر الأخير بحجم متوسط لإكمال المعنى */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] md:text-[7vw] lg:text-[90px] font-black leading-none text-white italic pr-2 md:pr-4"
            >
              لعملائنا.
            </motion.h1>
          </div>

        </div>
        {/* --- نهاية شكل الكتابة الجديد --- */}

        {/* الجزء السفلي: الوصف وزرار الأكشن - كما هو */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 items-end gap-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="md:col-span-6 lg:col-span-5"
          >
            <p className="text-neutral-500 text-sm md:text-base font-medium leading-relaxed border-r border-white/10 pr-6">
              كل مشروع هنا وراه هدف، تنفيذ، ونتيجة حقيقية، جاهزة للمستقبل. 
              <span className="text-white/80"> شوف إزاي ساعدنا عملائنا يكبروا.</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="md:col-span-6 lg:col-start-10 flex justify-start md:justify-end"
          >
            <button className="group relative flex items-center gap-5 bg-white text-black px-6 py-3.5 rounded-full font-bold text-base hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl shadow-white/5">
              <span>احجز استشارة</span>
              <div className="w-8 h-8 bg-black group-hover:bg-white rounded-full flex items-center justify-center transition-colors duration-500">
                <ArrowLeft size={16} className="text-white group-hover:text-blue-600 transition-colors duration-500" />
              </div>
            </button>
          </motion.div>

        </div>
      </div>

      {/* سهم السكرول السفلي - كما هو */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] font-bold tracking-[0.4em] text-white/20 uppercase">Explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-blue-600 to-transparent" />
      </motion.div>
    </section>
  );
}