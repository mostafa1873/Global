"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowUpRight,
    CheckCircle2,
    MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // 1. استيراد مكون الصورة
import { useRef, useState, useEffect } from "react";
import web_img from "../../../public/works/web.webp";
import social_img from "../../../public/works/social.webp";
import paid_img from "../../../public/works/ads.webp";
import brand_img from "../../../public/works/brand.webp";


const services = [
    {
        id: "web-development",
        // icon: Code2, // 2. تعليق الأيقونة أو مسحها
        imageSrc: web_img, // 3. إضافة مسار الصورة الفعلي
        title: "تطوير الأنظمة الذكية",
        titleEn: "Web Development",
        philosophy: "موقعك هو \"المحرك الرقمي\" لأعمالك، وليس مجرد \"واجهة \" للعرض .",
        description: "نحن لا نكتب أكواداً برمجية فحسب، بل نصمم أدوات نمو تقنية تعمل لصالحك على مدار الساعة لتنظيم أعمالك وزيادة كفاءتها.",
        details: [
            { title: "مواقع بتبيع 24/7", desc: "تصميم مخصص لتحويل الزوار لعملاء محتملين." },
            { title: "سرعة وأداء عالمي", desc: "استخدام أحدث التقنيات لضمان تجربة مستخدم البرق." }
        ],
        color: "blue",
        accent: "bg-blue-500",
        border: "border-blue-500/30",
        imageBg: "bg-blue-600/10",
        shadow: "shadow-blue-500/10",
        gradient: "from-[#0A1128] via-[#001f3f] to-[#020617]"
    },
    {
        id: "social-media",
        // icon: Share2,
        imageSrc: social_img,
        title: "إدارة الظهور الرقمي",
        titleEn: "Social Media Management",
        philosophy: "رسّخ مكانة \"علامتك التجارية\" لتكون الأولوية الأولى في ذهن عملائك. ",
        description: "التواجد الرقمي الفعّال يتجاوز مجرد النشر، نحن نبني استراتيجيات محتوى متكاملة تحول جمهورك إلى مجتمع مخلص لعلامتك التجارية، مع ضمان وصول رسالتك للفئة المستهدفة بدقة.",
        details: [
            { title: "إستراتيجية مش عشوائية", desc: "خطة محتوى متكاملة تخاطب احتياجات عميلك بدقة." },
            { title: "محتوى مرئي وقصصي", desc: "رواية قصة نجاحك من خلال فيديوهات وتصاميم تخطف العين." }
        ],
        color: "emerald",
        accent: "bg-emerald-500",
        border: "border-emerald-500/30",
        imageBg: "bg-emerald-600/10",
        shadow: "shadow-emerald-500/10",
        gradient: "from-[#05161A] via-[#072a30] to-[#020617]"
    },
    {
        id: "paid-ads",
        // icon: Megaphone,
        imageSrc: paid_img,
        title: "الإعلانات الممولة",
        titleEn: "Paid Ads",
        philosophy: "حوّل ميزانيتك التسويقية إلى عوائد\"ربحية ملموسة.",
        description: "نحن لا ندير حملات إعلانية فقط، بل نصمم استراتيجيات ذكية تضمن أعلى معدل تحويل وتحقق نموًا فعليًا لأعمالك.",
        details: [
            { title: "استهداف بالمسطرة", desc: "الوصول للعميل المهتم فعلاً بناءً على بيانات دقيقة." },
            { title: "شفافية كاملة (ROI)", desc: "تقرير دقيق لكل قرش اتصرف وجاب لك كام عميل." }
        ],
        color: "indigo",
        accent: "bg-indigo-500",
        border: "border-indigo-500/30",
        imageBg: "bg-indigo-600/10",
        shadow: "shadow-indigo-500/10",
        gradient: "from-[#0D0D0D] via-[#1a1a1a] to-[#020617]"
    },
    {
        id: "branding",
        // icon: Palette,
        imageSrc: brand_img,
        title: "تصميم الهوية البصرية",
        titleEn: "Branding & Identity",
        philosophy: "هويتك هي الانطباع الأول الذي يحدد \"مكانتك\"،  قبل أن تبدأ الحديث.",
        description: "نحن نبتكر شخصية بصرية متفردة تعكس قيم علامتك التجارية، وتخلق ترابطاً ذهنياً قوياً مع جمهورك المستهدف، لضمان حضور مميز يترك أثراً لا ينسى.",
        details: [
            { title: "هوية ليها \"روح\"", desc: "تصميم شعار وبالتة ألوان تعكس قيم وقوة شركتك." },
            { title: "سيكولوجية الألوان", desc: "اختيارات علمية تؤثر في قرار العميل النفسي لصالحك." }
        ],
        color: "purple",
        accent: "bg-purple-500",
        border: "border-purple-500/30",
        imageBg: "bg-purple-600/10",
        shadow: "shadow-purple-500/10",
        gradient: "from-[#0F0A1E] via-[#1a0b2e] to-[#020617]"
    }
];

