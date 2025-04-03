"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { FaLaptopCode, FaPalette, FaGoogle, FaSearch, FaBullhorn, FaLayerGroup } from "react-icons/fa";

const servicesData = [
   { id: 1, title: "Website Development", icon: <FaLaptopCode />, description: "Custom-built, high-performance websites to scale your business." },
   { id: 2, title: "UI/UX Design", icon: <FaPalette />, description: "User-centric and visually stunning designs to enhance user experience." },
   { id: 3, title: "Google Ads", icon: <FaGoogle />, description: "Strategic ad campaigns to maximize your ROI and conversions." },
   { id: 4, title: "SEO Optimization", icon: <FaSearch />, description: "Advanced SEO strategies to rank your business higher on search engines." },
   { id: 5, title: "Meta Ads", icon: <FaBullhorn />, description: "Data-driven Meta Ads to engage and convert your target audience." },
   {
      id: 6,
      title: "Graphic Design",
      icon: <FaLayerGroup />,
      description: "Creative and professional graphic design solutions to enhance your brand identity.",
   },
];

const Services = () => {
   return (
      <section className={styles.services} id="services">
         <motion.div className={styles.container} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h2 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
               Our <span>Services</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
               We offer a wide range of digital solutions to help businesses grow, engage, and convert in the online world.
            </motion.p>

            <div className={styles.serviceCards}>
               {servicesData.map((service, index) => (
                  <motion.div
                     key={service.id}
                     className={styles.card}
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  >
                     <div className={styles.icon}>
                        <span className={styles.iconTop}>{service.icon}</span> 
                        <span className={styles.iconBottom}>{service.icon}</span> 
                        {/* {service.icon} */}
                     </div>
                     <h3>{service.title}</h3>
                     <p>{service.description}</p>
                  </motion.div>
               ))}
            </div>
         </motion.div>
      </section>
   );
};

export default Services;
