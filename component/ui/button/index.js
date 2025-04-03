"use client"
import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const ButtonCustom = ({ label }) => {
   return (
      <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
         {label}
      </motion.button>
   );
};

export default ButtonCustom;
