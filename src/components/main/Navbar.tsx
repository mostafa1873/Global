"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/works/header.webp"; // مسار اللوجو الفعلي في مشروعك الحالي

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lang, setLang] = useState("AR"); // الحفاظ على ستيت اللغة القديمة لترجمة الموقع
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  // الداتا واللينكات القديمة بالظبط بدون أي تغيير ومربوطة بالترجمة ديناميكياً
  const navLinks = [
    { name: lang === "AR" ? "الرئيسية" : "Home", href: "/" },
    { name: lang === "AR" ? "عن الشركة" : "About", href: "/about" },
    { name: lang === "AR" ? "خدماتنا" : "Services", href: "/services" },
    { name: lang === "AR" ? "أعمالنا" : "Portfolio", href: "/portfolio" },
    { name: lang === "AR" ? "المدونة" : "Blog", href: "/blog" },
    { name: lang === "AR" ? "تواصل معنا" : "Contact", href: "/contact" },
  ];

  return (
    // الـ dir بيتغير ديناميكياً حسب اللغة لتنسيق النصوص مع الحفاظ على هيكل الديزاين
    <nav className="fixed top-2 md:top-4 left-0 right-0 z-[100] px-2 md:px-8" dir={lang === "AR" ? "rtl" : "ltr"}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${scrolled
          ? "bg-black/60 backdrop-blur-2xl border border-white/10 py-2 px-3 md:px-4 shadow-[0_20px_50px_rgba(0,21,106,0.3)]"
          : "bg-black/40 py-3 px-4 md:py-4 md:px-5 border border-white/10"
          } rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-between`}
        dir="ltr" // ثابت ltr عشان ترتيب الديزاين يفضل (اللوجو شمال - اللينكات وسط - الأزرار يمين)
      >
        {/* Logo Section */}
        <Link href="/" className="relative flex items-center group overflow-hidden shrink-0">
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
              className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                pathname === link.href ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white"
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
            onClick={() => setLang(lang === "AR" ? "EN" : "AR")}
            className="hidden sm:flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-blue-600 transition-all duration-300"
          >
            <Globe size={16} />
          </button>

          {/* زر الأكشن متعدل باللينك والداتا القديمة (/call) وبنفس ديزاين الجديد بالظبط */}
          <Link
            href="/call"
            className="relative group flex items-center justify-center gap-1.5 md:gap-3 bg-white text-black px-3 py-1.5 md:px-8 md:py-3.5 rounded-full text-[9px] md:text-sm font-black uppercase tracking-tight md:tracking-wider transition-all duration-300 shrink-0 shadow-[0_4px_12px_rgba(255,255,255,0.1)] active:scale-90"
          >
            {/* تأثير النبض - مخفي في الموبايل */}
            <div className="absolute inset-0 rounded-full bg-white opacity-10 animate-pulse hidden md:block group-hover:hidden" />

            <span className="relative z-10 flex items-center gap-1.5 md:gap-3">
              {lang === "AR" ? "احجز استشارة" : "Book a call"}

              {/* الدائرة والسهم: حجم ميني جداً للموبايل وحجم طبيعي للديسكطوب */}
              <div className="relative w-4 h-4 md:w-7 md:h-7 bg-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-2 h-2 md:w-3.5 md:h-3.5 group-hover:rotate-45 transition-transform duration-300"
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
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#070707] z-[150] lg:hidden flex flex-col h-screen w-full overflow-hidden"
          >
            {/* Noise Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Header: Logo Left - Close Right */}
            <div className="relative w-full flex justify-between items-center p-6 pt-8" dir="ltr">
              <div className="flex-shrink-0">
                <Image src={logo} alt="Logo" width={90} height={45} className="brightness-125" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white active:scale-90 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div className="relative flex-1 flex flex-col justify-between px-8 pb-6 pt-2">

              {/* Nav Links */}
              {/* تم تثبيت dir="ltr" هنا عشان اللينكات والـ Menu تفضل ثابتة على اليمين في العربي والإنجليزي */}
              <nav className="flex flex-col items-end w-full" dir="ltr">
                <p className="text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4 border-r-2 border-blue-500 pr-3">
                  MENU
                </p>
                <div className="flex flex-col w-full">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="w-full border-b border-white/5 last:border-none"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex flex-row-reverse items-center justify-start gap-4 py-3"
                      >
                        {/* التعديل هنا: تلوين لينك الصفحة الحالية باللون الأزرق في قائمة الموبايل ليكون واضحاً */}
                        <span className={`text-3xl font-extrabold uppercase tracking-tight group-hover:text-blue-500 transition-colors ${
                          pathname === link.href ? "text-blue-500" : "text-white"
                        }`}>
                          {link.name}
                        </span>
                        {/* التعديل هنا: إظهار الدوت الزرقاء بشكل دائم للينك الصفحة الحالية في الموبايل */}
                        <div className={`h-1 w-1 rounded-full bg-blue-600 transition-all ${
                          pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Footer Area */}
              <div className="flex flex-col items-center gap-6 pb-4">

                {/* زر ترجمة المنيو للموبايل مربوط بالـ State بالظبط */}
                {/* زر ترجمة المنيو للموبايل - ديزاين مودرن و Chic */}
                <motion.button
                  onClick={() => setLang(lang === "AR" ? "EN" : "AR")}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    shadow: "0 0 25px rgba(59, 130, 246, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden flex items-center gap-3 px-7 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white transition-all duration-300 group"
                  dir="ltr"
                >
                  {/* تأثير توهج خلفي ناعم يظهر مع الهوفر */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* حركة ذكية للأيقونة عند تغيير اللغة أو الهوفر */}
                  <motion.div
                    animate={{ rotate: lang === "AR" ? 0 : 185 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="text-blue-500 group-hover:text-blue-400 transition-colors"
                  >
                    <Globe size={16} />
                  </motion.div>

                  {/* نص أنيق بتباعد حروف بريميوم */}
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300 group-hover:text-white transition-colors">
                    {lang === "AR" ? "ENGLISH VERSION" : "العربية"}
                  </span>
                </motion.button>

                {/* .السوشيال ميديا وحقوق الشركة */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex gap-8 items-center justify-center">
                    {[
                      { icon: FaFacebookF, link: "https://web.facebook.com/GlobalNexus.Egypt/?rdid=8c2wIiGvCoqjjqIv" },
                      { icon: FaInstagram, link: "https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fglobalnexus_eg%3Figsh%3DMWp5emNjaXdlb2g0cg%26__coig_ufac%3D1#" },
                      { icon: FaBehance, link: "https://www.behance.net/globa1nexus" },
                      { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/globalnexus-eg/?viewAsMember=true" }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-all duration-300 transform hover:scale-125 active:scale-90 text-xl"
                      >
                        {/* رندر الأيقونة الجديدة من مكتبة react-icons */}
                        <social.icon />
                      </a>
                    ))}
                  </div>

                  <p className="text-[8px] text-gray-600 font-bold tracking-[0.4em] uppercase">
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