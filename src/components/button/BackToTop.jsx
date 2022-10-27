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

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={scrollUp} className={styles.btn}>
      {backToTopButton ? (
        <div>
          <BsArrowUp />
        </div>
      ) : null}
    </div>
  );
};

export default BackToTop;
