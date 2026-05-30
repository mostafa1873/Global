"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedBudget, setSelectedBudget] = useState<string>("");

    const services = ["تصميم مواقع", "UI/UX", "تطوير الويب", "تسويق", "هوية بصرية"];
    const budgets = ["استشارة مجانية", "أقل من 20K", "20K - 50K", "أكثر من 50K"];

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    return (
        <section className="w-full min-h-screen text-white pt-25 pb-20 lg:pt-44 lg:pb-24 px-4 md:px-12 flex flex-col items-center justify-center gap-16" dir="rtl">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* --- الجنب الأيمن: بيانات التواصل والسوشيال ميديا --- */}
                <div className="lg:col-span-5 space-y-10 flex flex-col items-center lg:items-start w-full">
                    <div className="space-y-4 text-center lg:text-right flex flex-col items-center lg:items-start">
                        <span className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase border-r-2 border-blue-600 pr-3">
                            دعنا نناقش مشروعك القادم
                        </span>
                        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight leading-tight">
                            ذا كنت تبحث عن تطوير حضورك الرقمي أو بناء أنظمة تساعد أعمالك على النمو بشكل أكثر كفاءة <br />
                            <span className="bg-gradient-to-l from-blue-600 to-[#1f6ed4] bg-clip-text text-transparent">
                                 يسعدنا التواصل معك.
                            </span>
                        </h1>
                        <p className="text-white/80 text-sm max-w-sm leading-relaxed">
                            لديك فكرة مشروع أو ترغب في تطوير أعمالك؟ اترك لنا رسالة وسنقوم بالرد عليك في أقرب وقت ممكن.
                        </p>
                    </div>

                    {/* كروت قنوات الاتصال السريعة ببياناتك */}
                    <div className="space-y-4 max-w-sm w-full mx-auto lg:mx-0">
                        {/* الإيميل */}
                        <a href="mailto:info@globalnexuseg.com" className="flex flex-col lg:flex-row items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#4aa3ff]/30 hover:shadow-[0_0_20px_rgba(74,163,255,0.05)] transition-all duration-300 group text-center lg:text-right justify-center lg:justify-start">
                            <div className="w-10 h-10 rounded-xl bg-[#0c4b84]/20 border border-[#1f6ed4]/30 flex items-center justify-center text-[#4aa3ff] group-hover:bg-[#4aa3ff] group-hover:text-black transition-colors duration-300 shrink-0">
                                <Mail size={18} />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <p className="text-[10px] font-bold text-white/50 uppercase">ارسل لنا إيميل</p>
                                <p className="text-sm font-medium text-white group-hover:text-white transition-colors tracking-wider">
                                    info@globalnexuseg.com
                                </p>
                            </div>
                        </a>

                        {/* الهاتف */}
                        <a href="tel:201109458238" className="flex flex-col lg:flex-row items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#4aa3ff]/30 hover:shadow-[0_0_20px_rgba(74,163,255,0.05)] transition-all duration-300 group text-center lg:text-right justify-center lg:justify-start">
                            <div className="w-10 h-10 rounded-xl bg-[#0c4b84]/20 border border-[#1f6ed4]/30 flex items-center justify-center text-[#4aa3ff] group-hover:bg-[#4aa3ff] group-hover:text-black transition-colors duration-300 shrink-0">
                                <Phone size={18} />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <p className="text-[10px] font-bold text-white/50 uppercase">اتصل بنا مباشرة</p>
                                <p className="text-sm font-medium text-white group-hover:text-white transition-colors" dir="ltr">+20 110 945 8238</p>
                            </div>
                        </a>

                        {/* العنوان */}
                        <div className="flex flex-col lg:flex-row items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#4aa3ff]/30 transition-all duration-300 text-center lg:text-right justify-center lg:justify-start">
                            <div className="w-10 h-10 rounded-xl bg-[#0c4b84]/20 border border-[#1f6ed4]/30 flex items-center justify-center text-[#4aa3ff] shrink-0">
                                <MapPin size={18} />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <p className="text-[10px] font-bold text-white/50 uppercase">المقر الرئيسي</p>
                                <p className="text-sm font-medium text-white"> البحيرة - مصر</p>
                            </div>
                        </div>
                    </div>

                    {/* أيقونات السوشيال ميديا */}
                    <div className="space-y-3 w-full flex flex-col items-center lg:items-start text-center lg:text-right">
                        <p className="text-xs font-bold text-white uppercase tracking-wider">تابعنا على منصاتنا</p>
                        <div className="flex gap-4 items-center justify-center lg:justify-start">
                            {[
                                { icon: FaFacebookF, link: "https://web.facebook.com/GlobalNexus.Egypt/?rdid=8c2wIiGvCoqjjqIv" },
                                { icon: FaInstagram, link: "https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fglobalnexus_eg%3Figsh%3DMWp5emNjaXdlb2g0cg%26__coig_ufac%3D1#" },
                                { icon: FaTiktok, link: "https://www.tiktok.com/@global.nexus5?is_from_webapp=1&sender_device=pc" },
                                { icon: FaBehance, link: "https://www.linkedin.com/company/globalnexus-eg/?viewAsMember=true" },
                                { icon: FaLinkedinIn, link: "https://www.behance.net/globa1nexus" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:border-[#4aa3ff] hover:shadow-[0_0_15px_rgba(74,163,255,0.2)] transition-all duration-300 hover:scale-110 active:scale-95 text-base"
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- الجنب الأيسر: الفورم --- */}
                <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 rounded-[2rem] p-6 md:p-8 shadow-[0_0_50px_rgba(12,75,132,0.1)] relative overflow-hidden w-full">
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#0c4b84]/20 rounded-full blur-[80px] pointer-events-none" />

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10 text-center lg:text-right flex flex-col">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5 text-center lg:text-right">
                                <label className="text-xs font-bold text-white lg:mr-1">الاسم</label>
                                <input
                                    type="text"
                                    placeholder="الاسم بالكامل"
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#4aa3ff] focus:shadow-[0_0_15px_rgba(74,163,255,0.08)] transition-all duration-300 text-xs text-center lg:text-right"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 text-center lg:text-right">
                                <label className="text-xs font-bold text-white lg:mr-1">الشركة</label>
                                <input
                                    type="text"
                                    placeholder="اسم الشركة"
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#4aa3ff] focus:shadow-[0_0_15px_rgba(74,163,255,0.08)] transition-all duration-300 text-xs text-center lg:text-right"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 text-center lg:text-right">
                                <label className="text-xs font-bold text-white lg:mr-1">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#4aa3ff] focus:shadow-[0_0_15px_rgba(74,163,255,0.08)] transition-all duration-300 text-xs text-center lg:text-right"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 text-center lg:text-right">
                                <label className="text-xs font-bold text-white lg:mr-1">رقم الهاتف</label>
                                <input
                                    type="tel"
                                    placeholder="01111111111"
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#4aa3ff] focus:shadow-[0_0_15px_rgba(74,163,255,0.08)] transition-all duration-300 text-xs text-center lg:text-right"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 text-center lg:text-right">
                            <label className="text-xs font-black text-white lg:mr-1">أنا مهتم بـ</label>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {services.map((service) => {
                                    const isSelected = selectedServices.includes(service);
                                    return (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => toggleService(service)}
                                            className={`px-4 py-2 rounded-full text-[11px] font-bold border transition-all duration-300 active:scale-95 ${isSelected
                                                ? "bg-[#0c4b84]/30 border-[#4aa3ff] text-white shadow-[0_0_12px_rgba(74,163,255,0.15)]"
                                                : "bg-white/[0.01] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 text-center lg:text-right">
                            <label className="text-xs font-black text-white lg:mr-1">الميزانية المتوقعة</label>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {budgets.map((budget) => {
                                    const isSelected = selectedBudget === budget;
                                    return (
                                        <button
                                            key={budget}
                                            type="button"
                                            onClick={() => setSelectedBudget(budget)}
                                            className={`px-4 py-2 rounded-full text-[11px] font-bold border transition-all duration-300 active:scale-95 ${isSelected
                                                ? "bg-[#0c4b84]/30 border-[#4aa3ff] text-white shadow-[0_0_12px_rgba(74,163,255,0.15)]"
                                                : "bg-white/[0.01] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                                                }`}
                                        >
                                            {budget}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 text-center lg:text-right">
                            <label className="text-xs font-bold text-white lg:mr-1">تفاصيل مشروعك</label>
                            <textarea
                                rows={4}
                                placeholder="اكتب رسالتك هنا..."
                                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#4aa3ff] focus:shadow-[0_0_15px_rgba(74,163,255,0.08)] transition-all duration-300 text-xs resize-none text-center lg:text-right"
                            />
                        </div>

                        <div className="flex justify-center lg:justify-end pt-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="group flex items-center justify-center gap-3 bg-white text-black pl-2 pr-5 py-2.5 rounded-full text-xs font-black transition-all duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.05)] hover:bg-[#4aa3ff] hover:text-white hover:shadow-[0_0_25px_rgba(74,163,255,0.25)]"
                            >
                                <span>أرسل الآن</span>
                                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-3 h-3 rotate-[135deg] group-hover:rotate-[180deg] transition-transform duration-300"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>

            {/* --- قسم الخريطة المودرن --- */}
            <div className="w-full max-w-6xl mt-10">
                <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Overlay لتغميق الخريطة لتناسب الـ Dark Theme */}
                    <div className="absolute inset-0 bg-[#0c4b84]/10 pointer-events-none z-10" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60385611397!2d31.18842368149831!3d30.059488474268685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296efaa461!2sCairo%2C%20Cairo%20 Governorate!5e0!3m2!1sen!2seg!4v1715632485962!5m2!1sen!2seg"
                        className="w-full h-full grayscale invert-[0.9] contrast-[1.2] sepia-[0.1]"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* كارت صغير فوق الخريطة */}
                    <div className="absolute bottom-6 right-6 z-20 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#4aa3ff] flex items-center justify-center text-black">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <p className="text-xs font-bold"> البحيرة - مصر</p>
                                <p className="text-[10px] text-gray-400">نحن بانتظار زيارتك!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}