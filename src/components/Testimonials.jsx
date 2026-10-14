import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data.js';

const wrap = (index) => ((index % testimonials.length) + testimonials.length) % testimonials.length;
const slides = [
  ...testimonials.slice(-2),
  ...testimonials,
  ...testimonials.slice(0, 2),
];

export default function Testimonials() {
  const [position, setPosition] = useState(2);
  const [animate, setAnimate] = useState(true);
  const viewportRef = useRef(null);
  const [slideStep, setSlideStep] = useState(0);
  const activeIndex = wrap(position - 2);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const measure = () => {
      const firstCard = viewport.querySelector('.testimonial-card');
      const track = viewport.firstElementChild;
      if (!firstCard || !track) return;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 20;
      setSlideStep(firstCard.getBoundingClientRect().width + gap);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const finishSlide = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;
    if (position === 1 || position === testimonials.length + 2) {
      setAnimate(false);
      setPosition(position === 1 ? testimonials.length + 1 : 2);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }
  };
  const previous = () => { setAnimate(true); setPosition((value) => value - 1); };
  const next = () => { setAnimate(true); setPosition((value) => value + 1); };
  const select = (index) => { setAnimate(true); setPosition(index + 2); };

  return (
    <section className="testimonials-reference">
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        <span className="testimonials-title-rule" aria-hidden="true" />
        <div className="testimonials-carousel">
          <button className="testimonial-arrow testimonial-arrow-prev" type="button" aria-label="Previous testimonial" onClick={previous}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 4-8 8 8 8" /></svg>
          </button>
          <div className="testimonial-viewport" ref={viewportRef} aria-live="polite">
            <div
              className={`testimonial-cards${animate ? '' : ' without-transition'}`}
              style={{ transform: `translateX(-${position * slideStep}px)` }}
              onTransitionEnd={finishSlide}
            >
              {slides.map(([quote, name, city], index) => (
                <article className="testimonial-card" key={`${name}-${index}`}>
                  <p>{quote}</p>
                  <div className="testimonial-author"><strong>{name}</strong><span>&#8211;{city}</span></div>
                  <svg className="testimonial-quote-mark" viewBox="0 0 32 28" aria-hidden="true"><path d="M13.5 2H4.8C2.7 2 1 3.7 1 5.8v8.4C1 16.3 2.7 18 4.8 18h4.1c-.7 3-2.9 5.5-6.5 7.6l2.2 2.4c6.1-2.3 9.2-6.8 9.2-13.4V5.8C13.8 3.7 13.7 2 13.5 2Zm15.2 0h-8.7c-2.1 0-3.8 1.7-3.8 3.8v8.4c0 2.1 1.7 3.8 3.8 3.8h4.1c-.7 3-2.9 5.5-6.5 7.6l2.2 2.4c6.1-2.3 9.2-6.8 9.2-13.4V5.8c0-2.1-.1-3.8-.3-3.8Z" /></svg>
                </article>
              ))}
            </div>
          </div>
          <button className="testimonial-arrow testimonial-arrow-next" type="button" aria-label="Next testimonial" onClick={next}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" /></svg>
          </button>
        </div>
        <div className="testimonial-dots" aria-label="Choose testimonial">
          {testimonials.map(([, name], index) => (
            <button key={name} type="button" className={index === activeIndex ? 'active' : ''} aria-label={`Show testimonial ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => select(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}
