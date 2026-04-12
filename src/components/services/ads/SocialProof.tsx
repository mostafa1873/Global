"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    Target,
    Zap,
    CheckCircle2,
    ArrowLeft,
    BarChart3,
    ShieldCheck,
    MousePointerClick
} from "lucide-react";
import Link from "next/link";

const results = [
    {
        title: "مبيعات تصاعدية",
        value: "+180%",
        desc: "متوسط الزيادة في مبيعات عملائنا خلال أول 3 شهور.",
        icon: TrendingUp,
    },
    {
        title: "تكلفة مستهدفة",
        value: "40%-",
        desc: "توفير في تكلفة العميل الواحد بفضل الاستهداف الذكي.",
        icon: Zap,
    },
    {
        title: "دقة الوصول",
        value: "98%",
        desc: "نسبة مطابقة الجمهور المستهدف لاهتمامات منتجك فعلياً.",
        icon: Target,
    }
];

export default function UltimateGrowthSection() {
    return (
        <div className="text-white py-10 md:py-20 border-t border-white/10 relative overflow-hidden" dir="rtl">

            {/* إضاءات خلفية (Ambient Glow) */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/5 blur-[70px] md:blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

            <section className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- Section: Social Proof (The Evidence) --- */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                    >
                        <BarChart3 size={14} />
                        Growth Performance
                    </motion.div>
                    <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
                        حولنا ميزانيات لـ <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-600">أصول ربحية.</span>
                    </h2>
                    <p className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        اشتغلنا مع براندات في قطاعات مختلفة وقدرنا نبني ليهم ماكينة نمو بتشتغل 24/7.
                    </p>
                </div>

                {/* شبكة النتائج - Digital Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 md:mb-32">
                    {results.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden group text-center md:text-right"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <item.icon className="text-blue-500 mb-6 md:mb-8 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all mx-auto md:mx-0" size={32} />
                            <div className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                                {item.value}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* عرض أسماء الشركات */}
                <div className="flex flex-col items-center border-t border-white/5 pt-16">
                    <p className="text-neutral-600 text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-center">Partnerships in Growth</p>
                    <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-8 opacity-20 hover:opacity-50 transition-opacity duration-700">
                        <span className="text-xl md:text-3xl font-black italic tracking-tighter">ELITE VENTURES</span>
                        <span className="text-xl md:text-3xl font-black italic tracking-tighter">NEXUS RETAIL</span>
                        <span className="text-xl md:text-3xl font-black italic tracking-tighter">CORE LOGIC</span>
                        <span className="text-xl md:text-3xl font-black italic tracking-tighter">GLOBAL TECH</span>
                    </div>
                </div>

                {/* --- Section: The Offer (The Premium Invite) --- */}
                <div className="mt-20 md:mt-40">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        // التعديل الجذري: تقليل الـ px لـ 4 في الموبايل عشان الكارت يفرش، وضبط الـ rounded ليكون أنعم
                        className="relative bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[3.5rem] px-4 py-10 md:p-20 overflow-hidden"
                    >
                        {/* الديكور الخلفي */}
                        <div className="absolute -bottom-20 -right-20 w-60 md:w-80 h-60 md:h-80 blur-[60px] md:blur-[80px] rounded-full pointer-events-none bg-blue-600/10" />

                        {/* استخدمت flex هنا بدل grid في الموبايل عشان السيطرة تكون أقوى */}
                        <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

                            {/* النص التعريفي */}
                            <div className="text-center lg:text-right w-full">
                                <h2 className="text-3xl md:text-6xl font-black mb-5 md:mb-8 leading-[1.2] tracking-tighter">
                                    جاهز تخرج بره <br /> <span className="text-blue-400 italic">دائرة التجربة؟</span>
                                </h2>
                                <p className="text-neutral-400 text-base md:text-xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0 px-2 md:px-0">
                                    بنقدم لك فرصة حقيقية عشان تشوف إزاي بنفكر، وإزاي هنكبر البيزنس بتاعك من أول يوم.
                                </p>
                            </div>

                            {/* الكارت الداخلي (The Box) - تم تصغير الـ Padding والـ Margin تماماً */}
                            <div className="w-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-5 py-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col items-center lg:items-start">
                                <p className="text-blue-500 font-black text-[10px] md:text-xs uppercase tracking-widest mb-6 flex items-center justify-center lg:justify-start gap-2">
                                    <MousePointerClick size={14} />
                                    Exclusive Invitation
                                </p>

                                <div className="space-y-4 md:space-y-6 mb-8 w-full">
                                    {[
                                        "تحليل فني مجاني لبيزنسك الحالي",
                                        "رسم خطة إعلانات مبدئية لـ 3 شهور",
                                        "بدون أي التزام مادي أو عقود"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3 justify-start md:justify-start pr-2 md:pr-0">
                                            <div className="w-5 h-5 shrink-0 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                                                <CheckCircle2 size={12} className="text-blue-400" />
                                            </div>
                                            <span className="text-[15px] md:text-lg font-bold text-neutral-200 leading-tight">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/call" className="w-full">
                                    <button className="w-full py-4 md:py-6 bg-white text-black rounded-xl md:rounded-2xl font-black text-base md:text-xl hover:bg-blue-500 hover:text-white transition-all duration-500 flex items-center justify-center gap-2 group">
                                        <span>احجز جلستك المجانية</span>
                                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                </Link>

                                <p className="text-center w-full text-neutral-500 text-[9px] mt-5 font-bold uppercase tracking-widest">
                                    Limited Availability this month
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>

            </section>
        </div>
    );
}