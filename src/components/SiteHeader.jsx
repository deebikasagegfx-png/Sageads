import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import nav from '../data/navigation.js';

export default function Header(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const location=useLocation();

  useEffect(()=>setOpen(false),[location]);
  useEffect(()=>{
    const updateScrolled=()=>setScrolled(window.scrollY>20);
    updateScrolled();
    window.addEventListener('scroll',updateScrolled,{passive:true});
    return ()=>window.removeEventListener('scroll',updateScrolled);
  },[]);

  return <header className={scrolled?'header is-scrolled':'header'}><div className="container nav-wrap"><Link className="logo" to="/" aria-label="Sage Advertising home"><img src="/assets/images/logo.webp" alt="Sage Advertising, a unit of Sage GFX" /></Link><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><i></i><i></i><i></i></button><nav className={open?'nav-links open':'nav-links'}>{nav.map(([label,path])=>path.startsWith('http')?<a key={path} href={path}>{label}</a>:<NavLink key={path} to={path} end={path==='/'}>{label}</NavLink>)}</nav></div></header>;
}
