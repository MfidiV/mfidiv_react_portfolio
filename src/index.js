import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Add FontAwesome icons to the library
library.add(faMoon, faSun);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
