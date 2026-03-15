"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// اللوجوهات
import client1 from "../../assets/client-1.png";
import client2 from "../../assets/client-2.png";
import client3 from "../../assets/client-3.png";
import client4 from "../../assets/client-4.png";
import client5 from "../../assets/brand_5.webp";

const partners = [client1, client2, client3, client4, client5];

export default function PremiumPartners() {
    return (
        <section className="relative w-full py-24 overflow-hidden" dir="rtl">

            {/* عنوان السكشن - بسيط وواضح ومتمركز */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-white text-4xl md:text-6xl font-black mb-4"
                >
                    شركاء <span className="text-blue-500">النجاح</span>
                </motion.h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            {/* حاوية اللوجوهات - حركة ناعمة جداً وواضحة */}
            <div className="flex flex-col gap-10">

                {/* الصف الأول - تم تعديل المحور ليتناسب مع RTL */}
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["50%", "0%"] }} // تعديل الحركة لتبدأ من اليمين بشكل صحيح
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex gap-10 px-5"
                    >
                        {[...partners, ...partners, ...partners].map((img, idx) => (
                            <div
                                key={idx}
                                className="w-48 md:w-64 h-24 md:h-32 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-6 backdrop-blur-sm hover:border-blue-500/50 transition-colors group"
                            >
                                <Image
                                    src={img}
                                    alt="partner"
                                    className="object-contain w-full h-full brightness-100 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* الصف الثاني - تم تعديل المحور ليتحرك عكس الاتجاه بانتظام */}
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "50%"] }} // المحور المعاكس لضمان استمرار الحركة بدون قطع
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="flex gap-10 px-5"
                    >
                        {[...partners, ...partners, ...partners].map((img, idx) => (
                            <div
                                key={idx}
                                className="w-48 md:w-64 h-24 md:h-32 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-6 backdrop-blur-sm hover:border-blue-500/50 transition-colors group"
                            >
                                <Image
                                    src={img}
                                    alt="partner"
                                    className="object-contain w-full h-full brightness-100 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            
        </section>
    );
}