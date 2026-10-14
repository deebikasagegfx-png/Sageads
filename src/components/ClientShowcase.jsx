import { useEffect, useRef } from 'react';

const clientLogos=[
  {file:'cl1.webp',name:'Jenil Construction Pvt Ltd'},
  {file:'cl2.webp',name:'SJB Empower'},
  {file:'cl3.webp',name:'Tuir Design Studio'},
  {file:'cl4.webp',name:'Gangai Properties and Developers'},
  {file:'cl5.webp',name:'Builders Association of India, Tambaram Centre'},
  {file:'cl6.webp',name:'Ambujam Scans and Labs'},
  {file:'cl7.webp',name:'El Roi Enterprises'},
];

export default function ClientShowcase(){
  const viewportRef=useRef(null);
  useEffect(()=>{
    const viewport=viewportRef.current;
    if(!viewport)return;
    const timer=window.setInterval(()=>{
      const firstCard=viewport.querySelector('.client-logo-tile');
      if(!firstCard)return;
      const gap=parseFloat(getComputedStyle(viewport.querySelector('.client-logo-track')).columnGap)||0;
      const step=firstCard.getBoundingClientRect().width+gap;
      const atEnd=viewport.scrollLeft+viewport.clientWidth>=viewport.scrollWidth-8;
      if(atEnd)viewport.scrollTo({left:0,behavior:'smooth'});
      else viewport.scrollBy({left:step,behavior:'smooth'});
    },2000);
    return ()=>window.clearInterval(timer);
  },[]);

  return (
    <section className="clients-showcase">
      <div className="container clients-showcase-container">
        <h2>Our Clients</h2>
        <div className="client-logo-viewport" ref={viewportRef} aria-label="Client logos" role="region" tabIndex="0">
          <div className="client-logo-track">
            {clientLogos.map(({file,name})=>(
              <div className="client-logo-tile" key={file}>
                <img src={`/assets/images/${file}`} alt={name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
