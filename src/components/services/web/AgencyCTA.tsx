"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
const MotionLink = motion.create(Link); // بنحول الـ Link لـ Motion Component

export default function AgencyCTA() {
    return (
        <section className="relative py-10 md:py-10 overflow-hidden bg-transparent" dir="rtl">
            {/* خلفية بصرية خفيفة (Blur Glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto max-w-5xl px-6">
                <div className="relative bg-neutral-950/50 border border-white/5 backdrop-blur-xl rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 overflow-hidden">

                    {/* Decorative Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='0.5'/%3E%3C/g%3E%3C/svg%3E")` }}
                    />

                    <div className="flex flex-col items-center text-center space-y-8 relative z-10">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full"
                        >
                            <Sparkles size={14} className="text-blue-400" />
                            <span className="text-blue-400 text-[10px] md:text-sm font-medium tracking-wide uppercase">
                                جاهز لنقل أعمالك للمستوى التالي؟
                            </span>
                        </motion.div>

                        {/* Heading - ضبط الحجم للموبايل والديسك توب */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-7xl font-black text-white leading-tight md:leading-[1.1] tracking-tight"
                        >
                            لنصنع شيئاً <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">استثنائياً</span> معاً
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-400 text-xs md:text-xl max-w-2xl font-light leading-relaxed"
                        >
                            احجز جلسة استراتيجية مجانية لمدة 30 دقيقة لنناقش كيف يمكن لـ
                            <span className="text-white font-medium"> Global Nexus </span>
                            تحويل رؤيتك إلى واقع رقمي مبهر.
                        </motion.p>

                        {/* Action Buttons - العرض الكامل في الموبايل */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col md:flex-row items-center gap-4 pt-6 w-full md:w-auto"
                        >
                            <MotionLink
                                href="/call"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative flex items-center justify-center gap-3 bg-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all w-full md:w-auto"
                            >
                                احجز مكالمتك الآن
                                <Calendar size={20} />
                            </MotionLink>

                            <motion.button
                                whileHover={{ x: -5 }}
                                className="flex items-center justify-center gap-2 text-neutral-400 hover:text-white px-6 py-4 transition-colors text-xs md:text-base w-full md:w-auto"
                            >
                                رؤية كافة الخدمات
                                <ArrowLeft size={18} />
                            </motion.button>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}