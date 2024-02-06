import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'; // Make sure to import the CSS file

const About = () => {
  return (
    <section className="about" id="about">
      <div className="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
      </div>
      {/* About Content */}
      <div className="about-container">
        <div className="about-img">
        <img src="/Images/Vuyo_img.png" alt="" width="40px" height="40px" />
        </div>
        <div className="about-text">
          <p>
          I studied Software development at the Walter Sisulu University in the Eastern Cape.I am a keen, hard working, reliable and excellent time keeper,  bright and receptive person, able to communicate well with people at all levels. I am good at working using my own initiative and I am flexible in my approach to work duties. I have a good sense of humour and a pleasant approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
