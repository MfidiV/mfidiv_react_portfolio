import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle darkMode state
    const darkModeElement = document.querySelector('#darkmode');
    if (darkModeElement) {
      // Toggle classes based on darkMode state
      if (darkMode) {
        darkModeElement.classList.replace('bx-sun', 'bx-moon');
      } else {
        darkModeElement.classList.replace('bx-moon', 'bx-sun');
      }
      // Toggle body class for dark mode
      document.body.classList.toggle('dark-mode');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'open' : ''} ${darkMode ? 'dark-mode' : ''}`}>
      <div className="logo">Portfolio</div>
      
      {/* Use a button for the menu icon to enhance accessibility */}
      <button className={`bx bx-menu ${menuOpen ? 'open' : ''}`} id="menu-icon" onClick={toggleMenu}></button>

      <ul className="navbar">
        <li><ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About</ScrollLink></li>
        <li><ScrollLink to="services" smooth={true} duration={500} onClick={toggleMenu}>Services</ScrollLink></li>
        <li><ScrollLink to="portfolio" smooth={true} duration={500} onClick={toggleMenu}>Portfolio</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</ScrollLink></li>
        <li>
          {/* Render Font Awesome icons */}
          <div id="darkmode" onClick={toggleDarkMode}>
            {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </div>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
