"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Link from "next/link";
import Lottie from "lottie-react";
import ButtonCustom from "../ui/button";

const Banner = () => {
   const [mouseX, setMouseX] = useState(0);
   const [mouseY, setMouseY] = useState(0);
   const [animationData, setAnimationData] = useState(null);

   useEffect(() => {
      if (typeof window !== "undefined") {
         fetch("/animation1.json")
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Error loading animation:", err));
      }
   }, []);

   const handleMouseMove = (e) => {
      setMouseX((e.clientX / window.innerWidth) * 20 - 10);
      setMouseY((e.clientY / window.innerHeight) * 20 - 10);
   };

   return (
      <section className={styles.banner} id="home" onMouseMove={handleMouseMove}>
         <motion.div
            className={styles.animationBackground}
            animate={{ x: mouseX, y: mouseY }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
         >
            {animationData ? (
               <Lottie animationData={animationData} loop autoplay className={styles.lottieAnimation} />
            ) : (
               <p>Loading animation...</p>
            )}
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
