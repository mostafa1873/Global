"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, Loader2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

export default function ContactPage() {
    const t = useTranslations("ContactPage");
    const locale = useLocale();
    const currentDir = locale === "ar" ? "rtl" : "ltr";
    const isAr = locale === "ar";

    // تجميع بيانات الفورم في State واحدة
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        details: ""
    });
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; msg: string | null }>({
        type: null,
        msg: null
    });

    const services = [
        { key: "webDesign", label: t("services.webDesign") },
        { key: "uiux", label: t("services.uiux") },
        { key: "webDev", label: t("services.webDev") },
        { key: "marketing", label: t("services.marketing") },
        { key: "branding", label: t("services.branding") }
    ];

    const toggleService = (serviceKey: string) => {
        if (selectedServices.includes(serviceKey)) {
            setSelectedServices(selectedServices.filter((s) => s !== serviceKey));
        } else {
            setSelectedServices([...selectedServices, serviceKey]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, msg: null });

        // تجهيز مصفوفة الخدمات بأسماء الـ Labels الفعّالية المترجمة للإرسال
        const formattedServices = selectedServices.map(
            (key) => services.find((s) => s.key === key)?.label || key
        );

        const payload = {
            ...formData,
            services: formattedServices
        };

        try {
            // مسار ملف الـ PHP على سيرفر XAMPP المحلي الخاص بك
            const response = await fetch("http://localhost/globalnexus/contact.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.status === "success") {
                setSubmitStatus({
                    type: "success",
                    msg: isAr ? "تم إرسال طلبك بنجاح ! سنتواصل معك قريباً." : "Your message has been sent successfully!"
                });
                // تفريغ الحقول بعد النجاح
                setFormData({ name: "", company: "", email: "", phone: "", details: "" });
                setSelectedServices([]);
            } else {
                setSubmitStatus({
                    type: "error",
                    msg: isAr ? "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى." : "Failed to send message. Please try again."
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                msg: isAr ? "فشل الاتصال بالسيرفر المحلي!" : "Could not connect to the local server!"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full min-h-screen text-white pt-25 pb-20 lg:pt-30 lg:pb-24 px-4 md:px-12 flex flex-col items-center justify-center gap-16 relative overflow-hidden selection:bg-blue-600/30" dir={currentDir}>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* --- الجنب الأيمن: بيانات التواصل والسوشيال ميديا --- */}
                <div className={`contents lg:flex lg:flex-col lg:col-span-5 lg:space-y-10 w-full ${isAr ? "lg:items-start" : "lg:items-start"}`}>

                    <div className={`order-1 lg:order-none space-y-4 text-center flex flex-col items-center w-full ${isAr ? "lg:text-right lg:items-start" : "lg:text-left lg:items-start"}`}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white">
                            {t("badge")}
                        </span>
                        <h1 className="text-sm md:text-xl font-black tracking-tight leading-[1.8] text-zinc-100">
                            {t("titleMain")}{" "}
                            <br />
                            <span className="bg-gradient-to-l from-blue-600 to-blue-600 bg-clip-text text-transparent">
                                {t("titleSub")}
                            </span>
                        </h1>
                    </div>

                    <div className="order-3 lg:order-none space-y-4 max-w-sm w-full mx-auto lg:mx-0">
                        <a href="mailto:info@globalnexuseg.com" className={`flex flex-col lg:flex-row items-center gap-4 p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] hover:border-blue-600/30 hover:shadow-[0_0_25px_rgba(37,99,235,0.05)] transition-all duration-300 group text-center justify-center ${isAr ? "lg:text-right lg:justify-start" : "lg:text-left lg:justify-start"}`}>
                            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                <Mail size={18} />
                            </div>
                            <div className={`flex flex-col items-center ${isAr ? "lg:items-start" : "lg:items-start"}`}>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{t("emailLabel")}</p>
                                <p className="text-sm font-bold text-slate-200 group-hover:text-blue-500 transition-colors tracking-wider">
                                    info@globalnexuseg.com
                                </p>
                            </div>
                        </a>

                        <a href="tel:201109458238" className={`flex flex-col lg:flex-row items-center gap-4 p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] hover:border-blue-600/30 hover:shadow-[0_0_25px_rgba(37,99,235,0.05)] transition-all duration-300 group text-center justify-center ${isAr ? "lg:text-right lg:justify-start" : "lg:text-left lg:justify-start"}`}>
                            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                <Phone size={18} />
                            </div>
                            <div className={`flex flex-col items-center ${isAr ? "lg:items-start" : "lg:items-start"}`}>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{t("phoneLabel")}</p>
                                <p className="text-sm font-bold text-slate-200 group-hover:text-blue-500 transition-colors" dir="ltr">+20 110 945 8238</p>
                            </div>
                        </a>

                        <div className={`flex flex-col lg:flex-row items-center gap-4 p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] hover:border-blue-600/20 transition-all duration-300 text-center justify-center ${isAr ? "lg:text-right lg:justify-start" : "lg:text-left lg:justify-start"}`}>
                            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-blue-500 shrink-0">
                                <MapPin size={18} />
                            </div>
                            <div className={`flex flex-col items-center ${isAr ? "lg:items-start" : "lg:items-start"}`}>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{t("addressLabel")}</p>
                                <p className="text-sm font-bold text-slate-200"> {t("addressValue")}</p>
                            </div>
                        </div>
                    </div>

                    <div className={`order-4 lg:order-none space-y-3 w-full flex flex-col items-center text-center ${isAr ? "lg:items-start lg:text-right" : "lg:items-start lg:text-left"}`}>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t("socialTitle")}</p>
                        <div className={`flex gap-4 items-center justify-center ${isAr ? "lg:justify-start" : "lg:justify-start"}`}>
                            {[
                                { icon: FaFacebookF, link: "https://web.facebook.com/GlobalNexus.Egypt/" },
                                { icon: FaInstagram, link: "https://www.instagram.com/globalnexus_eg" },
                                { icon: FaTiktok, link: "https://www.tiktok.com/@global.nexus5" },
                                { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/globalnexus-eg/" },
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

                {/* --- الجنب الأيسر: الفورم بتصميم Bento --- */}
                <div className="order-2 lg:order-none lg:col-span-7 bg-white/[0.01] backdrop-blur-md border border-white/[0.08] rounded-[2.5rem] p-6 md:p-10 shadow-[0_0_50px_rgba(37,99,235,0.02)] relative overflow-hidden w-full">
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="mb-8 text-center relative z-10">
                        <p className={`text-base text-slate-300 font-normal leading-relaxed opacity-95 ${isAr ? "text-center lg:text-right" : "text-center lg:text-left"}`}>
                            {t("formDesc")}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={`space-y-6 relative z-10 text-center flex flex-col ${isAr ? "lg:text-right" : "lg:text-left"}`}>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* حقل الاسم */}
                            <div className={`flex flex-col gap-2 text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}>
                                <label className={`text-xs font-bold text-white ${isAr ? "lg:mr-1" : "lg:ml-1"}`}>{t("labelName")}</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={t("placeholderName")}
                                    className={`w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}
                                />
                            </div>

                            {/* حقل اسم الشركة */}
                            <div className={`flex flex-col gap-2 text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}>
                                <label className={`text-xs font-bold text-white ${isAr ? "lg:mr-1" : "lg:ml-1"}`}>{t("labelCompany")}</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder={t("placeholderCompany")}
                                    className={`w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}
                                />
                            </div>

                            {/* حقل البريد الإلكتروني */}
                            <div className={`flex flex-col gap-2 text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}>
                                <label className={`text-xs font-bold text-white ${isAr ? "lg:mr-1" : "lg:ml-1"}`}>{t("labelEmail")}</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={t("placeholderEmail")}
                                    className={`w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}
                                />
                            </div>

                            {/* حقل رقم الهاتف */}
                            <div className={`flex flex-col gap-2 text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}>
                                <label className={`text-xs font-bold text-white ${isAr ? "lg:mr-1" : "lg:ml-1"}`}>{t("labelPhone")}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder={t("placeholderPhone")}
                                    className={`w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}
                                />
                            </div>
                        </div>

                        {/* حقل نوع الخدمة المطلوبة */}
                        <div className={`flex flex-col gap-3 text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}>
                            <label className={`text-xs font-black text-white tracking-wide ${isAr ? "lg:mr-1" : "lg:ml-1"}`}>{t("labelServices")}</label>
                            <div className="grid grid-cols-2 gap-2 max-w-md mx-auto w-full sm:flex sm:flex-wrap sm:justify-center lg:justify-start lg:mx-0">
                                {services.map((service, index) => {
                                    const isSelected = selectedServices.includes(service.key);
                                    const isLastItem = index === services.length - 1;
                                    return (
                                        <button
                                            key={service.key}
                                            type="button"
                                            onClick={() => toggleService(service.key)}
                                            className={`px-4 py-2.5 rounded-full text-[11px] font-bold border transition-all duration-300 active:scale-95 text-center truncate ${isLastItem ? "col-span-2 sm:col-span-1" : "col-span-1"
                                                } ${isSelected
                                                    ? "bg-blue-600/20 border-blue-600/50 text-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.15)]"
                                                    : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:border-white/20"
                                                }`}
                                        >
                                            {service.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* حقل تفاصيل المشروع */}
                        <div className={`flex flex-col gap-2 text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}>
                            <label className={`text-xs font-bold text-white ${isAr ? "lg:mr-1" : "lg:ml-1"}`}>{t("labelDetails")}</label>
                            <textarea
                                rows={4}
                                name="details"
                                required
                                value={formData.details}
                                onChange={handleInputChange}
                                placeholder={t("placeholderDetails")}
                                className={`w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 text-xs resize-none text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}
                            />
                        </div>

                        {/* عرض حالة الإرسال للمستخدم بشكل مودرن */}
                        {submitStatus.msg && (
                            <div className={`text-xs font-bold p-3 rounded-xl border text-center ${submitStatus.type === "success"
                                    ? "bg-blue-600/5 border-blue-600/20 text-white"
                                    : "bg-rose-500/10 border-rose-500/20 text-white"
                                }`}>
                                {submitStatus.msg}
                            </div>
                        )}

                        {/* الـ CTA المزدوج الاحترافي */}
                        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${isAr ? "lg:justify-end" : "lg:justify-end"}`}>
                            <motion.a
                                href="/call"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/[0.03] border border-white/10 text-white px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 hover:bg-white/10"
                            >
                                <Calendar size={14} className="text-blue-500" />
                                <span>{t("btnCall")}</span>
                            </motion.a>

                            <motion.button
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full sm:w-auto group flex items-center justify-center gap-3 border border-white/10 bg-white/[0.05] text-white pl-3 pr-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.05)] hover:bg-blue-600 hover:text-white hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span>{isAr ? "جاري الإرسال" : "Sending"}</span>
                                        <Loader2 size={14} className="animate-spin text-blue-500 group-hover:text-white" />
                                    </>
                                ) : (
                                    <>
                                        <span>{t("btnSubmit")}</span>
                                        <div className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-blue-600">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className={`w-2.5 h-2.5 transition-transform duration-300 ${isAr ? "rotate-[135deg] group-hover:rotate-[180deg]" : "rotate-[45deg] group-hover:rotate-[90deg]"}`}
                                            >
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </div>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>

            {/* --- النص الختامي --- */}
            <div className="w-full max-w-4xl text-center px-4 mt-4">
                <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto border-t border-b border-white/[0.06] py-6">
                    {t("footerText")}
                </p>
            </div>

            {/* --- قسم الخريطة --- */}
            <div className="w-full max-w-6xl mt-2">
                <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-white/[0.08] backdrop-blur-md bg-white/[0.01] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    <div className="absolute inset-0 bg-blue-600/5 pointer-events-none z-10" />
                    <iframe
                        src="https://maps.google.com/maps?q=Alexandria,%20Egypt&t=&z=13&ie=UTF-8&iwloc=&output=embed"
                        className="w-full h-full grayscale invert-[0.9] contrast-[1.2] sepia-[0.1]"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className={`absolute bottom-6 z-20 bg-[#020202]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block ${isAr ? "right-6" : "left-6"}`}>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500">
                                <MapPin size={16} />
                            </div>
                            <div className={isAr ? "text-right" : "text-left"}>
                                <p className="text-xs font-bold text-white"> {t("mapCardTitle")}</p>
                                <p className="text-[10px] text-slate-400">{t("mapCardSub")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}