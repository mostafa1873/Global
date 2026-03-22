"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    /* أضفنا pt-20 و md:pt-24 عشان نزق المحتوى بعيد عن الـ Navbar المتركز فوق */
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617] pt-32 md:pt-46 pb-12 md:pb-6" dir="rtl">

      {/* 1. طبقة الإضاءة التفاعلية */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-nexus-blue/20 blur-[80px] md:blur-[130px] rounded-full pointer-events-none will-change-transform"
      />

      {/* 2. الـ Grid الخفي */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>

      <div className="relative py-16 md:py-26 z-10 w-full px-5 md:px-6 flex flex-col items-center">

        {/* عنوان مفرغ خلفي */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        >
          <h1 className="text-[35vw] md:text-[25vw] font-black text-white leading-none border-text tracking-tighter">
            NEXUS
          </h1>
        </motion.div>

        {/* المحتوى الرئيسي */}
        <div className="text-center w-full max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <span className="text-nexus-blue font-mono tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase bg-white/[0.03] px-5 py-2 rounded-full border border-white/10 backdrop-blur-md inline-block">
              GLOBAL NEXUS • CREATIVE
            </span>
          </motion.div>

          {/* العنوان الرئيسي */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.8rem] sm:text-6xl md:text-[7.5rem] font-black text-white leading-[1.1] md:leading-[1] mb-8 md:mb-12 tracking-tight"
          >
            حلقة الوصل<br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-white via-nexus-blue to-white py-2">
              بينك وبين عملائك
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 md:bottom-4 left-0 h-[1px] md:h-[2px] bg-nexus-blue/50 -z-10"
              />
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl mx-auto space-y-10 md:space-y-16"
          >
            <p className="text-nexus-gray/90 text-[1.1rem] sm:text-lg md:text-2xl font-light leading-relaxed tracking-wide">
              في <span className="text-white font-medium italic">GLOBAL NEXUS</span> مش بس بنعملك موقع أو حملة إعلانية؛ إحنا بنصمم "تجربة" تفرق في عملك وتخليك الاختيار الأول لعملائك.
            </p>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 md:gap-10 pt-2 md:pt-6 mb-12 md:mb-20">
              <button className="group relative px-8 md:px-14 py-5 md:py-6 bg-white text-black text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-black transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-[0.98] overflow-hidden">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">ابدأ الرحلة</span>
                <div className="absolute inset-0 bg-nexus-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
              </button>

              <button className="flex items-center justify-center gap-4 md:gap-6 text-white group relative py-4 px-2">
                <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover:text-nexus-blue transition-colors">مشاهدة أعمالنا</span>
                <div className="flex flex-col gap-1.5 overflow-hidden w-8 md:w-10">
                  <span className="w-full h-[1px] md:h-[2px] bg-nexus-blue group-hover:translate-x-full transition-transform duration-500"></span>
                  <span className="w-2/3 h-[1px] md:h-[2px] bg-white group-hover:w-full transition-all duration-500"></span>
                </div>
              </button>
            </div>

          </motion.div>
        </div>
      </div>

      {/* الإطار الجانبي الفاخر */}
      <div className="absolute inset-4 md:inset-10 border border-white/5 pointer-events-none rounded-[2rem] md:rounded-[2.5rem]"></div>

      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }
        @media (min-width: 768px) {
          .border-text {
            -webkit-text-stroke: 1px rgba(255,255,255,0.6);
          }
        }
      `}</style>
      
    </section>
  );
}