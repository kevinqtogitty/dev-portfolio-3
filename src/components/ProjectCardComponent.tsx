import React from 'react';

interface Props {
  projectName: string;
  technologies: string[];
  info: {
    description: string;
  };
  githubUrl: string;
  liveUrl: string;
  thumbnail: string;
  isFullyFunctional: boolean;
}

const ProjectCardComponent: React.FC<Props> = ({
  projectName,
  technologies,
  info,
  githubUrl,
  liveUrl,
  thumbnail,
  isFullyFunctional
}) => {
  return (
    <div className="project-container">
      <div className="project-header">
        <div className="left">{projectName}</div>
        <div className="right">
          {technologies.map((item, i) => (
            <div key={i} className="tech">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="project-description">
        <p>{info.description}</p>
        <div className="project-img-container">
          <div className="project-overlay">
            <div className="project-links">
              {isFullyFunctional ? (
                <a target="_blank" href={`${liveUrl}`}>
                  See it Live
                </a>
              ) : null}
            </div>
            <div className="project-links">
              <a target="_blank" href={`${githubUrl}`}>
                Github
              </a>
            </div>
          </div>
          <img className="project-img" src={`${thumbnail}`} alt={projectName} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardComponent;

// {
//     "projectName": "3D Ping Pong Paddle Game",
//     "thumbnail": "",
//     "gif": "../../assets/gifs/ping-pong.gif",
//     "info": {
//       "description": "3D game made with physics using ThreeJS, React-Three-Fiber, and CannonJS/useCannon. How many time can you bounce the ball? Give it a try!"
//     },
//     "technologies": ["Three.js", "R3F", "Cannon.js"],
//     "githubUrl": "https://github.com/kevinqtogitty/pong-game",
//     "liveUrl": "https://rb.gy/oaoqw8",
//     "isFullyFunctional": false
//   },
