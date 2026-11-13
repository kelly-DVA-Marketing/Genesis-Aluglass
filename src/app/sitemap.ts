import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://genesis-aluglass-kelly-3860.vercel.app';
  return ['', '/services', '/projects', '/about', '/contact'].map((path) => ({ url: `${base}${path}`, changeFrequency: 'monthly', priority: path === '' ? 1 : 0.7 }));
}