export default function StackedServices() {
    const containerRef = useRef(null);
    const WHATSAPP_NUMBER = "";

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const xTransform = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["5%", "-5%"] : ["20%", "-20%"]
    );

    return (
        <section ref={containerRef} className="relative py-4 md:py-8 border-t border-white/5" dir="rtl">
            {/* Header القسم - ثابت كما هو */}
            <div className="relative h-[35vh] md:h-[50vh] flex flex-col items-center justify-center overflow-hidden z-0 pointer-events-none mb-10">
                <motion.div
                    className="absolute whitespace-nowrap text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter select-none leading-none z-0 transform-gpu"
                    style={{
                        WebkitTextStroke: "1px rgba(255,255,255,0.03)",
                        color: "transparent",
                        x: xTransform,
                        willChange: "transform"
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
                            حلولنا الاستراتيجية
                        </h2>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: isMobile ? 3 : 2 }}
                            className="mt-8 w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent transform-gpu"
                        />
                    </motion.div>
                </div>
            </div>

            {/* الكروت - مع دمج التصميم الجديد */}
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
                            viewport={{ once: true, margin: "150px" }}
                            transition={{ duration: 0.6 }}
                            style={{
                                scale: isMobile ? 1 : 1 - (services.length - index) * 0.015,
                                willChange: "transform, opacity",
                                transformOrigin: "top center"
                            }}
                            className={`relative w-full min-h-[450px] md:min-h-[550px] rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-12 lg:p-16 border ${service.border} bg-gradient-to-br ${service.gradient} ${service.shadow} shadow-2xl backdrop-blur-3xl overflow-hidden transform-gpu group`}
                        >
                            {/* تأثيرات الخلفية */}
                            <div className={`absolute inset-0 opacity-5 ${service.imageBg} pointer-events-none`} />
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] ${service.accent} opacity-30 blur-[2px] transform-gpu`}></div>
                            <div className={`absolute -top-20 -right-20 w-80 h-80 ${service.accent}/10 blur-[80px] md:blur-[120px] -z-10 transform-gpu backface-hidden`} />

                            {/* محتوى الكرت المدمج */}
                            <div className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative z-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* الجانب البصري - تم استبدال الأيقونة بصورة */}
                                <div className="flex-1 w-full max-w-[180px] md:max-w-sm mx-auto">
                                    <div className={`relative aspect-square w-full rounded-[2.5rem] ${service.imageBg} border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}>
                                        {/* 4. استبدال مكون الأيقونة بمكون الصورة */}
                                        <Image
                                            src={service.imageSrc} // استخدام مسار الصورة من البيانات
                                            alt={`${service.titleEn} icon`}
                                            fill // جعل الصورة تملأ الأب
                                            className="object-cover rounded-[2.5rem] opacity-80 group-hover:scale-105 transition-transform duration-700" // الحفاظ على التنسيقات
                                        />
                                        {/* الحفاظ على شعار الجودة */}
                                        <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-[#030712] border border-white/10 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl">
                                            <CheckCircle2 className="text-blue-400 mb-1" size={16} />
                                            <p className="text-[8px] md:text-[10px] text-white font-bold">100% Quality</p>
                                        </div>
                                    </div>
                                </div>

                                {/* الجانب النصي - كما هو */}
                                <div className="flex-[1.5] text-center lg:text-right w-full flex flex-col items-center lg:items-start">
                                    <div className="mb-4">
                                        <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-2">{service.titleEn}</h3>
                                        <h2 className="text-2xl md:text-5xl font-black text-white leading-tight">{service.title}</h2>
                                    </div>

                                    <p className="text-sm md:text-xl text-blue-100/80 font-medium italic mb-6 leading-relaxed border-r-4 border-blue-500 pr-4 max-w-2xl">
                                        “{service.philosophy}”
                                    </p>

                                    <p className="text-slate-400 text-xs md:text-lg mb-8 leading-relaxed max-w-2xl">
                                        {service.description}
                                    </p>

                                    {/* قائمة المميزات المختصرة */}
                                    <div className="hidden sm:grid grid-cols-2 gap-4 mb-10 text-right w-full max-w-xl">
                                        {service.details.map((item, i) => (
                                            <div key={i} className="flex flex-col">
                                                <span className="text-white font-bold text-sm flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    {item.title}
                                                </span>
                                                <span className="text-slate-500 text-[11px] mt-1 pr-3.5 leading-snug">{item.desc}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* الأزرار */}
                                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mt-auto">
                                        <Link
                                            href={`/services/${service.id}`}
                                            className="px-8 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                                        >
                                           استعرض منهجيتنا <ArrowUpRight size={18} />
                                        </Link>
                                        <a
                                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`أهلاً، أريد الاستفسار عن: ${service.title}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-3 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
                                        >
                                           ابدأ التعاون الآن <MessageCircle size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* زر استكشاف كافة الخدمات والفوتر - كما هما */}
            <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-[100] pt-10 flex justify-center"
                >
                    <Link href="/services" className="group relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <button className="relative flex items-center gap-6 px-10 md:px-14 py-5 md:py-7 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl text-white transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.07] group overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s]" />
                            <span className="relative z-10 font-bold text-lg md:text-2xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                                استكشف كافة الخدمات
                            </span>
                            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                                <ArrowUpRight className="w-6 h-6 text-white/70 group-hover:text-blue-400 transition-all duration-500 -rotate-90 group-hover:-rotate-45" />
                            </div>
                        </button>
                    </Link>
                </motion.div>
            </div>

            <div className="relative z-10 text-center pb-5">
                <p className="text-white/10 font-mono text-[10px] md:text-xs tracking-[0.6em] uppercase">
                    GLOBAL NEXUS • SYNERGY IN DIGITAL • 2026
                </p>
            </div>
        </section>
    );
}