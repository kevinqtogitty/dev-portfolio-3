import { animated, useTrail } from '@react-spring/web';
import React from 'react';
import resume from '../assets/ToKevinResume.pdf';

const ContactSection = () => {
  const links = [
    { text: 'Email', link: 'mailto:kevinq.to@gmail.com' },
    { text: 'Resume/CV', link: resume },
    { text: 'Github', link: 'https://www.github.com/kevinqtogitty' },
    { text: 'LinkedIn', link: 'https://www.linkedin.com/in/kevinqto/' },
    { text: 'Dev.to', link: 'https://www.dev.to/kevinqtogitty' }
  ];

  const trail = useTrail(links.length, {
    from: { x: '-10%', opacity: 0 },
    to: { x: '0%', opacity: 1 },
    delay: 700
  });

  return (
    <main className="page-section page-4">
      <ul>
        {trail.map((style, i) => (
          <animated.a
            key={i}
            style={{ ...style }}
            href={`${links[i].link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>{links[i].text}</li>
          </animated.a>
        ))}
      </ul>
    </main>
  );
};

export default ContactSection;
