import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import PlusIcon from '../assets/icons/plus.svg';

import { a, config, useSpring, useTransition } from '@react-spring/web';

interface Props {
  setSwipeUp: React.Dispatch<React.SetStateAction<boolean>>;
  setPageKey: React.Dispatch<React.SetStateAction<string>>;
  swipeUp: boolean;
  pageKey: string;
}

const Menu: React.FC<Props> = ({ setSwipeUp, setPageKey, pageKey }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const menu = [
    { name: 'Home', pageKey: 'home' },
    { name: 'About', pageKey: 'about' },
    { name: 'Projects', pageKey: 'projects' },
    { name: 'Contact', pageKey: 'contact' }
  ];

  const transition = useTransition(menuIsOpen, {
    from: { y: '50%', opacity: 0 },
    enter: { y: '0%', opacity: 1 },
    leave: { y: '50%', opacity: 0 }
  });

  const handleSwipe = (e: any, menuType?: string) => {
    if (menuType) setMenuIsOpen((state) => !state);
    console.log(e.target.innerText);
    setSwipeUp((state) => !state);
    setTimeout(() => {
      setSwipeUp((state) => !state);
      setPageKey(e.target.innerText);
    }, 1000);
  };

  const spring = useSpring({
    height: menuIsOpen ? '100vh' : '0vh',
    delay: 150
  });

  const spring2 = useSpring({
    height: menuIsOpen ? '100%' : '0%',
    delay: 300
  });

  const spring3 = useSpring({
    y: menuIsOpen ? '0%' : '-150%',
    opacity: menuIsOpen ? 1 : 0,
    config: config.slow
  });

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List
        className={`menu-list-desktop ${menuIsOpen ? 'open' : ''}`}
      >
        <NavigationMenu.Item
          className={`menu-trigger ${menuIsOpen ? 'open' : ''} ${
            pageKey === '02.About' || pageKey === '03.Projects'
              ? 'invert-color'
              : null
          }`}
          onClick={() => setMenuIsOpen((state) => !state)}
        >
          Menu
        </NavigationMenu.Item>
        {transition(
          (style, item) =>
            item &&
            menu.map((menuItem, i) => (
              <a.div style={{ ...style }}>
                <NavigationMenu.Item
                  className={`link ${
                    pageKey === '02.About' || pageKey === '03.Projects'
                      ? 'invert-color'
                      : null
                  }`}
                  value={menuItem.pageKey}
                  onClick={(e) => handleSwipe(e)}
                  key={i}
                >
                  <span>0{i + 1}</span>.{menuItem.name}
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
            className={`show-menu-icon ${menuIsOpen ? 'open' : ''} ${
              pageKey === '02.About' || pageKey === '03.Projects'
                ? 'light-background'
                : null
            }`}
            onClick={() => setMenuIsOpen((state) => !state)}
          />
        </div>
        <a.div className="links-container" style={spring}>
          <a.div className="links-box" style={{ ...spring3, zIndex: 1 }}>
            {menu.map((item, i) => (
              <NavigationMenu.Item
                key={i}
                className="menu-item"
                onClick={(e) => handleSwipe(e, 'l')}
              >
                <span>0{i + 1}</span>.{item.name}
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
      </NavigationMenu.List>{' '}
    </NavigationMenu.Root>
  );
};

export default Menu;
