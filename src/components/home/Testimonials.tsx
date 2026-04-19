"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// اللوجوهات - تأكد من صحة المسارات عندك
import client1 from "../../assets/logos/ezz.png";
import client2 from "../../assets/logos/agro.png";
import client3 from "../../assets/logos/pure.png";
import client4 from "../../assets/logos/dodo.png";
import client5 from "../../assets/logos/makaa.png";

const partners = [
    { img: client1, name: "Partner One", rotate: "-2deg" },
    { img: client2, name: "Partner Two", rotate: "3deg" },
    { img: client3, name: "Partner Three", rotate: "-3deg" },
    { img: client4, name: "Partner Four", rotate: "2deg" },
    { img: client5, name: "Partner Five", rotate: "-1deg" },
];

export default function CreativePartnersGrid() {
    return (
        <section className="relative w-full py-12 px-4 border-t border-b border-white/5 overflow-hidden" dir="rtl">
            
            {/* إضاءة الخلفية - تم تقليل الـ Blur قليلاً لتحسين الأداء */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[80px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                
                {/* الجزء النصي - تعديل text-center للموبايل و text-right للشاشات الكبيرة */}
                <div className="w-full lg:w-1/2 text-center lg:text-right">
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase mb-6 block"
                    >
                        Trusted By Leaders
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-5xl md:text-7xl font-black leading-[1.1] mb-8"
                    >
                        نبني المستقبل مع <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-600">
                            شركاء عالميين
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mx-auto lg:mx-0 max-w-lg lg:max-w-none"
                    >
                        تعاونا مع كبرى الشركات لتحويل الأفكار المعقدة إلى تجارب رقمية مذهلة.
                    </motion.p>
                </div>

                {/* الجريد الـ 3D - تم تحسين الأداء هنا وتوسيط العناصر للموبايل */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative justify-items-center">
                        {partners.map((partner, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    rotate: "0deg", 
                                    zIndex: 50
                                }}
                                // تحسين الأداء باستخدام transform-gpu
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                style={{ 
                                    rotate: partner.rotate,
                                    willChange: "transform" // تخبر المتصفح بتجهيز الـ GPU
                                }}
                                className="relative aspect-square w-32 md:w-40 bg-[#0f172a] border border-white/10 rounded-3xl p-6 flex items-center justify-center group cursor-pointer overflow-hidden drop-shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <Image
                                    src={partner.img}
                                    alt={partner.name}
                                    width={160}
                                    height={160}
                                    className="relative z-10 w-full h-auto object-contain transition-transform duration-500"
                                />
                            </motion.div>
                        ))}

                        {/* كارت الـ +50 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, rotate: "0deg", zIndex: 50 }}
                            style={{ 
                                rotate: "2deg",
                                willChange: "transform"
                            }}
                            className="relative aspect-square w-32 md:w-40 bg-blue-600 rounded-3xl flex flex-col items-center justify-center text-white drop-shadow-xl group cursor-pointer"
                        >
                            <span className="text-3xl md:text-5xl font-black">+10</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter opacity-80">شريك نجاح</span>
                            
                            {/* تم استبدال الـ Blur التقيل بـ Opacity بسيطة في الهوفر */}
                            <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500" />
                        </motion.div>
                    </div>

                    <div className="absolute -z-10 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
                </div>
            </div>
        </section>
    );
}