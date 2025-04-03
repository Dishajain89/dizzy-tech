"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import ButtonCustom from "../ui/button";

const pricingData = {
  india: [
    { title: "Basic Website", price: "₹10,000 - ₹20,000", features: ["5 Pages", "Responsive Design", "SEO Friendly", "Basic Support"] },
    { title: "Standard Website", price: "₹25,000 - ₹50,000", features: ["10 Pages", "Custom UI/UX", "SEO Optimized", "Free 1 Month Support"] },
    { title: "Premium Website", price: "₹60,000 - ₹1,00,000", features: ["Unlimited Pages", "Advanced Animations", "SEO + Marketing", "Priority Support"] },
  ],
  international: [
    { title: "Basic Website", price: "$200 - $400", features: ["5 Pages", "Responsive Design", "SEO Friendly", "Basic Support"] },
    { title: "Standard Website", price: "$500 - $900", features: ["10 Pages", "Custom UI/UX", "SEO Optimized", "Free 1 Month Support"] },
    { title: "Premium Website", price: "$1200 - $2000", features: ["Unlimited Pages", "Advanced Animations", "SEO + Marketing", "Priority Support"] },
  ],
};

const Pricing = () => {
  const [currency, setCurrency] = useState("india");

  return (
    <section className={styles.pricing}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our <span>Pricing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Flexible and transparent pricing, tailored for Indian & International clients.
        </motion.p>

        <div className={styles.toggleWrapper}>
          <span className={currency === "india" ? styles.active : ""} onClick={() => setCurrency("india")}>India IN</span>
          <div className={styles.toggle} onClick={() => setCurrency(currency === "india" ? "international" : "india")}>
            <div className={`${styles.toggleCircle} ${currency === "international" ? styles.activeCircle : ""}`}></div>
          </div>
          <span className={currency === "international" ? styles.active : ""} onClick={() => setCurrency("international")}>International 🌎</span>
        </div>

        <div className={styles.pricingCards}>
          {pricingData[currency].map((plan, index) => (
            <motion.div 
              key={index} 
              className={styles.pricingCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
            >
              <h3>{plan.title}</h3>
              <p className={styles.price}>{plan.price}</p>
              <ul>
                {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
              <a href="#contact"><ButtonCustom label="Get Started"></ButtonCustom> </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
