"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/header.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "الرئيسية",
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
    // ضفت لك قسم تالت عشان التوازن البصري (Grid 3 columns)
    {
      title: "روابط سريعة",
      links: [
        { name: "تواصل معنا", href: "#" },
        { name: "الخصوصية", href: "#" },
        { name: "الشروط", href: "#" },
        { name: "الأسئلة الشائعة", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaWhatsapp />, href: "#" },
  ];

  return (
    <footer className="bg-[#020617] pt-24 pb-12 border-t border-white/5 relative overflow-hidden" dir="rtl">
      
      {/* اسم البراند الخلفي - خفيته أكتر عشان ميزحمش العين */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] md:opacity-[0.05]">
        <h2 className="text-[25vw] font-black text-white uppercase leading-none whitespace-nowrap">
          Global Nexus
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- القسم العلوي: الهوية (مركزية كاملة) --- */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/" className="block cursor-pointer">
              {/* حجم اللوجو المثالي */}
              <div className="relative w-[280px] h-[110px] md:w-[400px] md:h-[140px] transition-transform duration-500 hover:scale-105">
                <Image
                  src={logo}
                  alt="Global Nexus Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          <p className="text-slate-400 max-w-xl leading-relaxed text-base md:text-lg font-light italic">
            "نبتكر حلولاً رقمية تلهم العالم وتدفع عملك نحو القمة"
          </p>

          <div className="flex gap-5 mt-10">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -8, color: "#3b82f6" }}
                className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 bg-white/[0.02] backdrop-blur-sm"
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- القسم الأوسط: روابط القائمة (توزيع هندسي) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 border-t border-white/5 py-20">
          {footerLinks.map((group, i) => (
            <div key={i} className="flex flex-col items-center">
              <h4 className="text-white font-bold text-lg mb-8 relative">
                {group.title}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-blue-600"></span>
              </h4>
              <ul className="space-y-4 text-center">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- القسم السفلي: الحقوق (نظيف جداً) --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-4">
          <p className="text-slate-600 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase">
            © {currentYear} Global Nexus Group. All rights reserved.
          </p>
          {/* خط نيون رفيع تحت خالص */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
      </div>

      {/* إضاءات النيون (Ambient Glow) */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/[0.03] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/[0.03] blur-[120px] rounded-full -z-10" />
    </footer>
  );
}