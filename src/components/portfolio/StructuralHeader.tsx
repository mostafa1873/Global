"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Target, Cpu, Zap, Star, Globe } from "lucide-react";
import Link from "next/link";

export default function UltraPremiumHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section
      className="relative min-h-screen w-full flex flex-col bg-transparent overflow-hidden px-6 lg:px-16"
      dir="rtl"
    >
      {/* 1. مساحة الناف بار */}
      <div className="h-24 lg:h-32 w-full shrink-0" />

      {/* 2. المحتوى الرئيسي */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto relative flex flex-col justify-center py-5">

        {/* لمسات ضوئية خلفية خافتة */}
        <div className="absolute top-1/4 -right-20 w-[30vw] h-[30vw] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 -left-20 w-[20vw] h-[20vw] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* الجانب الأيمن: تيبوجرافي بـ مقاسات مظبوطة - Responsive Alignment */}
          <div className="lg:col-span-7 relative flex flex-col items-center lg:items-start text-center lg:text-right">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10 w-full flex flex-col items-center lg:items-start">
              {/* شارة علوية */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-10 bg-blue-600 hidden lg:block" />
                <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">Global Nexus Works</span>
              </div>

              {/* العنوان الرئيسي */}
              <h1 className="text-[10vw] lg:text-[85px] font-black text-white leading-[1.1] tracking-tighter mb-2">
                نجاحك هو <span className="text-blue-600 italic">المقياس</span>
              </h1>

              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                <h1 className="text-[10vw] lg:text-[85px] font-black text-white leading-[1.1] tracking-tighter">
                  الوحيد لشغلنا.
                </h1>
                {/* عنصر ديكوري */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="hidden xl:block text-white/5"
                >
                  <Globe size={60} strokeWidth={1} />
                </motion.div>
              </div>
            </motion.div>

            {/* إحصائية سريعة عائمة - Centered on Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 lg:mt-0 lg:absolute lg:-bottom-16 lg:right-0 flex items-center gap-4 bg-white/[0.02] border border-white/5 backdrop-blur-md px-5 py-3 rounded-full"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-[#050505] bg-blue-600 flex items-center justify-center">
                    <Star size={10} className="fill-white" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">Top Rated Agency 2026</span>
            </motion.div>
          </div>

          {/* الجانب الأيسر: بطاقة المعلومات (Ultra Glass) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative w-full">
            <motion.div
              initial={{ opacity: 0, x: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full lg:max-w-[420px] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl border border-white/10 rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-12 shadow-2xl relative group overflow-hidden flex flex-col items-center lg:items-start text-center lg:text-right"
            >
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 w-full flex flex-col items-center lg:items-start">
                <div className="flex gap-2 mb-6 justify-center lg:justify-start">
                  <Target size={18} className="text-blue-600" />
                  <Cpu size={18} className="text-white/20" />
                  <Zap size={18} className="text-white/20" />
                </div>

                <p className="text-neutral-400 text-lg lg:text-xl font-light leading-relaxed italic border-none lg:border-r-2 border-blue-600 lg:pr-6 mb-10">
                  "كل مشروع هنا وراه هدف، تنفيذ، ونتيجة حقيقية، جاهزة للمستقبل.
                  <span className="text-white block mt-4 font-bold not-italic">ساعدنا عملائنا يكبروا، مش بس يظهروا."</span>
                </p>

                {/* زرار الأكشن */}
                <Link href="/call" className="w-full">
                  <button className="group relative w-full flex items-center justify-between bg-white text-black h-16 px-6 rounded-2xl font-black text-xl transition-all duration-500 hover:bg-blue-600 hover:text-white overflow-hidden shadow-lg">
                    <span className="relative z-10 flex items-center gap-3">
                      ابدأ مشروعك
                    </span>
                    <div className="relative z-10 w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
                      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </button>
                </Link>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}