import React from "react";
import "./index"
import Home from "./Sections/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
     
    </Routes>  
  );
}

export default App;
