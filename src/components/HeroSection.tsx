import React, { useEffect, useState } from 'react';
import {
  a,
  config,
  useSpring,
  useSprings,
  useTransition
} from '@react-spring/web';

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const items = [
    { text: 'Web developer', gradient: 'gradient-1' },
    { text: 'Photographer', gradient: 'gradient-2' },
    { text: 'Cinephile', gradient: 'gradient-3' },
    { text: 'Aphex Twin fan', gradient: 'gradient-4' }
  ];

  useEffect(() => {
    const change = setInterval(() => {
      setIndex((state) => state + 1);
    }, 4000);

    return () => clearInterval(change);
  }, []);

  useEffect(() => {
    if (index === 4) setIndex(0);
  }, [index]);

  useEffect(() => {
    let mouseCursor = document.querySelector<HTMLElement>('.dotted');
    let h1 = document.querySelectorAll<HTMLElement>('.hero-header');
    const cursorChangeEnter = (e: any) => {
      mouseCursor?.classList.add('hovered');
    };
    const cursorChangeLeave = (e: any) => {
      mouseCursor?.classList.remove('hovered');
    };
    if (h1) {
      h1.forEach((element: HTMLElement) =>
        element.addEventListener('mouseenter', cursorChangeEnter)
      );
      h1.forEach((element: HTMLElement) =>
        element.addEventListener('mouseleave', cursorChangeLeave)
      );
    }
  }, []);

  const spring = useSpring({
    from: {
      opacity: 0,
      transform: `translateY(50%)`,
      filter: 'blur(10)'
    },
    to: { opacity: 1, transform: 'translateY(0%)', filter: 'blur(0)' },
    delay: 1000,
    config: config.molasses
  });

  return (
    <section className="page-section page-1">
      <a.div style={spring} className="hero-header">
        <a.h1>Kevin To.</a.h1>
        <a.h1>
          {items.map(
            (item, i) =>
              item && (
                <p
                  key={i}
                  className={`text-transition ${item.gradient} ${
                    index === i ? 'show' : null
                  }`}
                >
                  {item.text}
                </p>
              )
          )}
        </a.h1>
      </a.div>
      <div className="footer">
        <div>
          <span /> <p>* Press any key for a surprise</p>
        </div>
        <div>
          <span /> <p>Made with AstroJS, p5.js, React-Spring, Radix-UI</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
