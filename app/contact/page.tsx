import { 
  Mail, Phone, MapPin, MessageSquare, 
  Send, Facebook, Linkedin, Instagram, ArrowUpLeft, LayoutGrid
} from "lucide-react";

// ملاحظة: قمت باستيراد LayoutGrid لاستخدامها كأيقونة لـ Behance بما أنها الأقرب لهوية التصميم
// يمكنك استبدالها بأي أيقونة أخرى تفضلها

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "كلمنا مباشرة",
      value: "+20 123 456 7890",
    },
    {
      icon: <Mail size={24} />,
      title: "ابعتلنا إيميل",
      value: "info@globalnexus-eg.com",
    },
    {
      icon: <MapPin size={24} />,
      title: "نورنا في المقر",
      value: "القاهرة، برج نكسس التقني - الدور 12",
    }
  ];

  return (
    <main className="min-h-screen text-white pt-32 pb-20 px-6 overflow-hidden" dir="rtl">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- Right Column: Text & Info --- */}
        {/* أضفنا order-1 للهيدر و order-3 للمعلومات لضمان دخول الفورم بينهم في الموبايل */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-right space-y-12 order-1 lg:order-1">
          
          {/* Header Content */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-500 font-black uppercase tracking-widest text-[10px]">
                دائماً جنبك
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
              جاهزين نحول فكرتك لـ <span className="text-blue-600">عظمة.</span>
            </h1>
            <p className="text-slate-400 max-w-md text-sm md:text-lg leading-relaxed font-medium">
              إحنا بنؤمن إن التواصل هو أول خطوة في طريق النجاح. لو عندك فكرة مشروع، استشارة تقنية، أو حتى حابب تسلم، فريق نكسس مستني يسمعك.
            </p>
          </div>

          {/* Contact List & Social - Moved to separate div to control order in mobile */}
          <div className="hidden lg:flex flex-col space-y-12 w-full">
             <div className="space-y-8 pt-4 border-t border-white/5 w-full flex flex-col items-center lg:items-start">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex flex-col items-center lg:flex-row lg:items-center gap-4 lg:gap-6 group cursor-pointer">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-500">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-1">
                        {info.title}
                      </p>
                      <p className="text-xl font-bold text-slate-200 group-hover:text-blue-500 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col items-center lg:flex-row lg:items-center gap-6">
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                  تابعنا على:
                </span>
                <div className="flex gap-3">
                  {[
                    { icon: <Linkedin size={18}/>, name: "LinkedIn" },
                    { icon: <LayoutGrid size={18}/>, name: "Behance" },
                    { icon: <Facebook size={18}/>, name: "Facebook" },
                    { icon: <Instagram size={18}/>, name: "Instagram" }
                  ].map((social, i) => (
                    <button key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
          </div>
        </div>

        {/* --- Left Column: The Form --- */}
        {/* أخذ order-2 ليظهر بعد نص الهيدر مباشرة في الموبايل */}
        <div className="relative order-2 lg:order-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          
          <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-[4rem] -z-10"></div>
            <div className="mb-10 text-center lg:text-right flex flex-col items-center lg:items-start">
              <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                <MessageSquare className="text-blue-500" size={24} />
                ابعتلنا رسالة
              </h3>
              <p className="text-slate-400 text-xs font-medium">هنرد عليك في أسرع وقت، غالباً في أقل من 24 ساعة.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pr-0 lg:pr-4 block text-center lg:text-right">الاسم بالكامل</label>
                  <input type="text" placeholder="الاسم الكامل" className="w-full bg-black/20 border border-white/5 rounded-[1.5rem] py-4 px-6 focus:border-blue-500 focus:bg-white/[0.03] outline-none transition-all placeholder:text-slate-600 text-sm text-center lg:text-right" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pr-0 lg:pr-4 block text-center lg:text-right">إيميلك الشخصي</label>
                  <input type="email" placeholder="name@company.com" className="w-full bg-black/20 border border-white/5 rounded-[1.5rem] py-4 px-6 focus:border-blue-500 focus:bg-white/[0.03] outline-none transition-all placeholder:text-slate-600 text-sm text-center lg:text-right" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pr-0 lg:pr-4 block text-center lg:text-right">إيه اللي شاغل بالك؟</label>
                <select className="w-full bg-black/20 border border-white/5 rounded-[1.5rem] py-4 px-6 focus:border-blue-500 focus:bg-white/[0.03] outline-none transition-all text-slate-400 text-sm appearance-none cursor-pointer text-center lg:text-right">
                  <option value="" disabled selected>حابب تستفسر عن إيه؟</option>
                  <option value="dev">تطوير برمجي (Web/Mobile)</option>
                  <option value="design">تصميم جرافيك أو واجهات</option>
                  <option value="business">استشارة تقنية أو بيزنس</option>
                  <option value="other">حاجة تانية خالص</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pr-0 lg:pr-4 block text-center lg:text-right">رسالتك لينا</label>
                <textarea rows={4} placeholder="قولنا تفاصيل أكتر عن اللي محتاجه..." className="w-full bg-black/20 border border-white/5 rounded-[2rem] py-4 px-6 focus:border-blue-500 focus:bg-white/[0.03] outline-none transition-all placeholder:text-slate-600 text-sm resize-none text-center lg:text-right" />
              </div>
              <button type="button" className="w-full mt-4 py-5 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-widest shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all group">
                يلا نبدأ الشغل
                <ArrowUpLeft size={18} className="group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* --- Mobile Only: Contact Info --- */}
        {/* هذا الجزء سيظهر فقط في الموبايل في الترتيب الثالث */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-12 order-3">
          <div className="space-y-8 pt-4 border-t border-white/5 w-full flex flex-col items-center">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-500">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-1">{info.title}</p>
                  <p className="text-xl font-bold text-slate-200 group-hover:text-blue-500 transition-colors">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col items-center gap-6">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500">تابعنا على:</span>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin size={18}/>, name: "LinkedIn" },
                { icon: <LayoutGrid size={18}/>, name: "Behance" },
                { icon: <Facebook size={18}/>, name: "Facebook" },
                { icon: <Instagram size={18}/>, name: "Instagram" }
              ].map((social, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      <footer className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 text-center flex flex-col items-center justify-center gap-4">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
          © 2026 Nexus AI Systems. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}