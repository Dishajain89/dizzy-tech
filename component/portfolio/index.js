"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

const portfolioProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern and user-friendly Portfolio website for an Interior Designer.",
    image: "/images/portfolio/artful-interior.jpg",
    link: "https://artful-interiors-demo.netlify.app/"
  },
  {
    id: 2,
    title: "Landing Page Design",
    description: "A high-converting landing page for a marketing campaign.",
    image: "/images/portfolio/health-hive.jpg",
    link: "https://health-hive-demo.netlify.app/"
  },
  {
    id: 3,
    title: "Business Website",
    description: "A professional website for brand identity and services showcase.",
    image: "/images/portfolio/royalbloom-wedding.jpg",
    link: "https://royal-bloom-weddings-demo.netlify.app/"
  }
];

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our <span>Portfolio</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Here are some of our recent projects, crafted with precision and creativity.
        </motion.p>

        <div className={styles.projects}>
          {portfolioProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
            >
              <img src={project.image} alt={project.title} />
              <div className={styles.overlay}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
