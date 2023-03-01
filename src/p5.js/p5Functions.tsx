// import 'p5/lib/addons/p5.dom';
import P5 from 'p5';
import { ReactP5Wrapper, Sketch } from 'react-p5-wrapper';

const sketch: Sketch = (p5) => {
  let canvas;
  let particles: P5.Vector[] = [];
  const num = window.innerWidth + window.innerHeight * 1.5;
  const noiseScale = 0.007;

  p5.setup = () => {
    canvas = p5.createCanvas(window.innerWidth * 0.9899, window.innerHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    for (let i = 0; i < num; i++) {
      particles.push(
        p5.createVector(p5.random(p5.width), p5.random(p5.height))
      );
    }
    p5.stroke(133, 143, 177);
    p5.strokeWeight(1.5);
  };

  p5.keyReleased = () => {
    p5.noiseSeed(p5.millis());
    const x = p5.stroke(p5.random(255), p5.random(255), p5.random(255));
  };

  const onScreen = (v: { x: number; y: number }) => {
    return v.x >= 0 && v.x <= p5.width && v.y >= 0 && v.y <= p5.height;
  };

  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  p5.draw = () => {
    p5.background(0, 20);
    particles.forEach((particle) => {
      let p = particle;
      p5.point(p.x, p.y);
      let n = p5.noise(p.x * noiseScale, p.y * noiseScale);
      let a = p5.TAU * n;
      p.x += p5.sin(a) / 1.5;
      p.y += p5.cos(a) / 1.5;
      if (!onScreen(p)) {
        p.x = p5.random(p5.width);
        p.y = p5.random(p5.height);
      }
    });
  };
};

export const P5Sketch = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};
