"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contact}>
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
          Get in <span>Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Let's create something amazing together. Contact us for your website needs!
        </motion.p>

        <div className={styles.contactWrapper}>
          {/* Contact Information */}
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3>Contact Details</h3>
            <p>
              📩 <strong>Email:</strong> <a href="mailto:dizzytech.dt@gmail.com">dizzytech.dt@gmail.com</a>
            </p>
            <p>
              📱 <strong>Instagram:</strong> <a href="https://instagram.com/dizzytech_byd" target="_blank">@dizzytech_byd</a>
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
            />
            <textarea 
              name="message" 
              rows="4" 
              placeholder="Your Message" 
              required 
              value={formData.message} 
              onChange={handleChange} 
            />
            <button type="submit">Send Message</button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
