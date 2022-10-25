import React from "react";
import { motion } from "framer-motion";
import { GrGithub } from "react-icons/gr";
import styles from "../card/Card.module.scss";
import data from "../../data.json";

const Card = () => {
  return (
    <>
      {data &&
        data.map((element) => {
          return (
            <motion.div
              key={element.id}
              className={styles.card}
              initial={{ backgroundColor: "black", color: "grey" }}
              whileInView={{ backgroundColor: "yellow", color: "black" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
            >
              <div className={styles.card_text}>
                <h4>{element.title}</h4>
                
                <p>{element.description}</p>

                <span><strong>Stack:</strong>  {element.stack}</span>
              </div>

              <hr />

              <div className={styles.card_btn}>
                <span>
                  <a href={element.href} target="_blank" rel="noreferrer">
                    Visit
                  </a>
                </span>

                
                <a href={element.github} target="_blank" rel="noreferrer">
                    <GrGithub />
                </a>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

export default Card;
