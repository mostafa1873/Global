"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "سارة الجابري",
        role: "رائدة أعمال",
        quote: "تجربة التعامل مع نيكسوس كانت استثنائية. لم نحصل فقط على تصميم بل على شريك استراتيجي فهم رؤيتنا وحولها إلى واقع رقمي مبهر.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        color: "#3b82f6"
    },
    {
        id: 2,
        name: "خالد الرميحي",
        role: "الرئيس التنفيذي - تيك سول",
        quote: "الفريق يتمتع بكفاءة عالمية. الحلول البرمجية التي قدموها قللت تكاليف التشغيل لدينا بنسبة 40% وحسنت تجربة المستخدم بشكل ملحوظ.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        color: "#6366f1"
    },
    {
        id: 3,
        name: "ليلى حسن",
        role: "مديرة التسويق",
        quote: "الهوية البصرية الجديدة التي صممتها نيكسوس جعلت علامتنا التجارية تتصدر المشهد. الإبداع والدقة في المواعيد هما عنوانهم.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        color: "#a855f7"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // حل مشكلة window is not defined
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // تشغيل عند التحميل
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextCard = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prevCard = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="relative min-h-screen py-12 md:py-20 flex items-center overflow-hidden" dir="rtl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                <div className="relative z-10 text-center lg:text-right">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-blue-500 font-mono tracking-tighter uppercase mb-4 block text-sm md:text-base"
                    >
 ماذا يقولون عنا
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
                        قصص نجاح <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-gray-400 to-white">حفرناها بالابتكار</span>
                    </h2>
                    
                    <div className="flex justify-center lg:justify-start gap-4">
                        <button onClick={prevCard} className="p-3 md:p-4 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all active:scale-90">
                            <ChevronRight size={20} className="md:w-6 md:h-6" />
                        </button>
                        <button onClick={nextCard} className="p-3 md:p-4 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all active:scale-90">
                            <ChevronLeft size={20} className="md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative h-[400px] md:h-[450px] w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] mx-auto perspective-1000">
                    <AnimatePresence mode="popLayout">
                        {testimonials.map((test, index) => {
                            if (index < activeIndex) return null;

                            return (
                                <motion.div
                                    key={test.id}
                                    layout
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: (index - activeIndex) * (isMobile ? 15 : 25), 
                                        scale: 1 - (index - activeIndex) * 0.05,
                                        zIndex: testimonials.length - index,
                                    }}
                                    exit={{ opacity: 0, x: 200, rotate: 20, transition: { duration: 0.4 } }}
                                    className="absolute inset-0 bg-blue-950/80 border border-blue-500/20 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col justify-between"
                                    style={{
                                        transformStyle: "preserve-3d",
                                        backdropFilter: "blur(15px)"
                                    }}
                                >
                                    <div>
                                        <Quote className="text-blue-400 mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10" fill="currentColor" fillOpacity={0.1} />
                                        <p className="text-lg md:text-2xl text-blue-50 leading-relaxed font-medium line-clamp-5 md:line-clamp-none">
                                            “{test.quote}”
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 md:gap-4 mt-6 pt-6 border-t border-blue-500/10">
                                        <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-blue-500/30 flex-shrink-0">
                                            <Image src={test.avatar} alt={test.name} fill className="object-cover" />
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-white font-bold text-sm md:text-lg truncate">{test.name}</h4>
                                            <p className="text-blue-300 text-xs md:text-sm truncate">{test.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 text-white/[0.02] text-[10rem] md:text-[25rem] font-black select-none pointer-events-none">
                0{activeIndex + 1}
            </div>
        </section>
    );
}