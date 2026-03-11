"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, Users, Cpu, Briefcase, 
  BookOpen, MessageSquare, Globe, Menu, X, ArrowUpRight 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/header.svg";

export default function GlobalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("AR");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/", icon: <Home size={20} /> },
    { name: "عن الشركة", href: "/about", icon: <Users size={20} /> },
    { name: "خدماتنا", href: "/services", icon: <Cpu size={20} /> },
    { name: "أعمالنا", href: "/portfolio", icon: <Briefcase size={20} /> },
    { name: "المدونة", href: "/blog", icon: <BookOpen size={20} /> },
    { name: "تواصل معنا", href: "/contact", icon: <MessageSquare size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6" dir="ltr">
      {/* --- Header Container --- */}
      <div className={`container mx-auto flex justify-between items-center transition-all duration-500 px-6 py-4 ${
        scrolled ? "bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}>
        
        {/* اللوجو - تنويير حقيقي باستخدام الفلاتر */}
        <Link href="/" className="relative group">
          <div className="relative w-[160px] h-[50px] md:w-[200px] md:h-[65px]">
            <Image 
              src={logo} 
              alt="Nexus Logo" 
              fill 
              className="object-contain object-left brightness-250 contrast-125" 
              priority 
            />
          </div>
        </Link>

        {/* لينكات الكمبيوتر (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-600 transition-all group-hover:w-full shadow-[0_0_10px_#2563eb]" />
            </Link>
          ))}
        </div>

        {/* أزرار الأكشن */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === "AR" ? "EN" : "AR")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]"
          >
            <Globe size={14} />
            {lang === "AR" ? "EN" : "AR"}
          </button>

          {/* زرار التوجل يظهر فقط في الموبايل والتابلت ويختفي في الـ lg */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-3 bg-blue-600 border border-blue-400/50 text-white rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* --- Pop-up Menu (موبايل) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-[110]"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 top-[10%] bottom-[10%] bg-[#020617] border border-white/10 rounded-[2.5rem] z-[120] p-6 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col items-center justify-between overflow-hidden"
              dir="rtl"
            >
              {/* زرار القفل */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 left-6 p-2 bg-white/5 rounded-full text-slate-400"
              >
                <X size={24} />
              </button>

              <div className="text-center mt-4">
                <span className="text-blue-500 text-[9px] font-black uppercase tracking-[0.4em] mb-2 block">Menu</span>
                <h3 className="text-white text-2xl font-black uppercase tracking-tighter">Global Nexus</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 w-full my-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center justify-center gap-2 py-5 bg-white/[0.03] border border-white/5 rounded-[1.5rem] hover:bg-blue-600/10 transition-all group"
                    >
                      <div className="text-blue-500 group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="w-full">
                 <button className="w-full flex items-center justify-center gap-3 py-4 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
                    تواصل معنا الآن
                    <ArrowUpRight size={14} />
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}