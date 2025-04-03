"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <motion.div className={styles.container} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className={styles.brand}>
                <Image src="/images/dizzyTechLogo-white.png" width="100" height="100" alt="logo" />
               <p>Your Digital Growth Partner.</p>
            </div>

            <div className={styles.links}>
               <Link href="#about">About</Link>
               <Link href="#services">Services</Link>
               <Link href="#portfolio">Portfolio</Link>
               <Link href="#contact">Contact</Link>
            </div>

            <div className={styles.cta}>
               <p>Let’s build something amazing together!</p>
               <Link href="#contact">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                     Get in Touch
                  </motion.button>
               </Link>
            </div>
         </motion.div>
         <div className={styles.bottom}>
            <p>© {new Date().getFullYear()} DizzyTech. All Rights Reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;
