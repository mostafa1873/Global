import {
  Mail, Phone, MapPin,
  ArrowUpLeft, Globe
} from "lucide-react";
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
  const contactInfo = [
    { icon: <Phone size={18} />, label: "Call", value: "+20 1109458238" },
    { icon: <Mail size={18} />, label: "Email", value: "info@globalnexus-eg.com" },
  ];

  return (
    <main className="min-h-screen text-white pt-20 md:pt-32 pb-20 px-4 md:px-6 bg-transparent" dir="rtl">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 pt-5 gap-6 text-center md:text-right">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-4 uppercase">
              تواصل <span className="text-blue-600">معنا.</span>
            </h1>
            <p className="text-slate-500 font-bold tracking-widest text-xs">NEXUS DIGITAL HUB EST 2026</p>
          </div>
        </div>

        {/* The Bento Hub */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. The Interactive Map - الخريطة */}
          <div className="order-2 md:order-1 md:col-span-7 h-[350px] md:h-auto min-h-[350px] md:min-h-[450px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02] relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11100.2!2d29.9187!3d31.2001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDEyJzAwLjQiTiAyOcKwNTUnMDcuMyJF!5e0!3m2!1sen!2seg!4v1710000000000!5m2!1sen!2seg"
              className="w-full h-full grayscale invert opacity-30 group-hover:opacity-50 transition-opacity duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 p-3 md:p-4 bg-blue-600 rounded-2xl shadow-xl">
              <MapPin size={20} className="text-white animate-bounce" />
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
              <p className="text-[10px] font-black uppercase text-blue-500 mb-1">الموقع الفعلي</p>
              <p className="text-xs font-bold">كفر الدوار، مصر</p>
            </div>
          </div>

          {/* 2. Contact Form */}
          <div className="order-1 md:order-2 md:col-span-5 bg-white/[0.03] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 backdrop-blur-xl relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
              <h3 className="text-2xl font-black">تواصل معنا</h3>
            </div>

            <form className="space-y-4 md:space-y-6">
              <input type="text" placeholder="الاسم" className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-4 px-6 focus:border-blue-600 outline-none transition-all text-sm" />
              <input type="email" placeholder="الإيميل" className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-4 px-6 focus:border-blue-600 outline-none transition-all text-sm" />
              <textarea rows={4} placeholder="تفاصيل المشروع" className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-4 px-6 focus:border-blue-600 outline-none transition-all text-sm resize-none" />
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                إرسال الآن <ArrowUpLeft size={16} />
              </button>
            </form>
          </div>

          {/* 3. Social & Quick Links */}
          <div className="order-3 md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6">

            {/* Quick Info Box */}
            <div className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-0">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.label === "Email" ? `mailto:${item.value}` : `tel:${item.value}`}
                  className="text-center group hover:opacity-80 transition-opacity"
                >
                  <p className="text-[9px] font-black text-blue-500 uppercase mb-1">{item.label}</p>
                  <p className="text-sm font-bold group-hover:text-blue-400 transition-colors" dir="ltr">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Social Icons Box */}
            <div className="md:col-span-2 bg-blue-600 rounded-3xl p-6 flex items-center justify-center gap-5 md:gap-6 flex-wrap">
              {[
                { icon: <FaFacebookF size={20} />, url: "https://web.facebook.com/GlobalNexus.Egypt/?rdid=8c2wIiGvCoqjjqIv" },
                { icon: <FaInstagram size={22} />, url: "https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fglobalnexus_eg%3Figsh%3DMWp5emNjaXdlb2g0cg%26__coig_ufac%3D1#" },
                { icon: <FaTiktok size={22} />, url: "https://www.tiktok.com/@global.nexus5?is_from_webapp=1&sender_device=pc" },
                { icon: <FaLinkedinIn size={22} />, url: "https://www.linkedin.com/company/globalnexus-eg/?viewAsMember=true" },
                { icon: <FaBehance size={24} />, url: "https://www.behance.net/globa1nexus" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:scale-125 transition-transform flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <footer className="mt-16 flex justify-between items-center opacity-20">
          <div className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase">Nexus AI Protocol 4.0</div>
          <Globe size={18} />
        </footer>
      </div>
    </main>
  );
}