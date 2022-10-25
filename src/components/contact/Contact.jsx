import React from "react";
import Footer from '../footer/Footer';
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
        data-scroll-speed="2"
        data-scroll-direction="horizontal"
        className={styles.contact_btn}
      >
        <a href="mailto:rhounamoney@gmail.com">
          <input type="submit" value="Send an Email" />
        </a>
      </div>

      <hr />

      <><Footer /></>

    </section>
  );
};

export default Contact;
