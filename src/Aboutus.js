import React from 'react';
import { motion } from 'framer-motion';
import './Aboutus.css'; // Ensure this file contains your styling

const AboutUs = () => {
  // Define animation variants for the text block
  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: 'easeOut' }
    },
  };

  return (
    <div className="about-us-container">
      {/* Left section: image */}
      <div className="left-side">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/cyber-security-4651987-3855989.png" 
          alt="About Us"
          className="about-image"
        />
      </div>
      {/* Right section: text, with a sliding animation */}
      <motion.div 
        className="right-side"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>About Us</h1>
        <p>
          Welcome to DataEmbed! We are a company dedicated to combining security and creativity.
          Our innovative solutions help you keep your data secure while offering cutting-edge features.
        </p>
        <p>
          Our team is committed to providing excellent service and continuous innovation.
          Whether you're looking to secure personal communications or protect sensitive business data,
          we have the right tools for you.
        </p>
        <p>
          Thank you for choosing DataEmbed—where your data is safe, and your secrets stay hidden.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
