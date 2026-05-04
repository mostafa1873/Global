"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { frame } from "framer-motion"; // ضفنا دي عشان نربط الوقت

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3, // تبطيء السكرول
      lerp: 0.1,
      wheelMultiplier: 0.5, 
      smoothWheel: true,
    });

    // التعديل هنا: بنخلي فريمر موشن هو اللي يحرك لينيس في كل فريم
    function update(time: number) {
      lenis.raf(time);
    }

    // ربط التيكر بتاع فريمر بالـ update بتاع لينيس
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

  return null; // مكون برمجي فقط مش بيبان في الشاشة
}