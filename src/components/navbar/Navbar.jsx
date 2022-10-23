import React, { useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "../navbar/Navbar.module.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  // const [showMenuBar, setMenuBar] = useState(true);

  const menuClick = () => {
    setMenu(!menu);
  };

  const scroll = new LocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

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

  // const showMenu = () => {
  //   return `
  //     <ul className={styles.menu_links}>
  //       <li onClick={() => handleScroll("#home")}>Home</li>
  //       <li onClick={() => handleScroll("#about")}>About</li>
  //       <li onClick={() => handleScroll("#projects")}>Projects</li>
  //       <li onClick={() => handleScroll("#contact")}>Say Hi</li>
  //     </ul>
  //   `;
  // };

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
        <p className={styles.menu} onClick={menuClick}>
          {menu ? <AiOutlineMenu /> : <AiOutlineClose />}
        </p>

        {/* {showMenuBar ? (
          <ul className={styles.menu_links}>
            <li onClick={() => handleScroll("#home")}>Home</li>
            <li onClick={() => handleScroll("#about")}>About</li>
            <li onClick={() => handleScroll("#projects")}>Projects</li>
            <li onClick={() => handleScroll("#contact")}>Say Hi</li>
          </ul>
        ) : (
          null
        )} */}

        <div className={styles.link}>
          <motion.p
            className={styles.home_icon}
            onClick={() => handleScroll("#home")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            Home
          </motion.p>
          <motion.p
            className={styles.about}
            onClick={() => handleScroll("#about")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            About
          </motion.p>
          <motion.p
            className={styles.projects}
            onClick={() => handleScroll("#projects")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            Projects
          </motion.p>
          <motion.p
            className={styles.contact}
            onClick={() => handleScroll("#contact")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            Say Hi
          </motion.p>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
