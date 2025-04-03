"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/assets/animation/Animation1.json";
import ButtonCustom from "../ui/button";

const Banner = () => {
   const [mouseX, setMouseX] = useState(0);
   const [mouseY, setMouseY] = useState(0);

   // Function to track mouse movement
   const handleMouseMove = (e) => {
      setMouseX((e.clientX / window.innerWidth) * 20 - 10); // Shift range -10 to 10
      setMouseY((e.clientY / window.innerHeight) * 20 - 10);
   };

   return (
      <section className={styles.banner} id="home" onMouseMove={handleMouseMove}>
         <motion.div
            className={styles.animationBackground}
            animate={{ x: mouseX, y: mouseY }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
         >
            <Lottie animationData={animationData} loop autoplay className={styles.lottieAnimation} />
         </motion.div>

         <motion.div className={styles.container} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className={styles.text}>
               <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
                  Elevate Your Business with <span>DizzyTech</span>
               </motion.h1>
               <motion.p initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
                  We build <b>high-converting websites</b> & digital strategies that help your business grow. Let’s create something amazing together!
               </motion.p>
               <Link href="#contact">
                  <ButtonCustom label="Get Started" />
               </Link>
            </div>
         </motion.div>
      </section>
   );
};

export default Banner;
