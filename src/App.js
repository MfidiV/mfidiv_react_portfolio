import React from 'react';
import NavBar from './components/Navbar/Navbar';
import Home from './Sections/Home/Home';
import About from './Sections/About/About'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      
    </div>
  );
}

export default App;
