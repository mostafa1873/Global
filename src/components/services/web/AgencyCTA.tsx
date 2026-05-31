"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandingFinalCTA() {
    return (
        <section className="relative w-full py-10 border-t border-white/10 px-4 sm:px-6 md:px-12 select-none z-10 overflow-hidden" dir="rtl">

            <div className="relative z-10 w-full max-w-[1000px] mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="relative w-full border border-white/[0.2] bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl p-8 sm:p-14 md:p-20 text-center flex flex-col items-center justify-center overflow-hidden group"
                >
                    {/* تفاصيل تقنية ومؤشرات واجهة المستخدم على الزوايا لإتمام الهوية البرمجية الفخمة */}
                    <div className="absolute top-0 right-0 w-4 h-[1px] bg-white/20 group-hover:bg-blue-600/50 transition-colors duration-500" />
                    <div className="absolute top-0 right-0 h-4 w-[1px] bg-white/20 group-hover:bg-blue-600/50 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-white/10 group-hover:bg-blue-600/30 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 h-4 w-[1px] bg-white/10 group-hover:bg-blue-600/30 transition-colors duration-500" />

                    {/* ترويسة النظام الرقمي الخافتة */}
                    <div className="mb-6 sm:mb-8 flex items-center gap-2 font-mono text-[9px] sm:text-[10px] text-blue-600 tracking-widest bg-blue-600/5 border border-blue-600/10 px-3 py-1 rounded-full uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span>Web_Development.READY</span>
                    </div>

                    {/* العنوان الرئيسي الثقيل والموزون */}
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl">
                        حوّل موقعك إلى نقطة قوة في حضورك الرقمي
                    </h2>

                    {/* الشرح التوضيحي الأنيق الانسيابي */}
                    <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl select-text">
                        نساعدك على بناء موقع إلكتروني يعبر عن شركتك ويدعم أهدافك التجارية بشكل واضح واحترافي.
                    </p>

                    {/* زر التواصل - معزول تماماً عن هوفر الكرت وبتأثير ألوان معكوس وفخم */}
                    <motion.div
                        className="mt-10 sm:mt-12 flex justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        <Link
                            href="/contact"
                            className="group/btn inline-flex items-center gap-4 pr-8 pl-4 py-3 sm:pr-10 sm:pl-5 sm:py-4 bg-white text-black hover:bg-blue-600 hover:text-white font-bold text-sm sm:text-base rounded-full transition-colors duration-300 ease-in-out tracking-tight shadow-sm"
                        >
                            <span>تواصل معنا</span>

                            {/* الدائرة: تبدأ باللون الأزرق 600 ومع الهوفر على الزرار بتقلب خلفية بيضاء والسهم جواها أزرق */}
                            <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 text-white group-hover/btn:bg-white group-hover/btn:text-blue-600 transition-colors duration-300 ease-in-out shrink-0">
                                <svg
                                    className="w-4 h-4 transform transition-transform duration-300 ease-in-out group-hover/btn:-translate-x-1.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </span>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}