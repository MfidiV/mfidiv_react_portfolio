import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import menu_icon_light from "../assets/menu_icon-light.png";
import menu_icon_dark from "../assets/menu-icon-dark.png";

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="navbar">
      <h1 className="logo">Vuyolwethu</h1>
      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <li>
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0} // Set duration to 0 for immediate scroll
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
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="Services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0} // Set duration to 0 for immediate scroll
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0} // Set duration to 0 for immediate scroll
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0} // Set duration to 0 for immediate scroll
          >
            Contact
          </Link>
        </li>
      </ul>
      <img
        onClick={toggleMode}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
      <img
        src={theme === "light" ? menu_icon_light : menu_icon_dark}
        alt=""
        className="menu-icon"
        onClick={toggleMenu}
      />
    </div>
  );
};

export default Navbar;
