import React from "react";
import { useRef, useEffect, useState } from "react";
import styles from "../projects/Projects.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Card from "../card/Card";

const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const sign = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth - sign.current.scrollWidth);
    setWidth(carousel.current.scrollWidth - sign.current.scrollWidth - 20);
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>

      <motion.div ref={sign}
        initial={{ x: "-200px" }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 1 }}
        className={styles.projects_sign}
      >
        <span>Swipe left</span> 
        <BsArrowRight />
      </motion.div>

      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={styles.projects_card}
      >
        <Card />
      </motion.div>

    </section>
  );
};

export default Projects;
