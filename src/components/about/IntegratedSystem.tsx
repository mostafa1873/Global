"use client";

import { motion } from "framer-motion";
import { FiCpu, FiTrendingUp, FiUserCheck, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function IntegratedFlow() {
    const steps = [
        {
            title: "بناسس صح",
            desc: "بنعملك الموقع أو التطبيق بأحدث تكنولوجيا، بس بعقلية تسويقية عشان العميل لما يدخل يعرف يشتري مش بس يتفرج.",
            icon: <FiCpu />,
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "بنكبر اسمك",
            desc: "بنمسك السوشيال ميديا والدعاية بخطط مدروسة بتستهدف الناس اللي محتاجة خدمتك فعلاً، يعني مفيش مليم بيترمي في الأرض.",
            icon: <FiTrendingUp />,
            color: "from-indigo-500 to-purple-500"
        },
        {
            title: "بنريح بالك",
            desc: "ليك مدير مشروع واحد بيكلمك، هو المسؤول عن كل حاجة. مش هتلاحق ورا 10 موردين، إحنا الواجهة الوحيدة لكل طلباتك.",
            icon: <FiUserCheck />,
            color: "from-emerald-500 to-teal-400"
        }
    ];

    return (
        <section className="relative w-full py-16 md:py-18 px-6 md:px-12 overflow-hidden flex flex-col justify-center" dir="rtl">

            {/* البوردر العلوي الخفيف */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* رقم (03) المعتمد بنفس التنسيق */}
            <div className="absolute left-4 bottom-4 md:left-10 md:bottom-10 opacity-5 md:opacity-40 pointer-events-none z-0">
                <p className="text-slate-800 text-[80px] sm:text-[100px] md:text-[150px] font-black leading-none select-none tracking-tighter">
                    03
                </p>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 w-full">

                {/* رأس السكشن - تمركز في الموبايل */}
                <div className="mb-16 md:mb-24 text-center md:text-right flex flex-col items-center md:items-start">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
                    >
                        المنظومة <span className="text-blue-500">المتكاملة</span>
                    </motion.h2>
                    <p className="text-slate-400 text-base md:text-xl max-w-2xl">
                        بدل ما نشتتك بين الخدمات، بنقدم لك رحلة واحدة واضحة لنمو بيزنسك.
                    </p>
                </div>

                {/* نظام الخطوات المتصلة */}
                <div className="relative space-y-12 md:space-y-0">

                    {/* الخط العمودي (يظهر فقط في الشاشات الكبيرة لتجنب الفراغ في الموبايل) */}
                    <div className="absolute right-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-indigo-500/50 to-emerald-500/50 hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16 pb-12 md:pb-24 last:pb-0 md:last:pb-12 text-center md:text-right"
                        >
                            {/* الأيقونة والدائرة - متمركزة في الموبايل */}
                            <div className={`relative z-10 w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-3xl shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-transform hover:rotate-12`}>
                                {step.icon}
                            </div>

                            {/* المحتوى - مالي الشاشة في الموبايل */}
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-slate-400 text-[15px] md:text-lg leading-relaxed font-light max-w-3xl">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* زرار الخدمات - متجاوب */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 md:mt-20 flex justify-center md:justify-end w-full"
                >
                    <Link href="/services" className="group relative w-full sm:w-auto flex items-center justify-between sm:justify-center gap-6 px-6 md:px-8 py-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-blue-500/50 hover:bg-blue-500/5">
                        <span className="text-white text-sm md:text-base font-bold group-hover:text-blue-400 transition-colors">
                            اكتشف كافة خدماتنا بالتفصيل
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-all">
                            <FiArrowLeft className="text-white group-hover:-translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* تأثير خلفية خفيف لكسر المساحات البيضاء */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        </section>
    );
}