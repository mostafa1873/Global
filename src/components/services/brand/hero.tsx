"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { MousePointer2, Layers, Zap, Palette, Component, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function UltraStudioHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // جعل الحركة ناعمة جداً (Spring Physics)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // التعديل هنا: إضافة النوع للـ e
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen text-white flex items-center justify-center overflow-hidden pt-24 pb-5 lg:py-24 px-6 md:px-12" dir="rtl">

      {/* الـ Grid هنا هو اللي بيتحكم في كل حاجة */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-2 lg:gap-x-20 items-center">
        
        {/* القسم الأيمن: النص - محجوز في الصف الأول */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-right order-1 lg:row-start-1 lg:col-start-1 lg:self-end"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.05)]">
            <div className="flex -space-x-2 space-x-reverse">
              <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-[#020617]" />
              <div className="w-5 h-5 rounded-full bg-blue-400 border-2 border-[#020617]" />
            </div>
            <span className="text-[9px] md:text-[10px] font-mono font-black tracking-widest text-blue-400 uppercase">Growth Identity System</span>
          </div>

          <h1 className="text-xl md:text-5xl text-neutral-500 font-medium mb-3 leading-tight">
            براندك مش مجرد لوجو
          </h1>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black leading-[1.2] lg:leading-[1.1] mb-6 lg:mb-8 text-white tracking-tighter">
            ده الانطباع الأول اللي <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-blue-600 to-blue-400">بيبيع قبل ما تتكلم</span>
          </h2>

          <p className="text-neutral-400 text-sm md:text-xl max-w-lg mb-4 font-light leading-relaxed mx-auto lg:mx-0 px-4 lg:px-0">
            بنبني لك هوية بصرية متكاملة تخلي الناس تفتكرك، وتثق فيك، وتشتري منك.
          </p>
        </motion.div>

        {/* القسم الأيسر: "معمل التصميم" - بياخد الصفين بالكامل عشان الزرار يعرف يتحرك براحته جنبه */}
        <div className="relative h-[350px] md:h-[550px] lg:h-[600px] flex items-center justify-center order-2 lg:order-none w-full scale-90 md:scale-100 lg:row-span-2 lg:col-start-2">
          
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-64 h-[18rem] md:w-80 md:h-96 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
            
            <div className="flex justify-between items-center">
              <Layers size={18} className="text-blue-500" />
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500/40" />
                <div className="w-2 h-2 rounded-full bg-blue-500/20" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-2.5 w-full bg-blue-500/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                />
              </div>
              <div className="h-2.5 w-4/6 bg-white/5 rounded-full" />
              <div className="aspect-square w-full border-2 border-dashed border-white/5 rounded-3xl flex items-center justify-center group-hover:border-blue-500/20 transition-all">
                <Component size={36} className="text-white/10 group-hover:text-blue-500/30 transition-all group-hover:scale-110" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 right-4 md:right-8 p-3.5 bg-[#0a0f1e] border border-blue-500/20 rounded-2xl backdrop-blur-xl z-30 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <Palette size={16} className="text-blue-400" />
            <div className="flex gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]" />
              <div className="w-3.5 h-3.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-12 left-4 md:left-8 p-4 bg-blue-600/10 border border-blue-500/30 rounded-3xl backdrop-blur-xl z-30 shadow-[0_0_40px_rgba(37,99,235,0.1)]"
          >
            <Zap size={20} className="text-blue-400 mb-2 fill-blue-400/20 mx-auto" />
            <div className="text-[8px] font-black text-blue-300 uppercase tracking-[0.2em] text-center">Active Logic</div>
          </motion.div>

          <motion.div 
            animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute z-40 pointer-events-none hidden md:block"
          >
            <MousePointer2 className="text-white fill-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]" size={22} />
            <div className="mr-6 mt-2 px-2.5 py-1 bg-blue-600 text-white text-[8px] font-black rounded-full border border-blue-400/30 uppercase">
              Growth_Node
            </div>
          </motion.div>
        </div>

        {/* الزرار: محجوز في الصف الثاني تحت النص مباشرة */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 order-3 lg:col-start-1 lg:row-start-2 lg:self-start lg:mt-4 px-6 lg:px-0">
          <Link href="/call">
          <button className="group relative px-10 py-4 lg:py-5 bg-white text-black rounded-2xl font-black text-base lg:text-lg transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-2 transition-colors group-hover:text-white">
                ابدأ براندك دلوقتي
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          </Link>
        </div>

      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}