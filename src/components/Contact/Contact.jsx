import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const formVariant = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current.reset();
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(true);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-div-title">
      {[ "What if we built something great together?"].map((text, index) => (
            <motion.p key={index} variants={itemVariant} className="contact-title">
              {text}
            </motion.p>
          ))}
      </div>
    <div className="section-contact">
      <motion.div
        variants={formVariant}
        initial="initial"
        animate="animate"
        className="contact-left-section"
      >

        <form ref={form} onSubmit={sendEmail}>
       

          <motion.div variants={itemVariant} className="formitem">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Foulen Fouleni" required />
          </motion.div>

          <motion.div variants={itemVariant} className="formitem">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="foulen@gmail.com" required />
          </motion.div>

          <motion.div variants={itemVariant} className="formitem">
            <label>Message</label>
            <textarea rows={6} name="message" placeholder="Your message..." required></textarea>
          </motion.div>

          <motion.button type="submit" variants={itemVariant}>
            Send
          </motion.button>

          {success && <span className="success-message">Your message has been sent successfully!</span>}
          {error && <span className="error-message">Something went wrong, please try again.</span>}
        </form>
      </motion.div>

      <div className="contact-right-section">
        <DotLottieReact 
          src="contact-animation.json" 
          loop 
          autoplay 
          style={{ width: '100%', height: '100%', maxWidth: '500px' }}
        />
      </div>
      </div>
    </div>
  );
};

export default Contact;