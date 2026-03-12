import { 
  Mail, Phone, MapPin, MessageSquare, 
  Send, Globe, Github, Linkedin, Twitter 
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: "اتصل بنا",
      value: "+20 123 456 7890",
      sub: "متاحون من 9 صباحاً - 6 مساءً"
    },
    {
      icon: <Mail size={20} />,
      label: "البريد الإلكتروني",
      value: "hello@nexus.com",
      sub: "نرد خلال أقل من 24 ساعة"
    },
    {
      icon: <MapPin size={20} />,
      label: "المقر الرئيسي",
      value: "القاهرة، مدينة نصر",
      sub: "برج نكسس التقني - الدور 12"
    }
  ];

  return (
    <main className="min-h-screen text-white pt-32 pb-20 px-6">
      
      {/* --- Header Section --- */}
      <section className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] bg-blue-600/10 px-4 py-2 rounded-full border border-blue-600/20">
          Get In Touch
        </span>
        <h1 className="text-5xl md:text-7xl font-black mt-8 mb-6 tracking-tighter">
          لنصنع شيئاً <span className="text-blue-600">عظيماً</span> معاً
        </h1>
        <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-lg font-light leading-relaxed">
          سواء كان لديك فكرة مشروع جديدة أو استفسار بسيط، نحن هنا للإجابة ومساعدتك في النمو.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        
        {/* 1. Contact Info (4 Columns) */}
        <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-600/30 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {info.icon}
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">{info.label}</h3>
              <p className="text-xl font-bold mb-1">{info.value}</p>
              <p className="text-xs text-slate-500">{info.sub}</p>
            </div>
          ))}

          {/* Social Links */}
          <div className="flex justify-between p-6 bg-blue-600 rounded-[2rem] shadow-lg shadow-blue-600/10">
            <span className="font-black text-xs uppercase tracking-widest self-center">تابعنا:</span>
            <div className="flex gap-4">
              {[<Linkedin key="li" size={20}/>, <Twitter key="tw" size={20}/>, <Github key="gh" size={20}/>].map((icon, i) => (
                <div key={i} className="p-2 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-full cursor-pointer transition-all">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Contact Form (8 Columns) */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">الاسم بالكامل</label>
                <input 
                  type="text" 
                  placeholder="أحمد علي"
                  className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-4 px-6 focus:border-blue-600 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-4 px-6 focus:border-blue-600 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">الموضوع</label>
                <input 
                  type="text" 
                  placeholder="كيف يمكننا مساعدتك؟"
                  className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-4 px-6 focus:border-blue-600 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">رسالتك</label>
                <textarea 
                  rows={5}
                  placeholder="اكتب تفاصيل مشروعك هنا..."
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-4 px-6 focus:border-blue-600 outline-none transition-all placeholder:text-slate-600 resize-none"
                />
              </div>
              
              <div className="md:col-span-2 pt-4">
                <button className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all">
                  إرسال الرسالة
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

      </section>

      {/* --- Simple Footer Placeholder --- */}
      <footer className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
        © 2026 Nexus AI Systems. All Rights Reserved.
      </footer>

    </main>
  );
}