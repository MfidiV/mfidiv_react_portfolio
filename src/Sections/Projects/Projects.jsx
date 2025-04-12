import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs} from 'react-icons/fa';
import "./Projects.css"; // Import external CSS 
import projectData from '../../../src/components/assets/Data/projects.json'; // Your JSON data

// Define categories for filtering
const categories = ["All", "App", "Game", "Website"];
// Map each tech to its icon
const iconMapping = {
  "React": <FaReact />,
  "Node.js": <FaNodeJs />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "JavaScript": <FaJs />,
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

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
              className={`filter-button ${selectedCategory === category ? "active" : "inactive"}`}
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
            <img
              src={require(`../../components/assets/Portfolio/${project.image}`)}
              alt={project.title}
              className="project-image"
            />
            <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>

            {/* Render tech stack icons */}
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-icon">
                  {iconMapping[tech] || tech} {/* Fallback to tech name if icon is not found */}
                </span>
              ))}
            </div>

            <Link to={project.link}>
              <Button className="project-button">View Project</Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
