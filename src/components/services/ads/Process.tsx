"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Target, LayoutDashboard, Zap, Activity, ArrowDown } from "lucide-react";

const steps = [
    {
        title: "بنفهم البيزنس بتاعك كويس",
        desc: "بنحلل أرقامك الحالية ونقاط القوة اللي هنبني عليها الاستراتيجية.",
        icon: Search
    },
    {
        title: "بنحدد العميل المثالي",
        desc: "مش بنستهدف الكل؛ بنوصل للي مستعد يدفع فعلاً مقابل خدمتك.",
        icon: Target
    },
    {
        title: "بنبني الحملة المتكاملة",
        desc: "من الـ Copywriting للتصاميم، بنبني سيستم إعلاني يقفل البيعة.",
        icon: LayoutDashboard
    },
    {
        title: "بنشغل ونحسّن يوميًا",
        desc: "عينينا على الأرقام 24/7، بنعدل ونطور عشان مليم واحد ما يضيعش.",
        icon: Zap
    },
];

export default function NeuralProcessEnhanced() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const pathHeight = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 20,
    });

    return (
        <section ref={containerRef} className="relative py-10 md:py-24 border-t border-white/10 overflow-hidden" dir="rtl">

            {/* 1. السكشن هيدر (The Hook) */}
            <div className="max-w-7xl mx-auto px-6 mb-18 md:mb-32 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.03)]"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                    <span className="text-[10px] md:text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                        Growth Logic
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-6xl lg:text-[75px] font-black text-white leading-[1.2] md:leading-[1.1] tracking-tighter mb-8"
                >
                    إحنا مش بنجرب <br />
                    إحنا بنطبق <span className="inline-block px-3 md:px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-xl md:rounded-2xl transform -rotate-1 shadow-[0_0_20px_rgba(37,99,235,0.3)]">منهجية نمو</span> ثابتة.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-xl text-neutral-300 font-medium max-w-2xl mx-auto leading-relaxed bg-white/[0.02] backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                >
                    بعيداً عن العشوائية، دي الخطوات اللي بنحول بيها ميزانيتك الإعلانية لنتائج ملموسة في حسابك البنكي.
                </motion.p>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative">

                {/* الخط المركزي النيون - تم ضبطه ليعمل في الموبايل والديسكتوب في المنتصف */}
                <div className="absolute left-1/2 md:right-1/2 top-0 w-[2px] h-full bg-white/[0.03] -translate-x-1/2 z-10">
                    <motion.div
                        style={{ scaleY: pathHeight, originY: 0 }}
                        className="w-full h-full bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.6)]"
                    />
                </div>

                {/* --------------------------------------------------------------------------- */}
                {/* شكل الديسكتوب (Desktop Layout) - كما هو بدون تغيير */}
                {/* --------------------------------------------------------------------------- */}
                <div className="hidden md:block space-y-48 relative z-20">
                    {steps.map((step, index) => (
                        <div key={index} className={`relative flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            
                            <div className="absolute right-1/2 translate-x-1/2 z-30">
                                <motion.div
                                    initial={{ scale: 0, rotate: 45 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    className="w-12 h-12 rounded-2xl bg-[#020617] border border-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.4)] flex items-center justify-center group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-blue-600/10 animate-pulse" />
                                    <step.icon size={18} className="text-blue-500 group-hover:scale-110 group-hover:text-white transition-all relative z-10" />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="flex-1 relative group"
                            >
                                <div className={`bg-white/[0.01] backdrop-blur-3xl border border-white/5 p-10 rounded-[2.5rem] transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <span className="text-xs font-black text-blue-500 mb-4 block tracking-[0.3em] uppercase opacity-70">STEP 0{index + 1}</span>
                                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter leading-tight">{step.title}</h3>
                                    <p className="text-neutral-400 text-xl font-bold leading-relaxed group-hover:text-neutral-300 transition-colors">{step.desc}</p>
                                </div>
                            </motion.div>
                            <div className="flex-1" />
                        </div>
                    ))}
                </div>

                {/* --------------------------------------------------------------------------- */}
                {/* شكل الموبايل (Mobile Layout) - نيون ورايق بمنتصف الكروت */}
                {/* --------------------------------------------------------------------------- */}
                <div className="md:hidden space-y-20 relative z-20">
                    {steps.map((step, index) => (
                        <div key={index} className="relative pt-12">
                            {/* أيقونة الخطوة فوق الخط النيون */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="w-10 h-10 rounded-xl bg-[#020617] border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)] flex items-center justify-center"
                                >
                                    <step.icon size={16} className="text-blue-500" />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] text-center shadow-2xl"
                            >
                                <span className="text-[10px] font-black text-blue-500 mb-2 block tracking-widest uppercase opacity-60">STEP 0{index + 1}</span>
                                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{step.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* === المتابعة الختامية === */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-15 md:mt-20 z-10 relative flex justify-center px-4"
                >
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full pointer-events-none" />

                    <div className="relative group w-full max-w-sm md:max-w-none flex justify-center">
                        <div className="relative border-l-2 border-l-blue-600 border-y border-r border-white/[0.03] px-6 md:px-8 py-4 md:py-5 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg shadow-2xl backdrop-blur-xl flex flex-col items-start gap-1 group-hover:border-white/10 transition-all duration-500 overflow-hidden">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                                </div>
                                <span className="text-blue-500 font-black text-[8px] md:text-[9px] tracking-[0.3em] uppercase whitespace-nowrap">Live Feed</span>
                            </div>
                            <h4 className="text-lg md:text-2xl font-black text-white tracking-tight whitespace-nowrap">
                                تابع النتائج <span className="text-blue-500 relative">أول بأول<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-blue-600/30" /></span>
                            </h4>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}