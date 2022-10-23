import React from "react";
import styles from "../header/Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <section id="home" className={styles.home}>
        <div className={styles.home__greetings}>
          <h1 className={styles.home__greeting}>Hello!</h1>
          <h1 className={styles.home__greeting}>Ohayo!</h1>
          <h1 className={styles.home__greeting}>Anyoung!</h1>
          <h1 className={styles.home__greeting}>Bonjour!</h1>
          <h1 className={styles.home__greeting}>Nǐ hǎo!</h1>
          <h1 className={styles.home__greeting}>Olá!</h1>
          <h1 className={styles.home__greeting}>Konnichiwa!</h1>
          <h1 className={styles.home__greeting}>Namaste!</h1>
          <h1 className={styles.home__greeting}>Kedu!</h1>
          <h1 className={styles.home__greeting}>Hola!</h1>
          <h1 className={styles.home__greeting}>Habari!</h1>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          I'm Suvwe,
          <br />a Frontend Engineer...
        </motion.h3>

        <a href="#contact">Let's talk</a>
      </section>
    </motion.section>
  );
};

export default Header;
