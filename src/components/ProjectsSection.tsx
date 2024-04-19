import React from 'react';
import { a, useTrail } from '@react-spring/web';
import projectData from '../data/projects.json';
import ProjectCardComponent from './ProjectCardComponent';

const ProjectsSection = () => {
  const data = [
    'HTML5',
    'CSS',
    'Javascript',
    'Typescript',
    'AWS Serverless',
    'React',
    'Node.js',
    'Redis',
    'MongoDB',
    'Firebase'
  ];

  const trail = useTrail(data.length, {
    from: { height: '100%' },
    to: { height: '0%' },
    delay: 700
  });
  return (
    <main className="page-section page-3">
      <h2>Projects</h2>
      <article style={{ display: 'flex' }}>
        <div className="projects-section">
          <div className="project-container">
            <div className="project-header">
              <div className="left">Audio Visualizer</div>
              <ul className="right">
                <li className="tech">TypeScript</li>
                <li className="tech">P5.js</li>
                <li className="tech">webGl</li>
                <li className="tech">web audio api</li>
              </ul>
            </div>
            <div className="project-description">
              <p>
                Analyzes audio data via FFT and produces a 3D visualization
                using canvas. Supports keyboard controls and gradient variations
              </p>
              <iframe
                className="project-img code-sandbox"
                src="https://codesandbox.io/p/github/kevinqtogitty/p5js-audio-vis/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cligxanyf000b3b6ncimq2ti0%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clil3aszd00l83b6ng46hre5z%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B33.72226139217754%252C66.27773860782246%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cligxanyf000b3b6ncimq2ti0%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cligxanye000a3b6n03t0p6z4%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522cligxanyf000b3b6ncimq2ti0%2522%252C%2522activeTabId%2522%253A%2522cligxanye000a3b6n03t0p6z4%2522%257D%252C%2522clil3aszd00l83b6ng46hre5z%2522%253A%257B%2522id%2522%253A%2522clil3aszd00l83b6ng46hre5z%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522cligxb2zx00753b6nztqwgtl8%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522cligxb58700d43b6nhbv60rv4%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cligxb58700d43b6nhbv60rv4%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"
              ></iframe>
            </div>
          </div>
          {projectData.map((project) => (
            <ProjectCardComponent {...project} />
          ))}
        </div>
        <div className="skills">
          <h3>My toolkit.</h3>
          <div>
            {trail.map((style, i) => (
              <div className="text" key={i}>
                / {data[i]} /
                <a.div
                  style={{
                    ...style,
                    position: 'absolute',
                    width: '100%',
                    backgroundColor: '#fcfbf5'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
};

export default ProjectsSection;
