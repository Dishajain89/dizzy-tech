"use client"
import { useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>DizzyTech</div>
      
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      
      <motion.ul 
        className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
