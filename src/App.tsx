import React, { useEffect, useState } from 'react';
import { P5Sketch } from './p5.js/p5Functions';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import LoadingSwipe from './components/LoadingSwipe';

function App() {
  const [swipeUp, setSwipeUp] = useState(false);
  const [pageKey, setPageKey] = useState('01.Home');

  useEffect(() => {
    let mouseCursor = document.querySelector<HTMLElement>('.cursor');
    const cursor = (e: any) => {
      if (mouseCursor) {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
      }
    };
    window.addEventListener('mousemove', cursor);
  }, []);

  const menuProps = {
    setSwipeUp,
    swipeUp,
    setPageKey,
    pageKey
  };

  return (
    <div className="wrapper">
      <Menu {...menuProps} />
      <P5Sketch />
      {pageKey === '01.Home' ? (
        <HeroSection />
      ) : pageKey === '02.About' ? (
        <AboutSection />
      ) : pageKey === '03.Projects' ? (
        <ProjectsSection />
      ) : pageKey === '04.Contact' ? (
        <ContactSection />
      ) : null}

      <LoadingSwipe swipeUp={swipeUp} pageKey={pageKey} />
    </div>
  );
}

export default App;
