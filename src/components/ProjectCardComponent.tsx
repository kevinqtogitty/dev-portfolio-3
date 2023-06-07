import React, { useState } from 'react';

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
  const [loading, setLoading] = useState(true);

  return (
    <div className="project-container">
      <div className="project-header">
        <div className="left">{projectName}</div>
        <ul className="right">
          {technologies.map((item, i) => (
            <li key={i} className="tech">
              {item}
            </li>
          ))}
        </ul>
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
          <img
            className="project-img"
            src={`${thumbnail}`}
            alt={projectName}
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
