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
import { useRef, useState, useEffect } from "react";

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

    // ✅ تحديد الموبايل
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // ✅ تخفيف البارالاكس على الموبايل
    const xTransform = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["5%", "-5%"] : ["20%", "-20%"]
    );

    return (
        <section ref={containerRef} className="relative py-4 md:py-8" dir="rtl">

            {/* الهيدر */}
            <div className="relative h-[35vh] md:h-[50vh] flex flex-col items-center justify-center overflow-hidden z-0 pointer-events-none mb-10">

                <motion.div
                    className="absolute whitespace-nowrap text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter select-none leading-none z-0 transform-gpu"
                    style={{
                        WebkitTextStroke: "1px rgba(255,255,255,0.03)",
                        color: "transparent",
                        x: xTransform,
                        willChange: "transform" // ✅ GPU Optimization
                    }}
                >
                    Services
                </motion.div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-4 transform-gpu"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-6 md:w-10 h-px bg-blue-500"></span>
                            <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
                                Expertise & Impact
                            </span>
                            <span className="w-6 md:w-10 h-px bg-blue-500"></span>
                        </div>

                        <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
                            خدماتنا الإبداعية
                        </h2>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: isMobile ? 3 : 2 }}
                            className="mt-8 w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent transform-gpu"
                        />
                    </motion.div>
                </div>
            </div>

            {/* الكروت */}
            <div className="relative max-w-6xl mx-auto px-4 md:px-6 space-y-24 md:space-y-40 pb-6">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className="sticky w-full"
                        style={{ top: `${12 + index * 3}%`, zIndex: index + 1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.7 }}
                            style={{
                                scale: isMobile ? 1 : 1 - (services.length - index) * 0.015,
                                willChange: "transform, opacity", // ✅ مهم جداً للأداء
                                transformOrigin: "top center"
                            }}
                            // ✅ إضافة transform-gpu لمنع اللاج بسبب الفلاتر
                            className={`relative w-full min-h-[400px] md:min-h-[550px] rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-20 border ${service.border} ${service.color} ${service.shadow} shadow-2xl backdrop-blur-xl md:backdrop-blur-3xl flex flex-col md:flex-row items-center gap-8 md:gap-16 overflow-hidden transform-gpu`}
                        >
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] ${service.accent} opacity-30 blur-[2px] transform-gpu`}></div>
                            <div className={`absolute -top-20 -right-20 w-80 h-80 ${service.accent}/10 blur-[80px] md:blur-[120px] -z-10 transform-gpu backface-hidden`} />

                            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
                                <span className="text-6xl md:text-9xl font-black text-white/[0.03] leading-none select-none">
                                    0{service.id}
                                </span>
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-white/5 flex items-center justify-center text-white border border-white/10 shadow-inner group transition-all duration-500 hover:border-white/20">
                                    <div className="transition-transform duration-500 group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-right">
                                <h3 className="text-2xl md:text-6xl font-bold text-white mb-4 md:mb-8 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-2xl leading-relaxed font-light mb-6 md:mb-12 max-w-2xl">
                                    {service.desc}
                                </p>

                                <button className="group relative overflow-hidden px-6 md:px-12 py-3 md:py-4 rounded-full border border-white/10 text-white text-xs md:text-sm font-bold transition-all duration-500 uppercase tracking-widest hover:border-white/40">
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
            </div>

            {/* الزرار الجديد بتصميم خرافي */}
            <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-[100] pt-10 flex justify-center"
                >
                    <Link href="/services" className="group relative">

                        {/* إضاءة خلفية هادية جداً بنفس روح ألوان الكروت */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <button className="relative flex items-center gap-6 px-10 md:px-14 py-5 md:py-7 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl text-white transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.07] group overflow-hidden shadow-2xl">

                            {/* خط مضيء بيمشي على الحواف (Border Beam effect) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s]" />

                            <span className="relative z-10 font-bold text-lg md:text-2xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                                استكشف كافة الخدمات
                            </span>

                            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                                {/* السهم مظبوط: بيبص "أعلى يسار" في الـ RTL وحركته Smooth */}
                                <ArrowUpRight className="w-6 h-6 text-white/70 group-hover:text-blue-400 transition-all duration-500 -rotate-90 group-hover:-rotate-45" />
                            </div>

                            {/* تدرج لوني خفي في الأركان زي الكروت */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 blur-[50px] group-hover:bg-blue-600/20 transition-colors" />
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/10 blur-[50px] group-hover:bg-purple-600/20 transition-colors" />
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* الفوتر */}
            <div className="relative z-10 text-center pb-5">
                <p className="text-white/10 font-mono text-[10px] md:text-xs tracking-[0.6em] uppercase">
                    GLOBAL NEXUS • SYNERGY IN DIGITAL • 2026
                </p>
            </div>

        </section>
    );
}