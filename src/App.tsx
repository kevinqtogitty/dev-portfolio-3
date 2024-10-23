import React, { useEffect, useState } from 'react';
import { P5Background } from './p5.js/p5Functions';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import LoadingSwipe from './components/LoadingSwipe';

function App() {
  const [swipeUp, setSwipeUp] = useState(false);
  const [pageKey, setPageKey] = useState('01.Home');

  const menuProps = {
    setSwipeUp,
    swipeUp,
    setPageKey,
    pageKey
  };

  return (
    <div className="wrapper">
      <Menu {...menuProps} />
      <P5Background />
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
