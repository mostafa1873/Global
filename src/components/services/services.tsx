"use client";

import { motion } from "framer-motion";
import { Code2, Share2, Megaphone, Palette, ArrowUpRight, CheckCircle2, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "web-development",
        icon: Code2,
        title: "برمجة وتطوير المواقع",
        titleEn: "Web Development",
        philosophy: "موقعك هو \"المقر الرقمي\" لشركتك، مش مجرد \"بروشور\" أونلاين.",
        description: "نحن لا نبني مجرد أكواد، بل نصمم أدوات نمو ذكية تعمل لصالحك على مدار الساعة.",
        details: [
            { title: "مواقع بتبيع 24/7", desc: "تصميم مخصص لتحويل الزوار لعملاء محتملين (Leads)." },
            { title: "سرعة وأداء عالمي", desc: "استخدام أحدث التقنيات لضمان تجربة مستخدم البرق." },
            { title: "تجربة مستخدم (UI/UX)", desc: "رسم طريق واضح للعميل يوصله لهدفه بأقل مجهود." },
            { title: "لوحة تحكم بسيطة", desc: "إدارة كاملة لمحتواك بسهولة دون الحاجة لمبرمج." }
        ],
        color: "blue",
        imageBg: "bg-blue-600/10"
    },
    {
        id: "social-media",
        icon: Share2,
        title: "إدارة السوشيال ميديا",
        titleEn: "Social Media Management",
        philosophy: "ابني \"هيبة\" لبراندك وخلي اسمك هو أول حاجة تيجي في بال العميل.",
        description: "التواجد الرقمي ليس مجرد نشر بوستات، بل هو فن بناء المجتمعات المخلصة لعلامتك التجارية.",
        details: [
            { title: "إستراتيجية مش عشوائية", desc: "خطة محتوى متكاملة تخاطب احتياجات عميلك بدقة." },
            { title: "محتوى مرئي وقصصي", desc: "رواية قصة نجاحك من خلال فيديوهات وتصاميم تخطف العين." },
            { title: "بناء مجتمع وتفاعل", desc: "خلق حالة ارتباط وثقة تضمن ولاء الجمهور الدائم." },
            { title: "تحليل دوري للأرقام", desc: "تقارير شفافة تطور الأداء شهراً بعد شهر." }
        ],
        color: "emerald",
        imageBg: "bg-emerald-600/10"
    },
    {
        id: "paid-ads",
        icon: Megaphone,
        title: "الإعلانات الممولة",
        titleEn: "Paid Ads",
        philosophy: "استثمارك في الإعلانات لازم يرجعلك أضعاف، مش مجرد \"لايكات\" وهمية.",
        description: "نحول ميزانيتك الإعلانية من 'مصروفات' إلى 'استثمار' حقيقي يظهر أثره في حسابك البنكي.",
        details: [
            { title: "استهداف بالمسطرة", desc: "الوصول للعميل المهتم فعلاً بناءً على بيانات دقيقة." },
            { title: "إعلانات ذكية (Retargeting)", desc: "مطاردة الزوار المترددين وإقناعهم بالعودة للشراء." },
            { title: "اختبار النتائج (A/B Testing)", desc: "تجارب مستمرة للوصول لأقل تكلفة وأعلى عائد." },
            { title: "شفافية كاملة (ROI)", desc: "تقرير دقيق لكل قرش اتصرف وجاب لك كام عميل." }
        ],
        color: "indigo",
        imageBg: "bg-indigo-600/10"
    },
    {
        id: "branding",
        icon: Palette,
        title: "البراندينج والهوية البصرية",
        titleEn: "Branding & Identity",
        philosophy: "البراند مش مجرد \"لوجو\"، ده الانطباع اللي بيسيبه اسمك في غيابك.",
        description: "نحن نصمم الشخصية البصرية التي تجعل العميل يثق بك قبل أن ينطق بكلمة واحدة.",
        details: [
            { title: "هوية ليها \"روح\"", desc: "تصميم شعار وبالتة ألوان تعكس قيم وقوة شركتك." },
            { title: "ثبات الشكل (Consistency)", desc: "دليل هوية يضمن احترافيتك على كل المطبوعات والمنصات." },
            { title: "سيكولوجية الألوان", desc: "اختيارات علمية تؤثر في قرار العميل النفسي لصالحك." },
            { title: "تميز عن المنافسين", desc: "خلق صورة ذهنية تجعلك الخيار الأول في مجالك." }
        ],
        color: "purple",
        imageBg: "bg-purple-600/10"
    }
];

