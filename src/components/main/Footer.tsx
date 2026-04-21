"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaBehance } from "react-icons/fa";
import logo from "../../assets/header.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "أعمالنا", href: "/portfolio" },
    { name: "خدماتنا", href: "/services" },
    { name: "من نحن", href: "/about" },
    { name: "المدونة", href: "/blog" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#020617]/50 pt-16 pb-8 overflow-hidden border-t border-white/5" dir="rtl">

      {/* تأثير إضاءة علوي خفيف */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        {/* 1. اللوجو المركزي (حجم كبير وشكل فخم) */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <Link href="/" >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative w-[280px] h-[90px] md:w-[350px] md:h-[100px] mb-6"
            >
              <Image
                src={logo}
                alt="Global Nexus Logo"
                fill
                className="object-contain brightness-125"
                priority
              />
            </motion.div>
          </Link>
          <p className="text-slate-400 text-xs md:text-sm font-medium max-w-sm leading-relaxed opacity-80">
            نبتكر حلولاً رقمية تعيد تعريف حضورك في السوق وتدفع بأعمالك للأمام.
          </p>
        </div>

        {/* 2. أيقونات السوشيال ميديا (تصميم Minimalist) */}
        <div className="flex gap-4 justify-center mb-12">
          {[
            { icon: <FaFacebookF size={16} />, href: "https://web.facebook.com/GlobalNexus.Egypt/?rdid=8c2wIiGvCoqjjqIv" },
            { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fglobalnexus_eg%3Figsh%3DMWp5emNjaXdlb2g0cg%26__coig_ufac%3D1#" },
            { icon: <FaTiktok size={16} />, href: "https://www.tiktok.com/@global.nexus5?is_from_webapp=1&sender_device=pc" },
            { icon: <FaLinkedinIn size={16} />, href: "https://www.linkedin.com/company/globalnexus-eg/?viewAsMember=true" },
            { icon: <FaBehance size={16} />, href: "https://www.behance.net/globa1nexus" },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* 3. الروابط والـ Copyright (سطر واحد سمبل) */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-6">

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-bold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <p className="text-slate-600 text-[10px] tracking-[0.2em] uppercase text-center">
            © {currentYear} GLOBAL NEXUS SYSTEMS. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>

      {/* لمسة البراند في الخلفية (اختياري) */}
      <div className="absolute -bottom-6 -right-6 text-[10vw] font-black text-white/[0.01] select-none pointer-events-none uppercase">
        Nexus
      </div>
    </footer>
  );
}