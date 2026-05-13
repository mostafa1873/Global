"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Handshake } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "التميز كمعيار أساسي",
        description: "نحن لا نؤمن بالحلول التقليدية؛ بل نضع التميز في التنفيذ كقاعدة ثابتة لكل مشروع، لضمان مخرجات تتجاوز التوقعات وتليق بتطلعات عملائنا.",
    },
    {
        icon: Target,
        title: "نتائج ملموسة قائمة على البيانات",
        description: "نعتمد على لغة الأرقام والمؤشرات الدقيقة (KPIs) لمتابعة الأداء، مما يضمن تحويل كل جهد تسويقي إلى نتائج فعلية ونمو مستدام لأعمالكم.",
    },
    {
        icon: Users,
        title: "منهجية: الكوادر، العمليات، الربحية",
        description: "نجمع بين أفضل الكفاءات البشرية والعمليات المنضبطة لتقليل التكاليف التشغيلية، وفتح آفاق جديدة لزيادة الإنتاجية وتحقيق أرباح مستدامة.",
    },
    {
        icon: Handshake,
        title: "شراكة استراتيجية حقيقية",
        description: "لا نعتبر أنفسنا مجرد مقدمي خدمات، بل نحن امتداد لفريق عملكم، ملتزمون بالنجاح طويل الأمد لعلامتكم التجارية ومشاركتكم رؤيتكم المستقبلية.",
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-10 border-t border-white/5 relative overflow-hidden" dir="rtl">
            
            {/* التوهج الأزرق - حافظت عليه كما هو */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none transform-gpu" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none transform-gpu" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
                
                {/* العنوان الرئيسي - تم إضافة text-center في الموبايل فقط */}
                <div className="mb-24 text-center md:text-right">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-bold tracking-[0.3em] text-sm uppercase mb-4 block"
                    >
                        Why Global Nexus
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
                    >
                        ما الذي يميزنا <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-700">عن الآخرين؟</span>
                    </motion.h2>
                </div>

                {/* شبكة المميزات بتصميم Zig-Zag غير تقليدي */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-20">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                // تم إضافة items-center text-center للموبايل فقط
                                className={`relative flex flex-col items-center text-center md:items-start md:text-right gap-6 group ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
                            >
                                {/* رقم مائي خلفي ضخم */}
                                <span className="absolute -top-12 -right-8 text-[120px] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-blue-500/[0.05] transition-colors duration-700">
                                    0{index + 1}
                                </span>

                                <div className="flex-shrink-0 relative">
                                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:border-blue-400/60 transform-gpu">
                                        <IconComponent className="text-blue-400 group-hover:text-cyan-300 transition-colors duration-300" size={32} strokeWidth={1.2} />
                                        <div className="absolute inset-0 bg-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    {/* تم تعديل الـ border ليكون سفلي في الموبايل ويميني في الديسكتوب */}
                                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-md border-b-2 md:border-b-0 md:border-r-2 border-blue-500/10 pb-6 md:pb-0 md:pr-6 group-hover:border-blue-500/40 transition-all duration-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}