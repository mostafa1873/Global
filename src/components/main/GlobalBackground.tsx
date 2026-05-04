"use client";

export default function GlobalBackground() {
  return (
    // الخلفية السوداء الصريحة الأساسية - دي اللي هتقص الزيادات في الآخر
    <div className="fixed inset-0 z- bg-black overflow-hidden pointer-events-none">

      {/* الجانب الأيسر - الإضاءة الزرقاء */}
      {/* التعديل: غيرنا overflow-hidden لـ overflow-visible عشان الدائرة متتقصش من النص */}
      <div className="absolute inset-y-0 left-0 w-1/2 overflow-x-visible">
        {/* اللون الأزرق الصريح */}
        <div
          className="absolute top-1 left-[-10%] -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[500px] rounded-full blur-[100px] opacity-40"
          style={{ backgroundColor: "#00156a" }}
        />
        {/* الهايلايت الأقوى */}
        <div
          className="absolute top-1 left-[-15%] -translate-y-1/2 w-[350px] h-[350px] md:w-[400px] md:h-[600px] rounded-full blur-[80px] opacity-30"
          style={{ backgroundColor: "#00156a" }}
        />
      </div>

      {/* الجانب الأيمن - الإضاءة الزرقاء */}
      {/* التعديل: غيرنا overflow-hidden لـ overflow-visible */}
      <div className="absolute inset-y-0 right-0 w-1/2 overflow-x-visible">
        {/* اللون الأزرق الصريح - جهة اليمين فوق */}
        <div
          className="absolute bottom-1 right-[-10%] translate-y-60 w-[350px] h-[350px] md:w-[600px] md:h-[500px] rounded-full blur-[100px] opacity-40"
          style={{ backgroundColor: "#00156a" }}
        />
        {/* الهايلايت الأقوى - جهة اليمين فوق */}
        <div
          className="absolute bottom-1 right-[-15%] translate-y-60 w-[350px] h-[350px] md:w-[400px] md:h-[600px] rounded-full blur-[80px] opacity-30"
          style={{ backgroundColor: "#00156a" }}
        />
      </div>

    </div>
  );
}