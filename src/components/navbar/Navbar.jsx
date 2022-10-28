import React, { useState } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import styles from "../navbar/Navbar.module.scss";

const Navbar = () => {
  const [{ menu, showMenuBar }, setMenu] = useState({
    menu: true,
    showMenuBar: false,
  });
  // const [showMenuBar, setMenuBar] = useState(false);

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
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    setMenu({
      menu: !menu,
      showMenuBar: !showMenuBar,
    });
    // setMenuBar(!showMenuBar);
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
              <Link to="#home" smooth>
                Home
              </Link>
              <Link to="#about" smooth>
                About
              </Link>
              <Link to="#projects" smooth>
                Projects
              </Link>
              <Link to="#contact" smooth>
                Say Hi
              </Link>
            </ul>
          </motion.div>
        ) : (
          ""
        )}

        <div className={styles.link}>
          <Link to="#home" smooth>
            <motion.p
              className={styles.home_icon}
              // onClick={() => handleScroll("#home")}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              Home
            </motion.p>
          </Link>
          <Link to="#about" smooth>
            <motion.p
              className={styles.about}
              // onClick={() => handleScroll("#about")}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              About
            </motion.p>
          </Link>
          <Link to="#projects" smooth>
            <motion.p
              className={styles.projects}
              // onClick={() => handleScroll("#projects")}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              Projects
            </motion.p>
          </Link>
          <Link to="#contact" smooth>
            <motion.p
              className={styles.contact}
              // onClick={() => handleScroll("#contact")}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              Say Hi
            </motion.p>
          </Link>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
