import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // بنستقبل الـ requestLocale ونعمل له await بناءً على تحديثات نكست 16
  const locale = await requestLocale;

  // قراءة ملفات الترجمة بشكل صريح وثابت لتفادي مشاكل الـ Turbopack
  const messages = locale === 'en' 
    ? (await import('./messages/en.json')).default
    : (await import('./messages/ar.json')).default;

  return {
    locale,
    messages
  };
});