import React, { useEffect, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { a, useSpring, useTrail, useTransition } from '@react-spring/web';

interface Props {
  setSwipeUp: React.Dispatch<React.SetStateAction<boolean>>;
  setPageKey: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<Props> = ({ setSwipeUp, setPageKey }) => {
  const menu = [
    { name: 'Home', pageKey: 'home' },
    { name: 'About', pageKey: 'aboute' },
    { name: 'Projects', pageKey: 'projects' },
    { name: 'Contact', pageKey: 'contact' },
    { name: 'Resume', pageKey: '' }
  ];
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const transition = useTransition(menuIsOpen, {
    from: { y: '50%', opacity: 0 },
    enter: { y: '0%', opacity: 1 },
    leave: { y: '50%', opacity: 0 }
  });

  const handleSwipe = (e: any) => {
    setSwipeUp((state) => !state);
    setTimeout(() => {
      setSwipeUp((state) => !state);
      setPageKey(e.target.innerText);
    }, 1000);
  };

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className={`menu-list ${menuIsOpen ? 'open' : ''}`}>
        <NavigationMenu.Item
          className={`menu-trigger ${menuIsOpen ? 'open' : ''}`}
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
                  className="link"
                  value={menu[i].pageKey}
                  onClick={(e) => handleSwipe(e)}
                  key={i}
                >
                  <span>0{i + 1}</span>.{menuItem.name}
                </NavigationMenu.Item>
              </a.div>
            ))
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Menu;
