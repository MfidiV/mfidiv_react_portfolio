import React, { useState, useEffect } from 'react';
import './ScrollUpButton.css'; // Import CSS for styling

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-up-button ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
      id="scrollUpBtn" // Add id for styling purposes
      title="Go to top" // Add title for accessibility
    >
      &#9650;
      <span className="scroll-up-text"></span>
    </button>
  );
};

export default ScrollUpButton;