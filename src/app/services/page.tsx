import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Our Services' };
const services = [
  ['01','Aluminium windows & doors','Clean, practical framing solutions for openings, natural light and everyday use.','service-windows.webp'],
  ['02','Glass works','Glass elements selected to complement the function and character of your space.','service-glassworks.webp'],
  ['03','Shopfronts','Glazed entrances and frontage solutions for retail and commercial environments.','service-shopfronts.webp'],
  ['04','Glass partitions','Bring light through your interior while creating useful zones and separation.','service-partitions.webp'],
  ['05','Shower screens','A clean glass finish for bathrooms and wet areas.','service-shower.webp'],
  ['06','Glass railings','Glass railing concepts for a more open architectural feel.','service-railings.webp'],
  ['07','Glass awnings & canopies','Glazed overhead features for selected exterior applications.','service-canopies.webp'],
  ['08','Folding & sliding doors','Space-conscious openings that connect indoor and outdoor areas.','service-folding.webp'],
  ['09','Customised works','Discuss your dimensions, layout and project requirements with our team.','service-custom.webp'],
];
export default function ServicesPage(){return <><section className="page-hero page-hero-blue"><div className="section-kicker">CAPABILITIES / 01</div><h1>Aluminium & glass<br/><em>for every space.</em></h1><p>Explore the range of services available for residential, retail and commercial projects.</p><div className="page-hero-bottom"><span>OUR SERVICES</span><span>01 — 09</span></div></section><section className="section-pad service-page"><div className="section-heading"><div><div className="section-kicker">WHAT WE CAN HELP WITH</div><h2>Made around<br/><em>your project.</em></h2></div><p>Every space has different requirements. Share your ideas, measurements or reference images and start a conversation about the right solution.</p></div><div className="service-detail-list">{services.map(([n,title,desc,img])=><article className="service-detail" key={n}><div className="service-detail-number">{n}</div><div className="service-detail-copy"><h3>{title}</h3><p>{desc}</p><Link href="/contact" className="text-link">Enquire about this service <span>↗</span></Link></div><img loading="lazy" decoding="async" src={`/images/${img}`} alt={`${title} illustrative visual`} /></article>)}</div></section><section className="blue-cta"><div><div className="section-kicker">NOT SURE WHAT YOU NEED?</div><h2>Let’s talk through<br/><em>your requirements.</em></h2></div><Link href="/contact" className="button button-dark">Start an enquiry <span>↗</span></Link></section></>}
