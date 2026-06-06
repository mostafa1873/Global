import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// إعداد الـ Plugin مع تحديد مسار ملف الإعدادات الخاص بالترجمة بشكل صريح لـ Turbopack
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);