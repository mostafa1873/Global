"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // ضفنا useRouter عشان التنقل الديناميكي بين اللغات
import { useTranslations } from "next-intl"; // استدعاء هوك الترجمة
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Globe, Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/works/header.webp"; // مسار اللوجو الفعلي في مشروعك الحالي

// تعريف الـ Type للـ Props عشان التايب سكريبت يفهم الـ locale ويشيل الخط الأحمر
interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // اشتقاق الـ lang تلقائياً من الـ locale اللي جاي من السيرفر عشان يفضل متناسق مع الموقع كله بالكامل
  const lang = locale === "ar" ? "AR" : "EN";

  const pathname = usePathname();
  const router = useRouter();

  // تفعيل هوك الترجمة الخاص بسيكشن Navbar
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  // دالة تحويل اللغة وتغيير المسار (URL) مع الحفاظ على الصفحة اللي المستخدم واقف عليها
  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";

    // تقسيم الـ pathname الحالي لاستبدال الـ locale القديم بالجديد
    const segments = pathname.split("/");
    segments[1] = nextLocale; // الـ segment رقم 1 هو الـ locale دايماً في الـ URL

    const newPath = segments.join("/");
    router.push(newPath);
  };

  // الداتا واللينكات القديمة بالظبط بدون أي تغيير ومربوطة بالترجمة ديناميكياً
  // تم تعديل الـ href ليقرأ الـ locale الحالي عشان المستخدم ميرجعش للصفحة الرئيسية بالعربي لو داس على لينك
  const navLinks = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("services"), href: `/${locale}/services` },
    { name: t("portfolio"), href: `/${locale}/portfolio` },
    { name: t("blog"), href: `/${locale}/blog` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    // الـ dir بيتغير ديناميكياً حسب اللغة لتنسيق النصوص مع الحفاظ على هيكل الديزاين
    <nav className="fixed top-2 md:top-4 left-0 right-0 z-[100] px-2 md:px-8" dir={lang === "AR" ? "rtl" : "ltr"}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${scrolled
          ? "bg-black/60 backdrop-blur-2xl border border-white/10 py-3 px-5 md:px-4 shadow-[0_20px_50px_rgba(0,21,106,0.3)]"
          : "bg-black/40 py-5 px-5 md:py-4 md:px-5 border border-white/10"
          } rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-between`}
        dir="ltr" // ثابت ltr عشان ترتيب الديزاين يفضل (اللوجو شمال - اللينكات وسط - الأزرار يمين)
      >
        {/* Logo Section */}
        <Link href={`/${locale}`} className="relative flex items-center group overflow-hidden shrink-0">
          <motion.div whileHover={{ scale: 1.02 }} className="relative z-10 w-[120px] md:w-[190px]">
            <Image src={logo} alt="Global Nexus Logo" width={190} height={80} className="w-full h-auto" priority />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 relative">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              // التعديل هنا: إضافة لون خفيف للينك النشط ليتميز عن الباقي
              className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${pathname === link.href ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white"
                }`}
            >
              <span className="relative z-10">{link.name}</span>
              {/* التعديل هنا: الـ Pill الأزرق بيفضل ثابت على الصفحة الحالية ولما تعمل هوفر يروح مع الماوس ذكياً */}
              {(hoveredIndex === index || (hoveredIndex === null && pathname === link.href)) && (
                <motion.span
                  layoutId="nav-hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-blue-600/20 rounded-full border border-blue-500/30"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-1.5 md:gap-3">
          {/* زر تشغيل الترجمة وتغيير الستيت */}
          <button
            onClick={toggleLanguage}
            className="hidden sm:flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-blue-600 transition-all duration-300 cursor-pointer"
          >
            <Globe size={16} />
          </button>

          {/* زر الأكشن متعدل باللينك والداتا القديمة (/call) وبنفس ديزاين الجديد بالظبط */}
          <Link
            href={`/${locale}/call`}
            className="relative group flex items-center justify-center gap-1 md:gap-2 bg-white text-black px-2 py-1 md:px-5 md:py-2 rounded-full text-[8px] md:text-xs font-black uppercase tracking-tight md:tracking-wider transition-all duration-300 shrink-0 shadow-[0_4px_12px_rgba(255,255,255,0.1)] active:scale-90"
          >
            {/* تأثير النبض - مخفي في الموبايل */}
            <div className="absolute inset-0 rounded-full bg-white opacity-10 animate-pulse hidden md:block group-hover:hidden" />

            <span className="relative z-10 flex items-center gap-1 md:gap-2">
              {t("bookCall")}

              {/* الدائرة والسهم: حجم ميني جداً للموبايل وحجم طبيعي للديسكطوب */}
              <div className="relative w-3 h-3 md:w-5 md:h-5 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 group-hover:rotate-45 transition-transform duration-300"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white bg-white/5 rounded-xl border border-white/10 active:scale-90 transition-transform"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }}
            className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[150] lg:hidden flex flex-col h-screen w-full overflow-hidden"
          >
            {/* Noise Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Header: Logo Left - Close Right */}
            <div className="relative w-full flex justify-between items-center p-6" dir="ltr">
              <div className="flex-shrink-0">
                <Image src={logo} alt="Logo" width={120} height={80} className="brightness-125" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="relative flex-1 flex flex-col justify-evenly px-6 overflow-hidden">

              {/* Nav Links */}
              {/* التعديل هنا: الـ dir بيتغير بناءً على اللغة عشان يقلب اتجاه الـ Flex */}
              <nav className="flex flex-col items-center w-full" dir={lang === "AR" ? "rtl" : "ltr"}>
                <div className="flex flex-col w-full gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex flex-row items-center justify-between px-5 py-2.5 rounded-full transition-all border ${pathname === link.href
                          ? "bg-white/[0.08] border-white/20"
                          : "bg-white/[0.02] border-white/5"
                          }`}
                      >
                        <span className={`text-2xl font-bold uppercase ${pathname === link.href ? "text-blue-500" : "text-white"}`}>
                          {link.name}
                        </span>
                        {/* السهم هنا هيتقلب تلقائياً مع الـ dir، ولو احتجت تدوره في الإنجليزي ضفنا له كلاس دورانه */}
                        <div className={`transition-all ${pathname === link.href ? "text-blue-500" : "text-white/30"} ${lang === "EN" ? "rotate-180" : ""}`}>
                          <ChevronLeft size={20} />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Footer Area */}
              <div className="flex flex-col items-center gap-4">
                <motion.button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white cursor-pointer"
                  dir="ltr"
                >
                  <Globe size={14} className="text-blue-500" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                    {t("englishVersion")}
                  </span>
                </motion.button>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-6 items-center justify-center text-gray-400 text-lg">
                    <FaFacebookF /> <FaInstagram /> <FaBehance /> <FaLinkedinIn />
                  </div>
                  <p className="text-[8px] text-gray-600 font-bold tracking-[0.3em] uppercase">
                    © 2026 GLOBAL NEXUS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}