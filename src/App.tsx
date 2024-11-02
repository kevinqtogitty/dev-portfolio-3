import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
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
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuProps = {
    setSwipeUp,
    swipeUp,
    setPageKey,
    pageKey,
    mobileMenuIsOpen,
    setMobileMenuIsOpen,
    menuIsOpen,
    setMenuIsOpen
  };

  const location = useLocation();

  useEffect(() => {
    setSwipeUp(true);
    const timer = setTimeout(() => setSwipeUp(false), 1000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="wrapper">
      <Menu {...menuProps} />
      <P5Background />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <LoadingSwipe swipeUp={swipeUp} pageKey={pageKey} />
    </div>
  );
}

function RoutedApp() {
  return (
    <Router>
      <App />
    </Router>
  )

}

export default RoutedApp;
