import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://genesis-aluglass-kelly-3860.vercel.app/sitemap.xml' }; }
