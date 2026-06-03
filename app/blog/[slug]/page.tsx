import blogData from "../../../blog.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, ChevronRight, Share2, Tag, ArrowRight, ChevronLeft, Quote, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug_ar,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug_ar === decodeURIComponent(slug));

  if (!post) notFound();

  // جلب المقالات الأخرى المقترحة (باستثناء المقال الحالي)
  const relatedPosts = blogData.filter((p) => p.slug_ar !== post.slug_ar).slice(0, 3);

  return (
    <main className="min-h-screen text-white pt-26 md:pt-32 pb-20 px-6 relative overflow-hidden selection:bg-blue-600/30">
      

      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. Executive Breadcrumb --- */}
        <div className="flex justify-center md:justify-start mb-8" dir="rtl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <Link href="/blog" className="text-slate-400 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
              المدونة
            </Link>
            <ChevronLeft size={12} className="text-blue-600" />
            <span className="text-blue-500 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
              <Tag size={10} /> رؤية استراتيجية
            </span>
          </div>
        </div>

        {/* --- 2. Combined Bento Hero Section (العنوان والصورة في كرت واحد رايق) --- */}
        <header className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] mb-6" dir="rtl">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-black leading-[1.4] text-zinc-100 mb-6 tracking-tight text-center md:text-right">
              {post.title_ar}
            </h1>
            
            <p className="text-slate-300 text-base md:text-lg font-normal leading-[1.7] mb-8 border-l-0 md:border-l-0 md:border-r-4 border-blue-600 pr-0 md:pr-4 text-center md:text-right">
              {post.mainTitle_ar}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-slate-300 text-[11px] font-bold">
                <Calendar size={14} className="text-blue-600" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-slate-300 text-[11px] font-bold">
                <Clock size={14} className="text-blue-600" />
                <span>5 دقائق قراءة</span>
              </div>
              
              <button className="md:mr-auto flex items-center justify-center w-10 h-10 bg-white/[0.03] border border-white/10 rounded-full hover:bg-blue-600/20 hover:border-blue-600/50 hover:text-blue-500 transition-all group">
                <Share2 size={16} className="transition-transform group-hover:scale-110" />
              </button>
            </div>

            {/* الصورة مدمجة داخل نفس الكرت بشكل فخم */}
            <div className="relative aspect-video md:aspect-[21/9] w-full rounded-[2rem] overflow-hidden bg-slate-900 border border-white/[0.04]">
              <Image 
                src={post.image.startsWith('/') ? post.image : `/${post.image}`} 
                alt={post.title_ar} 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        {/* --- 3. Main Content (محتوى المقالة لوحدها واخد المساحة كاملة ومظبوط هندسياً) --- */}
        <div className="w-full p-8 md:p-12 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] mb-6" dir="rtl">
          <div className="space-y-16 relative max-w-5xl mx-auto">
            
            {/* الخط الطولي موزون بمحاذاة سنتر الدائرة تماماً */}
            <div className="absolute right-4 top-1 bottom-1 w-px bg-gradient-to-b from-blue-600/40 via-white/5 to-transparent hidden md:block" />

            {post.subSections_ar.map((section, index) => (
              <div key={index} className="relative group md:pr-12 text-center md:text-right">
                
                {/* الدائرة متموضعة بدقة ليلتقي مركزها بالخط الطولي تماماً */}
                <div className="absolute right-0 top-0 w-8 h-8 rounded-full bg-[#020202] border border-white/10 hidden md:flex items-center justify-center group-hover:border-blue-500/50 transition-colors z-10">
                  <span className="w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center justify-center md:justify-start gap-3 tracking-tight">
                  <span className="md:hidden w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  {section.subtitle}
                </h3>
                <p className="text-slate-200 text-base md:text-[17px] font-normal leading-[1.9] tracking-wide opacity-95 text-center md:text-justify pl-0 md:pl-2">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 4. Bottom Cards Block (كروت الخلاصة والبريد تحت بعض/جنب بعض بشكل محترم) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24" dir="rtl">
          
          {/* Summary Card */}
          <div className="p-8 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6 pb-5 border-b border-white/[0.06]">
                <Quote size={20} className="text-blue-600" />
                <h3 className="text-lg font-bold text-white">الخلاصة التنفيذية</h3>
              </div>
              <p className="text-slate-400 text-sm leading-[1.7] mb-8 font-light italic text-center md:text-right">
                "{post.title_ar} ليس مجرد مقال, بل هو خارطة طريق نحو بناء حضور رقمي قوي لشركتك."
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="group flex items-center justify-between w-full bg-blue-600/10 hover:bg-blue-600 border border-blue-600/30 text-white px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-wide transition-all duration-300"
            >
              <span>ابدأ مشروعك الآن</span>
              <ArrowRight size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Newsletter Card */}
          <div className="p-8 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.08] flex flex-col justify-center">
            <div className="text-center md:text-right w-full">
              <h3 className="text-base font-bold text-white mb-2">النشرة الدورية للمدراء</h3>
              <p className="text-slate-500 text-[11px] mb-6 font-medium">رؤى استراتيجية تصل بريدك أسبوعياً.</p>
              
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="بريدك المهني..." 
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600 transition-colors text-center md:text-right text-white placeholder:text-slate-600"
                />
                <button className="w-full bg-white text-black hover:bg-blue-600 hover:text-white py-3 rounded-xl text-xs font-bold transition-colors duration-300">
                  انضمام للنخبة
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* --- 5. Related Posts (Bento Style) --- */}
        <section className="pt-16 border-t border-white/[0.08]" dir="rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-600 rounded-full" />
              رؤى <span className="text-slate-400">ذات صلة</span>
            </h2>
            <Link href="/blog" className="text-slate-500 hover:text-blue-500 transition-colors text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 group">
              عرض الكل
              <ChevronLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedPosts.map((p, idx) => (
              <Link key={idx} href={`/blog/${p.slug_ar}`} className="p-5 rounded-[2rem] bg-white/[0.01] backdrop-blur-md border border-white/[0.06] hover:border-blue-600/30 transition-all duration-400 flex flex-col group">
                <div className="w-full h-48 relative rounded-2xl overflow-hidden bg-slate-900 mb-5 border border-white/5">
                  <Image 
                    src={p.image.startsWith('/') ? p.image : `/${p.image}`} 
                    alt={p.title_ar} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                <div className="flex items-center gap-2 text-[10px] text-white font-medium mb-3">
                  <span className="text-blue-600/70">مقال مقترح</span>
                  <span className="text-white/20">•</span>
                  <span className="text-slate-400">{p.date}</span>
                </div>
                
                <h4 className="text-base font-bold text-white group-hover:text-blue-500 transition-colors line-clamp-2 leading-snug mb-4 text-center md:text-right">
                  {p.title_ar}
                </h4>

                <div className="mt-auto pt-4 border-t border-white/[0.04] flex justify-center md:justify-end">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-blue-600/30 group-hover:bg-blue-600/10 transition-all duration-300 text-[11px] font-bold text-white">
                    <span>قراءة</span>
                    <ChevronLeft size={12} className="text-blue-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}