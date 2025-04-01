"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  // Formspree Hook
  const [state, handleSubmit] = useForm("xdkelqjp");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e); // Submit to Formspree

    if (state.succeeded) {
      setIsSubmitted(true); // Show success message
      setFormData({ name: "", email: "", message: "" }); // Clear input fields

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 25000);
    }
  };

  return (
    <section className={styles.contact} id="contact">
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

          {/* Contact Form with Formspree */}
          <motion.form 
            className={styles.contactForm}
            onSubmit={handleFormSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <input 
              id="name"
              type="text" 
              name="name" 
              placeholder="Enter your name"
              required 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            />

            <input 
              id="email"
              type="email" 
              name="email"
              placeholder="Enter your email"
              required 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea 
              id="message"
              name="message" 
              rows="4" 
              placeholder="Write your message here..."
              required 
              value={formData.message} 
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            {/* Show success message in place of the button */}
            {isSubmitted ? (
              <p className={styles.successMessage}>Thanks for reaching out! We will get back to you soon.</p>
            ) : (
              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
