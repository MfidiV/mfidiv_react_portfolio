import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Services from "./Sections/Services/Services";
// import Portfolio from "./Sections/Portfolio/Portfolio";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton"; // Import the ScrollUpButton component

function App() {
  const currentTheme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(currentTheme || "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home theme={theme} />
      <About theme={theme}/>
      <Services/>
      {/*<Portfolio/>*/}
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollUpButton /> {/* Include the ScrollUpButton component */}
    </div>
  );
}

export default App;
