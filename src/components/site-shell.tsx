'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/language';

const wa = 'https://wa.me/60148122623?text=Hello%20Genesis%20Aluglass%2C%20I%20would%20like%20a%20quotation.';
const nav = [['Home', '/'], ['Services', '/services'], ['Projects', '/projects'], ['About us', '/about'], ['Contact', '/contact']];

export function SiteHeader() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="topline"><span>KLANG VALLEY & SURROUNDING AREAS</span><span>ALUMINIUM · GLASS · CUSTOM WORKS</span></div>
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Genesis Aluglass home"><img src="/images/genesis-logo-transparent.png" alt="Genesis Aluglass" width="600" height="400" /></Link>
      <nav className="main-nav" aria-label="Main navigation">{nav.map(([label, href]) => <Link href={href} key={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}</nav>
      <div className="header-actions"><div className="language-switch" role="group" aria-label="Choose language"><button type="button" onClick={()=>setLanguage('en')} aria-pressed={language==='en'}>EN</button><span aria-hidden="true">|</span><button type="button" onClick={()=>setLanguage('zh')} aria-pressed={language==='zh'}>中文</button></div><a className="header-cta" href={wa} target="_blank" rel="noreferrer">Get a quotation <span aria-hidden="true">↗</span></a></div>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top"><Link href="/" className="footer-brand"><img src="/images/genesis-logo-transparent.png" alt="Genesis Aluglass" width="600" height="400" /></Link><div className="footer-tag">ALUMINIUM <i>·</i> GLASS <i>·</i> CUSTOM WORKS</div><a href={wa} target="_blank" rel="noreferrer" className="footer-contact">WhatsApp +60 14-812 2623 ↗</a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Genesis Aluglass. All rights reserved.</span><span>Serving Klang Valley & surrounding areas</span></div>
  </footer>;
}

export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={wa} target="_blank" rel="noreferrer" aria-label="Chat with Genesis Aluglass on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.8a8.2 8.2 0 1 1 16-3.5Z"/><path d="M8.5 8.5c.3 2.5 2.3 4.6 4.9 5.1l1.2-1.1 2 .9c-.1 1.2-1 1.9-2.2 1.9-3.7-.2-7.1-3.6-7.3-7.3 0-1.2.7-2.1 1.9-2.2l.9 2-1.4.7Z"/></svg><span>Chat on WhatsApp</span></a>;
}
