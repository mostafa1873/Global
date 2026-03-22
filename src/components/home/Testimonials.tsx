"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// اللوجوهات - تأكد من صحة المسارات عندك
import client1 from "../../assets/client-1.png";
import client2 from "../../assets/client-2.png";
import client3 from "../../assets/client-3.png";
import client4 from "../../assets/client-4.png";
import client5 from "../../assets/brand_5.webp";

const partners = [
    { img: client1, name: "Partner One", size: "col-span-1" },
    { img: client2, name: "Partner Two", size: "col-span-1 md:col-span-2" },
    { img: client3, name: "Partner Three", size: "col-span-1" },
    { img: client4, name: "Partner Four", size: "col-span-1 md:col-span-2" },
    { img: client5, name: "Partner Five", size: "col-span-1" },
];

export default function CreativePartnersGrid() {
    return (
        <section className="relative w-full py-10 px-4 md:px-6 overflow-hidden" dir="rtl">

            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-20 gap-8 border-b border-white/5 pb-10">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4 block"
                        >
                            Trusted By Leaders
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-white text-3xl md:text-7xl font-black leading-tight tracking-tighter text-center"
                        >
                            نبني المستقبل مع <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-600">
                                شركاء عالميين
                            </span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 text-base md:text-xl max-w-xs font-light leading-relaxed text-center"
                    >
                        تعاونا مع كبرى الشركات لتحويل الأفكار المعقدة إلى تجارب رقمية مذهلة.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`${partner.size} group relative aspect-square md:aspect-auto md:h-64 rounded-2xl md:rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden flex items-center justify-center transition-all duration-700 hover:border-blue-500/30 hover:bg-white/[0.05]`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <Image
                                src={partner.img}
                                alt={partner.name}
                                className="relative z-10 w-[60%] h-auto object-contain group-hover:scale-110 transition-all duration-700 ease-out"
                            />

                            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-500 transition-colors duration-500" />
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="col-span-1 md:col-span-1 aspect-square md:aspect-auto md:h-64 rounded-2xl md:rounded-[2rem] bg-blue-600 flex flex-col items-center justify-center text-white p-4 text-center group cursor-pointer hover:bg-blue-500 transition-colors duration-500"
                    >
                        <span className="text-2xl md:text-5xl font-black mb-1">+50</span>
                        <span className="text-[10px] md:text-base font-medium opacity-90 leading-tight">شريك نجاح</span>
                        <div className="mt-2 md:mt-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}