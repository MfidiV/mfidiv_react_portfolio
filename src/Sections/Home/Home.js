// Home.js
import React from 'react';
import './home.css';

const Home = ({ theme,setTheme }) => {
  const openPDF = () => {
    var pdfPath = process.env.PUBLIC_URL + '/Documents/Mfidi_V.pdf';
    window.open(pdfPath, '_blank');
  };

  return (
    <section className={`home ${theme}`}>
      <div className="home-text">
        <span className="animated-text">
          <span>H</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
          <span>o</span>
          <span>,</span>
          <span> </span>
          <span>I'm</span>
        </span>
        <h1>Vuyolwethu Mfidi</h1>
        <h2>Software Developer</h2>
      </div>

      <div className="home-buttons">
        <button className="btn1" onClick={openPDF}>
          Download CV
        </button>
        <button className="btn1" onClick={() => window.location.href = "#contact"}>
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Home;
