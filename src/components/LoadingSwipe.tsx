import { a, useSpring } from '@react-spring/web';
import React from 'react';

interface Props {
  swipeUp: boolean;
  pageKey: string;
}

const LoadingSwipe: React.FC<Props> = ({ swipeUp, pageKey }) => {
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
        backgroundColor: '#fcfbf5',
        zIndex: 3
      }}
    >
      <h1 style={{ padding: '1rem 1.3rem' }}>LOADING...</h1>
    </a.div>
  );
};

export default LoadingSwipe;
