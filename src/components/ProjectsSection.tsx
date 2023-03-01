import React from 'react';
import { a, useTrail } from '@react-spring/web';
import projectData from '../data/projects.json';
import ProjectCardComponent from './ProjectCardComponent';

const ProjectsSection = () => {
  const data = [
    'HTML5',
    'CSS3',
    'Javascript',
    'Typescript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
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
      <article>
        <div className="projects-section">
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
