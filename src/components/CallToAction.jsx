import { Link } from 'react-router-dom';

export default function CallToAction(){
  return (
    <section className="cta-section">
      <div className="cta-band">
        <div className="container cta-band-inner">
          <h2>Let&#8217;s build a brand that not only looks great but performs even better. Start your journey with us today.</h2>
          <Link className="cta-band-arrow" to="/contact/" aria-label="Start a conversation with Sage Ads">
            <svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="22"/><path d="M16 26h18m-8-8 8 8-8 8"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
