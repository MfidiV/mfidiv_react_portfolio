import React, { useEffect } from 'react';
import './Home.css'; // Importing the CSS file for styling
import AOS from 'aos'; // Importing the AOS library for animations
import 'aos/dist/aos.css'; // Importing the CSS file for AOS animations

const Home = ({ theme }) => {
  // Function to open PDF in a new tab
  const openPDF = () => {
    var pdfPath = process.env.PUBLIC_URL + '/Documents/Mfidi V.pdf';
    window.open(pdfPath, '_blank');
  };

  // Function to scroll to the contact section 
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-container'); // Finding the contact section element by its id
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // useEffect hook to initialize AOS library when component mounts
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  // JSX rendering
  return (
    <section className={`home ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="hero-image"></div>

      <div className="about-img" data-aos="fade-right">
        <img src="/Images/about-1.jpg" alt="About Vuyolwethu Mfidi" />
      </div>

      <div className="TextHome">
        <div className="home-text">
          {/* Animated text */}
          <span className="animated-text" data-aos="fade-right">
            <span>H</span>
            <span>e</span>
            <span>l</span>
            <span>l</span>
            <span>o</span>
            <span>,</span>
            <span> </span>
            <span>I'm</span>
          </span>

          {/* Main heading */}
          <h1 data-aos="zoom-right">Vuyolwethu Mfidi</h1>
          {/* Sub heading */}
          <h2 data-aos="fade-right">Software Developer</h2>
        </div>

        <div className="home-buttons" data-aos="fade-left">
          {/* Button to download CV */}
          <button className="btn1" onClick={openPDF}>
            Download CV
          </button>
          {/* Button to scroll to contact section */}
          <button className="btn1" onClick={scrollToContact}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
