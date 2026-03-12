"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa";
import logo from "../../assets/header.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "الشركة",
      links: [
        { name: "من نحن", href: "#" },
        { name: "أعمالنا", href: "#" },
        { name: "خدماتنا", href: "#" },
        { name: "المدونة", href: "#" },
      ],
    },
    {
      title: "الخدمات",
      links: [
        { name: "التسويق الرقمي", href: "#" },
        { name: "تطوير المواقع", href: "#" },
        { name: "صناعة المحتوى", href: "#" },
        { name: "الهوية البصرية", href: "#" },
      ],
    },
    {
      title: "الدعم",
      links: [
        { name: "تواصل معنا", href: "#" },
        { name: "الخصوصية", href: "#" },
        { name: "الشروط", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-white/5" dir="rtl">
      
      {/* 1. الكلمة المتحركة (Marquee) - خلفية ضخمة بتتحرك من الشمال لليمين */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap pointer-events-none select-none opacity-[0.03]">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          <span className="text-[25vw] font-black text-white uppercase tracking-tighter">GLOBAL NEXUS</span>
          <span className="text-[25vw] font-black text-white uppercase tracking-tighter">GLOBAL NEXUS</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* شبكة الروابط - توزيع احترافي للموبايل والديسكتوب */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-32">
          
          {/* عمود اللوجو - مركزي في الموبايل items-center text-center */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-right gap-8">
            <Link href="/" className="relative w-[200px] h-[60px]">
              <Image 
                src={logo} 
                alt="Logo" 
                fill 
                className="object-contain lg:object-right brightness-200" 
                priority 
              />
            </Link>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              نحن نقدم حلولاً رقمية متكاملة تساعد الشركات على النمو والتميز في العصر الرقمي.
            </p>
            {/* السوشيال ميديا تحت اللوجو مباشرة */}
            <div className="flex gap-5 text-white/80">
              <Link href="#" className="hover:text-blue-500 transition-all"><FaFacebookF size={20}/></Link>
              <Link href="#" className="hover:text-blue-500 transition-all"><FaInstagram size={20}/></Link>
              <Link href="#" className="hover:text-blue-500 transition-all"><FaTiktok size={20}/></Link>
              <Link href="#" className="hover:text-blue-500 transition-all"><FaYoutube size={20}/></Link>
              <Link href="#" className="hover:text-blue-500 transition-all"><FaLinkedinIn size={20}/></Link>
            </div>
          </div>

          {/* أعمدة الروابط - مركزية في الموبايل */}
          {footerLinks.map((group, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start gap-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest border-b-2 lg:border-b-0 lg:border-r-2 border-blue-600 pb-2 lg:pb-0 lg:pr-3">
                {group.title}
              </h4>
              <ul className="space-y-4 text-center lg:text-right">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all text-[15px] block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* السطر السفلي (Copyright) */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-center">
            © {currentYear} GLOBAL NEXUS SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[11px] text-slate-600 font-bold uppercase tracking-widest justify-center">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}