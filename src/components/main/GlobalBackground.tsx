"use client";

export default function GlobalBackground() {
  return (
    // التعديل الوحيد هنا: ضفنا bg-black للـ html و الـ body برضه كأمان
    // وغيرنا h-[100dvh] لـ min-h-[100dvh] عشان يفرش مع السكرول
    <div
      className="fixed inset-0 -z-20 bg-black pointer-events-none w-full h-full"
      style={{ minHeight: '100dvh' }} 
    >
      {/* طبقة سوداء إضافية عشان نضمن إن مفيش خرم إبرة أبيض يبان */}
      <div className="absolute inset-0 bg-black -z-30" />

      {/* الجانب الأيسر - الإضاءة الزرقاء */}
      <div className="absolute inset-y-0 left-0 w-1/2 overflow-x-visible">
        <div
          className="absolute top-1 left-[-10%] -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[500px] rounded-full blur-[100px] opacity-40"
          style={{ backgroundColor: "#00156a" }}
        />
        <div
          className="absolute top-1 left-[-15%] -translate-y-1/2 w-[350px] h-[350px] md:w-[400px] md:h-[600px] rounded-full blur-[80px] opacity-30"
          style={{ backgroundColor: "#00156a" }}
        />
      </div>

      {/* الجانب الأيمن - الإضاءة الزرقاء */}
      <div className="absolute inset-y-0 right-0 w-1/2 overflow-x-visible">
        <div
          className="absolute bottom-1 right-[-10%] translate-y-60 w-[350px] h-[350px] md:w-[600px] md:h-[500px] rounded-full blur-[100px] opacity-40"
          style={{ backgroundColor: "#00156a" }}
        />
        <div
          className="absolute bottom-1 right-[-15%] translate-y-60 w-[350px] h-[350px] md:w-[400px] md:h-[600px] rounded-full blur-[80px] opacity-30"
          style={{ backgroundColor: "#00156a" }}
        />
      </div>
    </div>
  );
}