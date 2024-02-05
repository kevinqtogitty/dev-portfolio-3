import React from 'react';

import picture from '/images/profileMe.jpg';

const AboutSection = () => {
  const style = {
    position: 'relative',
    left: '1rem'
  };

  return (
    <section className="page-section page-2">
      <article>
        <img src={picture} alt="Profile picture of me, Kevin To" />
        <div>
          <p {...style}>
            Hey there! I'm a full stack software engineer based in the
            Philadelphia Area 🔔.
          </p>
          <p>
            Currently I'm working in education technology at Snap! Mobile, where
            we enable schools to effectively raise funds for their school
            sports/extracurricular activities by providing them with the
            necessary tools to start and manage a campaign. I love knowing what
            I do affects the lives of hundreds of thousands of students
            everyday!
          </p>
          <p>
            I've transitioned into tech from education and hospitality fields.
            Why software engineering? Because I love being challenged, working
            in highly collaborative environments, enjoy building meaningful
            things, and wanted to see my impact in real time.
          </p>
          <p>
            Born and raised in the Northern Virginia, I've got a penchant for
            off-the-beaten path kind of travel, documentary photogaphy, art
            films, and Trader Joes Coffee Bean flavored ice cream.
          </p>
          <p>
            I've been published online for one of my photo projects in Egypt,
            you can view and read the story behind it{' '}
            <a
              href="https://www.thepictorial-list.com/pictorial-stories/growing-up-assala"
              className="hyperlink"
              target="_blank"
            >
              here
            </a>
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
