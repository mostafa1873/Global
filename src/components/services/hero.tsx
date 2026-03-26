"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, ShieldCheck, Zap, BarChart3, ChevronLeft, Code2, Megaphone, Palette, Share2 } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function ServicesHero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.1 
      } 
    },
  };

  // حل مشكلة النوع هنا بإضافة "as const" أو تعريف النوع يدوياً
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // تم التأكد من توافقها مع TypeScript
      } 
    },
  };

  const scrollToServices = () => {
    if (typeof window !== "undefined") {
      document.getElementById("services-list")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-24" 
      dir="rtl"
    >
      <div className="container mx-auto px-6 lg:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-right order-2 lg:order-1"
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-300">Global Nexus Services</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white leading-[1.1] tracking-tight mb-6">
              بنكبر بيزنس غيرنا.<br />
              عشان نكبر مع <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-400 italic">بعض.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-xl text-slate-400 text-base md:text-lg lg:text-xl leading-relaxed mb-10 font-medium">
              حلول تسويقية وتكنولوجية متكاملة هدفها واحد: إن شغلك يوصل <span className="text-white font-bold border-b-2 border-blue-500/50 pb-1">للعميل الصح</span> ويحقق أرقام حقيقية.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="relative group overflow-hidden px-10 py-4 bg-white text-black rounded-full font-bold text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 flex items-center justify-center gap-2">
                <span>ابدأ مشروعك دلوقتي</span>
                <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </Link>

              <Link href="/portfolio" className="px-10 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold text-center transition-all duration-300 hover:bg-white/5 hover:border-white/40 backdrop-blur-sm active:scale-95">
                شوف سابقة أعمالنا
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-40 grayscale group-hover:grayscale-0">
               <div className="flex items-center gap-2 text-white text-sm font-bold"><ShieldCheck size={16} className="text-blue-500"/> موثوقية</div>
               <div className="flex items-center gap-2 text-white text-sm font-bold"><Zap size={16} className="text-blue-500"/> سرعة</div>
               <div className="flex items-center gap-2 text-white text-sm font-bold"><BarChart3 size={16} className="text-blue-500"/> نتائج</div>
            </motion.div>
          </motion.div>

          {/* الجانب الأيسر - Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative items-center justify-center p-4 lg:p-10 hidden md:flex lg:order-2"
          >
            <div className="relative w-full max-w-[420px] bg-[#ffffff03] border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-8 shadow-2xl">
              <div className="space-y-6 md:space-y-8 relative z-10">
                <div className="flex items-center justify-between font-bold">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                      <BarChart3 size={20} />
                    </div>
                    <div>
                      <p className="text-white text-lg leading-none">+120%</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Growth ROI</p>
                    </div>
                  </div>
                  <Sparkles className="text-blue-500/50" size={20} />
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { label: "برمجة المواقع", icon: Code2, color: "text-emerald-400", bg: "bg-emerald-500/5" },
                    { label: "إدارة المنصات", icon: Share2, color: "text-blue-400", bg: "bg-blue-500/5" },
                    { label: "إعلانات ممولة", icon: Megaphone, color: "text-indigo-400", bg: "bg-indigo-500/5" },
                    { label: "هوية بصرية", icon: Palette, color: "text-purple-400", bg: "bg-purple-500/5" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                      className={`p-4 rounded-2xl ${item.bg} border border-white/5 flex flex-col items-center gap-3 text-center transition-colors`}
                    >
                      <item.icon size={24} className={item.color} />
                      <span className="text-white font-bold text-[11px] md:text-[12px]">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[60px] rounded-full" />
            </div>
            <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-[1.1] animate-[spin_40s_linear_infinite] hidden md:block" />
            <div className="absolute inset-0 border-[1px] border-blue-500/10 rounded-full scale-[1.2] animate-[spin_30s_linear_infinite_reverse] hidden md:block" />
          </motion.div>
        </div>
      </div>

      <motion.button 
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12 lg:mt-0 flex flex-col items-center gap-3 group z-10"
      >
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">اكتشف خدماتنا</span>
        <div className="w-6 h-10 rounded-full border border-white/20 p-1 flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-blue-500 rounded-full"
          />
        </div>
      </motion.button>
    </section>
  );
}