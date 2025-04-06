import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import "./Projects.css"; // Import external CSS

import blogImage from '../../components/assets/Portfolio/blog-6.jpg';
import taxCalcImage from '../../components/assets/Portfolio/TaxCalc.jpg';
import unitConvImage from '../../components/assets/Portfolio/UnitConv.png';
// import chatAppImage from '../../components/assets/Portfolio/chatApp.jpg';
import tetris from '../../components/assets/Portfolio/tetris.png'
import bankAppImage from '../../components/assets/Portfolio/UnitConv.png';


const projects = [
  {
    title: "Bus Transport Application",
    description: "An advanced platform designed to enhance passenger and driver transport management.",
    link: "/projects/bus-app",
    category: "App",
    image: bankAppImage,
  },
  {
    title: "CV Builder Application",
    description: "A professional resume-building tool tailored for efficiency and customization.",
    link: "/projects/cv-builder",
    category: "App",
    image: blogImage,
  },
  {
    title: "Portfolio Website",
    description: "A comprehensive showcase of my skills, expertise, and completed projects.",
    link: "/projects/portfolio",
    category: "Website",
    image: taxCalcImage,
  },
  {
    title: "MERN Task Management System",
    description: "A structured project management tool built using the MERN stack for optimized task handling.",
    link: "/projects/task-manager",
    category: "App",
    image: unitConvImage,
  },
  {
    title: "Game Prototype",
    description: "An interactive game built using modern web technologies.",
    link: "/projects/game-prototype",
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
        <h2 className="projects-title">Professional Projects</h2>
        <p className="projects-description">
          Explore a selection of projects that demonstrate my expertise in software development and innovative solutions.
        </p>

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
