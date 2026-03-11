import ServiceCard from "./ServiceCard";
import { Code2, Megaphone, Smartphone, Globe, BarChart3, Palette } from "lucide-react";

export default function Services() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-nexus-blue font-semibold tracking-wider uppercase mb-3">خدماتنا</h2>
        <p className="text-3xl md:text-5xl font-bold text-white">نحول أفكارك إلى واقع رقمي ملموس</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* كارت كبير - تطوير المواقع */}
        <ServiceCard
          className="md:col-span-2"
          title="بناء المواقع والمنصات"
          description="نصمم ونطور مواقع إلكترونية سريعة، متوافقة مع محركات البحث، وبتجربة مستخدم (UX) تضمن تحويل الزوار لعملاء دائمين باستخدام أحدث التقنيات مثل Next.js."
          icon={<Code2 size={28} />}
        />

        {/* كارت طولي - التسويق الرقمي */}
        <ServiceCard
          title="التسويق الرقمي"
          description="خطط تسويقية شاملة لزيادة مبيعاتك وانتشارك."
          icon={<Megaphone size={28} />}
        />

        {/* كارت - تحليل البيانات */}
        <ServiceCard
          title="تحليل البيانات"
          description="قرارات مبنية على أرقام دقيقة لنمو أعمالك."
          icon={<BarChart3 size={28} />}
        />

        {/* كارت كبير - تطبيقات الموبايل */}
        <ServiceCard
          className="md:col-span-2"
          title="تطبيقات الموبايل الذكية"
          description="تطبيقات Native و Cross-platform بتصميمات عصرية وأداء استثنائي يضع علامتك التجارية في جيب عميلك طوال الوقت."
          icon={<Smartphone size={28} />}
        />
        
        {/* كارت - الهوية البصرية */}
        <ServiceCard
          title="الهوية البصرية"
          description="تصميم شعارات وبراندينج يعكس قوة Global Nexus."
          icon={<Palette size={28} />}
        />
      </div>
    </section>
  );
}