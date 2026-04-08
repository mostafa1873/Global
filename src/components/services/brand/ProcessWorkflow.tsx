"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        num: "01",
        title: "الغوص في التفاصيل",
        desc: "مش بنبدأ شغل قبل ما نفهم أبعاد البيزنس بتاعك، طموحاتك، والمشاكل اللي بتواجه جمهورك.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    },
    {
        num: "02",
        title: "تشريح السوق",
        desc: "دراسة عميقة للمنافسين وتحليل الفجوات عشان نضمن لك مكان في الصدارة مش مجرد وجود.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    },
    {
        num: "03",
        title: "هندسة الأفكار",
        desc: "هنا بنحول كل البيانات لقصة براند ملهمة ومفهوم إبداعي يلمس مشاعر الناس.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    },
    {
        num: "04",
        title: "صناعة الهوية",
        desc: "بنبني النظام البصري (ألوان، خطوط، شعار) اللي هيعبر عن قوة مشروعك ويعيش سنين.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    },
];

export default function ParallaxProcess() {
    return (
        <section className="py-10 border-t border-white/5 overflow-hidden" dir="rtl">
            <div className="max-w-7xl mx-auto px-6">

                {/* الهيدر: متظبط للموبايل (text-center في الموبايل) */}
                <div className="mb-20 flex flex-col items-center md:items-start gap-6 text-center md:text-right" dir="rtl">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                        <div className="w-12 h-[1px] bg-white/10" />
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em]">
                            How It Works
                        </span>
                    </div>

                    <div className="max-w-xl">
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                            منهجية <span className="text-blue-500">النمو الذكي.</span>
                        </h2>

                        <p className="text-neutral-500 text-sm md:text-base font-medium leading-relaxed">
                            نحول الرؤية الطموحة إلى واقع رقمي ملموس عبر خطوات هندسية دقيقة.
                        </p>
                    </div>
                </div>

                <div className="space-y-10 md:space-y-40">
                    {steps.map((step, i) => (
                        <ProcessItem key={i} step={step} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}

// تم إضافة تعريف الأنواع هنا لحل مشكلة الـ Build
function ProcessItem({ step, index }: { step: any, index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yImage = useTransform(scrollYProgress,  [0, -150]);
    const yText = useTransform(scrollYProgress,  [0, -150]);

    return (
        <div ref={ref} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}>

            {/* الرقم الخلفي: مخفي في الموبايل عشان الزحمة وبيظهر في الـ Desktop بس */}
            <span className="absolute -top-10 md:-top-20 -right-5 md:-right-10 text-[100px] md:text-[300px] font-black text-white/[0.03] pointer-events-none italic select-none">
                {step.num}
            </span>

            {/* الجزء البصري: شلنا الـ style في الموبايل عشان ميعملش جاب كبيرة */}
            <motion.div
                style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? yImage : 0 }}
                className="w-full md:w-1/2 aspect-square md:aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 relative group"
            >
                <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* الجزء النصي: text-center في الموبايل مع توسيط الخط الأزرق */}
            <motion.div
                style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? yText : 0 }}
                className="w-full md:w-1/2 z-10 text-center md:text-right flex flex-col items-center md:items-start"
            >
                <span className="text-blue-500 font-mono text-lg md:text-xl mb-4 block">Stage {step.num}</span>
                <h3 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight md:leading-none">
                    {step.title}
                </h3>
                <p className="text-neutral-400 text-lg md:text-2xl font-medium leading-relaxed max-w-md">
                    {step.desc}
                </p>

                <div className="mt-8 md:mt-10 h-[1px] w-20 bg-blue-600" />
            </motion.div>

        </div>
    );
}