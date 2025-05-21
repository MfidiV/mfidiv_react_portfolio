import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import menu_icon_light from "../assets/menu_icon-light.png";
import menu_icon_dark from "../assets/menu-icon-dark.png";
import logo_light from '../assets/Logo/logo_l.png';
import logo_dark from '../assets/Logo/logo_d.png';

const Navbar = ({ theme, setTheme }) => {
  // State variables
  const [showMenu, setShowMenu] = useState(false); // Manages the visibility of the menu
  const [scrolling, setScrolling] = useState(false); // Tracks whether the user is scrolling

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
   // Function to handle click on navigation links
   const handleNavLinkClick = () => {
    setShowMenu(false); // Hide the menu when a navigation link is clicked
  };
  // Function to toggle between light and dark themes
  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Effect hook to handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-bar ${scrolling ? "scrolled" : ""}`}>
      <div className="Logo">
        <img
          src={theme === "light" ?  logo_light : logo_dark} // Displays light or dark logo based on theme
          alt=""
      />
    </div>
      <div className="nav-b">
        
      {/* Navigation links */}
      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0} // Set duration to 0 for immediate scroll
            onClick={handleNavLinkClick} // Call handleNavLinkClick when a link is clicked
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0} // Set duration to 0 for immediate scroll
            onClick={handleNavLinkClick} // Call handleNavLinkClick when a link is clicked
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0} // Set duration to 0 for immediate scroll
            onClick={handleNavLinkClick} // Call handleNavLinkClick when a link is clicked
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0} // Set duration to 0 for immediate scroll
            onClick={handleNavLinkClick} // Call handleNavLinkClick when a link is clicked
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0} // Set duration to 0 for immediate scroll
            onClick={handleNavLinkClick} // Call handleNavLinkClick when a link is clicked
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Theme toggle icon */}
      <img
        onClick={toggleMode}
        src={theme === "light" ? toggle_light : toggle_dark} // Displays light or dark theme toggle icon
        alt=""
        className="toggle-icon"
      />

      {/* Menu toggle icon */}
      <img
        src={theme === "light" ? menu_icon_light : menu_icon_dark} // Displays light or dark menu toggle icon
        alt=""
        className="menu-icon"
        onClick={toggleMenu}
      />
      </div> 
      
    </div>
  );
};

export default Navbar;
