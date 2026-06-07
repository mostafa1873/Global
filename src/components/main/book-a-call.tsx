"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiSend, FiCalendar, FiClock, FiBriefcase, FiPhone, FiVideo, FiCheckCircle, FiLoader } from "react-icons/fi";
import { useTranslations } from "next-intl";

interface BookACallFormProps {
  locale: string;
}

export default function BookACall({ locale }: BookACallFormProps) {
  const t = useTranslations("BookACall");

  const servicesArray = t.raw("services") as string[];
  const contactMethodsArray = t.raw("contactMethods") as string[];

  // حقول الاختيار المنسدلة
  const [serviceType, setServiceType] = useState<string>(t("serviceDefault"));
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const [contactMethod, setContactMethod] = useState<string>(t("contactDefault"));
  const [isContactOpen, setIsContactOpen] = useState(false);

  // حالات الفورم والـ Submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    setServiceType(t("serviceDefault"));
    setContactMethod(t("contactDefault"));
  }, [locale, t]);

  // دالة تحويل الوقت لصيغة 12 ساعة احترافية
  const format12HourTime = (time24: string) => {
    if (!time24) return "";
    const [hourStr, minuteStr] = time24.split(":");
    let hours = parseInt(hourStr, 10);

    const ampm = locale === "ar"
      ? (hours >= 12 ? "مساءً" : "صباحاً")
      : (hours >= 12 ? "PM" : "AM");

    hours = hours % 12;
    hours = hours ? hours : 12; // الساعة 00 تتحول لـ 12

    return `${hours}:${minuteStr} ${ampm}`;
  };

  // تحديث البيانات الأساسية أوتوماتيك بناءً على الـ name attribute
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // إرسال الفورم وربطه بملف الـ PHP
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ⚠️ استبدل الرابط ده بمسار ملف الـ PHP بتاعك المؤقت أو النهائي
      const response = await fetch("http://localhost/globalnexus/book-call.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          notes: formData.notes,
          serviceType: serviceType,
          contactMethod: contactMethod,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setIsSubmitted(true); // هيخفي الفورم ويظهر كارت النجاح علطول
      } else {
        alert(data.message || "حدث خطأ أثناء إرسال البيانات");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      alert("مشكلة في الاتصال بالسيرفر، تأكد من إعدادات الـ CORS");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const glassInputClasses = "w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl py-4 text-white text-sm focus:border-blue-500/50 focus:bg-white/[0.05] outline-none transition-all duration-300 placeholder:text-white/40 shadow-inner shadow-white/[0.01] text-start";
  const dropdownMenuClasses = "absolute top-[calc(100%+8px)] start-0 w-full bg-black/[0.9] backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] z-50 overflow-hidden flex flex-col";
  const dropdownItemClasses = "w-full text-start px-8 py-3.5 text-sm text-white hover:bg-blue-600/20 transition-colors duration-200 cursor-pointer";

  // فحص ذكي لمنع ظهور الترجمة الافتراضية كقيمة داخل كارت النجاح
  const displayedContactMethod = (contactMethod === t("contactDefault") && contactMethodsArray?.length > 0)
    ? contactMethodsArray
    : contactMethod;

  return (
    <section className="relative min-h-[100vh] w-full flex items-start justify-center overflow-hidden pt-32 pb-20 px-6">

      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start justify-between">

        {/* العمود الخاص بالنصوص - تم تعديل المحاذاة للمنتصف في الموبيل */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:w-[40%] items-center lg:items-start w-full"
        >
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-500/10 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-blue-600 text-[10px] font-bold tracking-widest uppercase">{t("badge")}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-white text-3xl md:text-5xl font-black leading-[1.5] mb-8 tracking-tight w-full text-center lg:text-start">
            {t("titleLine1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">{t("titleLine2")}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-white text-lg md:text-xl leading-relaxed mb-12 max-w-sm w-full text-center lg:text-start mx-auto lg:mx-0">
            {t("description")}
          </motion.p>
        </motion.div>

        {/* العمود الخاص بالفورم / كارت النجاح */}
        <div className="relative w-full lg:w-[60%] min-h-[500px]">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-full"
              >
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={t("placeholderName")} className={`${glassInputClasses} px-5`} />
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t("placeholderEmail")} className={`${glassInputClasses} px-5`} />
                  </div>

                  <div className="relative">
                    <FiPhone className="absolute start-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none z-10" />
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={t("placeholderPhone")} className={`${glassInputClasses} ps-12 pe-5`} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* نوع الخدمة */}
                    <div className="relative group">
                      <FiBriefcase className="absolute start-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none z-10" />
                      <button
                        type="button"
                        onClick={() => { setIsServiceOpen(!isServiceOpen); setIsContactOpen(false); }}
                        className={`${glassInputClasses} ps-12 pe-5 flex items-center justify-between w-full relative ${isServiceOpen ? 'border-blue-500/50 bg-white/[0.05]' : ''}`}
                      >
                        <span>{serviceType}</span>
                        <FiChevronDown className="text-white transition-transform duration-300 group-hover:text-blue-500" />
                      </button>

                      <AnimatePresence>
                        {isServiceOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={dropdownMenuClasses}
                          >
                            {servicesArray.map((item) => (
                              <div
                                key={item}
                                onClick={() => { setServiceType(item); setIsServiceOpen(false); }}
                                className={dropdownItemClasses}
                              >
                                {item}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* طريقة التواصل */}
                    <div className="relative group">
                      <FiVideo className="absolute start-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none z-10" />
                      <button
                        type="button"
                        onClick={() => { setIsContactOpen(!isContactOpen); setIsServiceOpen(false); }}
                        className={`${glassInputClasses} ps-12 pe-5 flex items-center justify-between w-full relative ${isContactOpen ? 'border-blue-500/50 bg-white/[0.05]' : ''}`}
                      >
                        <span>{contactMethod}</span>
                        <FiChevronDown className="text-white transition-transform duration-300 group-hover:text-blue-500" />
                      </button>

                      <AnimatePresence>
                        {isContactOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={dropdownMenuClasses}
                          >
                            {contactMethodsArray.map((item) => (
                              <div
                                key={item}
                                onClick={() => { setContactMethod(item); setIsContactOpen(false); }}
                                className={dropdownItemClasses}
                              >
                                {item}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <FiCalendar className="absolute start-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none z-10" />
                      <input required type="date" name="date" value={formData.date} onChange={handleInputChange} className={`${glassInputClasses} [color-scheme:dark] ps-12 pe-5`} />
                    </div>
                    <div className="relative">
                      <FiClock className="absolute start-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none z-10" />
                      <input required type="time" name="time" value={formData.time} onChange={handleInputChange} className={`${glassInputClasses} [color-scheme:dark] ps-12 pe-5`} />
                    </div>
                  </div>

                  <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={3} placeholder={t("placeholderNotes")} className={`${glassInputClasses} px-5 resize-none`}></textarea>

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group mt-2 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] border border-blue-500/50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <FiLoader className="animate-spin text-lg" />
                    ) : (
                      <>
                        <span>{t("submitBtn")}</span>
                        <FiSend className="transition-transform duration-300 rtl:-scale-x-100 group-hover:-translate-y-0.5 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              /* كارت النجاح المطور باستايل Glassmorphism الفاخر - تم توسيط محتوياته للموبيل بالكامل */
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-2xl border border-white/[0.12] rounded-[2.5rem] p-8 md:p-12 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] w-full flex flex-col items-center justify-center text-center min-h-[520px] relative overflow-hidden"
              >
                {/* توهج داخلي خفيف في الخلفية لتعزيز تأثير الزجاج */}
                <div className="absolute -top-24 -inline-flex w-72 h-72 bg-blue-500/[0.08] blur-[80px] rounded-full pointer-events-none" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  className="mb-6 text-blue-600 relative"
                >
                  <FiCheckCircle size={72} />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-2xl md:text-3xl font-black mb-4 tracking-tight drop-shadow-sm"
                >
                  {locale === "ar" ? "تم حجز مكالمتك بنجاح!" : "Call Booked Successfully!"}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/70 text-base md:text-lg max-w-md leading-relaxed space-y-4 font-normal"
                >
                  <p className="px-2">
                    {locale === "ar" ? (
                      <>
                        شكراً لك يا <span className="text-white font-bold underline decoration-blue-500/50 underline-offset-4">{formData.name}</span>. تم تأكيد موعدكم بنجاح، وسيتم التواصل معكم في الوقت المحدد.
                      </>
                    ) : (
                      <>
                        Thank you <span className="text-white font-bold underline decoration-blue-500/50 underline-offset-4">{formData.name}</span>. Your request has been received.
                      </>
                    )}
                  </p>

                  {/* لوحة الموعد المحدثة - متناسقة ومتمركزة في الموبيل وتتحول لشبكة متوازنة في الديسكتوب */}
                  <div className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-5 md:p-6 mt-8 flex flex-col gap-4 text-center sm:text-start">

                    {/* طريقة التواصل */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/80">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-blue-600">
                        <FiVideo size={16} />
                      </div>
                      <div className="flex flex-col items-center sm:items-start">
                        <span className="text-white/40 text-xs block font-mono uppercase tracking-widest mb-0.5">{locale === "ar" ? "طريقة التواصل" : "Contact Method"}</span>
                        <span className="font-bold text-white text-base">{displayedContactMethod}</span>
                      </div>
                    </div>

                    {/* خط فاصل ناعم جداً */}
                    <div className="h-[1px] w-full bg-white/[0.06]" />

                    {/* التاريخ والوقت - يتحول لعمود متمركز في الموبيل ولمستطيلين متجاورين في الشاشات الأكبر لضمان عدم تداخل النصوص */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-white/80">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-blue-500 shrink-0">
                          <FiCalendar size={15} />
                        </div>
                        <div className="flex flex-col items-center sm:items-start">
                          <span className="text-white/40 text-[11px] block font-mono uppercase tracking-wider mb-0.5">{locale === "ar" ? "التاريخ" : "Date"}</span>
                          <span className="font-semibold text-white tracking-wide text-sm">{formData.date}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-white/80">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-blue-500 shrink-0">
                          <FiClock size={15} />
                        </div>
                        <div className="flex flex-col items-center sm:items-start">
                          <span className="text-white/40 text-[11px] block font-mono uppercase tracking-wider mb-0.5">{locale === "ar" ? "التوقيت" : "Time"}</span>
                          <span className="font-semibold text-white tracking-wide text-sm">{format12HourTime(formData.time)}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>

                {/* زرار تعديل الموعد */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", date: "", time: "", notes: "" });
                  }}
                  className="mt-8 px-6 py-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-white/60 hover:text-white text-xs font-semibold tracking-wide transition-all duration-300 hover:border-white/[0.15] backdrop-blur-md active:scale-[0.98] cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                >
                  {locale === "ar" ? "تعديل الموعد أو حجز جديد" : "Book Another Call"}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}