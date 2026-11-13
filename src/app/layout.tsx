import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter, SiteHeader, WhatsAppFloat } from '@/components/site-shell';

export const metadata: Metadata = {
  metadataBase: new URL('https://genesis-aluglass-kelly-3860.vercel.app'),
  title: { default: 'Genesis Aluglass | Aluminium & Glass Solutions', template: '%s | Genesis Aluglass' },
  description: 'Aluminium and glass solutions for homes, shops and commercial spaces across Klang Valley. Contact Genesis Aluglass to discuss your project.',
  applicationName: 'Genesis Aluglass',
  openGraph: { title: 'Genesis Aluglass | Aluminium & Glass Solutions', description: 'Thoughtful aluminium and glass solutions for homes, shops and commercial spaces across Klang Valley.', type: 'website', locale: 'en_MY', siteName: 'Genesis Aluglass' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /><WhatsAppFloat /></body></html>;
}
