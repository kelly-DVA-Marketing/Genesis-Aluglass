import Link from 'next/link';

const services = [
  ['Aluminium windows & doors', 'service-windows.webp'],
  ['Glass works', 'service-glassworks.webp'],
  ['Shopfronts', 'service-shopfronts.webp'],
  ['Glass partitions', 'service-partitions.webp'],
  ['Shower screens', 'service-shower.webp'],
  ['Glass railings', 'service-railings.webp'],
  ['Glass awnings & canopies', 'service-canopies.webp'],
  ['Folding & sliding doors', 'service-folding.webp'],
  ['Customised works', 'service-custom.webp'],
];

export default function HomePage() {
  return <>
    <section className="home-hero">
      <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> ALUMINIUM & GLASS SPECIALISTS</div>
        <h1>Spaces shaped<br/>by <em>light & detail.</em></h1>
        <p>Thoughtful aluminium and glass solutions for homes, shops and commercial spaces across Klang Valley.</p>
        <div className="hero-actions"><Link className="button button-blue" href="/contact">Request a quotation <span>↗</span></Link><Link className="under-arrow" href="/projects">Explore our work <span>↓</span></Link></div>
        <div className="hero-note">MADE TO MEASURE. MADE FOR YOUR SPACE.</div>
      </div>
      <div className="hero-image"><img src="/images/architectural-villa.webp" fetchPriority="high" decoding="async" sizes="(max-width: 900px) 100vw, 53vw" alt="Illustrative contemporary home with high-resolution charcoal aluminium frames and expansive glass"/><span className="image-caption">ARCHITECTURAL INSPIRATION <b>01 / 03</b></span><span className="image-credit">Illustrative AI-generated image</span></div>
    </section>

    <section className="intro-section section-pad"><div className="section-kicker">01 — INTRODUCING GENESIS</div><div className="intro-grid"><h2>Good spaces are<br/>built on the <em>details.</em></h2><div className="intro-copy"><p>From the first frame to the final finish, aluminium and glass shape how a space looks, feels and functions. Genesis Aluglass brings practical solutions and considered workmanship to residential, retail and commercial projects.</p><p>Tell us what you have in mind. We’ll help you explore the right solution for your space.</p><Link href="/about" className="text-link">Get to know Genesis <span>↗</span></Link></div></div><div className="audience-strip"><div><b>01</b><strong>Residential</strong><span>For homes and living spaces</span></div><div><b>02</b><strong>Retail</strong><span>For shops and storefronts</span></div><div><b>03</b><strong>Commercial</strong><span>For offices and buildings</span></div></div></section>

    <section className="home-services section-pad"><div className="section-heading"><div><div className="section-kicker">02 — WHAT WE DO</div><h2>Solutions for<br/><em>every space.</em></h2></div><p>Explore our aluminium and glass services for residential, retail and commercial projects.</p></div><div className="service-card-grid">{services.map(([service, image], i)=><Link href="/services" key={service} className="service-card"><div className="service-card-image"><img loading="lazy" decoding="async" src={`/images/${image}`} alt={`${service} illustrative thumbnail`} /><span className="service-card-number">{String(i+1).padStart(2,'0')}</span><span className="service-card-arrow" aria-hidden="true">↗</span></div><strong>{service}</strong></Link>)}</div><Link href="/services" className="text-link service-more">Explore all services <span>↗</span></Link></section>

    <section className="featured-work"><div className="featured-photo"><img loading="lazy" decoding="async" src="/images/swing-door.jpg" alt="Actual Genesis Aluglass black aluminium framed frosted glass double swing door installation"/><span className="actual-tag">ACTUAL GENESIS PROJECT</span></div><div className="featured-copy"><div className="section-kicker">03 — FEATURED INSTALLATION</div><h2>Made to fit.<br/><em>Made to last.</em></h2><p>A real installation featuring black aluminium frames and frosted glass panels. Explore this project and the range of solutions Genesis Aluglass can help bring to life.</p><Link href="/projects" className="button button-dark">View project gallery <span>↗</span></Link></div></section>

    <section className="home-visuals section-pad"><div className="section-heading"><div><div className="section-kicker">04 — POSSIBILITIES</div><h2>See what glass<br/>can <em>open up.</em></h2></div><p>Architectural images are illustrative references, not completed Genesis projects. Your own project photographs will take centre stage as the portfolio grows.</p></div><div className="visual-grid"><Link href="/projects" className="visual-card"><img loading="lazy" decoding="async" src="/images/commercial-frontage.webp" alt="AI-generated illustrative commercial glass frontage"/><span>ILLUSTRATIVE IMAGE</span><strong>Commercial frontages <i>↗</i></strong></Link><Link href="/projects" className="visual-card"><img loading="lazy" decoding="async" src="/images/glass-office.webp" alt="AI-generated illustrative office with glass partitions"/><span>ILLUSTRATIVE IMAGE</span><strong>Glass partitions <i>↗</i></strong></Link></div></section>

    <section className="blue-cta"><div><div className="section-kicker">HAVE A PROJECT IN MIND?</div><h2>Let’s make your<br/><em>space work better.</em></h2></div><Link href="/contact" className="button button-dark">Talk to Genesis <span>↗</span></Link></section>
  </>;
}
