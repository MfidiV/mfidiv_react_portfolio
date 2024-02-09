import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Services from "./Sections/Services/Services";

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
    </div>
  );
}

export default App;
