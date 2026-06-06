"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaBehance,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock
} from "react-icons/fa";
import logo from "../../../public/works/header.webp";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  
  // تأمين كامل للـ locale عشان مستحيل يعمل إيرور
  const safeLocale = typeof locale === "string" ? locale : "ar";
  const isArabic = safeLocale.toLowerCase().includes("ar");

  const footerLinks = [
    { name: t("links.about"), href: `/${safeLocale}/about` },
    { name: t("links.services"), href: `/${safeLocale}/services` },
    { name: t("links.portfolio"), href: `/${safeLocale}/portfolio` },
    { name: t("links.blog"), href: `/${safeLocale}/blog` },
    { name: t("links.contact"), href: `/${safeLocale}/contact` },
  ];

  return (
    <footer className="relative bg-[#020617]/50 pt-12 pb-6 overflow-hidden border-t border-white/5" dir={isArabic ? "rtl" : "ltr"}>

      {/* تأثير إضاءة علوي خفيف */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        {/* 2. القسم السفلي: اللوجو والسوشيال ميديا */}
        <div className="flex flex-col items-center text-center py-0 mb-5">
          <Link href={`/${safeLocale}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-[180px] h-[55px] md:w-[220px] md:h-[65px] mb-4"
            >
              <Image
                src={logo}
                alt="Global Nexus Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed opacity-70 mb-6 max-w-sm md:max-w-md">
            {t("tagline")}
          </p>

          <div className="flex gap-6 justify-center mb-5">
            {[
              { icon: <FaFacebookF size={18} />, href: "https://web.facebook.com/GlobalNexus.Egypt/?rdid=8c2wIiGvCoqjjqIv" },
              { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fglobalnexus_eg%3Figsh%3DMWp5emNjaXdlb2g0cg%26__coig_ufac%3D1#" },
              { icon: <FaTiktok size={18} />, href: "https://www.tiktok.com/@global.nexus5?is_from_webapp=1&sender_device=pc" },
              { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/company/globalnexus-eg/?viewAsMember=true" },
              { icon: <FaBehance size={18} />, href: "https://www.behance.net/globa1nexus" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="text-slate-500 hover:text-blue-500 transition-all duration-300 transform hover:scale-125"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-b border-white/5 pb-10">

          {/* قائمة: نظرة عامة */}
          <div className="flex flex-col items-center text-center bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 p-6 lg:p-0 rounded-2xl lg:rounded-none">
            <h3 className="text-white font-bold text-sm mb-4 flex items-center justify-center gap-2">
              <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
              {t("overview")}
            </h3>

            {/* تم إرجاع الهيكل الأصلي بالضبط وتوسيطه */}
            <ul className="flex flex-row flex-wrap justify-center gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="text-slate-400 text-xs hover:text-white transition-all duration-300 inline-block relative"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 right-0 w-0 h-[1px] bg-blue-500/50 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* قائمة: بيانات الاتصال */}
          <div className={`flex flex-col items-center text-center ${isArabic ? "lg:border-r lg:pr-8" : "lg:border-l lg:pl-8"} bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-white/5 p-6 lg:p-0 rounded-2xl lg:rounded-none`}>
            <h3 className="text-white font-bold text-sm mb-4 flex items-center justify-center gap-2">
              <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
              {t("contact")}
            </h3>
            <ul className="flex flex-col items-center gap-4">
              <li>
                {/* تم إضافة justify-center لتوسيط الأيقونة والنص معاً */}
                <a href="tel:+201109458238" className="group flex flex-col lg:flex-row items-center justify-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-xs">
                  <FaPhoneAlt className="text-blue-500/50 group-hover:text-blue-500" size={12} />
                  <span dir="ltr">+20 110 945 8238</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@globalnexuseg.com" className="group flex flex-col lg:flex-row items-center justify-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-xs">
                  <FaEnvelope className="text-blue-500/50 group-hover:text-blue-500" size={12} />
                  <span>info@globalnexuseg.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* قائمة: مواعيد العمل */}
          <div className={`flex flex-col items-center text-center ${isArabic ? "lg:border-r lg:pr-8" : "lg:border-l lg:pl-8"} bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-white/5 p-6 lg:p-0 rounded-2xl lg:rounded-none`}>
            <h3 className="text-white font-bold text-sm mb-4 flex items-center justify-center gap-2">
              <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
              {t("workingHours")}
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 text-slate-400 text-xs">
              <FaRegClock className="text-blue-500/50" size={13} />
              <div className="flex flex-col items-center gap-1">
                <span className="text-white font-medium">{t("days")}</span>
                <span className="text-[10px] opacity-60">{t("hours")}</span>
              </div>
            </div>
          </div>

          {/* قائمة: العنوان */}
          <div className={`flex flex-col items-center text-center ${isArabic ? "lg:border-r lg:pr-8" : "lg:border-l lg:pl-8"} bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-white/5 p-6 lg:p-0 rounded-2xl lg:rounded-none`}>
            <h3 className="text-white font-bold text-sm mb-4 flex items-center justify-center gap-2">
              <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
              {t("location")}
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 text-slate-400 text-xs leading-relaxed">
              <FaMapMarkerAlt className="text-blue-500/50" size={13} />
              <p>
                {t("address")}
              </p>
            </div>
          </div>
        </div>

        {/* 3. الـ Copyright السفلي */}
        <div className="pt-6 border-t border-white/5 text-center relative z-10">
          <p className="text-slate-600 text-[10px] tracking-[0.2em] uppercase font-medium">
            {currentYear} GLOBAL NEXUS ©. {t("rights")}
          </p>
        </div>

      </div>

      {/* لمسة البراند في الخلفية */}
      <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 ${isArabic ? "md:left-auto md:-right-6" : "md:right-auto md:-left-6"} text-[10vw] font-black text-white/[0.01] select-none pointer-events-none uppercase tracking-tighter`}>
        Nexus
      </div>
    </footer>
  );
}