"use client";

import { motion } from "framer-motion";
import { FiHeart, FiTarget, FiZap } from "react-icons/fi";

export default function HeartSection() {
    return (
        <section className="relative w-full py-12 md:py-16 px-6 md:px-12 bg-transparent overflow-hidden flex flex-col justify-center" dir="rtl">

            {/* البوردر العلوي الخفيف */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />


            <div className="max-w-6xl mx-auto relative z-10 w-full">

                {/* العنوان - تمركز في الموبايل */}
                <div className="mb-12 md:mb-20 text-center md:text-right flex flex-col items-center md:items-start">
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 block"
                    >
                        Our Core Vision
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white text-[32px] sm:text-4xl md:text-6xl font-black tracking-tighter leading-tight"
                    >
                        شريك <span className="text-blue-600 underline underline-offset-8 decoration-2">في نجاحك.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">

                    {/* الجانب الأيمن: النص الأساسي - تمركز في الموبايل */}
                    <div className="md:col-span-8 relative text-center md:text-right">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-6 md:space-y-8"
                        >
                            <p className="text-slate-300 text-xl md:text-3xl leading-relaxed font-light italic">
                                "بدأنا في <span className="text-white font-bold not-italic">أكتوبر 2025</span> برؤية واضحة: إن البيزنس في منطقتنا يستحق حلول ذكية ومتكاملة."
                            </p>
                            <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-3xl mx-auto md:mx-0">
                                إحنا فريق بيجمع بين <span className="text-blue-400">دقة المهندسين</span> وشطارة المسوقين، وهدفنا إننا نكبر معاك، لإن نجاحنا الحقيقي هو إنك تركز في إدارة شركتك وتسيب لنا إحنا <span className="text-white font-bold italic">"الهم الرقمي"</span> بالكامل.
                            </p>
                        </motion.div>
                    </div>

                    {/* الجانب الأيسر: كروت صغيرة - تمركز في الموبايل */}
                    <div className="md:col-span-4 space-y-4 md:space-y-6 w-full max-w-md mx-auto md:mx-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-center md:text-right"
                        >
                            <FiTarget className="text-blue-500 text-2xl mb-4 mx-auto md:mx-0" />
                            <h4 className="text-white font-bold mb-2 text-lg">رؤية 2026</h4>
                            <p className="text-slate-500 text-sm md:text-base">نطمح لتطوير أكثر من 100 علامة تجارية محلية بمعايير عالمية.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20 backdrop-blur-sm text-center md:text-right"
                        >
                            <FiZap className="text-blue-500 text-2xl mb-4 mx-auto md:mx-0" />
                            <h4 className="text-white font-bold mb-2 text-lg">شريك نمو</h4>
                            <p className="text-slate-500 text-sm md:text-base">إحنا مش مجرد مورد، إحنا ذراعك التقني والتسويقي في السوق.</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* رقم القسم (04) - متجاوب بنفس ستايل رقم 01 في مكانه (يمين تحت) */}
            <div className="absolute right-4 bottom-4 md:right-10 md:bottom-10 opacity-5 md:opacity-40 pointer-events-none z-0 overflow-hidden">
                <p className="text-slate-800 text-[80px] sm:text-[100px] md:text-[150px] font-black leading-none select-none tracking-tighter">
                    04
                </p>
            </div>

        </section>
    );
}