import React from 'react';
import styles from '../spinner/Spinner.module.scss';
import { motion } from 'framer-motion';

const Spinner = () => {
  return (
    <motion.div className={styles.spinner}>
      <div className={styles.load}>
        <div className={styles.ball}></div>
        <div className={styles.shadow}></div>
      </div>
    </motion.div>
  )
}

export default Spinner;
