"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Code2, Gauge, BarChart3, Layers, Orbit } from "lucide-react";

export default function TechFrameHero() {
  const highlights = [
    { title: "Performance First", icon: <Gauge size={18} /> },
    { title: "Premium UI/UX", icon: <Layers size={18} /> },
    { title: "Business Intelligence", icon: <BarChart3 size={18} /> },
  ];

  // متغيرات الأنيميشن (Variants) لحركة دخول متدرجة ورايقة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // الفارق الزمني بين ظهور كل عنصر
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // الدخول من الأسفل للأعلى
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 }, // حركة ناعمة
    },
  };

  return (
    // التعديل الأساسي: h-screen للابتوب و h-auto للموبايل لضمان عدم قص المحتوى
    // pt-28 لضمان مسافة ثابتة تحت الناف بار
    <section className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden pt-25 pb-10 md:pb-0 md:pt-20 px-4 md:px-10 lg:px-20 transform-gpu" dir="rtl">

      {/* --- الخلفية التقنية (تم استبدال animate-spin بـ motion لتقليل اللاج) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20 transform-gpu">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 text-blue-900"
        >
          <Orbit size={800} />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 text-blue-950"
        >
          <Orbit size={500} />
        </motion.div>
      </div>

      <motion.div
        // تم إضافة transform-gpu و will-change-transform لإنهاء اللاج
        className="container mx-auto max-w-7xl relative z-10 p-5 md:p-8 lg:p-12 border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-3xl will-change-transform transform-gpu"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* حدود ديكورية متقاطعة (تضفي طابعاً هندسياً) */}
        <div className="absolute top-0 right-0 w-8 md:w-12 h-8 md:h-12 border-t border-r border-blue-600/30 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-8 md:w-12 h-8 md:h-12 border-b border-l border-blue-600/30 rounded-bl-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Section 1: الجزء الأيمن (العنوان والبايدج) */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-right">

            {/* البايدج (Badge) - تصميم Minimal حاد */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 px-4 py-1.5 rounded-lg border border-blue-500/10 bg-blue-500/5 text-blue-400 text-[10px] font-mono tracking-wider shadow-inner"
            >
              <Code2 size={14} className="animate-pulse" />
              <span>BUILT TO LAST, DESIGNED TO GROW</span>
            </motion.div>

            {/* العنوان الكبير - ضبط الحجم ليكون متجاوباً بدقة من 4xl إلى 7xl */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.2] lg:leading-[1.1] tracking-tighter"
            >
              مش مجرد موقع <br className="hidden md:block" />ده واجهة <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 relative inline-block">
                شركتك الحقيقية
                {/* خط ديكوري ثابت تحت الكلمة الملفتة */}
                <span className="absolute -bottom-1 md:-bottom-2 right-0 h-1 w-full bg-blue-600 rounded-full" />
              </span>
            </motion.h1>
          </div>

          {/* Section 2: الجزء الأيسر (الوصف، المميزات، الأزرار) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-center lg:text-right flex flex-col items-center lg:items-start">

            {/* الوصف - تقليل الحجم قليلاً في الموبايل لزيادة المساحة الرأسية */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-400 text-sm md:text-lg leading-relaxed font-light lg:pr-6 lg:border-r border-white/5 max-w-md lg:max-w-none"
            >
              في "Global Nexus"، بنبني أساس تقني يشيل مشروعك السنين الجاية. بنختار التكنولوجيا اللي تخدم البيزنس بتاعك وتضمن لك هيكل مرن يكبر معاك وقت ما تحب.
            </motion.p>

            {/* المميزات كأيقونات ذكية - ترتيب مرن 3 في صف للموبايل و عمودي للديسك توب */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 w-full">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-4 p-3 md:p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-blue-500/20 hover:bg-blue-500/[0.02] transition-all duration-300 group w-full"
                >
                  <div className="p-2 md:p-2.5 rounded-xl text-blue-500 border border-white/5 group-hover:scale-110 transition-transform flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-start text-right">
                    <h3 className="text-white font-bold text-xs md:text-base tracking-wide uppercase opacity-90">{item.title}</h3>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* الأزرار والفوتر التقني - pt متجاوبة */}
            <motion.div variants={itemVariants} className="pt-4 lg:pt-6 border-t border-white/5 flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start w-full">
              <button className="w-full md:w-auto group flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-black font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-blue-600/20 flex-shrink-0">
                ابدأ مشروعك الآن
                <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* لمسة إضاءة خلفية خافتة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.02)_0%,rgba(0,0,0,0)_100%)] pointer-events-none -z-10" />
    </section>
  );
}