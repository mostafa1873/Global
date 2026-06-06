import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // اللغات المدعومة في الموقع
  locales: ['ar', 'en'],

  // اللغة الأساسية لو الرابط مفيش فيه لغة
  defaultLocale: 'ar'
});

export const config = {
  // هنا بنقول للمكتبة تشتغل على كل الصفحات ما عدا ملفات الميديا والصور والـ API
  matcher: ['/', '/(ar|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};