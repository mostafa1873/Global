"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, Users, Cpu, Briefcase, 
  BookOpen, MessageSquare, Languages, Menu, X, ArrowUpRight 
} from "lucide-react"; 
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/works/header.webp";


export default function GlobalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("AR");
  const pathname = usePathname();

  // منع السكرول عند فتح المنيو في الموبايل
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // تعديل: ربط الأسماء بمتغير اللغة lang عشان الترجمة تشتغل
  const navLinks = [
    { name: lang === "AR" ? "الرئيسية" : "Home", href: "/", icon: <Home size={18} /> },
    { name: lang === "AR" ? "عن الشركة" : "About", href: "/about", icon: <Users size={18} /> },
    { name: lang === "AR" ? "خدماتنا" : "Services", href: "/services", icon: <Cpu size={18} /> },
    { name: lang === "AR" ? "أعمالنا" : "Portfolio", href: "/portfolio", icon: <Briefcase size={18} /> },
    { name: lang === "AR" ? "المدونة" : "Blog", href: "/blog", icon: <BookOpen size={18} /> },
    { name: lang === "AR" ? "تواصل معنا" : "Contact", href: "/contact", icon: <MessageSquare size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] pt-4 px-2 md:pt-6 md:px-8 pointer-events-none" dir={lang === "AR" ? "rtl" : "ltr"}>
      {/* --- Floating Pill Container --- */}
      <div className={`pointer-events-auto mx-auto max-w-[1400px] relative flex items-center justify-between h-[70px] md:h-[70px] rounded-[2.5rem] pl-2 pr-5 md:pl-4 md:pr-8 transition-all duration-700 ${
        scrolled 
          ? "bg-white/15 backdrop-blur-lg border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]" 
          : "bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
      }`} dir="ltr">
        
        {/* 1. اللوجو */}
        <div className="z-20 flex-shrink-0 transition-transform hover:scale-105">
          <Link href="/" className="block">
            <div className="relative w-[160px] h-[60px] md:w-[200px] md:h-[70px]">
              <Image 
                src={logo} 
                alt="Nexus Logo" 
                fill 
                className="object-contain " 
                priority 
              />
            </div>
          </Link>
        </div>

        {/* 2. اللينكات - Desktop Only */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className="flex items-center gap-1 pointer-events-auto p-1.5 bg-black/40 border border-white/5 rounded-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                    isActive 
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                      : "text-slate-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. أزرار الأكشن */}
        <div className="flex items-center gap-2 md:gap-3 z-20">
          <button 
            onClick={() => setLang(lang === "AR" ? "EN" : "AR")}
            className="hidden lg:flex items-center justify-center w-11 h-11 bg-black/40 border border-white/10 rounded-full text-slate-300 hover:text-white hover:border-white/30 transition-all"
          >
            <Languages size={18} />
          </button>

          <Link 
            href="/call"
            className="hidden lg:flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
          >
            {lang === "AR" ? "احجز مكالمة" : "Book a call"}
            <ArrowUpRight size={16} />
          </Link>

          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex items-center justify-center w-11 h-11 bg-blue-600 text-white rounded-full shadow-lg active:scale-95 transition-all"
          >
            <Menu size={20} />
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
              className="fixed inset-0 backdrop-blur-2xl z-[110] pointer-events-auto"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="fixed inset-x-4 top-5 bottom-5 border border-white/10 rounded-[2.5rem] z-[120] p-6 shadow-2xl pointer-events-auto flex flex-col justify-between"
              dir={lang === "AR" ? "rtl" : "ltr"}
            >
              <div>
                <div className="flex justify-between items-center mb-6" dir="ltr">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white"
                  >
                    <X size={24} />
                  </button>
                  <h3 className="text-white font-black text-lg tracking-tighter italic">GLOBAL NEXUS</h3>
                </div>

                <div className="flex flex-col gap-1.5 py-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link 
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                          pathname === link.href 
                            ? "bg-blue-600 text-white shadow-xl" 
                            : "bg-white/5 text-slate-300 border border-white/5"
                        }`}
                      >
                        <span className="text-sm font-black uppercase tracking-widest">{link.name}</span>
                        {link.icon}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* جزء الأكشن مع padding-bottom لضمان المسافة من تحت */}
              <div className="mt-auto pb-8 flex flex-col gap-3">
                 <div className="flex items-center p-1 bg-white/5 border border-white/10 rounded-2xl h-[60px]">
                    <button 
                      onClick={() => setLang("AR")}
                      className={`flex-1 h-full rounded-xl flex items-center justify-center text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${lang === "AR" ? "bg-white text-black shadow-lg" : "text-white"}`}
                    >
                      العربية
                    </button>
                    <button 
                      onClick={() => setLang("EN")}
                      className={`flex-1 h-full rounded-xl flex items-center justify-center text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${lang === "EN" ? "bg-white text-black shadow-lg" : "text-white"}`}
                    >
                      English
                    </button>
                 </div>

                 <Link 
                  href="/call"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all"
                >
                  {lang === "AR" ? "احجز مكالمة" : "Book a Call"}
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}