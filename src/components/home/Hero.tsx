"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

// استيراد صور البورتفوليو
import img1 from "../../assets/works/main-a.png";
import img2 from "../../assets/works/main-c.png";
import img3 from "../../assets/works/agro/main.png";
import img4 from "../../assets/works/dodo/main.png";
import img5 from "../../assets/works/elmaka/main.png";

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

  // منطق البورتفوليو (Bento Grid)
  const projects = [
    { src: img1, width: "w-[180px] md:w-[300px]", ratio: "aspect-[4/5]" },
    { src: img2, width: "w-[160px] md:w-[260px]", ratio: "aspect-square" },
    { src: img3, width: "w-[220px] md:w-[380px]", ratio: "aspect-video" },
    { src: img4, width: "w-[140px] md:w-[220px]", ratio: "aspect-[3/4]" },
    { src: img5, width: "w-[180px] md:w-[280px]", ratio: "aspect-square" },
  ];

  const row1 = useMemo(() => [...projects, ...projects], []);
  const reversedProjects = [...projects].reverse();
  const row2 = useMemo(() => [...reversedProjects, ...reversedProjects], []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden py-20 md:py-25" dir="rtl">

      {/* 1. طبقة الإضاءة التفاعلية */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-nexus-blue/20 blur-[80px] md:blur-[150px] rounded-full pointer-events-none will-change-transform z-0"
      />

      {/* 2. الـ Grid الخفي (Noise) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>



      {/* المحتوى الرئيسي للهيرو */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col items-center justify-center gap-12 mb-10 pt-5 md:pt-5">
        
              {/* 3. كلمة NEXUS */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none z-0"
      >
        <h1 className="text-[35vw] md:text-[25vw] font-black text-white leading-none tracking-[0.05em] uppercase">
          NEXUS
        </h1>
      </motion.div>

        {/* العنوان والتاج */}
        <div className="w-full space-y-6 md:space-y-8 mb-0 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-nexus-blue font-mono tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase bg-white/[0.03] px-6 py-2 rounded-full border border-white/10 backdrop-blur-md inline-block">
              GLOBAL NEXUS • CREATIVE
            </span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-[2.8rem] sm:text-6xl md:text-[8.5rem] font-black text-white leading-[1.1] md:leading-[0.95] tracking-tighter">
            حلقة الوصل<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-nexus-blue to-white">
              بينك وبين عملائك
            </span>
          </motion.h2>
        </div>

        {/* النص والزراير */}
        <div className="w-full max-w-3xl flex flex-col items-center space-y-10 md:space-y-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-nexus-gray/90 text-[1.1rem] md:text-2xl font-light leading-relaxed text-center border-y-2 py-4 border-nexus-blue/40 px-4 md:px-8">
            في <span className="text-white font-medium italic">GLOBAL NEXUS</span> مش بس بنعملك موقع أو حملة إعلانية؛ إحنا بنصمم "تجربة" تفرق في عملك وتخليك الاختيار الأول لعملائك.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 w-full pt-0 md:pt-8 px-4 sm:px-0">
            
            <button className="group relative w-full sm:w-auto py-4 px-8 sm:px-12 flex items-center justify-center transition-all duration-300 bg-white/5 md:bg-transparent border border-white/10 sm:border-none rounded-xl sm:rounded-none">
              <span className="relative z-10 text-white font-black text-[13px] sm:text-sm uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">ابدأ الرحلة</span>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-nexus-blue group-hover:w-full group-hover:h-full transition-all duration-500 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-nexus-blue group-hover:w-full group-hover:h-full transition-all duration-500 rounded-bl-xl"></div>
              <div className="absolute inset-0 bg-nexus-blue scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 rounded-xl"></div>
            </button>

            <button className="group relative flex items-center justify-between sm:justify-center w-full sm:w-auto gap-4 py-3 px-6 sm:px-4 border border-white/5 sm:border-none rounded-xl">
              <div className="flex flex-col items-end gap-1">
                <span className="text-white font-black text-[13px] sm:text-sm uppercase tracking-[0.2em] group-hover:text-nexus-blue transition-colors duration-300">مشاهدة أعمالنا</span>
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

      {/* 🔹 إضافة البورتفوليو المائل هنا (تحت المحتوى مباشرة) 🔹 */}
      <div className="w-full flex flex-col gap-6 md:gap-8 relative z-20" dir="ltr">
        {/* الصف العلوي */}
        <div className="flex w-full overflow-visible"> 
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-4 md:gap-6 pr-6">
            {row1.map((item, i) => (
              <div key={`r1-${i}`} className={`relative flex-shrink-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl group ${item.width} ${item.ratio}`}>
                <Image src={item.src} alt="project" fill className="object-cover " />
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* إطار ديكوري خفيف */}
      <div className="absolute inset-4 md:inset-8 border border-white/[0.03] pointer-events-none rounded-[2rem] md:rounded-[3rem] z-0"></div>

      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }
      `}</style>
    </section>
  );
}