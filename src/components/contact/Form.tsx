"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    // نوع الخدمة المطلوبة المحدثة لتناسب نشاطك
    const services = ["تصميم مواقع", "UI/UX", "تتطوير الويب", "تسويق", "هوية بصرية"];

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    return (
        <section className="w-full min-h-screen text-white pt-25 pb-20 lg:pt-30 lg:pb-24 px-4 md:px-12 flex flex-col items-center justify-center gap-16 relative overflow-hidden selection:bg-blue-600/30" dir="rtl">
 
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* --- الجنب الأيمن: بيانات التواصل والسوشيال ميديا (موزعة بالـ order للموبايل وفي سياق الـ Flex للديسك توب) --- */}
                <div className="contents lg:flex lg:flex-col lg:col-span-5 lg:space-y-10 lg:items-start w-full">
                    
                    {/* الهيدر - يظهر أولاً في الموبايل */}
                    <div className="order-1 lg:order-none space-y-4 text-center lg:text-right flex flex-col items-center lg:items-start w-full">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white">
                            دعنا نناقش مشروعك القادم
                        </span>
                        <h1 className="text-xl md:text-xl font-black tracking-tight leading-[1.8] text-zinc-100">
                            إذا كنت تبحث عن تطوير حضورك الرقمي أو بناء حلول تساعد شركتك على النمو بشكل أكثر .{" "}
                            <br />
                            <span className="bg-gradient-to-l from-blue-600 to-blue-600 bg-clip-text text-transparent">
                                يسعدنا التواصل معك وفهم احتياجات مشروعك.
                            </span>
                        </h1>
                    </div>

                    {/* كروت قنوات الاتصال السريعة ببياناتك - تظهر بعد الفورم في الموبايل */}
                    <div className="order-3 lg:order-none space-y-4 max-w-sm w-full mx-auto lg:mx-0">
                        {/* الإيميل */}
                        <a href="mailto:info@globalnexuseg.com" className="flex flex-col lg:flex-row items-center gap-4 p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] hover:border-blue-600/30 hover:shadow-[0_0_25px_rgba(37,99,235,0.05)] transition-all duration-300 group text-center lg:text-right justify-center lg:justify-start">
                            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                <Mail size={18} />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">ارسل لنا إيميل</p>
                                <p className="text-sm font-bold text-slate-200 group-hover:text-blue-500 transition-colors tracking-wider">
                                    info@globalnexuseg.com
                                </p>
                            </div>
                        </a>

                        {/* الهاتف */}
                        <a href="tel:201109458238" className="flex flex-col lg:flex-row items-center gap-4 p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] hover:border-blue-600/30 hover:shadow-[0_0_25px_rgba(37,99,235,0.05)] transition-all duration-300 group text-center lg:text-right justify-center lg:justify-start">
                            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                <Phone size={18} />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">اتصل بنا مباشرة</p>
                                <p className="text-sm font-bold text-slate-200 group-hover:text-blue-500 transition-colors" dir="ltr">+20 110 945 8238</p>
                            </div>
                        </a>

                        {/* العنوان */}
                        <div className="flex flex-col lg:flex-row items-center gap-4 p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] hover:border-blue-600/20 transition-all duration-300 text-center lg:text-right justify-center lg:justify-start">
                            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-blue-500 shrink-0">
                                <MapPin size={18} />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">المقر الرئيسي</p>
                                <p className="text-sm font-bold text-slate-200"> البحيرة - مصر</p>
                            </div>
                        </div>
                    </div>

                    {/* أيقونات السوشيال ميديا - تظهر رابعاً في الموبايل */}
                    <div className="order-4 lg:order-none space-y-3 w-full flex flex-col items-center lg:items-start text-center lg:text-right">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">تابعنا على منصاتنا</p>
                        <div className="flex gap-4 items-center justify-center lg:justify-start">
                            {[
                                { icon: FaFacebookF, link: "https://web.facebook.com/GlobalNexus.Egypt/?rdid=8c2wIiGvCoqjjqIv" },
                                { icon: FaInstagram, link: "https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fglobalnexus_eg%3Figsh%3DMWp5emNjaXdlb2g0cg%26__coig_ufac%3D1#" },
                                { icon: FaTiktok, link: "https://www.tiktok.com/@global.nexus5?is_from_webapp=1&sender_device=pc" },
                                { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/globalnexus-eg/?viewAsMember=true" },
                                { icon: FaBehance, link: "https://www.behance.net/globa1nexus" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-slate-400 hover:text-blue-500 hover:border-blue-600/50 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-300 hover:scale-110 active:scale-95 text-base"
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- الجنب الأيسر: الفورم بتصميم Bento (يظهر ثانياً في الموبايل مباشرة بعد الهيدر) --- */}
                <div className="order-2 lg:order-none lg:col-span-7 bg-white/[0.01] backdrop-blur-md border border-white/[0.08] rounded-[2.5rem] p-6 md:p-10 shadow-[0_0_50px_rgba(37,99,235,0.02)] relative overflow-hidden w-full">
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

                    {/* نص قبل نموذج التواصل */}
                    <div className="mb-8 text-center lg:text-right relative z-10">
                        <p className="text-base text-slate-300 font-normal leading-relaxed opacity-95 text-center">
                            شاركنا تفاصيل مشروعك أو الخدمة التي تحتاجها، وسنقوم بمراجعة طلبك والتواصل معك لمناقشة الحل الأنسب لطبيعة نشاطك.
                        </p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10 text-center lg:text-right flex flex-col">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* حقل الاسم */}
                            <div className="flex flex-col gap-2 text-center lg:text-right">
                                <label className="text-xs font-bold text-white lg:mr-1">الاسم</label>
                                <input
                                    type="text"
                                    placeholder="الاسم بالكامل"
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs text-center lg:text-right"
                                />
                            </div>

                            {/* حقل اسم الشركة */}
                            <div className="flex flex-col gap-2 text-center lg:text-right">
                                <label className="text-xs font-bold text-white lg:mr-1">اسم الشركة</label>
                                <input
                                    type="text"
                                    placeholder="اسم شركتك أو نشاطك"
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs text-center lg:text-right"
                                />
                            </div>

                            {/* حقل البريد الإلكتروني */}
                            <div className="flex flex-col gap-2 text-center lg:text-right">
                                <label className="text-xs font-bold text-white lg:mr-1">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs text-center lg:text-right"
                                />
                            </div>

                            {/* حقل رقم الهاتف */}
                            <div className="flex flex-col gap-2 text-center lg:text-right">
                                <label className="text-xs font-bold text-white lg:mr-1">رقم الهاتف</label>
                                <input
                                    type="tel"
                                    placeholder="01111111111"
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs text-center lg:text-right"
                                />
                            </div>
                        </div>

                        {/* حقل نوع الخدمة المطلوبة */}
                        <div className="flex flex-col gap-3 text-center lg:text-right">
                            <label className="text-xs font-black text-white lg:mr-1 tracking-wide">نوع الخدمة المطلوبة</label>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {services.map((service) => {
                                    const isSelected = selectedServices.includes(service);
                                    return (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => toggleService(service)}
                                            className={`px-4 py-2 rounded-full text-[11px] font-bold border transition-all duration-300 active:scale-95 ${isSelected
                                                ? "bg-blue-600/20 border-blue-600/50 text-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.15)]"
                                                : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:border-white/20"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* حقل تفاصيل المشروع */}
                        <div className="flex flex-col gap-2 text-center lg:text-right">
                            <label className="text-xs font-bold text-white lg:mr-1">تفاصيل المشروع</label>
                            <textarea
                                rows={4}
                                placeholder="اكتب تفاصيل مشروعك أو الرؤية التي تريد تحقيقها هنا..."
                                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs resize-none text-center lg:text-right"
                            />
                        </div>

                        {/* الـ CTA المزدوج الاحترافي ومتناسق مع استايل البلوج المميز */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 pt-4">
                            {/* زرار احجز مكالمة استراتيجية */}
                            <motion.a
                                href="/call"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/[0.03] border border-white/10 text-white px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 hover:bg-white/10"
                            >
                                <Calendar size={14} className="text-blue-500" />
                                <span>احجز مكالمة استراتيجية</span>
                            </motion.a>

                            {/* زرار أرسل طلبك (تصميم متقن مثل أزرار البلوج الاحترافية) */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full sm:w-auto group flex items-center justify-center gap-3 border border-white/10 bg-white/[0.05] text-white pl-3 pr-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.05)] hover:bg-blue-600 hover:text-white hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]"
                            >
                                <span>أرسل طلبك</span>
                                <div className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-blue-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-2.5 h-2.5 rotate-[135deg] group-hover:rotate-[180deg] transition-transform duration-300"
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

            {/* --- النص الختامي لصفحة التواصل --- */}
            <div className="w-full max-w-4xl text-center px-4 mt-4">
                <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto border-t border-b border-white/[0.06] py-6">
                    سواء كنت في مرحلة بناء مشروع جديد أو ترغب في تطوير حضور شركتك الحالي، يمكننا مساعدتك على اختيار الحل الرقمي المناسب والبدء بخطوات واضحة ومنظمة.
                </p>
            </div>

            {/* --- قسم الخريطة المودرن المتناسق بالكامل --- */}
            <div className="w-full max-w-6xl mt-2">
                <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-white/[0.08] backdrop-blur-md bg-white/[0.01] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    {/* Overlay لتلقيم الإضاءة الزرقاء فوق الخريطة */}
                    <div className="absolute inset-0 bg-blue-600/5 pointer-events-none z-10" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60385611397!2d31.18842368149831!3d30.059488474268685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296efaa461!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1715632485962!5m2!1sen!2seg"
                        className="w-full h-full grayscale invert-[0.9] contrast-[1.2] sepia-[0.1]"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* كارت صغير ذكي فوق الخريطة */}
                    <div className="absolute bottom-6 right-6 z-20 bg-[#020202]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white"> البحيرة - مصر</p>
                                <p className="text-[10px] text-slate-400">نحن بانتظار زيارتك!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}