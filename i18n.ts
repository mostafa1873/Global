import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // بنستقبل الـ requestLocale ونعمل له await بناءً على تحديثات نكست 16
  const locale = await requestLocale;

  // التأكد من أن الـ locale موجود، وإلا نستخدم القيمة الافتراضية 'en'
  const finalLocale = locale || 'en';

  // قراءة ملفات الترجمة بشكل صريح وثابت لتفادي مشاكل الـ Turbopack
  const messages = finalLocale === 'en' 
    ? (await import('./messages/en.json')).default
    : (await import('./messages/ar.json')).default;

  return {
    locale: finalLocale,
    messages
  };
});