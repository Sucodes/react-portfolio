import React from "react";
import Skills from "../skills/Skills";
import { motion } from "framer-motion";
import styles from "../about/About.module.scss";
import profile from "../../styles/assets/profile.jpg";

const About = () => {

  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__description}>
        <div className={styles.about__description_text}>
          <h1
            data-scroll 
            data-scroll-speed="-2"
            data-scroll-direction='horizontal'
          >About</h1>

          <br />

          <p>
            Hey there... Suvwe here (it's pronounced Su-way by the way). I'm a
            Software Developer with Frontend technology expertise, I enjoy
            creating interactive and accessible web solutions to improve user
            experience.
            <br />
            <br />
            That aside, I also enjoy binge-watching anime and Korean dramas,
            fan-girling over art pieces and on other days, being a Medical
            Doctor.
          </p>
        </div>

        <motion.div 
        initial={{x: '200px' }}
        whileInView={{ x: 0 }}
        viewport={{once: false}}
        transition={{ duration: 1}}
        className={styles.about__description_img}
        >
          <img src={profile} alt="profile" />
        </motion.div>
      </div>
      <br />

      <div className={styles.about__stack}>
        <Skills />
      </div>

      <hr />
    </section>
  );
};

export default About;
