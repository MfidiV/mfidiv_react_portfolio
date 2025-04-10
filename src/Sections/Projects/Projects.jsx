import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import "./Projects.css"; // Import external CSS

import blogImage from '../../components/assets/Portfolio/blog-6.jpg';
import weather from '../../components/assets/Portfolio/weather.png';
import chatAppImage from '../../components/assets/Portfolio/chatApp.jpg';
import tetris from '../../components/assets/Portfolio/tetris.png'
import bankAppImage from '../../components/assets/Portfolio/Banking.jpeg';
// import taxCalcImage from '../../components/assets/Portfolio/TaxCalc.jpg';
// import unitConvImage from '../../components/assets/Portfolio/UnitConv.png';

const projects = [
  {
    title: "Chat App",
    description: "This is a real-time chat app,It allows users to connect, chat, and exchange messages in real time.",
    link: "https://theebestchat.netlify.app/",
    category: "App",
    image: chatAppImage,
  },
  {
    title: "Weather App",
    description: "A simple web application that allows users to retrieve current weather information for a specified location.",
    link: "https://github.com/MfidiV/Weather_App",
    category: "App",
    image: weather,
  },
  {
    title: "Bank Application",
    description: "An application for user experience with bank processes. It allows users to be in control of their money.",
    link: "https://github.com/MfidiV/Bank_Application",
    category: "App",
    image: bankAppImage,
  },
  {
    title: "Construction Website",
    description: "A responsive construction company website, The Best Constructors",
    link: "https://thebestconstruction.netlify.app/#",
    category: "Website",
    image: blogImage,
  },
  {
    title: "Game Prototype",
    description: "An interactive game built using modern web technologies.",
    link: "https://thebestconstruction.netlify.app/theebest-tetris",
    category: "Game",
    image: tetris,
  },
];

const categories = ["All", "App", "Game", "Website"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="projects-container">
      <div className="max-w-6xl mx-auto text-center">
        <div className="heading">
            <h2>Portfolio</h2>
            <span>Recent Work</span>
        </div>

        {/* Category Filter */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <Button
              key={category}
              className={`filter-button ${
                selectedCategory === category ? "active" : "inactive"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="project-card"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <Link to={project.link}>
              <Button className="project-button">View Project</Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
