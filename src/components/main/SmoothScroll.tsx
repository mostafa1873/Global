"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { frame, cancelFrame } from "framer-motion"; // التعديل هنا: استدعاء cancelFrame لإلغاء الـ loop
import { usePathname } from "next/navigation"; // التعديل المطلوب لمراقبة تغيير الصفحات

export default function SmoothScroll() {
  const pathname = usePathname(); // تعريف المسار الحالي

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // قللنا الوقت لـ 1.2 عشان الاستجابة تبقى فورية وسريعة
      lerp: 0.1,
      wheelMultiplier: 1, // رجعناها لـ 1 عشان السرعة الطبيعية
      smoothWheel: true, // زودنا دي لـ 2 عشان اللمس على الموبايل يبقى خفيف وبيجري معاك
    });

    // التعديل لحل مشكلة عدم الوصول لآخر الصفحة: تحديث المقاسات تلقائياً
    const resizeObserver = new ResizeObserver(() => {
      // التعديل هنا: نستخدم التنبؤ الآمن لضمان عدم حدوث TypeError إذا كان lenis لسه بيحمل
      // (any) تم استخدام التبديل لنوع 
      if (lenis && typeof (lenis as any).update === 'function') {
        (lenis as any).update();
      }
    });
    resizeObserver.observe(document.body);

    // --- التعديل السحري الجديد لمراقبة التغييرات في صفحة الأعمال بدون تعديل كودها ---
    const mutationObserver = new MutationObserver(() => {
      if (lenis && typeof (lenis as any).update === 'function') {
        (lenis as any).update();
      }
    });

    // نراقب الـ body وأي عناصر فرعية بتتغير (زي الـ Grid لما الفلتر يتغير)
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
    // -----------------------------------------------------------------------

    // --- التعديل لحل مشكلة الانتقال: تصفير السكرول عند دخول صفحة جديدة ---
    lenis.scrollTo(0, { immediate: true });
    // ------------------------------------------------------------------

    // التعديل هنا: خلينا الـ data نوعها any عشان TypeScript ميزعلش
    // واخدنا منها الـ timestamp اللي Lenis محتاجه
    function update(data: any) {
      const time = typeof data === 'number' ? data : data.timestamp;
      lenis.raf(time);
    }

    // ربط التيكر بتاع فريمر (تم الاكتفاء به لمنع التكرار وتحسين الأداء)
    frame.update(update, true);

    return () => {
      lenis.destroy();
      resizeObserver.disconnect(); // تنظيف الـ observer
      mutationObserver.disconnect(); 
      cancelFrame(update); 
    };
  }, [pathname]); 

  return null;
}