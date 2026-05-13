"use client";

import { motion } from "framer-motion";
import { Code2, Share2, Megaphone, Cpu } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "marketing-content",
        icon: Share2,
        title: "التسويق وصناعة المحتوى",
        titleEn: "MARKETING & CONTENT CREATION",
        description: "نقدم استراتيجيات محتوى متكاملة تهدف إلى تعزيز الهوية المؤسسية وبناء علاقة مستدامة مع الجمهور المستهدف، من خلال صياغة رسائل تسويقية إبداعية تحقق التأثير والانتشار المطلوب.",
    },
    {
        id: "digital-advertising",
        icon: Megaphone,
        title: "الإعلانات والتسويق الرقمي",
        titleEn: "DIGITAL ADS & MARKETING",
        description: "إدارة الحملات الإعلانية المدفوعة عبر مختلف المنصات الرقمية بدقة عالية، مع التركيز على تحليل البيانات وتحسين العائد على الاستثمار لضمان الوصول للعملاء المحتملين بأعلى كفاءة ممكنة.",
    },
    {
        id: "web-apps-development",
        icon: Code2,
        title: "تطوير المواقع والتطبيقات",
        titleEn: "WEB & APP DEVELOPMENT",
        description: "تطوير حلول ويب وتطبيقات هواتف ذكية متطورة تتميز بأداء فائق وتجربة مستخدم سلسة، مع الاعتماد على أحدث التقنيات البرمجية لدعم التحول الرقمي ونمو أعمالكم.",
    },
    {
        id: "smart-solutions",
        icon: Cpu,
        title: "الأنظمة والحلول الذكية",
        titleEn: "SMART SYSTEMS & SOLUTIONS",
        description: "تصميم وتنفيذ الأنظمة التقنية والحلول الذكية المخصصة لأتمتة العمليات الإدارية والتشغيلية، مما يسهم في رفع الإنتاجية وتقليل التكاليف التشغيلية للمؤسسات.",
    }
];

export default function ServicesShowcase() {
    return (
        <section className="py-10 overflow-hidden relative border-t border-white/5" dir="rtl">

            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-wider text-white uppercase select-none">
                        OUR SERVICES
                    </h2>
                </div>

                {/* شبكة الكروت الـ Grid - متجاوبة بالكامل */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Link
                                href={`/services/${service.id}`}
                                key={service.id}
                                className="block group cursor-pointer outline-none transform-gpu will-change-transform"
                            >
                                {/* الكارت - تم إضافة transform-gpu لتحسين سلاسة السكرول */}
                                <div className="relative h-full bg-gradient-to-b from-[#051236] to-[#020512] border border-blue-500/20 rounded-[2.5rem] p-8 md:p-14 flex flex-col items-center text-center transition-all duration-500 group-hover:border-blue-400/40 shadow-[0_25px_50px_rgba(0,0,0,0.7)] overflow-hidden transform-gpu">

                                    {/* الأيقونة العائمة المضيئة نيون في المنتصف */}
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.2
                                        }}
                                        className="transform-gpu will-change-transform relative mb-8 text-blue-400/90 group-hover:text-cyan-300 transition-colors duration-300"
                                    >
                                        {/* هالة الضوء الصغيرة الملازمة للأيقونة */}
                                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full transform-gpu" />
                                        <IconComponent size={52} strokeWidth={1.1} className="relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                                    </motion.div>

                                    {/* العنوان الإنجليزي الصغير */}
                                    <span className="text-[12px] font-black tracking-[0.2em] text-blue-400 uppercase mb-3 block opacity-90">
                                        {service.titleEn}
                                    </span>

                                    {/* العنوان العربي */}
                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-5 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* وصف الخدمة */}
                                    <p className="text-slate-400/90 text-sm md:text-lg leading-relaxed font-normal max-w-md">
                                        {service.description}
                                    </p>

                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* فوتر القسم السفلي */}
                <div className="mt-10 text-center flex flex-col items-center gap-8">
                    <h2 className="text-2xl md:text-5xl font-black tracking-wide text-white uppercase max-w-4xl opacity-95 select-none">
                        EXPLORE OUR FULL RANGE OF SERVICES
                    </h2>

                    <Link href="/services" className="block cursor-pointer">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            className="transform-gpu px-12 py-4 bg-white hover:bg-blue-600 text-black hover:text-white font-bold rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_6px_25px_rgba(37,99,235,0.45)] text-sm md:text-base tracking-wide cursor-pointer"
                        >
                            Explore Our New Service
                        </motion.button>
                    </Link>
                </div>

            </div>
        </section>
    );
}