export default function ServicesShowcase() {
    const WHATSAPP_NUMBER = "201109458238"; 

    return (
        <section className="py-10 overflow-visible border-t border-white/5 mt-5" dir="rtl">
            <div className="container mx-auto px-4 md:px-6 lg:px-16">

                {/* Header القسم */}
                <div className="relative text-center mb-10 flex flex-col items-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-blue-600/10 blur-[100px] -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 group hover:border-blue-500/50 transition-colors duration-500"
                    >
                        <span className="text-blue-400 group-hover:animate-pulse">
                            <Sparkles size={14} />
                        </span>
                        <span className="text-[10px] font-black text-blue-100 uppercase tracking-[0.4em] leading-none">
                            خدمات ذكية
                        </span>
                    </motion.div>

                    <div className="relative">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1]"
                        >
                            لنمو ملوش <br className="md:hidden" />
                            <span className="relative inline-block px-2">
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 italic">
                                    حدود
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                                />
                            </span>
                        </motion.h2>

                        <span className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 text-[60px] md:text-[150px] font-black text-white/[0.02] select-none z-[-1] tracking-widest uppercase">
                            Nexus
                        </span>
                    </div>
                </div>

                {/* كروت الخدمات */}
                <div className="relative flex flex-col items-center">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="relative lg:sticky lg:top-24 w-full mb-12 md:mb-15 lg:mb-15 transform-gpu"
                        >
                            <motion.div
                                className="will-change-transform relative w-full bg-[#0a0f1d] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
                                style={{
                                    marginTop: `${index * 15}px`,
                                    transformOrigin: "center bottom"
                                }}
                            >
                                <div className={`absolute inset-0 opacity-5 ${service.imageBg} pointer-events-none`} />

                                <div className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20 relative z-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* الجانب البصري */}
                                    <div className="flex-1 w-full max-w-[200px] md:max-w-sm mx-auto">
                                        <div className={`relative aspect-square w-full rounded-[2rem] md:rounded-[2.5rem] ${service.imageBg} border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}>
                                            <service.icon className={`w-12 h-12 md:w-24 md:h-24 text-${service.color}-500 opacity-80`} />

                                            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-[#030712] border border-white/10 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl">
                                                <CheckCircle2 className={`text-${service.color}-400 mb-1`} size={16} />
                                                <p className="text-[8px] md:text-[10px] text-white font-bold">100% Quality</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* الجانب النصي */}
                                    <div className="flex-1 text-center lg:text-right w-full flex flex-col items-center lg:items-start">
                                        <div className="mb-4">
                                            <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-2">{service.titleEn}</h3>
                                            <h2 className="text-2xl md:text-5xl font-black text-white leading-tight">{service.title}</h2>
                                        </div>

                                        <p className="text-base md:text-xl text-blue-100/80 font-medium italic mb-6 leading-relaxed border-r-4 lg:border-r-4 border-blue-500 pr-4">
                                            “{service.philosophy}”
                                        </p>

                                        <p className="text-slate-400 text-sm md:text-lg mb-8 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* قائمة المميزات */}
                                        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-right">
                                            {service.details.map((item, i) => (
                                                <div key={i} className="flex flex-col">
                                                    <span className="text-white font-bold text-sm flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-blue-500`} />
                                                        {item.title}
                                                    </span>
                                                    <span className="text-slate-500 text-[11px] md:text-xs mt-1 pr-3.5 leading-snug">{item.desc}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* أزرار اتخاذ القرار */}
                                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center lg:justify-start">
                                            <Link
                                                href={`/services/${service.id}`}
                                                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl md:rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                                            >
                                                التفاصيل
                                                <ArrowUpRight size={18} />
                                            </Link>

                                            <a
                                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`أهلاً بك، أريد الاستفسار عن خدمة: ${service.title}`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-xl md:rounded-2xl font-bold text-sm hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
                                            >
                                                اطلب الخدمة الآن
                                                <MessageCircle size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}