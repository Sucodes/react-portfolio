import React from "react";
import { motion } from "framer-motion";
import styles from '../footer/Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/oghenesuvwe-money-100b04228/"
          >
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              LinkedIn
            </motion.p>
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/Sucodes">
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              GitHub
            </motion.p>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/su_codes"
          >
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Twitter
            </motion.p>
          </a>
        </li>
      </ul>

      <span>&copy;{new Date().getFullYear()}. All Rights Reserved. </span>
    </section>
  );
};

export default Footer;
