"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, Users, Cpu, Briefcase, 
  BookOpen, MessageSquare, Globe, Menu, X, ArrowUpRight 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/header.webp";

export default function GlobalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("AR");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/", icon: <Home size={18} /> },
    { name: "عن الشركة", href: "/about", icon: <Users size={18} /> },
    { name: "خدماتنا", href: "/services", icon: <Cpu size={18} /> },
    { name: "أعمالنا", href: "/portfolio", icon: <Briefcase size={18} /> },
    { name: "المدونة", href: "/blog", icon: <BookOpen size={18} /> },
    { name: "تواصل معنا", href: "/contact", icon: <MessageSquare size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-4 md:px-6 md:py-6" dir="ltr">
      {/* --- Header Container --- */}
      <div className={`w-full relative flex items-center h-[70px] md:h-[90px] transition-all duration-500 px-3 md:px-10 ${
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl" 
          : "bg-transparent"
      }`}>
        
        {/* 1. اللوجو - تم استخدام -ml-4 لسحب اللوجو لليسار تماماً في الموبايل */}
        <div className="z-20 flex-shrink-0 mr-auto -ml-7 md:-ml-8">
          <Link href="/" className="block">
            <div className="relative w-[200px] h-[75px] md:w-[220px] md:h-[70px]">
              <Image 
                src={logo} 
                alt="Nexus Logo" 
                fill 
                className="object-contain object-left brightness-200 transition-transform duration-300" 
                priority 
              />
            </div>
          </Link>
        </div>

        {/* 2. اللينكات - سنتر بالظبط (Desktop Only) */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full pointer-events-auto backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] scale-105" 
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. أزرار الأكشن - تم تصغير حجم الزرار هنا */}
        <div className="flex items-center gap-4 z-20 ml-auto -mr-1 md:mr-0">
          <button 
            onClick={() => setLang(lang === "AR" ? "EN" : "AR")}
            className="hidden lg:flex items-center justify-center w-[50px] h-[50px] bg-white/5 border border-white/10 rounded-full text-white hover:bg-blue-600 transition-all"
          >
            <Globe size={20} />
          </button>

          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2.5 bg-blue-600 border border-blue-400/50 text-white rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
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
              className="fixed inset-0 bg-black/98 backdrop-blur-xl z-[110]"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="fixed inset-x-4 top-[8%] bottom-[8%] bg-[#020617]/90 border border-white/10 rounded-[2.5rem] z-[120] p-6 shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col items-center justify-between overflow-hidden"
              dir="rtl"
            >
              {/* ترويسة المنيو - ترتيب أنظف */}
              <div className="w-full flex justify-between items-center" dir="ltr">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 bg-white/5 border border-white/10 rounded-full text-white"
                >
                  <X size={20} />
                </button>

                <button 
                  onClick={() => setLang(lang === "AR" ? "EN" : "AR")}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-600/50 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest"
                >
                  <Globe size={14} />
                  {lang === "AR" ? "EN" : "AR"}
                </button>
              </div>

              <div className="text-center py-2">
                <h3 className="text-white text-2xl font-black uppercase tracking-tighter">Nexus Menu</h3>
                <div className="w-10 h-1 bg-blue-600 mx-auto mt-2 rounded-full shadow-[0_0_15px_#2563eb]" />
              </div>
              
              {/* شبكة اللينكات - مساحات أقل زحمة */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex flex-col items-center justify-center gap-2 py-4 border rounded-[1.5rem] transition-all duration-300 ${
                        pathname === link.href 
                          ? "bg-blue-600 border-blue-400 shadow-[0_8px_20px_rgba(37,99,235,0.2)] scale-105" 
                          : "bg-white/[0.02] border-white/5 active:bg-white/10"
                      }`}
                    >
                      <div className={`${pathname === link.href ? "text-white" : "text-blue-500"}`}>
                        {link.icon}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${pathname === link.href ? "text-white" : "text-slate-400"}`}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* زر الأكشن - شكل أرفع وأشيك */}
              <button className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-[1.2rem] font-black text-[11px] uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
                ابدأ مشروعك
                <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}