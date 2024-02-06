import React from 'react';
// import './Home.css';

const Home = () => {
  const openPDF = () => {
    var pdfPath = process.env.PUBLIC_URL + '/Documents/Mfidi_V.pdf'; // Adjust the path accordingly
    window.open(pdfPath, '_blank');
  };

  return (
    <section className="home" id="home">
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

      <div className="homeButtons">
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
