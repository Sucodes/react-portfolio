import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "../navbar/Navbar.module.scss";

const Navbar = () => {
  const [{ menu, showMenuBar }, setMenu] = useState({
    menu: true,
    showMenuBar: false,
  });

  const text = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 5,

      transition: {
        duration: 2,
        delay: 1,
        ease: "easeInOut",
      },
    },
  };

  const showMenu = () => {
    setMenu({
      menu: !menu,
      showMenuBar: !showMenuBar,
    });
  };

  return (
    <motion.div
      className={styles.navbar}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: "0",
      }}
      transition={{
        duration: 2,
        delay: 2,
      }}
    >
      <motion.p
        className={styles.navbar_logo1}
        variants={text}
        initial="hidden"
        animate="visible"
      >
        S.M
      </motion.p>
      <motion.p
        className={styles.navbar_logo2}
        variants={text}
        initial="hidden"
        animate="visible"
      >
        Suvwe Money
      </motion.p>

      <nav className={styles.navbar_links}>
        <p className={styles.menu} onClick={showMenu}>
          {menu ? <AiOutlineMenu /> : <AiOutlineClose />}
        </p>

        {showMenuBar ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.5 }}
            className={styles.menu_bar}
          >
            <ul onClick={showMenu}>
              <a href="#home" data-scroll-to rel="noreferrer">
                Home
              </a>
              <a href="#about" data-scroll-to rel="noreferrer">
                About
              </a>
              <a href="#projects" data-scroll-to rel="noreferrer">
                Projects
              </a>
              <a href="#contact" data-scroll-to rel="noreferrer">
                Say Hi
              </a>
            </ul>
          </motion.div>
        ) : (
          null
        )}

        <div className={styles.link}>
          <a href="#home" data-scroll-to rel="noreferrer">
            <motion.p
              className={styles.home_icon}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              Home
            </motion.p>
          </a>
          <a href="#about" data-scroll-to rel="noreferrer">
            <motion.p
              className={styles.about}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              About
            </motion.p>
          </a>
          <a href="#projects" data-scroll-to rel="noreferrer">
            <motion.p
              className={styles.projects}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              Projects
            </motion.p>
          </a>
          <a href="#contact" data-scroll-to rel="noreferrer">
            <motion.p
              className={styles.contact}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              Say Hi
            </motion.p>
          </a>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
