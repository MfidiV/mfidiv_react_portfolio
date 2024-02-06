import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faMoon, faSun);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode> 
        <App/>
    </React.StrictMode>
);