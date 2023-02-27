import React, { useEffect, useState } from 'react';
import { a, config, useSpring, useTransition } from '@react-spring/web';

const HeroSection = () => {
  const [animatingDone, setAnimatingDone] = useState(false);
  const [text, setText] = useState('Web Developer');
  let index = 0;
  const items = [
    'Web Developer',
    'Photographer',
    'Cinephile',
    'Aphex Twin Fan'
  ];

  useEffect(() => {
    setTimeout(() => {
      setAnimatingDone(true);
    }, 4000);
  }, []);

  useEffect(() => {
    const change = setInterval(() => {
      if (index === 4) index = 0;
      setText(items[index]);
      index++;
    }, 3000);

    return () => clearInterval(change);
  }, []);

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

  const transition = useTransition(text, {
    from: { opacity: 0, x: '50%' },
    enter: { opacity: 1, x: '0%' },
    leave: { opacity: 0, x: '-50%' },
    config: config.molasses
  });

  return (
    <section className="page-section page-1">
      <a.div style={spring} className="hero-header">
        <a.h1>Kevin To.</a.h1>
        <a.h1>
          {transition(
            (style, item) =>
              item && (
                <a.p
                  className="text-transition"
                  style={{
                    ...style,
                    position: 'absolute',
                    left: '.5rem',
                    width: '40rem'
                  }}
                >
                  {text}
                </a.p>
              )
          )}
        </a.h1>
      </a.div>
    </section>
  );
};

export default HeroSection;
