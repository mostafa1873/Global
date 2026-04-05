"use client";

import { motion } from "framer-motion";

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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      className="relative w-full min-h-[100vh] flex items-center overflow-hidden" 
      dir="rtl"
    >
      {/* خلفية Cyber-Corporate (توهج أزرق نيون هادئ) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* قسم النصوص - تم إضافة items-center text-center للموبايل */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-right pt-10 md:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <span className="px-4 py-1.5 text-sm font-medium tracking-wide text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                إدارة شاملة 360°
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight mb-6"
            >
              منصاتك بتشتغل لحسابك<br />
              <span className="text-blue-500">مش العكس.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10"
            >
              بنمسك إدارة منصات السوشيال ميديا من الألف للياء (تخطيط، تنفيذ، ومتابعة) عشان إنت تتفرغ لتطوير بيزنسك وتنسى همّ <span className="font-semibold text-blue-400">"هنزل إيه النهاردة؟"</span>.
            </motion.p>

            {/* تم إضافة justify-center للموبايل */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              <button className="group relative px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus:outline-none">
                <span className="relative z-10 flex items-center gap-3">
                  استلم عرض سعر
                  <svg 
                    className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* قسم الفيجوالز - مفيش تغيير */}
          <motion.div
            className="lg:col-span-5 relative h-[500px] hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* الكارت الأول */}
            <motion.div 
              variants={floatVariants} 
              animate="animate"
              className="absolute right-0 top-10 w-64 bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 z-10"
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-full mb-4 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-blue-500 rounded-sm" />
              </div>
              <h3 className="text-white font-bold mb-2">تخطيط استراتيجي</h3>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
              </div>
            </motion.div>

            {/* الكارت الثاني */}
            <motion.div 
              variants={floatVariants} 
              animate="animate"
              style={{ animationDelay: "-2s" }}
              className="absolute left-10 top-1/2 -translate-y-1/2 w-72 bg-[#0f172a] p-6 rounded-3xl shadow-[0_0_50px_-15px_rgba(37,99,235,0.3)] border border-blue-500/30 z-20"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2 space-x-reverse">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-white/10 rounded-full" />
                </div>
                <span className="text-xs text-blue-400 font-medium">جاري النشر...</span>
              </div>
              <div className="h-32 rounded-xl bg-blue-950/40 mb-4 flex items-center justify-center border border-blue-500/10">
                 <div className="w-12 h-12 bg-blue-500/20 rounded-full opacity-50 blur-sm" />
              </div>
              <h3 className="text-white font-bold text-lg">تنفيذ دقيق</h3>
            </motion.div>

            {/* الكارت الثالث */}
            <motion.div 
              variants={floatVariants} 
              animate="animate"
              style={{ animationDelay: "-1s" }}
              className="absolute right-12 bottom-0 w-56 bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 z-10"
            >
               <div className="flex items-end gap-2 h-16 mb-4">
                  <div className="w-full bg-white/5 h-1/3 rounded-t-sm" />
                  <div className="w-full bg-blue-500/20 h-2/3 rounded-t-sm" />
                  <div className="w-full bg-blue-500 h-full rounded-t-sm shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
               </div>
              <h3 className="text-white font-bold">متابعة الأداء</h3>
              <p className="text-sm text-blue-400 mt-1 font-mono tracking-wider">+120% نمو</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}