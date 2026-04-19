"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        num: "01",
        title: "الغوص في التفاصيل",
        desc: "مش بنبدأ شغل قبل ما نفهم أبعاد البيزنس بتاعك، طموحاتك، والمشاكل اللي بتواجه جمهورك.",
    },
    {
        num: "02",
        title: "تشريح السوق",
        desc: "دراسة عميقة للمنافسين وتحليل الفجوات عشان نضمن لك مكان في الصدارة مش مجرد وجود.",
    },
    {
        num: "03",
        title: "هندسة الأفكار",
        desc: "هنا بنحول كل البيانات لقصة براند ملهمة ومفهوم إبداعي يلمس مشاعر الناس.",
    },
    {
        num: "04",
        title: "صناعة الهوية",
        desc: "بنبني النظام البصري (ألوان، خطوط، شعار) اللي هيعبر عن قوة مشروعك ويعيش سنين.",
    },
];

export default function ParallaxProcess() {
    return (
        <section className="py-12 border-t border-white/5 overflow-hidden" dir="rtl">
            <div className="max-w-7xl mx-auto px-6">

                {/* الهيدر */}
                <div className="mb-12 flex flex-col items-center md:items-start gap-6 text-center md:text-right">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                        <div className="w-12 h-[1px] bg-white/10" />
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em]">
                            How It Works
                        </span>
                    </div>

                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
                            منهجية <span className="text-blue-500 italic">النمو الذكي.</span>
                        </h2>
                        <p className="text-neutral-500 text-base md:text-lg font-medium leading-relaxed">
                            نحول الرؤية الطموحة إلى واقع رقمي ملموس عبر خطوات هندسية دقيقة.
                        </p>
                    </div>
                </div>

                {/* المحتوى الفني بدون صور */}
                <div className="space-y-5 md:space-y-20">
                    {steps.map((step, i) => (
                        <ProcessItem key={i} step={step} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function ProcessItem({ step, index }: { step: any, index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yNumber = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    return (
        <div ref={ref} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12`}>

            {/* الجزء الجمالي (الرقم الضخم المفرغ) */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative">
                <motion.span
                    className="text-[150px] md:text-[280px] font-black leading-none select-none italic"
                    style={{
                        WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                        color: 'transparent',
                        y: yNumber
                    } as any} // استخدام as any هنا بيحل مشكلة تعريف الـ WebkitTextStroke في TypeScript
                >
                    {step.num}
                </motion.span>

                {/* نقطة تركيز ضوئية خلف الرقم */}
                <div className="absolute w-40 h-40 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
            </div>

            {/* الجزء النصي */}
            <motion.div
                style={{ opacity }}
                className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-start relative z-10"
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-[1px] bg-blue-600" />
                    <span className="text-blue-500 font-mono text-sm md:text-base tracking-[0.2em] uppercase">Phase {step.num}</span>
                </div>

                <h3 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                    {step.title}
                </h3>

                <p className="text-neutral-400 text-lg md:text-2xl font-medium leading-relaxed max-w-lg">
                    {step.desc}
                </p>

                {/* عنصر زخرفي بسيط للجوانب */}
                <div className="mt-12 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((dot) => (
                        <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot === 1 ? 'bg-blue-600' : 'bg-white/10'}`} />
                    ))}
                </div>
            </motion.div>

        </div>
    );
}