import { Link } from 'react-router-dom';
import { services } from '../data.js';
import PageBanner from '../components/PageBanner.jsx';
import CallToAction from '../components/CallToAction.jsx';

export default function ServicesPage(){return <><PageBanner eyebrow="WHAT WE DO" title={<>Ideas built to<br/><em>move brands.</em></>}/><section className="services-lead"><div className="container"><p>As part of Sage GFX, SageAds offers complete marketing solutions to help your brand grow in the real and digital world.</p><span>STRATEGY — DESIGN — DELIVERY</span></div></section><section className="section service-detail"><div className="container service-list">{services.map((s,i)=><article key={s.title} className="service-row"><div className="row-number">{s.mark}<span> / 08</span></div><div className="row-content"><h2>{s.title}</h2><p>{s.description}</p><ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul></div><Link className="round-link" to="/contact/" aria-label={`Enquire about ${s.title}`}>↗</Link></article>)}</div></section><CallToAction/></>}
