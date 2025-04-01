"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Link from "next/link";

const Banner = () => {
   return (
      <section className={styles.banner}>
         <motion.div className={styles.container} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className={styles.text}>
               <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
                  Elevate Your Business with <span>DizzyTech</span>
               </motion.h1>
               <motion.p initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
                  We build <b>high-converting websites</b> & digital strategies that help your business grow. Let’s create something amazing together!
               </motion.p>
               <Link href="/contact">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                     Get Started
                  </motion.button>
               </Link>
            </div>

            <motion.div
               className={styles.image}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.7, duration: 0.8 }}
            >
               <img src="/banner-illustration.svg" alt="DizzyTech Digital Solutions" />
            </motion.div>
         </motion.div>
      </section>
   );
};

export default Banner;
