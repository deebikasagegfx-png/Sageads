import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App(){
  const location=useLocation();
  useEffect(()=>{
    window.scrollTo({top:0,behavior:'instant'});
    const titles={'/':'Sage Ads | Creative & Digital Marketing Agency in Chennai','/about-us/':'About Sage Ads | A Venture of SAGE GFX','/service/':'Services | Sage Ads Chennai','/contact/':'Contact Sage Ads'};
    document.title=titles[location.pathname]||'Sage Ads';
  },[location.pathname]);
  return <><SiteHeader/><main><Routes><Route path="/" element={<HomePage/>}/><Route path="/about-us/" element={<AboutPage/>}/><Route path="/service/" element={<ServicesPage/>}/><Route path="/contact/" element={<ContactPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></main><SiteFooter/></>;
}
