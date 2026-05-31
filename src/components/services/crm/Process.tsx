"use client";

import { motion } from "framer-motion";

export default function CRMFullDetails() {
    const servicesList = [
        "تطوير أنظمة إدارة العملاء CRM",
        "أنظمة متابعة العملاء المحتملين",
        "أنظمة تنظيم الطلبات",
        "لوحات تحكم للإدارة",
        "أنظمة حجز ومواعيد",
        "أنظمة متابعة فريق العمل",
        "تنظيم قواعد البيانات",
        "تحسين مسار العمل الداخلي",
        "ربط العمليات بطريقة تسهل المتابعة والتحليل"
    ];

    return (
        <section className="relative w-full py-10 px-6 text-center lg:text-right border-t border-white/10" dir="rtl">
            <div className="max-w-7xl mx-auto w-full">

                {/* المشكلة والحل */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-10 border-b border-white/10 pb-16 lg:pb-24">
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-sm font-bold text-blue-600 mb-4 lg:mb-6 tracking-widest uppercase">التحدي</h3>
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 lg:mb-8">المشكلة التي تعالجها الخدمة</h2>
                        <p className="text-lg text-white/90 font-light leading-relaxed">
                            كثير من الشركات تعتمد على الرسائل، الجداول المتفرقة، أو المتابعة اليدوية فقط، مما يؤدي إلى فقدان بيانات العملاء، تأخر الردود، أو صعوبة معرفة حالة كل عميل أو طلب.
                        </p>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                        {/* في الموبايل جعلنا الخط الفاصل بالأعلى لتناسق التصميم، وفي الشاشات الكبيرة يعود لليمين */}
                        <p className="text-lg lg:text-xl text-white font-medium border-t-2 lg:border-t-0 lg:border-r-2 border-blue-600 pt-6 lg:pt-0 lg:pr-8">
                            الأنظمة الرقمية تساعد على تنظيم المعلومات في مكان واحد، وتسهيل المتابعة بين فريق العمل والإدارة، مما يحول الفوضى إلى تدفق عملي.
                        </p>
                    </div>
                </div>

                {/* ماذا نقدم */}
                <div className="mb-16 lg:mb-18">
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-12 lg:mb-16">ماذا نقدم داخل الخدمة؟</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                        {servicesList.map((service, i) => (
                            <div key={i} className="group relative lg:pr-8 flex flex-col items-center lg:items-start">
                                {/* تم تعديل النقطة الزرقاء لتتوسط المحتوى في الموبايل وتعود لمكانها في الديسكتوب */}
                                <div className="lg:absolute lg:right-0 lg:top-2 w-2 h-2 bg-blue-600 mb-3 lg:mb-0" />
                                <h4 className="text-xl font-medium text-white">{service}</h4>
                                <div className="mt-4 lg:mt-6 h-[1px] w-12 bg-white/10 group-hover:bg-blue-600 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* لمن الخدمة + النتيجة */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="p-8 lg:p-10 border border-white/10 flex flex-col items-center lg:items-center rounded-3xl">
                        <h3 className="text-xl font-bold text-white mb-6">لمن هذه الخدمة مناسبة؟</h3>
                        <p className="text-white/80 font-light leading-relaxed">
                            هذه الخدمة مناسبة للشركات التي لديها عدد متزايد من العملاء أو الطلبات، وتحتاج إلى طريقة أكثر تنظيمًا لإدارة المتابعة والبيانات. كما تناسب الشركات التي ترغب في تقليل الاعتماد على الطرق اليدوية وتحسين كفاءة فريق العمل.
                        </p>
                    </div>
                    <div className="p-8 lg:p-10 border border-blue-600/30 bg-blue-600/5 flex flex-col items-center lg:items-center rounded-3xl">
                        <h3 className="text-xl font-bold text-white mb-6">النتيجة المتوقعة</h3>
                        <p className="text-white/90 font-light leading-relaxed">
                            بعد تنفيذ الخدمة، تصبح العمليات أكثر وضوحًا وتنظيمًا، وتتمكن الشركة من متابعة العملاء والطلبات والبيانات بطريقة أسهل وأكثر كفاءة.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}