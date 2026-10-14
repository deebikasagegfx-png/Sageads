import { useState } from 'react';
import { reasons } from '../data.js';

export default function HomeDifference(){
  const [touchedReason, setTouchedReason] = useState(null);

  return (
    <div className="home-difference"><h2>WHAT MAKES SAGE DIFFERENT?</h2><div className="home-reasons-grid">{reasons.map(([title,desc],index)=><article key={title} tabIndex="0" className={touchedReason===index?'is-touched':''} onPointerDown={(event)=>{if(event.pointerType==='touch')setTouchedReason(index)}}><h3>{title}</h3><p>{desc}</p></article>)}</div></div>
  );
}
