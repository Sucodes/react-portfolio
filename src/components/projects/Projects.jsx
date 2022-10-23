import React from "react";
import { useRef, useEffect, useState } from "react";
import styles from "../projects/Projects.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Card = ({ text, href, title = "" }) => {
  return (
    <motion.div
      className="card"
      initial={{ backgroundColor: "black", color: 'grey' }}
      whileInView={{ backgroundColor: "yellow", color: 'black' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <a href={href} target='_blank' rel="noreferrer">
        <h2>{title}</h2>
        <hr />
        <p>
          A Movie web application
        </p>
        <br />
        <p> <span>Stack:</span> Javascript, SASS,
          HTML</p>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    // console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
    if (window.innerWidth > 768) {
      setWidth(2500);
    } else {
      setWidth(1000);
    }
  }, []);

  const link = [
    "https://sucodes.github.io/MovieHubb/",
    "https://sucodes.github.io/Circle-177/",
    "https://sucodes.github.io/Javascript-Weather-App/",
    "https://sucodes.github.io/project-pixel-art-maker-starter-master/",
    "https://sucodes.github.io/Cowrywise_clone/",
    "https://6344f7b1304cc658d6371d53--dapper-cassata-a1ec00.netlify.app/",
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>

      <motion.div 
      initial={{x: '-200px' }}
      whileInView={{ x: 0 }}
      viewport={{once: false}}
      transition={{ duration: 1, delay: 1 }}
      className={styles.projects_sign}>
        <BsArrowRight />
      </motion.div>

      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={styles.projects_card}
      >
        <Card title="Movie Hubb" href={link[0]} />
        <Card title="Telephone Validator" href={link[1]} />
        <Card title="Weather App" href={link[2]} />
        <Card title="Pixel Art Maker" href={link[3]} />
        <Card title="Cowrywise Clone" href={link[4]} />
        <Card title="Mini Calculator" href={link[5]} />
      </motion.div>
    </section>
  );
};

export default Projects;
