"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, 
  PenTool, 
  Palette, 
  Type, 
  BookOpen, 
  ChevronLeft,
  XCircle,
  AlertCircle,
  ZapOff
} from "lucide-react";
import { useState, useEffect } from "react";

export default function IntegratedBrandingSystem() {
  const [index, setIndex] = useState(0);

  const problems = [
    { title: "هوية عشوائية", icon: XCircle },
    { title: "رسالة مشتتة", icon: ZapOff },
    { title: "ضعف التأثير", icon: AlertCircle }
  ];

  const services = [
    { title: "Brand Strategy", icon: Target, desc: "تحديد رؤية البراند وموقعه الاستراتيجي في السوق." },
    { title: "Visual Identity", icon: PenTool, desc: "بناء لغة بصرية متكاملة تعبر عن قيم مشروعك." },
    { title: "Color Systems", icon: Palette, desc: "اختيار لوحة ألوان متزنة تضمن التميز والاحترافية." },
    { title: "Typography", icon: Type, desc: "نظام خطوط مدروس يجمع بين الوضوح وفخامة المظهر." },
    { title: "Brand Guide", icon: BookOpen, desc: "توثيق كامل للهوية لضمان استمرارية الجودة دائماً." },
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % services.length), 4500);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="py-10 md:py-10 border-t border-white/5" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* الهيدر والمشاكل - التعديل: items-center و text-center في الموبايل */}
        <div className="border-b border-white/5 pb-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center lg:items-end text-center lg:text-right">
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-10 h-[2px] bg-blue-600 mb-4" />
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-3">
                نظام بناء الهوية الذكي
              </h2>
              <p className="text-neutral-500 text-base max-w-sm font-medium">
                نحول الفوضى البصرية إلى نظم منظمة تضمن لعلامتك التجارية القوة والانتشار.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {problems.map((prob, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5">
                  <prob.icon size={12} className="text-red-500/60" />
                  <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider">{prob.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* جسم السكشن */}
        <div className="grid lg:grid-cols-12 gap-0 border-x border-white/5">
          
          {/* القائمة الجانبية - التعديل: التوسيط في الموبايل */}
          <div className="lg:col-span-4 border-l border-white/5 order-2 lg:order-1">
            {services.map((item, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-full flex items-center justify-center lg:justify-between p-6 border-b border-white/5 transition-all duration-300 group ${
                  index === i ? "bg-white/[0.03] text-white" : "text-neutral-600 hover:text-neutral-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-mono opacity-30">0{i + 1}</span>
                  <span className="text-sm font-bold tracking-tight uppercase">{item.title}</span>
                </div>
                <ChevronLeft 
                  size={14} 
                  className={`hidden lg:block transition-transform duration-300 ${index === i ? "text-blue-600 translate-x-0" : "opacity-0 translate-x-4"}`} 
                />
              </button>
            ))}
          </div>

          {/* العرض (Display) - التعديل: items-center و text-center في الموبايل */}
          <div className="lg:col-span-8 relative min-h-[320px] flex flex-col items-center lg:items-start justify-center p-8 md:p-12 overflow-hidden bg-gradient-to-br from-transparent to-white/[0.01] order-1 lg:order-2 text-center lg:text-right border-b lg:border-b-0 border-white/5">
            
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.04),transparent)] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="mb-6 inline-flex p-3 rounded-xl bg-blue-600/5 border border-blue-600/10">
                  {(() => {
                    const Icon = services[index].icon;
                    return <Icon className="text-blue-600 w-8 h-8" strokeWidth={1.5} />;
                  })()}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tighter">
                  {services[index].title}
                </h3>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-lg">
                  {services[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-white/5">
              <motion.div
                key={index}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
                className="h-full bg-blue-600/60"
              />
            </div>
          </div>

        </div>

        {/* الفوتر - التعديل: التوسيط في الموبايل */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[8px] font-black tracking-[0.5em] text-neutral-700 uppercase">Architecture of Identity</span>
          <div className="flex gap-3">
             <div className="w-1 h-1 rounded-full bg-blue-600/50" />
             <div className="w-1 h-1 rounded-full bg-white/5" />
          </div>
        </div>

      </div>
    </section>
  );
}