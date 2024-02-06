import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode
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
          {/* Use the darkMode state to dynamically switch between moon and sun icons */}
          <div className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`} id="darkmode" onClick={toggleDarkMode}></div>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
