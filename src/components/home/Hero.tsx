"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const parallaxX = useTransform(springX, (value) => value * -0.15);
  const parallaxY = useTransform(springY, (value) => value * -0.15);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden py-10 md:py-10" dir="rtl">

      {/* المحتوى الرئيسي للهيرو */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col items-center justify-center gap-5 md:gap-12 mb-0 pt-15 md:pt-25">

        {/* كلمة NEXUS الخلفية */}
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none z-0"
        >
          <h1 className="text-[35vw] md:text-[25vw] font-black text-white leading-none tracking-[0.05em] uppercase">
            NEXUS
          </h1>
        </motion.div>

        {/* العنوان والتاج */}
        <div className="w-full space-y-4 md:space-y-8 mb-0 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-nexus-blue font-mono tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase bg-white/[0.03] px-6 py-2 rounded-full border border-white/10 backdrop-blur-md inline-block">
              GLOBAL NEXUS • CREATIVE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.3rem] sm:text-6xl md:text-[7rem] font-black text-white leading-tight md:leading-[0.95] tracking-tighter"
          >
            Where the <br />
            <span className="block md:inline text-transparent bg-clip-text [-webkit-background-clip:text] bg-gradient-to-l from-white via-nexus-blue to-white pb-2">
              real value is created
            </span>
          </motion.h2>
        </div>

        {/* النص والزراير */}
        <div className="w-full max-w-3xl flex flex-col items-center space-y-10 md:space-y-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-nexus-gray/90 text-[1.1rem] md:text-2xl font-light leading-relaxed text-center border-y-2 py-4 border-nexus-blue/40 px-4 md:px-8">
            في <span className="text-white font-medium italic">GLOBAL NEXUS</span> نبتكر أنظمة نمو رقمية متكاملة تضمن لأعمالك الاستمرارية وتحقيق نتائج ملموسة تعكس حجم طموحك.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 w-full pt-0 md:pt-8 px-4 sm:px-0">
            {/* ... أزرار التحكم كما هي ... */}
            <button className="group relative w-full sm:w-auto py-3 px-8 sm:px-12 flex items-center justify-center transition-all duration-300 bg-white/5 md:bg-transparent border border-white/10 sm:border-none rounded-xl sm:rounded-none">
              <span className="relative z-10 text-white font-black text-[13px] sm:text-sm uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">ابدأ الرحلة النمو</span>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-nexus-blue group-hover:w-full group-hover:h-full transition-all duration-500 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-nexus-blue group-hover:w-full group-hover:h-full transition-all duration-500 rounded-bl-xl"></div>
              <div className="absolute inset-0 bg-nexus-blue scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 rounded-xl"></div>
            </button>

            <button className="group relative flex items-center justify-between sm:justify-center w-full sm:w-auto gap-4 py-3 px-6 sm:px-4 border border-white/5 sm:border-none rounded-xl">
              <div className="flex flex-col items-end gap-1">
                <span className="text-white font-black text-[13px] sm:text-sm uppercase tracking-[0.2em] group-hover:text-nexus-blue transition-colors duration-300">استعرض سابقة أعمالنا</span>
                <div className="w-full h-[1px] bg-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-nexus-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </div>
              <div className="relative w-10 h-10 flex items-center justify-center border border-white/10 rounded-xl group-hover:bg-nexus-blue group-hover:border-nexus-blue transition-all duration-500 transform group-hover:-rotate-45">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white rotate-180 transition-transform duration-500 group-hover:-translate-x-1"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}