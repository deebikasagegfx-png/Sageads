import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { homeServices } from '../data/homeServices.js';

export default function HomeServices(){
  const sectionRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [touchedService, setTouchedService] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) {
      setEntered(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`home-services${entered ? ' is-entered' : ''}`}>
      <div className="container home-services-container">
        <h2 className="home-services-title">Our Services <span className="services-heading-arrow" aria-hidden="true"></span></h2>
        <div className="home-service-grid">
          {homeServices.map((service,index)=>(
            <article
              className={`home-service-card${touchedService === index ? ' is-touched' : ''}`}
              key={service.title}
              onPointerDown={(event) => {
                if (event.pointerType === 'touch') setTouchedService(index);
              }}
            >
              <span className="home-service-number">{index+1}</span>
              <h3>{service.title}</h3>
              <p>{service.lead ? <><strong>{service.lead}</strong>{service.text}</> : service.text}</p>
              <Link className="home-service-link" to="/service/">Know More <span aria-hidden="true">&#8594;</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
