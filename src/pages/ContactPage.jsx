import { useState } from 'react';
import { services } from '../data.js';

function DetailIcon({ type }) {
  if (type === 'pin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-13a7 7 0 1 0-14 0c0 6.8 7 13 7 13Z"/><circle cx="12" cy="9" r="2.2"/></svg>;
  if (type === 'mail') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="m3 6 9 7 9-7"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2H3.4A1.4 1.4 0 0 0 2 3.4C2 13.7 10.3 22 20.6 22a1.4 1.4 0 0 0 1.4-1.4v-3.2a1.4 1.4 0 0 0-1.2-1.4l-4.1-.7a1.4 1.4 0 0 0-1.3.4l-1.8 1.8a16 16 0 0 1-7.1-7.1l1.8-1.8a1.4 1.4 0 0 0 .4-1.3L8 3.2A1.4 1.4 0 0 0 6.6 2Z"/></svg>;
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return <>
    <section className="contact-showcase">
      <div className="contact-layout">
        <div className="contact-intro">
          <h1>Get In Touch<br/>With Us</h1>
          <p className="contact-lead">We’re always ready to collaborate and support your<br className="contact-desktop-break"/> advertising journey.</p>

          <div className="contact-address contact-detail-row">
            <DetailIcon type="pin" />
            <p>Head Office<br/>No: 160, 3rd Floor, Avila Towers,<br/>Mudichur Rd, West Tambaram,<br/>Tambaram, Chennai, Tamil Nadu 600045</p>
          </div>
          <a className="contact-detail-row" href="tel:+918778914009"><DetailIcon type="phone"/><span>+91 87789 14009</span></a>
          <a className="contact-detail-row" href="mailto:sagegraphics2021@gmail.com"><DetailIcon type="mail"/><span>sagegraphics2021@gmail.com</span></a>

          <div className="contact-hours">
            <h2><span>Opening Hours</span></h2>
            <p>Monday – Saturday<br/>09.00am – 07.00pm</p>
          </div>
          <div className="contact-follow"><h2>Follow Us</h2><div>
            <a href="https://www.facebook.com/" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.5-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.5v8"/></svg></a>
            <a href="https://www.instagram.com/" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.8" r=".8"/></svg></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M5 9v10M5 5v.1M10 19v-6c0-2.2 1.2-3.5 3.1-3.5s3 1.3 3 3.5v6M10 10v9M2 2h20v20H2z"/></svg></a>
          </div></div>
        </div>

        <form className="contact-form contact-reference-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <div className="form-two">
            <label>First Name<input required name="firstName" autoComplete="given-name" placeholder="First Name" /></label>
            <label>Last Name<input required name="lastName" autoComplete="family-name" placeholder="Last Name" /></label>
          </div>
          <label>Mobile Number<input required type="tel" name="phone" autoComplete="tel" placeholder="Mobile Number" /></label>
          <label>Email<input required type="email" name="email" autoComplete="email" placeholder="Email" /></label>
          <label>What Are You Looking For<select required defaultValue="Branding" name="service">{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label>
          <label>Message<textarea required rows="4" name="message" placeholder="Message" /></label>
          <button className="button" type="submit">SEND</button>
          {sent && <p className="form-feedback" role="status">Thanks for reaching out. Please email or call us directly to continue.</p>}
        </form>
      </div>
    </section>
    <section className="contact-map" aria-label="Map showing Sage GFX Digital Solutions office">
      <iframe title="Map to Sage GFX Digital Solutions, Tambaram, Chennai" src="https://maps.google.com/maps?q=Avila%20Towers%2C%20Mudichur%20Road%2C%20Tambaram%2C%20Chennai&t=&z=10&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </section>
  </>;
}
