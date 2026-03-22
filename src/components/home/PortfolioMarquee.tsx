"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // تم تغيير الأيقونة هنا

import img1 from "../../assets/(0).jpg";
import img2 from "../../assets/(15).jpg";
import img3 from "../../assets/11.jpg";
import img4 from "../../assets/12.jpg";
import img5 from "../../assets/(17).jpg";

const projects = [img1, img2, img3, img4, img5];

export default function KineticColumnsGallery() {
  const [index, setIndex] = useState(0);

  // ✅ تحسين: تثبيت البيانات في الذاكرة
  const projectList = useMemo(() => projects, []);

  // ✅ تحسين: تحديد لو موبايل
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projectList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projectList.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center" dir="rtl">

      {/* الخلفية: أعمدة متحركة بسرعات مختلفة */}
      <div className="absolute inset-0 flex gap-2 p-2 opacity-30 pointer-events-none">
        {[0, 1, 2, 3].map((col) => (
          <div key={col} className="relative flex-1 h-[120%] -top-[10%] overflow-hidden rounded-xl">
            <motion.div
              animate={{ y: col % 2 === 0 ? [0, -100, 0] : [-100, 0, -100] }}
              transition={{
                duration: isMobile ? 35 : 25, // ✅ أبطأ على الموبايل = أخف
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ willChange: "transform" }} // ✅ GPU optimization
              className="flex flex-col gap-2 h-full"
            >
              {[...projectList, ...projectList.slice(0, 2)].map((img, i) => (
                <div key={i} className="relative w-full h-1/3 flex-shrink-0">
                  <Image
                    src={img}
                    alt="bg"
                    fill
                    loading="lazy" // ✅ lazy load
                    quality={40} // ✅ تقليل الجودة
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover grayscale"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* المحتوى المركزي الفخم */}
      <div className="relative z-10 flex flex-col items-center">

        {/* البرواز المركزي */}
        <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] p-4 bg-white/5 backdrop-blur-xl md:backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotateY: -90 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image
                src={projectList[index]}
                alt="Project"
                fill
                className="object-cover"
                priority
                quality={75} // ✅ تقليل بسيط بدون فقدان جودة ملحوظ
              />

              {/* Overlay النصي داخل البرواز */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-right">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-white text-3xl font-black mb-2"
                >
                  NEXUS ELITE
                </motion.h3>
                <p className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase">Architecture & Design</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🔹 التعديل النهائي للزرار: السهم باصص شمال (اتجاه التقدم في العربي) 🔹 */}
        <div className="mt-12 flex justify-center w-full px-6">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-3 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300"
            >
              {/* اللمعة (Shine) */}
              <motion.div 
                initial={{ left: "-100%" }}
                whileHover={{ left: "100%" }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[25deg]"
              />

              <span className="relative z-10 flex items-center gap-3 text-white font-bold tracking-tight text-sm md:text-base">
                استكشف المشاريع
                {/* تم تعديل السهم لـ ArrowLeft وحركته لـ -translate-x-1 */}
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center transition-transform group-hover:-translate-x-1">
                   <ArrowLeft size={16} className="text-white" />
                </div>
              </span>

              {/* توهج خفيف عند الهوفر */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>
        </div>

      </div>

      {/* لمسة نهائية: ترقيم عملاق خلف البرواز */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.05, scale: 1.5 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 1 }}
            className="text-[30vw] font-black text-white"
          >
            0{index + 1}
          </motion.span>
        </AnimatePresence>
      </div>
    </section>
  );
}