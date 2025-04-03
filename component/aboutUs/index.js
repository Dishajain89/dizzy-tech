"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";
import ButtonCustom from "../ui/button";

const AboutUs = () => {
   return (
      <section className={styles.about} id="about">
         <motion.div className={styles.container} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className={styles.text}>
               <motion.h2 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
                  About <span>DizzyTech</span>
               </motion.h2>

               <motion.h3 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
                  Empowering Businesses with Cutting-Edge Digital Solutions
               </motion.h3>

               <motion.p initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
                  Welcome to <b>DizzyTech</b>, where creativity meets technology. I’m <b>Disha Jain</b>, the founder of DizzyTech. Along with my
                  skilled team, we specialize in building modern, high-quality websites that not only look great but also drive results.
               </motion.p>

               <motion.p initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
                  With expertise in UI/UX design, website development, digital marketing, and SEO, we help businesses establish a strong online
                  presence. Our goal is to create digital experiences that captivate audiences and turn visitors into loyal customers.
               </motion.p>

               <motion.div
                  className={styles.whyChooseUs}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
               >
                  <h4>Why Choose Us?</h4>
                  <ul className={styles.whyChooseList}>
                     <li>
                        ✔️ <b>Modern & Custom Designs</b>
                     </li>
                     <li>
                        ✔️ <b>SEO & Performance Optimized</b>
                     </li>
                     <li>
                        ✔️ <b>Conversion-Focused Strategies</b>
                     </li>
                     <li>
                        ✔️ <b>Latest Technology & Trends</b>
                     </li>
                  </ul>
               </motion.div>

               <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="#contact" className={styles.cta}> <ButtonCustom label="Work With Us" /></a>
          </motion.div>
          
            </div>

            <motion.div
               className={styles.image}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.7, duration: 0.8 }}
            >
               <Image width={600} height={400} src="/images/aboutUs.jpg" alt="About DizzyTech" />
            </motion.div>
         </motion.div>
      </section>
   );
};

export default AboutUs;
