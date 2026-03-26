"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Map, Zap, LineChart, ArrowRight } from "lucide-react";

const steps = [
  { id: "01", title: "قعدة قهوة", subTitle: "Discovery", desc: "فهم عميق لأهدافك وتحدياتك هو أول خطوة لنجاح المشروع. بنسمعك كويس عشان نبدأ صح.", icon: Coffee, color: "#3b82f6" },
  { id: "02", title: "رسم الخطة", subTitle: "Strategy", desc: "تحويل الأفكار لخريطة طريق واضحة بأحدث التكنولوجيا. بنرسم المسار اللي هيوصلنا لهدفك.", icon: Map, color: "#6366f1" },
  { id: "03", title: "مرحلة التنفيذ", subTitle: "Execution", desc: "بناء منتجك بأعلى جودة واهتمام بأدق التفاصيل التقنية. الكود عندنا فن مش مجرد كتابة.", icon: Zap, color: "#8b5cf6" },
  { id: "04", title: "المتابعة والنتائج", subTitle: "Optimization", desc: "تحليل مستمر وتطوير لضمان بقاء مشروعك في القمة. رحلتنا مابتنتهيش عند التسليم.", icon: LineChart, color: "#10b981" }
];

const AUTO_PLAY_DURATION = 5000;

export default function CinematicAutoProcess() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    let startTime = performance.now();
    
    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const currentProgress = Math.min((elapsed / AUTO_PLAY_DURATION) * 100, 100);
      
      setProgress(currentProgress);

      if (elapsed >= AUTO_PLAY_DURATION) {
        setActive((prev) => (prev + 1) % steps.length);
        setProgress(0);
        startTime = performance.now();
      }
      
      requestRef.current = requestAnimationFrame(updateProgress);
    };

    requestRef.current = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(requestRef.current);
  }, [active]);

  const handleStepClick = (index) => {
    setActive(index);
    setProgress(0);
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden flex flex-col justify-center py-10 border-t border-white/5" dir="rtl">
      
      {/* Background Large Number */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        >
          <span className="text-[70vw] lg:text-[55vw] font-black italic" style={{ color: steps[active].color }}>
            {steps[active].id}
          </span>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* استخدمت grid-flow-dense و order للتحكم في الترتيب */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-32 items-center">
          
          {/* 1. العنوان (أول حاجة في الموبايل والديسكتوب) */}
          <div className="order-1 lg:col-start-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-3 md:gap-4 text-center lg:text-right"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 text-blue-500 font-bold tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs uppercase">
                <span className="w-8 md:w-12 h-[2px] bg-blue-500" />
                Our Workflow
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
                 إزاي بنحول <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-500 italic">فكرتك لواقع؟</span>
              </h2>
            </motion.div>
          </div>

          {/* 2. الأيقونة (تاني حاجة في الموبايل - وفي الديسكتوب العمود التاني) */}
          <div className="order-2 lg:order-2 lg:row-span-2 flex justify-center items-center">
            <div className="relative group w-full flex justify-center">
              <div 
                className="absolute inset-0 blur-[80px] md:blur-[120px] rounded-full transition-all duration-1000 opacity-20 group-hover:opacity-40"
                style={{ backgroundColor: steps[active].color }}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 1.1, opacity: 0, rotateY: -20 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] lg:rounded-[5rem] flex items-center justify-center shadow-2xl overflow-hidden"
                >
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    {(() => {
                      const Icon = steps[active].icon;
                      return (
                        <Icon 
                          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[180px] lg:h-[180px] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" 
                          style={{ color: steps[active].color }} 
                        />
                      );
                    })()}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 3. الوصف والـ Stepper (تالت حاجة في الموبايل - وتحت العنوان في الديسكتوب) */}
          <div className="order-3 lg:order-3 lg:col-start-1 space-y-8 md:space-y-12">
            <div className="pt-6 md:pt-10 space-y-4 md:space-y-5 border-t border-white/10 text-center lg:text-right">
              <motion.span 
                key={`sub-${active}`}
                className="text-[10px] md:text-sm font-black tracking-[0.3em] md:tracking-[0.4em] uppercase block"
                style={{ color: steps[active].color }}
              >
                STEP {steps[active].id} — {steps[active].subTitle}
              </motion.span>
              
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`title-${active}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-2xl md:text-4xl lg:text-6xl font-black text-white"
                >
                  {steps[active].title}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-slate-400 text-sm md:text-lg lg:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
                >
                  {steps[active].desc}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Stepper Navigation */}
            <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto lg:mx-0">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className="group flex flex-col gap-2 md:gap-3 text-right focus:outline-none"
                >
                  <div className="h-1 md:h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    {active === index ? (
                      <motion.div
                        className="h-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        style={{ width: `${progress}%`, backgroundColor: step.color }}
                      />
                    ) : active > index ? (
                      <div className="h-full w-full opacity-40" style={{ backgroundColor: step.color }} />
                    ) : null}
                  </div>
                  <span className={`text-[8px] md:text-[10px] font-black uppercase text-center lg:text-right transition-all ${active === index ? "text-white" : "text-slate-600 hover:text-slate-400"}`}>
                    {step.title.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Ambient Blobs */}
      <div className="absolute top-[-5%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}