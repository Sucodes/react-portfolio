import React from 'react';
import styles from '../spinner/Spinner.module.scss';
import { motion } from 'framer-motion';

const Spinner = () => {
  return (
    <>
      <motion.div
      className={styles.spinner}>
        Loading...
      </motion.div>
    </>
  )
}

export default Spinner;
