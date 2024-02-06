import React, { useEffect, useRef } from 'react';
import './Home.css';
import videoSource from '../../Images/Back_video.webm';

const Home = () => {
  const openPDF = () => {
    var pdfPath = process.env.PUBLIC_URL + '/Documents/Mfidi_V.pdf'; // Adjust the path accordingly
    window.open(pdfPath, '_blank');
  };

  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure the video is playing when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error('Autoplay error:', error));
    }
  }, []);

  return (
    <section className="home" id="home">
      <div className="video-container">
        <video ref={videoRef} auddtoPlay loop muted className="background-video">
          <source src={videoSource} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

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
