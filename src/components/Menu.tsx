import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Link, useNavigate } from 'react-router-dom';
import PlusIcon from '../assets/icons/plus.svg';

import { a, config, useSpring, useTransition } from '@react-spring/web';

interface Props {
  setSwipeUp: React.Dispatch<React.SetStateAction<boolean>>;
  setPageKey: React.Dispatch<React.SetStateAction<string>>;
  setMobileMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  swipeUp: boolean;
  pageKey: string;
  mobileMenuIsOpen: boolean;
  menuIsOpen: boolean;
}

const Menu: React.FC<Props> = ({
  setSwipeUp,
  mobileMenuIsOpen,
  setMobileMenuIsOpen,
  menuIsOpen,
  setMenuIsOpen
}) => {
  const navigate = useNavigate();
  const [pendingPath, setPendingPath] = useState('/');
  const transition = useTransition(menuIsOpen, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: { duration: 200 }
  });

  const spring = useSpring({
    height: mobileMenuIsOpen ? '100vh' : '0vh',
    delay: 150
  });
  const spring2 = useSpring({
    height: mobileMenuIsOpen ? '100%' : '0%',
    delay: 300
  });
  const spring3 = useSpring({
    y: mobileMenuIsOpen ? '0%' : '-150%',
    opacity: mobileMenuIsOpen ? 1 : 0,
    config: config.slow
  });

  const menu = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleSwipe = (path: string) => {
    setSwipeUp(true);
    setPendingPath(path);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => setSwipeUp(false), 500);
    }, 750);
  };

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List
        className={`menu-list-desktop ${menuIsOpen ? 'open' : ''}`}
      >
        <NavigationMenu.Item
          className={`menu-trigger ${menuIsOpen ? 'open' : ''} ${
            pendingPath === '/projects' ? 'invert-color' : ''
          }`}
          onClick={() => setMenuIsOpen((state: boolean) => !state)}
        >
          Menu
        </NavigationMenu.Item>
        {transition(
          (style, item) =>
            item &&
            menu.map(({ path, name }, i) => (
              <a.div style={{ ...style }} key={i}>
                <NavigationMenu.Item
                  className={`link ${
                    pendingPath === '/projects' ? 'invert-color' : ''
                  }`}
                  onClick={() => handleSwipe(path)}
                >
                  <Link
                    to="#"
                    className={`menu-link ${
                      pendingPath === '/projects' ? 'invert-color' : ''
                    }`}
                  >
                    <span>0{i + 1}</span>.{name}
                  </Link>
                </NavigationMenu.Item>
              </a.div>
            ))
        )}
      </NavigationMenu.List>
      <NavigationMenu.List className="menu-list-mobile">
        <div className={`menu-trigger-mobile`}>
          <img
            src={PlusIcon}
            alt="open menu plus icon"
            className={`show-menu-icon ${mobileMenuIsOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuIsOpen((state) => !state)}
          />
        </div>
        <a.div className="links-container" style={spring}>
          <a.div className="links-box" style={{ ...spring3, zIndex: 1 }}>
            {menu.map(({ path, name }, i) => (
              <NavigationMenu.Item
                key={i}
                className="menu-item"
                onClick={() => handleSwipe(path)}
              >
                <Link to="#" className="menu-link">
                  <span>0{i + 1}</span>.{name}
                </Link>
              </NavigationMenu.Item>
            ))}
          </a.div>
          <a.div
            style={{
              ...spring2,
              position: 'absolute',
              width: '100vw',
              backgroundColor: '#fcfbf5'
            }}
          />
        </a.div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Menu;
