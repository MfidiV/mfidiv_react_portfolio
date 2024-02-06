import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'; // Make sure to import the CSS file

const About = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="about" id="about">
      <div className="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
      </div>
      {/* About Content */}
      <div className="about-container">
        <div className="about-img">
          <img src="/Images/Vuyo_img.png" alt="" />
        </div>
        <div className="about-text">
          <p>
            I studied Software development at the Walter Sisulu University in the Eastern Cape. I am a keen, hardworking, reliable, and excellent timekeeper, bright and receptive person, able to communicate well with people at all levels. I am good at working using my own initiative and I am flexible in my approach to work duties. I have a good sense of humor and a pleasant approach.
          </p>

          <h2>My skills</h2>
          {/* Box 2 */}
          <div className="skills-container">
            <div className="skill">
              <button className="btn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered ? 'Seal' : 'HTML'}
              </button>
              <button className="btn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered ? 'Seal' : 'CSS'}
              </button>
              <button className="btn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered ? 'Seal' : 'JavaScript'}
              </button>
            </div>

            <div className="skill">
              <button className="btn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered ? 'Seal' : 'NodeJs'}
              </button>
              <button className="btn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered ? 'Seal' : 'React'}
              </button>
              <button className="btn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered ? 'Seal' : 'Bootstrap'}
              </button>
            </div>

            <div className="skill">
              <button className="btn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered ? 'Seal' : 'VB.Net'}
              </button>
              <button className="btn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered ? 'Seal' : 'Java'}
              </button>
              <button className="btn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered ? 'Seal' : 'Python'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
