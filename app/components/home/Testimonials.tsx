"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

// بيانات العملاء (تخيلية)
const testimonials = [
    {
        id: 1,
        name: "سارة الجابري",
        company: "رائدة أعمال - دبي",
        quote: "تجربة التعامل مع نيكسوس كانت استثنائية. لم نحصل فقط على تصميم بل على شريك استراتيجي فهم رؤيتنا وحولها إلى واقع رقمي مبهر.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "خالد الرميحي",
        company: "الرئيس التنفيذي - تيك سول",
        quote: "الفريق يتمتع بكفاءة عالمية. الحلول البرمجية التي قدموها قللت تكاليف التشغيل لدينا بنسبة 40% وحسنت تجربة المستخدم بشكل ملحوظ.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "ليلى حسن",
        company: "مديرة التسويق - جاليري",
        quote: "الهوية البصرية الجديدة التي صممتها نيكسوس جعلت علامتنا التجارية تتصدر المشهد. الإبداع والدقة في المواعيد هما عنوانهم.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // تنعيم حركة الماوس بالـ Dynamic Spring
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // تحويل حركة الماوس إلى دوران خفيف للكروت
    // const rotateX = useTransform(springY, [-window.innerHeight / 2, window.innerHeight / 2], [5, -5]);
    // const rotateY = useTransform(springX, [-window.innerWidth / 2, window.innerWidth / 2], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative py-10 bg-[#020617] overflow-hidden"
            dir="rtl"
        >

            {/* خلفية: الشبكة التقنية المضيئة */}
            <div className="absolute inset-0 opacity-20 brightness-75 pointer-events-none">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* تأثيرات النيون في الخلفية */}
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-black-600/50 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* رأس السكشن المطور */}
                <div className="max-w-4xl mx-auto text-center mb-15 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">شركاء الرحلة</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter"
                    >
                       أكثر من <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-white italic font-serif">مجرد رأي</span>
                    </motion.h2>

                    {/* كلمة خلفية ضخمة باهتة */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-white/[0.02] text-[12rem] md:text-[20rem] font-black -z-10 select-none whitespace-nowrap">
                        REVIEWS
                    </div>
                </div>

                {/* حاوية الكروت المغناطيسية */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-8">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={test.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: index === 1 ? 1.05 : 1 }}
                            transition={{ duration: 0.8 }}
                            className={`group relative flex-1 w-full max-w-sm md:max-w-md lg:max-w-[400px] min-h-[350px] md:min-h-[400px] rounded-[3rem] p-10 flex flex-col justify-between transition-all duration-300 backdrop-blur-3xl border ${index === 1 ? 'border-blue-500 bg-white/[0.03] z-20' : 'border-white/10 bg-white/5'} ${index === 1 ? 'shadow-[0_0_50px_rgba(59,130,246,0.3)]' : 'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'}`}
                        >

                            {/* تأثير نيون خلفي للكارت اللي في النص */}
                            {index === 1 && (
                                <div className="absolute inset-0 bg-blue-600/10 blur-3xl -z-10"></div>
                            )}

                            {/* الأيقونة والنص (Quote) */}
                            <div>
                                <motion.div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 ${index === 1 ? 'bg-blue-600 border-blue-500' : 'bg-white/5 border-white/10 group-hover:bg-white group-hover:text-black group-hover:border-white'}`}
                                >
                                    <Quote className="w-8 h-8" strokeWidth={1.5} />
                                </motion.div>

                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-10 group-hover:text-white transition-colors">
                                    “{test.quote}”
                                </p>
                            </div>

                            {/* بيانات العميل */}
                            <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500 transition-colors">
                                    <Image
                                        src={test.avatar}
                                        alt={test.name}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transición-colors">
                                        {test.name}
                                    </h4>
                                    <p className="text-blue-500/80 font-mono text-sm tracking-wide">
                                        {test.company}
                                    </p>
                                </div>
                            </div>

                            {/* خط نيون جانبي للكارت اللي في النص */}
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "80%" }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-blue-500 shadow-[0_0_10px_#2563eb]"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* ترقيم جانبي مودرن */}
                <div className="absolute bottom-10 right-10 flex flex-col items-center gap-3">
                    <span className="text-white font-black text-6xl">0{testimonials.length}</span>
                    <div className="w-10 h-1 bg-white/10"></div>
                    <span className="text-white/20 font-black text-2xl">0{testimonials.length}</span>
                </div>
            </div>

        </section>
    );
}