"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Rocket, MessageSquareDot, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CompactFinalCTA() {
    return (
        <section className="relative py-10 border-t border-white/5 overflow-hidden" dir="rtl">

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto relative group"
                >
                    {/* الكارت الزجاجي الصغير */}
                    <div className="relative p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden">

                        {/* خط إضاءة علوي (Neon Top Line) */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                            {/* الجانب الأيمن: النص */}
                            <div className="text-center md:text-right space-y-4 flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-2">
                                    <Sparkles size={12} className="text-blue-400" />
                                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">جاهز تبقى</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                    قصة النجاح <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-400">
                                        الجاية؟
                                    </span>
                                </h2>

                                <p className="text-slate-400 text-sm md:text-lg font-medium max-w-sm">
                                    نشتغل معاك لحد ما نوصل لنتيجة تليق تتحط في البورتفليو.                                </p>
                            </div>

                            {/* الجانب الأيسر: الزرار */}
                            <div className="flex flex-col items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] active:scale-95"
                                >
                                    <span>احجز مكانك دلوقتي</span>
                                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                    </div>
                                </Link>

                                <motion.a
                                    href="https://wa.me/201234567890" // حط رقمك هنا بصيغة الدولى بدون أصفار أو +
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-xs font-black transition-all hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] cursor-pointer"
                                >
                                    {/* أيقونة الواتساب مع نبضة خفيفة */}
                                    <div className="relative">
                                        <MessageSquareDot size={16} className="relative z-10" />
                                        <span className="absolute inset-0 bg-emerald-500 blur-sm animate-pulse opacity-50" />
                                    </div>

                                    <span>رد فوري على الواتساب</span>
                                </motion.a>
                            </div>

                        </div>

                        {/* أيقونة الصاروخ بشكل ديكوري خفيف */}
                        <Rocket className="absolute -bottom-4 -left-4 w-24 h-24 text-white/[0.02] -rotate-12 pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}