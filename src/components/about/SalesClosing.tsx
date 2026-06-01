"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

export default function CompactSalesClosing() {
    return (
        <section className="relative w-full py-16 sm:py-24 px-4 bg-transparent overflow-hidden" dir="rtl">
            <div className="max-w-4xl mx-auto relative z-10 text-center">

                {/* العنوان */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6"
                >
                    دعنا نناقش كيف يمكننا <br className="hidden md:block" />
                    <span className="text-blue-600">دعم نمو</span> أعمالك
                </motion.h2>

                {/* النص الوصفي الجديد */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-base md:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16"
                >
                    إذا كنت تبحث عن شريك يساعدك على تطوير حضورك الرقمي أو بناء حلول رقمية تناسب طبيعة شركتك، يمكننا مناقشة احتياجاتك وتحديد الاتجاه الأنسب.
                </motion.p>

                {/* الزرار المركزي الضخم والمحكم */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-2 bg-white/[0.02] border border-white/5 rounded-3xl sm:rounded-full backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                    {/* زرار الاستشارة (الأساسي) */}
                    <Link href="/call">
                        <motion.button
                            whileHover={{ x: -5 }}
                            className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black rounded-full text-lg md:text-xl flex items-center justify-center gap-3 transition-transform"
                        >
                            احجز استشارتك الآن
                            <FiArrowLeft className="text-2xl" />
                        </motion.button>
                    </Link>

                    {/* زرار الواتساب (المكمل) */}
                    <motion.a
                        href="https://wa.me/201109458238"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        className="p-5 text-[#25D366] hover:text-white group transition-colors"
                    >
                        <FaWhatsapp className="text-3xl" />
                    </motion.a>
                </motion.div>

                {/* جملة ختامية بسيطة جداً */}
                <p className="mt-16 text-slate-500 text-sm font-light tracking-wide opacity-50">
                    Your Digital Transformation Starts Here — 2026
                </p>

            </div>

            {/* تأثير إضاءة خلفي هادي جداً */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/[0.03] blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}