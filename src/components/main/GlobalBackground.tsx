"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function GlobalBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - (typeof window !== "undefined" ? window.innerWidth / 2 : 0));
      mouseY.set(e.clientY - (typeof window !== "undefined" ? window.innerHeight / 2 : 0));
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#020617] overflow-hidden pointer-events-none">
      
      {/* 1. طبقة الإضاءة التفاعلية (نفس ألوان الـ Hero) */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-blue-600/15 blur-[100px] md:blur-[150px] rounded-full will-change-transform"
      />

      {/* 2. الـ Grainy Noise (التأثير الحبيبي اللي في الـ Hero) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.18] brightness-100 contrast-150"></div>

      {/* 3. الـ Grid الخفي الموحد لكل الصفحات */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 4. الإطار الجانبي الفاخر (ليظهر في كل الصفحات كـ Frame) */}
    </div>
  );
}