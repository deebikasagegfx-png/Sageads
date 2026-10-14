import { Link } from 'react-router-dom';

const services = [
  ['Digital Marketing', '/service/'],
  ['Printing', '/service/'],
  ['Web Development', '/service/'],
  ['Video Production', '/service/'],
  ['Branding', '/service/'],
];

const company = [
  ['Home', '/', true],
  ['About Us', '/about-us/'],
  ['Services', '/service/'],
  ['Our Projects', 'https://sageads.in/our-projects/'],
  ['Blogs', 'https://sageads.in/blog/'],
  ['Contact Us', '/contact/'],
];

function ContactIcon({ type }) {
  if (type === 'pin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-13a7 7 0 1 0-14 0c0 6.8 7 13 7 13Z"/><circle cx="12" cy="9" r="2.2"/></svg>;
  if (type === 'mail') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="m3 6 9 7 9-7"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2H3.4A1.4 1.4 0 0 0 2 3.4C2 13.7 10.3 22 20.6 22a1.4 1.4 0 0 0 1.4-1.4v-3.2a1.4 1.4 0 0 0-1.2-1.4l-4.1-.7a1.4 1.4 0 0 0-1.3.4l-1.8 1.8a16 16 0 0 1-7.1-7.1l1.8-1.8a1.4 1.4 0 0 0 .4-1.3L8 3.2A1.4 1.4 0 0 0 6.6 2Z"/></svg>;
}

function SocialIcon({ type }) {
  if (type === 'facebook') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.5-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.5v8"/></svg>;
  if (type === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.8" r=".8" className="social-dot"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v10M5 5v.1M10 19v-6c0-2.2 1.2-3.5 3.1-3.5s3 1.3 3 3.5v6M10 10v9M2 2h20v20H2z"/></svg>;
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link className="site-footer-logo" to="/" aria-label="Sage Advertising home">
            <img src="/assets/images/logo.webp" alt="Sage Advertising, a unit of Sage GFX" />
          </Link>
          <p>A unit of <strong>Sagegfx Digital Solutions,</strong> we execute hyper-targeted strategies to increase brand visibility and consistently boost your sales conversion.</p>
        </div>

        <nav className="site-footer-column" aria-label="Services">
          <h2>Services</h2>
          {services.map(([label, path]) => <Link key={label} to={path}>{label}</Link>)}
        </nav>

        <nav className="site-footer-column" aria-label="Company">
          <h2>Company</h2>
          {company.map(([label, path, active]) => path.startsWith('http')
            ? <a key={label} href={path}>{label}</a>
            : <Link key={label} to={path} className={active ? 'is-current' : ''}>{label}</Link>)}
        </nav>

        <div className="site-footer-column site-footer-contact">
          <h2>Office Address</h2>
          <p><ContactIcon type="pin"/><span>No: 160, 3rd Floor, Avila Towers, Mudichur Rd, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045</span></p>
          <a href="mailto:sagegraphics2021@gmail.com"><ContactIcon type="mail"/><span>sagegraphics2021@gmail.com</span></a>
          <a href="tel:+918778914009"><ContactIcon type="phone"/><span>+91 87789 14009</span></a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>Copyright © 2025 Sage ads. All rights reserved.</p>
        <Link to="/privacy-policy/">Privacy Policy</Link>
        <div className="site-footer-socials" aria-label="Social media">
          <a href="https://www.facebook.com/" aria-label="Facebook"><SocialIcon type="facebook"/></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><SocialIcon type="instagram"/></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn"><SocialIcon type="linkedin"/></a>
        </div>
      </div>
    </footer>
  );
}
