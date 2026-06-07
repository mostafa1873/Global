import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'], // منع أرشفة ملفات النظام والـ APIs الخاصة بـ Next.js
    },
    sitemap: 'https://globalnexuseg.com/sitemap.xml', // الدومين الأساسي المحدث لـ Global Nexus
  };
}