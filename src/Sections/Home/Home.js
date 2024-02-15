import React,{useEffect} from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({ theme }) => {
  const openPDF = () => {
    var pdfPath = process.env.PUBLIC_URL + '/Documents/Mfidi_V.pdf';
    window.open(pdfPath, '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(()=>{
    AOS.init({duration:2000})
},[])

  return (
    <section className={`home ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="hero-image"> </div>
      <div className="home-text">
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
        <h1 data-aos="zoom-right">Vuyolwethu Mfidi</h1>
        <h2 data-aos="fade-right">Software Developer</h2>
      </div>

      <div className="home-buttons" data-aos="fade-up">
        <button className="btn1" onClick={openPDF}>
          Download CV
        </button>
      
        <button className="btn1" onClick={scrollToContact}>
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Home;
