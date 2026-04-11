"use client";
import { motion, Variants } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import blogData from "../../../blog.json"; 

export default function BlogSection() {
  const featuredPosts = blogData.slice(0, 2);

  // تم إضافة النوع Variants لحل مشكلة الـ Build
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative py-7 overflow-hidden border-t border-white/5" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-8">
          <div className="text-center md:text-right space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center md:justify-start gap-2 text-blue-500 font-bold text-xs uppercase tracking-[0.3em]"
            >
              <Sparkles size={14} />
              <span>آخر التحديثات</span>
            </motion.div>
            <h2 className="text-white text-4xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              نكتب <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-700">للمستقبل</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light max-w-2xl leading-relaxed">
              استكشف أحدث المقالات التقنية واستراتيجيات النمو الرقمي المقدمة من فريق خبراء نكسس.
            </p>
          </div>
          
          <Link 
            href="/blog" 
            className="hidden md:flex group relative px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm transition-all hover:bg-blue-600 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              استكشف المدونة <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            </span>
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {featuredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group relative flex flex-col md:flex-row gap-8 p-4 rounded-[3rem] bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.03] hover:border-blue-600/20 transition-all duration-700 items-stretch"
            >
              {/* Image Container - تم ضبطه ليملأ الارتفاع ويحل مشكلة الحجم في الشاشات الكبيرة */}
              <div className="w-full md:w-2/5 aspect-video md:aspect-auto md:self-stretch rounded-[2.2rem] overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src={post.image} 
                  alt={post.title_ar}
                  className="w-full h-full absolute inset-0 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                   <span className="px-4 py-2 backdrop-blur-md bg-black/40 border border-white/10 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                     {post.category || "تقنية"}
                   </span>
                </div>
              </div>
              
              <div className="w-full md:w-3/5 flex flex-col justify-between py-6 px-4 md:pl-4 text-center md:text-right">
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-4 text-slate-500 text-[10px] font-bold">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-600" /> {post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span className="flex items-center gap-1.5"><Clock size={14} /> 5 دقائق</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-500 transition-colors duration-500 leading-snug">
                    {post.title_ar}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {post.mainTitle_ar}
                  </p>
                </div>

                <div className="pt-8 flex justify-center md:justify-start">
                  <Link 
                    href={`/blog/${post.slug_ar}`} 
                    className="inline-flex items-center gap-3 text-sm font-black text-white hover:text-blue-500 transition-colors"
                  >
                    إقرأ المقال كاملاً
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all">
                      <ArrowLeft size={16} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex md:hidden justify-center mt-12">
          <Link 
            href="/blog" 
            className="group relative px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm transition-all hover:bg-blue-600 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              استكشف المدونة <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}