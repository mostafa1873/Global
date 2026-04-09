import { Calendar, Clock, ChevronLeft, Search, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
// استيراد بيانات المدونة من ملف الـ JSON
import blogData from "../../blog.json"; 

export default function BlogPage() {
  // استخدام البيانات من ملف الـ JSON مباشرة
  const posts = blogData;

  return (
    <main className="min-h-screen text-white pt-32 pb-20 px-6">
      
      {/* --- Blog Header --- */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-12">
          <div className="text-center md:text-right">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              المدونة <span className="text-blue-600">التقنية</span>
            </h1>
            <p className="text-slate-400 max-w-xl text-sm md:text-lg leading-relaxed font-light">
              مقالات حصرية من خبراء نكسس حول أحدث تقنيات البرمجة، التصميم، واستراتيجيات الأعمال الرقمية.
            </p>
          </div>
          
          {/* Search Bar - Static Visual */}
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="ابحث عن مقال..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-12 text-sm focus:border-blue-600 outline-none transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12" dir="rtl">
        
        {/* --- Main Posts Grid --- */}
        <div className="lg:col-span-8 grid gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group relative grid md:grid-cols-5 gap-6 p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-600/30 transition-all duration-500">
              {/* Thumbnail */}
              <div className="md:col-span-2 h-48 md:h-full rounded-[1.5rem] overflow-hidden relative opacity-80 group-hover:opacity-100 transition-opacity bg-slate-900">
                <img 
                  src={post.image} 
                  alt={post.title_ar}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Post Content */}
              <div className="md:col-span-3 flex flex-col justify-center py-2">
                <div className="flex items-center gap-4 text-slate-500 text-[10px] font-black mb-4 uppercase tracking-widest">
                  <span className="text-blue-500 flex items-center gap-1">
                    <Tag size={12} /> تقنية
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> 5 دقائق
                  </span>
                </div>
                
                <h2 className="text-2xl font-black mb-4 group-hover:text-blue-500 transition-colors leading-tight">
                  {post.title_ar}
                </h2>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
                  {post.mainTitle_ar}
                </p>

                <Link href={`/blog/${post.slug_ar}`} className="flex items-center gap-2 text-xs font-black text-white hover:gap-4 transition-all">
                  إقرأ المزيد <ChevronLeft size={16} className="text-blue-600" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* --- Sidebar (Static View) --- */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Categories Box */}
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
            <h3 className="text-xl font-black mb-6">الأقسام</h3>
            <div className="flex flex-wrap gap-3">
              {["برمجة", "ذكاء اصطناعي", "تصميم", "أعمال", "سكيورتي"].map(cat => (
                <span key={cat} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors cursor-pointer">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="p-8 rounded-[2rem] bg-blue-600 text-white relative overflow-hidden">
             <h3 className="text-xl font-black mb-4 relative z-10">نشرة نكسس</h3>
             <p className="text-blue-100 text-xs mb-6 relative z-10 font-medium">اشترك ليوصلك أحدث المقالات التقنية أسبوعياً.</p>
             <input 
              type="email" 
              placeholder="ايميلك هنا" 
              className="w-full bg-white/20 border border-white/10 rounded-xl py-3 px-4 text-xs placeholder:text-blue-200 outline-none mb-3"
             />
             <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
               اشترك الآن
             </button>
          </div>
        </aside>

      </div>

    </main>
  );
}