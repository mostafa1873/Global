"use client";

import { motion } from "framer-motion";
import { Target, PenTool, Palette, Type, BookOpen, ChevronLeft, AlertCircle } from "lucide-react";

export default function StructuralBrandingSystem() {
  const problemPoints = [
    "شكلك قدام الناس مش بيعبر عن شغلك؟",
    "لوجو عادي… وألوان ملهاش علاقة ببعض؟",
    "الناس بتشوفك بس مش بتفتكرك؟"
  ];

  const services = [
    { icon: <Target size={20} />, title: "استراتيجية براند واضحة" },
    { icon: <PenTool size={20} />, title: "لوجو احترافي" },
    { icon: <Palette size={20} />, title: "نظام ألوان متكامل" },
    { icon: <Type size={20} />, title: "خطوط مناسبة لهويتك" },
    { icon: <BookOpen size={20} />, title: "Brand Guidelines جاهزة" },
  ];

  // أنيميشن ظهور العناصر
  const fader = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  };

  return (
    // الخلفية هنا عبارة عن درجات الأزرق النيلي والداكن جداً (مش أسود) مع تموجات Aurora
    <div className="bg-[#0a163a] text-[#f8fafc] min-h-screen font-sans selection:bg-blue-500/30 relative overflow-hidden" dir="rtl">
      
      {/* الـ Aurora Effects في الخلفية بيدي شكل "رايق" وغير تقليدي */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-[#020617]/40 blur-[150px] rounded-full" />
        <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-blue-800/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        
        {/* --- 1. المشكلة (Section Header & Floating List) --- */}
        <section className="mb-48 text-center lg:text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div {...fader} className="lg:col-span-6">
              <span className="text-blue-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">Process_01 // Insight</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
                المشكلة مش <br /> في شغلك… <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-white italic">المشكلة في البراند</span>
              </h2>
            </motion.div>

            {/* عرض المشاكل كقائمة زجاجية طائرة بستايل "رايق" */}
            <div className="lg:col-span-6 space-y-4">
              {problemPoints.map((point, i) => (
                <motion.div 
                  key={i}
                  {...fader}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-5 p-7 bg-white/[0.03] border border-white/[0.08] rounded-3xl backdrop-blur-xl group hover:border-red-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <AlertCircle size={20} className="text-red-500" />
                  </div>
                  <p className="text-xl md:text-2xl text-neutral-300 font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 2. الحل (بساطة وترتيب عمودي زجاجي) --- */}
        <section className="relative">
          <div className="mb-20 text-center">
            <motion.div {...fader} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-[10px] font-mono tracking-[0.3em] uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Structural Branding System // الحل
            </motion.div>
            <motion.h3 {...fader} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black tracking-tighter">
              إحنا بنبني الشخصية البصرية
            </motion.h3>
          </div>

          {/* ترتيب الخدمات كبلوكات زجاجية متداخلة غير تقليدية */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            {/* بلوك الاستراتيجية (الأساس) - واخد مساحة أوسع */}
            <motion.div 
              {...fader} 
              className="lg:col-span-3 p-12 bg-white/[0.04] border border-white/[0.08] rounded-[2.5rem] backdrop-blur-2xl group hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-blue-500 group-hover:opacity-[0.07] transition-opacity duration-500">
                <Target size={220} />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <Target className="text-blue-400 mb-8" size={36} />
                  <h4 className="text-3xl font-black mb-4 group-hover:text-white transition-colors">{services[0].title}</h4>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-md">بنبني أساس قوي لبراندك بيحدد مكانه في السوق وعلاقتك بالجمهور بشكل احترافي.</p>
              </div>
            </motion.div>

            {/* بلوك اللوجو ونظام الألوان (جنب بعض) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <motion.div {...fader} transition={{ delay: 0.1 }} className="p-8 bg-[#0a163a] border border-white/[0.08] rounded-[2.5rem] flex items-center gap-6 group hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1">
                    <div className="w-16 h-16 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <PenTool className="text-blue-400" size={28} />
                    </div>
                    <h4 className="text-2xl font-bold">{services[1].title}</h4>
                </motion.div>

                <motion.div {...fader} transition={{ delay: 0.2 }} className="p-8 bg-white/[0.04] border border-white/[0.08] rounded-[2.5rem] backdrop-blur-2xl group hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1">
                    <Palette className="text-blue-400 mb-6" size={28} />
                    <h4 className="text-2xl font-bold">{services[2].title}</h4>
                </motion.div>
            </div>

            {/* بلوك الخطوط والـ Guidelines (جنب بعض في صف جديد) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                <motion.div {...fader} transition={{ delay: 0.3 }} className="p-8 bg-white/[0.04] border border-white/[0.08] rounded-[2.5rem] backdrop-blur-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all duration-500">
                    <div className="flex items-center gap-6">
                        <Type className="text-blue-400" size={28} />
                        <h4 className="text-xl font-bold">{services[3].title}</h4>
                    </div>
                    <ChevronLeft className="text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-[-5px] transition-all" />
                </motion.div>
                
                <motion.div {...fader} transition={{ delay: 0.4 }} className="p-8 bg-white/[0.04] border border-white/[0.08] rounded-[2.5rem] backdrop-blur-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all duration-500">
                    <div className="flex items-center gap-6">
                        <BookOpen className="text-blue-400" size={28} />
                        <h4 className="text-xl font-bold">{services[4].title}</h4>
                    </div>
                    <ChevronLeft className="text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-[-5px] transition-all" />
                </motion.div>
            </div>

          </div>
        </section>

        {/* --- 3. الهدف النهائي (CTA نظيف وبسيط) --- */}
        <section className="mt-48 text-center relative">
          <motion.div {...fader} className="p-16 bg-white/[0.03] border border-white/[0.08] rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
                <p className="text-blue-400 text-[10px] mb-6 uppercase tracking-[0.4em] font-mono group-hover:text-white/80 transition-colors">Visual Transformation // الهدف</p>
                <h4 className="text-4xl md:text-6xl font-black mb-16 tracking-tight leading-[1.1] max-w-3xl mx-auto group-hover:text-white transition-colors">
                  تبقى مميز… <br /> وسهل يتعرف عليك <br className="hidden md:block" /> في ثواني وسط أي حد
                </h4>
                
                <button className="flex items-center gap-4 px-12 py-6 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
                    ابدأ براندك دلوقتي
                    <ChevronLeft size={24} className="group-hover:-translate-x-2 transition-transform duration-300" />
                </button>
            </div>
          </motion.div>
        </section>

      </div>

      {/* الـ Noise اللي بيفرق في الـ UI النضيف */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
    </div>
  );
}