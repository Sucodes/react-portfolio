import React from "react";
import { motion } from "framer-motion";
import styles from "../skills/Skills.module.scss";
import { FaReact, FaJava, FaSass, FaPython, FaHtml5, FaCss3, FaFigma } from "react-icons/fa";
import { SiJavascript, SiGit } from "react-icons/si";

const Skills = () => {
  return (
    <motion.div 
    initial={{x: '-400px' }}
    whileInView={{ x: 0 }}
    viewport={{once: false}}
    transition={{ duration: 1}}
    className={styles.skills}>
      <motion.h1>
        Tech Stack
      </motion.h1>

      <br />

      <div className={styles.icons}>
        <FaReact />
        <SiJavascript />
        <FaPython />
        <FaSass />
        <FaCss3 />
        <FaHtml5 />
        <FaJava />
        <SiGit />
        <FaFigma />
      </div>
    </motion.div>
  );
};

export default Skills;
