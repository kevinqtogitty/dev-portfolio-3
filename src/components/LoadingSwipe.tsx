import { a, useSpring } from '@react-spring/web';
import React from 'react';

interface Props {
  swipeUp: boolean;
  setSwipeUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingSwipe: React.FC<Props> = ({ swipeUp, setSwipeUp }) => {
  const spring = useSpring({
    height: swipeUp ? '100%' : '0%'
  });

  return (
    <a.div
      style={{
        ...spring,
        position: 'fixed',
        bottom: '0rem',
        width: '100%',
        // border: '2px solid blue',
        backgroundColor: '#fcfbf5',
        zIndex: 3
      }}
    />
  );
};

export default LoadingSwipe;
