"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    Globe,
    Palette,
    Megaphone,
    Smartphone,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const services = [
    {
        id: 1,
        title: "تطوير المواقع",
        desc: "نصمم ونبني مواقع ويب سريعة، متجاوبة، ومعاصرة تعكس هوية مشروعك. نستخدم أحدث التقنيات لنضمن لك أداءً مثالياً وتجربة مستخدم فريدة.",
        icon: <Globe className="w-10 h-10 md:w-12 md:h-12" />,
        color: "bg-gradient-to-br from-[#0A1128] via-[#001f3f] to-[#020617]",
        border: "border-blue-500/30",
        shadow: "shadow-blue-500/10",
        accent: "bg-blue-500"
    },
    {
        id: 2,
        title: "التصميم الإبداعي",
        desc: "هوية بصرية كاملة وتصاميم UI/UX تركز على تجربة المستخدم والجماليات. نحن لا نرسم فقط، نحن نبني لغة بصرية تواصلية بينك وبين عملائك.",
        icon: <Palette className="w-10 h-10 md:w-12 md:h-12" />,
        color: "bg-gradient-to-br from-[#0F0A1E] via-[#1a0b2e] to-[#020617]",
        border: "border-purple-500/30",
        shadow: "shadow-purple-500/10",
        accent: "bg-purple-500"
    },
    {
        id: 3,
        title: "التسويق الرقمي",
        desc: "حملات إعلانية ذكية تستهدف جمهورك الحقيقي وتزيد من مبيعاتك. نعتمد على استراتيجيات مدروسة في منصات التواصل الاجتماعي ومحركات البحث.",
        icon: <Megaphone className="w-10 h-10 md:w-12 md:h-12" />,
        color: "bg-gradient-to-br from-[#05161A] via-[#072a30] to-[#020617]",
        border: "border-cyan-500/30",
        shadow: "shadow-cyan-500/10",
        accent: "bg-cyan-500"
    },
    {
        id: 4,
        title: "تطبيقات الموبايل",
        desc: "تطبيقات أصلية (Native) و Cross-platform توفر أداءً مثالياً وسلاسة فائقة. نركز على جعل تطبيقك جزءاً لا يتجزأ من يوم عملائك.",
        icon: <Smartphone className="w-10 h-10 md:w-12 md:h-12" />,
        color: "bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#020617]",
        border: "border-orange-500/30",
        shadow: "shadow-orange-500/10",
        accent: "bg-orange-500"
    }
];

export default function StackedServices() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // حركة النص في الخلفية (Parallax)
    const xTransform = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    return (
        <section ref={containerRef} className="relative bg-[#020617] py-8 md:py-8" dir="rtl">

            {/* رأس السكشن - تم توحيد اللون والخط هنا */}
            <div className="sticky top-0 h-[40vh] md:h-[50vh] flex flex-col items-center justify-center overflow-hidden z-0 pointer-events-none">

                {/* النص المتحرك في الخلفية (Stroke Text) */}
                <motion.div
                    style={{ x: xTransform }}
                    className="absolute whitespace-nowrap text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter select-none leading-none z-0"
                    style={{
                        WebkitTextStroke: "1px rgba(255,255,255,0.03)",
                        color: "transparent",
                        x: xTransform
                    }}
                >
                    Creative Services • Global Nexus • Excellence • Solutions •
                </motion.div>

                {/* العنوان الأساسي المتركز - أبيض صريح بالكامل وعريض */}
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-6 md:w-10 h-px bg-blue-500"></span>
                            <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
                                Expertise & Impact
                            </span>
                            <span className="w-6 md:w-10 h-px bg-blue-500"></span>
                        </div>

                        <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
                            خدماتنا الإبداعية
                        </h2>

                        {/* سهم صغير كـ Indicator للحركة */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="mt-8 w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"
                        />
                    </motion.div>
                </div>
            </div>

            {/* حاوية الكروت المتراكمة */}
            <div className="relative max-w-6xl mx-auto px-4 md:px-6 space-y-32 md:space-y-40 pb-15">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className="sticky w-full"
                        style={{ top: `${15 + index * 3}%`, zIndex: index + 1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-10%" }}
                            style={{
                                scale: 1 - (services.length - index) * 0.015,
                            }}
                            className={`relative w-full min-h-[450px] md:min-h-[550px] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 border ${service.border} ${service.color} ${service.shadow} shadow-2xl backdrop-blur-3xl flex flex-col md:flex-row items-center gap-10 md:gap-16 overflow-hidden`}
                        >
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] ${service.accent} opacity-30 blur-[2px]`}></div>
                            <div className={`absolute -top-20 -right-20 w-80 h-80 ${service.accent}/10 blur-[120px] -z-10`} />

                            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
                                <span className="text-7xl md:text-9xl font-black text-white/[0.03] leading-none select-none">
                                    0{service.id}
                                </span>
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-white/5 flex items-center justify-center text-white border border-white/10 shadow-inner group transition-all duration-500 hover:border-white/20">
                                    <div className="transition-transform duration-500 group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-right">
                                <h3 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-base md:text-2xl leading-relaxed font-light mb-8 md:mb-12 max-w-2xl">
                                    {service.desc}
                                </p>

                                <button className="group relative overflow-hidden px-8 md:px-12 py-4 rounded-full border border-white/10 text-white text-xs md:text-sm font-bold transition-all duration-500 uppercase tracking-widest hover:border-white/40">
                                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">تفاصيل الخدمة</span>
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                </button>
                            </div>

                            <div className="absolute bottom-12 right-12 opacity-10 hidden lg:block">
                                <div className={`w-24 h-px ${service.accent} mb-3`}></div>
                                <div className={`w-12 h-px ${service.accent}`}></div>
                            </div>
                        </motion.div>
                    </div>
                ))}

                {/* --- الزرار النهائي الكبير --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative z-[100] pt-10 md:pt-20 flex justify-center"
                >
                    <Link href="/services" className="group">
                        <button className="relative px-12 md:px-20 py-6 md:py-8 bg-white text-black rounded-full font-black text-base md:text-xl uppercase tracking-[0.2em] flex items-center gap-6 transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] active:scale-95">
                            استكشف كافة الخدمات
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                                <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
                            </div>
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* تذييل السكشن */}
            <div className="relative z-10 text-center pb-10">
                <p className="text-white/10 font-mono text-[10px] md:text-xs tracking-[0.6em] uppercase">
                    GLOBAL NEXUS • SYNERGY IN DIGITAL • 2026
                </p>
            </div>

        </section>
    );
}