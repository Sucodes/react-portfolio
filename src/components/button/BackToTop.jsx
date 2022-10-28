import React from "react";
import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import styles from "../button/BackToTop.module.scss";

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  return (
    <div className={styles.btn}>
      <a href="#home" data-scroll-to rel="noreferrer">
        {backToTopButton ? (
          <div>
            <BsArrowUp />
          </div>
        ) : null}
      </a>
    </div>
  );
};

export default BackToTop;
