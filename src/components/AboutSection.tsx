import React from 'react';

const AboutSection = () => {
  return (
    <section className="page-section page-2">
      <article>
        <img
          src="src/assets/images/profileMe.jpg"
          alt="Profile picture of me, Kevin To"
        />
        <div>
          <p>
            I'm a full stack web developer based in the DC Area 🏛️. As a design
            oriented engineer, I'm passionate about building clean, playful,
            engaging, and functional applications & websites.
          </p>
          <p>
            I've transitioned into tech from education and hospitality fields.
            Why software engineering? Because I love being challenged, working
            in highly collaborative environments, enjoy building meaningful
            things, and wanted to see my impact in real time.
          </p>
          <p>
            Born and raised in the DMV, I've got a penchant for off-the-beaten
            path kind of travel, documentary photogaphy, art films, and Trader
            Joes Coffee Bean flavored ice cream.
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
