"use client";

import { motion } from "framer-motion";

export default function ServiceDetails() {
  return (
    <section className="w-full py-10 border-t border-white/10 px-6 md:px-24 bg-transparent text-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* المشكلة التي تعالجها الخدمة - توسيط في الموبايل */}
        <div className="mb-20 p-8 md:p-12 border-r-4 border-blue-600 bg-white/5 rounded-l-3xl backdrop-blur-md text-center md:text-right">
          <h3 className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">المشكلة التي تعالجها الخدمة</h3>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-white">
            كثير من الشركات تعتمد فقط على صفحات السوشيال ميديا، رغم أن العميل غالبًا يحتاج إلى مصدر رسمي يثق فيه قبل اتخاذ قرار التواصل أو الشراء. الموقع الإلكتروني يمنح الشركة مساحة احترافية لعرض خدماتها، أعمالها، معلوماتها، وطريقة التواصل معها بشكل واضح ومستقل.
          </p>
        </div>

        {/* ماذا نقدم داخل الخدمة - توسيط كامل */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">ماذا نقدم داخل <span className="text-blue-600">الخدمة؟</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "تصميم وتطوير مواقع تعريفية للشركات",
              "تصميم مواقع للخدمات والأنشطة التجارية",
              "تطوير صفحات هبوط للحملات الإعلانية",
              "تحسين تجربة المستخدم داخل الموقع",
              "تنظيم محتوى الصفحات بشكل واضح",
              "ربط الموقع بنماذج التواصل",
              "تحسين سرعة الموقع وتجربة التصفح",
              "مراعاة توافق الموقع مع الموبايل",
              "تجهيز الموقع ليكون مناسبًا للنمو والتطوير مستقبلًا"
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 border border-white/10 rounded-2xl bg-white/[0.03] hover:border-blue-600/50 hover:bg-blue-600/5 transition-all duration-300 text-center"
              >
                <div className="flex flex-col items-center">
                  <span className="text-blue-600 font-bold mb-2">0{index + 1}.</span>
                  <p className="font-medium text-white">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* لمن هذه الخدمة + النتيجة - توسيط في الموبايل */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-right">
          <div className="p-8 border border-white/10 rounded-3xl bg-white/5 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-blue-600">لمن هذه الخدمة مناسبة؟</h3>
            <p className="text-white leading-relaxed">
              هذه الخدمة مناسبة للشركات التي تحتاج إلى موقع احترافي يعرض خدماتها بشكل واضح، أو الشركات التي تمتلك موقعًا قديمًا وتحتاج إلى تحديثه. كما تناسب الشركات التي تعتمد على الإعلانات وتحتاج إلى صفحات هبوط تساعد على تحويل الزوار إلى عملاء محتملين.
            </p>
          </div>
          
          {/* كرت النتيجة مع تأثير Glow ملفت */}
          <div className="relative p-8 rounded-3xl bg-blue-600/10 border border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.2)] flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-white">النتيجة المتوقعة</h3>
            <p className="text-white leading-relaxed font-medium">
              بعد تنفيذ الخدمة، تحصل الشركة على موقع إلكتروني واضح وسريع ومنظم، يعكس صورتها الاحترافية ويساعد العملاء على فهم خدماتها والتواصل معها بسهولة.
            </p>
            {/* إضاءة خلفية للكرت */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-transparent opacity-10 rounded-3xl blur-xl" />
          </div>
        </div>

      </div>
    </section>
  );
}