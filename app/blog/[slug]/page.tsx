import blogData from "../../../blog.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, ChevronRight, Share2, Tag, ArrowRight, ChevronLeft } from "lucide-react";
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
    <main className="min-h-screen text-white pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs & Category - جعلها تتوسط في الموبايل */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 mb-12" dir="rtl">
           <nav className="flex items-center justify-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
            <Link href="/blog" className="hover:text-blue-500 transition-colors">المدونة</Link>
            <ChevronRight size={12} className="text-blue-600" />
            <span className="text-slate-300 truncate max-w-[150px] sm:max-w-[200px]">{post.title_ar}</span>
          </nav>
          <span className="text-blue-500 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
            <Tag size={12} /> تقنية
          </span>
        </div>

        {/* Header Section - توسيط النص في الموبايل */}
        <header className="text-center md:text-right mb-16" dir="rtl">
          <h1 className="text-3xl md:text-7xl font-black leading-[1.2] md:leading-[1.1] mb-8 tracking-tighter bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            {post.title_ar}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-12">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-blue-600" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-blue-600" />
              <span>5 دقائق قراءة</span>
            </div>
            {/* جعل زر المشاركة يظهر بشكل متناسق */}
            <button className="md:mr-auto p-3 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-blue-600/30 transition-all group">
              <Share2 size={16} className="group-hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </header>

        {/* Featured Image - الحفاظ على التناسب */}
        <div className="relative aspect-video md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-20 border border-white/5 bg-white/[0.02]">
          <Image 
            src={`/${post.image}`} 
            alt={post.title_ar} 
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32" dir="rtl">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm text-center md:text-right">
              <h2 className="text-xl md:text-3xl font-black mb-10 leading-tight">
                {post.mainTitle_ar}
              </h2>

              <div className="space-y-16">
                {post.subSections_ar.map((section, index) => (
                  <div key={index} className="relative group">
                    <h3 className="text-lg md:text-xl font-black mb-4 group-hover:text-blue-500 transition-colors flex items-center justify-center md:justify-start gap-3">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {section.subtitle}
                    </h3>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium opacity-80">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8 text-center">
            <div className="p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.02] border border-white/5 lg:sticky lg:top-32">
              <h3 className="text-xl font-black mb-6">خلاصة الموضوع</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium italic">
                  "{post.title_ar} ليس مجرد مقال، بل هو خارطة طريق نحو بناء حضور رقمي قوي لشركتك."
              </p>
              
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all"
              >
                ابدأ مشروعك الآن
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="p-8 rounded-[1.5rem] md:rounded-[2rem] bg-blue-600 text-white mx-auto w-full">
               <h3 className="text-xl font-black mb-4">نشرة نكسس</h3>
               <p className="text-blue-100 text-[10px] mb-6 font-bold uppercase tracking-wider">اشترك ليصلك الجديد أسبوعياً.</p>
               <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest">
                 اشترك الآن
               </button>
            </div>
          </aside>
        </div>

        {/* --- قسم المقالات المقترحة --- */}
        <section className="border-t border-white/5 pt-20" dir="rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 text-center">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter">مقالات <span className="text-blue-600">قد تهمك</span></h2>
            <Link href="/blog" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">عرض الكل</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {relatedPosts.map((p, idx) => (
              <Link key={idx} href={`/blog/${p.slug_ar}`} className="group/card text-center md:text-right">
                <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden mb-6 border border-white/5 bg-white/[0.02]">
                  <img src={`/${p.image}`} alt={p.title_ar} className="w-full h-full object-cover opacity-60 group-hover/card:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-lg md:text-xl font-black mb-4 group-hover/card:text-blue-500 transition-colors line-clamp-2">{p.title_ar}</h4>
                <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-black text-slate-500 uppercase">
                  <span>إقرأ المقال</span>
                  <ChevronLeft size={14} className="text-blue-600 group-hover/card:-translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}