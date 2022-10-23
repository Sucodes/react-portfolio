import React from "react";
import { motion } from "framer-motion";
import styles from "../contact/Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact_text}>
        <h1
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          Excited you made it all the way down here!
          <br />
          <br />
          Connect with me.
        </h1>
      </div>

      <div
        data-scroll
        data-scroll-speed="3"
        data-scroll-direction="horizontal"
        className={styles.contact_btn}
      >
        <a href="mailto:rhounamoney@gmail.com">
          <input type="submit" value="Send an Email" />
        </a>
      </div>

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

      <hr />
      
      <span>&copy;{new Date().getFullYear()}. All Rights Reserved. </span>
    </section>
  );
};

export default Contact;
