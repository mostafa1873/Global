"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiSend, FiCalendar, FiClock, FiBriefcase, FiPhone, FiVideo } from "react-icons/fi";
import { useTranslations } from "next-intl";

interface BookACallFormProps {
  locale: string;
}

export default function BookACall({ locale }: BookACallFormProps) {
  const t = useTranslations("BookACall");

  const servicesArray = t.raw("services") as string[];
  const contactMethodsArray = t.raw("contactMethods") as string[];

  const [serviceType, setServiceType] = useState<string>(t("serviceDefault"));
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const [contactMethod, setContactMethod] = useState<string>(t("contactDefault"));
  const [isContactOpen, setIsContactOpen] = useState(false);

  React.useEffect(() => {
    setServiceType(t("serviceDefault"));
    setContactMethod(t("contactDefault"));
  }, [locale, t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  // 1. الكلاسات العامة للحقول: استخدمنا text-start عشان يظبط أوتوماتيك يمين في العربي وشمال في الإنجليزي
  const glassInputClasses = "w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl py-4 text-white text-sm focus:border-blue-500/50 focus:bg-white/[0.05] outline-none transition-all duration-300 placeholder:text-white shadow-inner shadow-white/[0.01] text-start";
  
  // 2. كلاسات القائمة المنسدلة: استخدمنا start-0 بدل left-0
  const dropdownMenuClasses = "absolute top-[calc(100%+8px)] start-0 w-full bg-black/[0.9] backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] z-50 overflow-hidden flex flex-col";
  const dropdownItemClasses = "w-full text-start px-8 py-3.5 text-sm text-white hover:bg-blue-600/20 transition-colors duration-200 cursor-pointer";

  return (
    // شلنا الـ dir الثابت وسبناه يعتمد على الـ html tag الأساسي
    <section className="relative min-h-[100vh] w-full flex items-start justify-center overflow-hidden pt-32 pb-20 px-6">

      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-between">

        {/* العمود الخاص بالنصوص */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:w-[40%] items-start w-full"
        >
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-500/10 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-blue-600 text-[10px] font-bold tracking-widest uppercase">{t("badge")}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-white text-3xl md:text-5xl font-black leading-[1.5] mb-8 tracking-tight w-full text-start">
            {t("titleLine1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">{t("titleLine2")}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-white text-lg md:text-xl leading-relaxed mb-12 max-w-sm w-full text-start">
            {t("description")}
          </motion.p>
        </motion.div>

        {/* العمود الخاص بالفورم */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:w-[60%]"
        >
          <div className="relative z-10 bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder={t("placeholderName")} className={`${glassInputClasses} px-5`} />
                <input type="email" placeholder={t("placeholderEmail")} className={`${glassInputClasses} px-5`} />
              </div>

              {/* حقل الموبايل */}
              <div className="relative">
                {/* الأيقونة هتقف في البداية أوتوماتيك (يمين في العربي وشمال في الإنجليزي) بفضل start-5 */}
                <FiPhone className="absolute start-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none z-10" />
                <input type="tel" placeholder={t("placeholderPhone")} className={`${glassInputClasses} ps-12 pe-5`} />
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

              {/* التاريخ والوقت */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FiCalendar className="absolute start-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none z-10" />
                  <input type="date" className={`${glassInputClasses} [color-scheme:dark] ps-12 pe-5`} />
                </div>
                <div className="relative">
                  <FiClock className="absolute start-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none z-10" />
                  <input type="time" className={`${glassInputClasses} [color-scheme:dark] ps-12 pe-5`} />
                </div>
              </div>

              <textarea rows={3} placeholder={t("placeholderNotes")} className={`${glassInputClasses} px-5 resize-none`}></textarea>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group mt-2 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] border border-blue-500/50">
                <span>{t("submitBtn")}</span>
                {/* قلبنا أيقونة الإرسال في العربي عشان تشاور صح للناحية التانية، وعملنا تأثير التحريك متوافق */}
                <FiSend className="transition-transform duration-300 rtl:-scale-x-100 group-hover:-translate-y-0.5 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}