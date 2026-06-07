import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://globalnexuseg.com';

    // 1. جميع المسارات الثابتة الأساسية للموقع للغتين
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/services/branding-visual-identity',
        '/services/web-development',
        '/services/digital-marketing',
        '/services/crm-business-systems',
        '/services/mobile-applications',
        '/services/ui-ux-design',
        '/portfolio',
        '/blog',
        '/contact',
        '/call'
    ];

    // 2. المقالات المكتوبة باللغة العربية (الفعلية الحالية)
    const blogSlugsAr = [
        'بناء-مصداقية-الشركة-عبر-الموقع',
        'أهمية-SEO-للشركات-الناشئة',
        'أهمية-الهوية-البصرية-للعلامة-التجارية',
        'أهمية-صناعة-المحتوى-للمشاريع'
    ];

    // 3. المقالات المكتوبة باللغة الإنجليزية (الفعلية الحالية)
    const blogSlugsEn = [
        'website-builds-company-credibility',
        'seo-secret-weapon-for-startups',
        'importance-of-brand-visual-identity',
        'importance-of-content-marketing'
    ];

    // توليد مسارات الصفحات الثابتة للغتين (ar و en) تلقائياً
    const staticEntries = staticRoutes.flatMap((route) => [
        {
            url: `${baseUrl}/ar${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1.0 : route.startsWith('/services/') ? 0.9 : 0.8,
        },
        {
            url: `${baseUrl}/en${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1.0 : route.startsWith('/services/') ? 0.9 : 0.8,
        },
    ]);

    // توليد مسارات المقالات العربية تحت قسم /ar/blog/
    const arabicBlogEntries = blogSlugsAr.map((slug) => ({
        url: `${baseUrl}/ar/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // توليد مسارات المقالات الإنجليزية تحت قسم /en/blog/
    const englishBlogEntries = blogSlugsEn.map((slug) => ({
        url: `${baseUrl}/en/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // دمج الصفحات الثابتة والمقالات كلها (العربي والإنجليزي) في مصفوفة واحدة جاهزة للأرشفة
    return [...staticEntries, ...arabicBlogEntries, ...englishBlogEntries];
}