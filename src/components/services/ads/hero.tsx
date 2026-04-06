"use client";

import { motion } from "framer-motion";
// استيراد الأيقونات الاحترافية
import { FiBarChart2, FiTarget, FiLayers } from "react-icons/fi";

export default function UnconventionalSwissHero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-22 md:pt-24 pb-16 px-6 overflow-hidden" dir="rtl">


            <motion.div
                className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center pt-6"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >

                {/* الجزء الأيمن (العنوان والنص والأزرار) - تم ضبط التوسط للموبايل */}
                <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-right">
                    {/* شارة فريدة ومتحركة - ستايل تيك */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.03)]"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                            نتائج واقعية نمو مستمر.            </span>
                    </motion.div>

                    {/* العنوان: متباين ومبتكر، التركيز على "جاهزين" */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-[80px] font-black text-white tracking-tighter leading-[1.05] mb-8"
                    >
                        <span className="block mb-2">عايز عملاء</span>
                        {/* الكلمة البارزة: تدرج أزرق نيون */}
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-2xl transform -rotate-1 shadow-[0_0_20px_rgba(37,99,235,0.3)]">جاهزين</span> يشتروا
                        <br />
                        {/* الجزء المشطوب: رمادي غامق مع شطب */}
                        <span className="relative text-neutral-700 font-extrabold text-4xl md:text-7xl">
                            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-neutral-800 transform -rotate-2" />
                            مش بس لايكات؟
                        </span>
                    </motion.h1>

                    {/* النص الفرعي: داخل حاوية بلورية غامقة (Glassmorphism) */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-xl text-neutral-300 font-medium max-w-2xl mb-12 leading-relaxed bg-white/[0.02] backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    >
                        في <span className="text-white font-bold">Global Nexus</span> بنحول ميزانيتك لنتائج حقيقية. بنصمم حملات إعلانية ذكية بتستهدف المشتري الفعلي مش مجرد المشاهد العابر.
                    </motion.p>

                    {/* الأزرار: تصميم عصري وبسيط */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 w-full sm:w-auto"
                    >
                        <a
                            href="/call"
                            className="group relative w-full sm:w-auto px-6 py-3.5 md:px-10 md:py-5 bg-white text-black font-[900] rounded-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] text-center overflow-hidden flex items-center justify-center gap-3"
                        >
                            {/* تأثير الانعكاس الضوئي عند الهوفر */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                            <span className="relative z-10 text-lg md:text-xl tracking-tighter">
                                احجز مكالمة مجانية دلوقتي
                            </span>

                            {/* سهم احترافي ونضيف بيظهر بحركة انسيابية */}
                            <motion.svg
                                className="relative z-10 w-5 h-5 md:w-6 md:h-6 transform rotate-180 group-hover:-translate-x-2 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>

                            {/* تأثير الـ hover الأبيض الشفاف اللي كان موجود بس بقى أرقى */}
                            <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </a>
                    </motion.div>
                </div>

                {/* الجزء الأيسر (نقاط الإثبات) - تم ضبط التراصف للموبايل */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-4 flex-col items-stretch gap-6 relative hidden md:flex"
                >
                    {/* مسار خلفي غامق يربط النقاط - يختفي في الموبايل لجمالية الشكل */}
                    <div className="hidden md:block absolute inset-y-0 right-[25px] w-px bg-white/5 z-0" />

                    {[
                        { label: "نتائج قابلة للقياس", desc: "تقارير دقيقة لكل مليم بتصرفه", icon: <FiBarChart2 /> },
                        { label: "استهداف دقيق", desc: "نوصل لعميلك المثالي في الوقت الصح", icon: <FiTarget /> },
                        { label: "إدارة كاملة", desc: "من الفكرة لحد ما العميل يشتري", icon: <FiLayers /> }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 group relative z-10 text-center md:text-right"
                            whileHover={{ x: -10 }}
                        >
                            {/* الأيقونة: كارت زجاجي داكن مع هوفر أزرق */}
                            <div className="w-[50px] h-[50px] shrink-0 flex items-center justify-center rounded-2xl bg-white/[0.01] border-2 border-white/5 backdrop-blur-xl shadow-sm text-2xl text-blue-500 group-hover:border-blue-500/50 group-hover:bg-blue-600/10 transition-colors">
                                {item.icon}
                            </div>
                            {/* محتوى الكارت: ستايل Glassmorphism غامق */}
                            <div className="flex-1 w-full bg-white/[0.02] backdrop-blur-2xl p-6 rounded-2xl border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-white/10 transition-colors">
                                <p className="text-base font-black text-white mb-1.5">{item.label}</p>
                                <p className="text-sm text-neutral-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    );
}