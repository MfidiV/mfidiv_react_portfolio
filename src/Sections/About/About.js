import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Import the CSS file for styling
import AOS from 'aos'; // Import the AOS library for animations
import 'aos/dist/aos.css'; // Import the CSS file for AOS animations

const About = ({ theme }) => {
  // Initialize state variables for each button's hover state
  const [hoveredCSS, setHoveredCSS] = useState(false);
  const [hoveredJavaScript, setHoveredJavaScript] = useState(false);
  const [hoveredNodeJs, setHoveredNodeJs] = useState(false);
  const [hoveredReact, setHoveredReact] = useState(false);
  const [hoveredBootstrap, setHoveredBootstrap] = useState(false);
  const [hoveredVBNet, setHoveredVBNet] = useState(false);
  const [hoveredJava, setHoveredJava] = useState(false);
  const [hoveredPython, setHoveredPython] = useState(false);

  // Initialize state variable for toggling JavaScript button text
  const [showPercentage, setShowPercentage] = useState(true);

  // Initialize AOS animation library on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Toggle showPercentage state every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPercentage(prevShowPercentage => !prevShowPercentage);
    }, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`about ${theme === 'dark' ? 'dark-mode' : ''}`}>
      {/* Heading */}
      <div className="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
      </div>

      {/* About Content */}
      <div className="about-container">
        {/* Image */}
        <div className="about-img" data-aos="fade-right">
          <img src="/Images/about-1.jpg" alt="" />
        </div>
        
        {/* Text */}
        <div className="about-text">
          <p data-aos="fade-up">
            Highly motivated Software Developer with expertise in design, installation, testing, and maintenance of software systems.
            Graduated from Walter Sisulu University in the Eastern Cape with a focus on Software Development.
            Keen, hardworking, reliable, and excellent timekeeper.
            Bright, receptive, and skilled in communication at all levels.
            Proven ability to work independently and adaptably, with a strong sense of initiative.
            Possesses a good sense of humor and a pleasant demeanor, enhancing team dynamics and collaboration.
          </p>

          {/* Skills */}
          <h2>My skills</h2>
          <div className="skills-container" data-aos="fade-up">
            {/* Skill buttons */}
            <div className="skill">
              {/* HTML button */}
              <button
                className={`btn ${showPercentage ? 'green-bg' : 'blue-bg'}`} //background color based on showPercentage
                onMouseEnter={() => setShowPercentage(true)} // Show percentage when mouse enters
                onMouseLeave={() => setShowPercentage(false)} // Hide percentage when mouse leaves
              >
                {showPercentage ? '85%' : 'HTML'}
              </button>

              {/* CSS button */}
              <button 
                className="btn" 
                onMouseEnter={() => setHoveredCSS(true)} 
                onMouseLeave={() => setHoveredCSS(false)}
              >
                {hoveredCSS ? '85%' : 'CSS'}
              </button>
              
              <button 
                className="btn" 
                onMouseEnter={() => setHoveredJavaScript(true)} 
                onMouseLeave={() => setHoveredJavaScript(false)}
              >
                {hoveredJavaScript ? '85%' : 'JavaScript'}
              </button>
            </div>

            
            <div className="skill">
              <button 
                className="btn" 
                onMouseEnter={() => setHoveredNodeJs(true)} 
                onMouseLeave={() => setHoveredNodeJs(false)}
              >
                {hoveredNodeJs ? '69%' : 'NodeJs'}
              </button>
              <button 
                className="btn" 
                onMouseEnter={() => setHoveredReact(true)} 
                onMouseLeave={() => setHoveredReact(false)}
              >
                {hoveredReact ? '70%' : 'React'}
              </button>
              <button 
                className="btn" 
                onMouseEnter={() => setHoveredBootstrap(true)} 
                onMouseLeave={() => setHoveredBootstrap(false)}
              >
                {hoveredBootstrap ? '70%' : 'Bootstrap'}
              </button>
            </div>

         
            <div className="skill">
              <button 
                className="btn" 
                onMouseEnter={() => setHoveredVBNet(true)} 
                onMouseLeave={() => setHoveredVBNet(false)}
              >
                {hoveredVBNet ? '80%' : 'VB.Net'}
              </button>
              <button 
                className="btn" 
                onMouseEnter={() => setHoveredJava(true)} 
                onMouseLeave={() => setHoveredJava(false)}
              >
                {hoveredJava ? '75%' : 'Java'}
              </button>
              <button 
                className="btn" 
                onMouseEnter={() => setHoveredPython(true)} 
                onMouseLeave={() => setHoveredPython(false)}
              >
                {hoveredPython ? '78%' : 'Python'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
