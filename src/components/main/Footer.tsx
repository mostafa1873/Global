"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "أعمالنا", href: "/portfolio" },
    { name: "المدونة", href: "/blog" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#020617]/50 pt-12 pb-6 overflow-hidden border-t border-white/5" dir="rtl">

      {/* تأثير إضاءة علوي خفيف */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        {/* 1. القسم العلوي: القوائم الأربعة */}
        {/* التعديل: gap للموبايل فقط، و lg:gap-8 للاب توب كما كان */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-b border-white/5 pb-10">

          {/* قائمة: نظرة عامة (بدون خط رأسي في اللاب توب) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 p-6 lg:p-0 rounded-2xl lg:rounded-none">
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
              نظرة عامة
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-xs hover:text-white transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* قائمة: بيانات الاتصال (تم إرجاع lg:border-r للخط الرأسي في اللاب توب) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-r lg:border-white/5 lg:pr-8 p-6 lg:p-0 rounded-2xl lg:rounded-none">
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
              الاتصال
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+201109458238" className="group flex flex-col lg:flex-row items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-xs">
                  <FaPhoneAlt className="text-blue-500/50 group-hover:text-blue-500" size={12} />
                  <span dir="ltr">+20 110 945 8238</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@globalnexuseg.com" className="group flex flex-col lg:flex-row items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-xs">
                  <FaEnvelope className="text-blue-500/50 group-hover:text-blue-500" size={12} />
                  <span>info@globalnexuseg.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* قائمة: مواعيد العمل (تم إرجاع lg:border-r للخط الرأسي في اللاب توب) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-r lg:border-white/5 lg:pr-8 p-6 lg:p-0 rounded-2xl lg:rounded-none">
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
              مواعيد العمل
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-3 text-slate-400 text-xs">
              <FaRegClock className="text-blue-500/50" size={13} />
              <div className="flex flex-col gap-1">
                <span className="text-white font-medium">السبت - الخميس</span>
                <span className="text-[10px] opacity-60">08:00 ص - 06:00 م</span>
              </div>
            </div>
          </div>

          {/* قائمة: العنوان (تم إرجاع lg:border-r للخط الرأسي في اللاب توب) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-r lg:border-white/5 lg:pr-8 p-6 lg:p-0 rounded-2xl lg:rounded-none">
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
              موقعنا
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-3 text-slate-400 text-xs leading-relaxed">
              <FaMapMarkerAlt className="text-blue-500/50" size={13} />
              <p>
                كفر الدوار - البحيرة - مصر
              </p>
            </div>
          </div>
        </div>

        {/* 2. القسم السفلي: اللوجو والسوشيال ميديا */}
        <div className="flex flex-col items-center text-center py-10">
          <Link href="/">
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
            نبتكر حلولاً رقمية تعيد تعريف حضورك في السوق.
          </p>

          <div className="flex gap-6 justify-center">
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

        {/* 3. الـ Copyright السفلي */}
        <div className="pt-6 border-t border-white/5 text-center relative z-10">
          <p className="text-slate-600 text-[10px] tracking-[0.2em] uppercase font-medium">
            © {currentYear} GLOBAL NEXUS SYSTEMS. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>

      {/* لمسة البراند في الخلفية */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-6 text-[10vw] font-black text-white/[0.01] select-none pointer-events-none uppercase tracking-tighter">
        Nexus
      </div>
    </footer>
  );
}