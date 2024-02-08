import React, { useState } from "react";
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
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <img
        onClick={toggleMode}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
      <img
  src={theme === 'light' ? menu_icon_light : menu_icon_dark}
  alt=""
  className="menu-icon"
  onClick={toggleMenu}
/>
    </div>
  );
};

export default Navbar;
