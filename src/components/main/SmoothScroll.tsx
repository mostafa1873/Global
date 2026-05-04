"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { frame } from "framer-motion";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // قللنا الوقت لـ 1.2 عشان الاستجابة تبقى فورية وسريعة
      lerp: 0.1,
      wheelMultiplier: 1, // رجعناها لـ 1 عشان السرعة الطبيعية
      smoothWheel: true, // زودنا دي لـ 2 عشان اللمس على الموبايل يبقى خفيف وبيجري معاك
    });

    // التعديل هنا: خلينا الـ data نوعها any عشان TypeScript ميزعلش
    // واخدنا منها الـ timestamp اللي Lenis محتاجه
    function update(data: any) {
      const time = typeof data === 'number' ? data : data.timestamp;
      lenis.raf(time);
    }

    // ربط التيكر بتاع فريمر
    frame.update(update, true);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}