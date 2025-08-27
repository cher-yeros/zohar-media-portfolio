"use client";

import React, { useState } from "react";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import "../../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Layout title="Contact Us - Zohar Media Portfolio">
      {/* Breadcrumb Section */}
      <motion.section
        className="breadcrumb-option spad set-bg"
        style={{ backgroundImage: "url(/img/breadcrumb-bg.jpg)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div
                className="breadcrumb__text"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2>Let's Tell Your Story</h2>
                <p className="breadcrumb__subtitle">
                  Get in touch with Zohar Media for all your creative needs
                </p>
                <div className="breadcrumb__links">
                  <Link href="/">Home</Link>
                  <span>Contact</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="contact spad">
        <div className="container">
          <motion.div
            className="row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="col-lg-6 col-md-6">
              <motion.div className="contact__widget" variants={itemVariants}>
                <div className="contact__widget__header">
                  <h3>Get in Touch</h3>
                  <p>
                    Ready to bring your vision to life? Contact Zohar Media
                    today!
                  </p>
                </div>

                <motion.div
                  className="contact__widget__item"
                  variants={itemVariants}
                >
                  <div className="contact__widget__icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Our Location</h5>
                    <p>
                      Ethiopian Cultural Center
                      <br />
                      123 Community Ave, Suite 200
                      <br />
                      Atlanta, GA 30309
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="contact__widget__item"
                  variants={itemVariants}
                >
                  <div className="contact__widget__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Call Us</h5>
                    <p>
                      +1 (404) 555-ZOHAR
                      <br />
                      +1 (404) 555-9642
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="contact__widget__item"
                  variants={itemVariants}
                >
                  <div className="contact__widget__icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Email Us</h5>
                    <p>
                      info@zoharmedia.com
                      <br />
                      creative@zoharmedia.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="contact__widget__item"
                  variants={itemVariants}
                >
                  <div className="contact__widget__icon">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Business Hours</h5>
                    <p>
                      Monday - Friday: 9:00 AM - 7:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div className="contact__social" variants={itemVariants}>
                  <h5>Follow Us</h5>
                  <div className="contact__social__links">
                    <a
                      href="#"
                      className="social__link facebook"
                      aria-label="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="social__link instagram"
                      aria-label="Instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="social__link youtube"
                      aria-label="YouTube"
                    >
                      <i className="fa fa-youtube-play"></i>
                    </a>
                    <a
                      href="#"
                      className="social__link twitter"
                      aria-label="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-6">
              <motion.div className="contact__form" variants={formVariants}>
                <div className="contact__form__header">
                  <h3>Send Us a Message</h3>
                  <p>
                    Tell us about your project and let's create something
                    amazing together!
                  </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    className="alert alert-success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fa fa-check-circle"></i>
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon!
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="alert alert-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fa fa-exclamation-circle"></i>
                    Sorry, there was an error sending your message. Please try
                    again.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form__group">
                        <input
                          type="text"
                          placeholder="Your Name *"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={errors.name ? "error" : ""}
                          required
                        />
                        {errors.name && (
                          <span className="error__message">
                            <i className="fa fa-exclamation-triangle"></i>
                            {errors.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form__group">
                        <input
                          type="email"
                          placeholder="Your Email *"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={errors.email ? "error" : ""}
                          required
                        />
                        {errors.email && (
                          <span className="error__message">
                            <i className="fa fa-exclamation-triangle"></i>
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form__group">
                        <input
                          type="text"
                          placeholder="Subject *"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={errors.subject ? "error" : ""}
                          required
                        />
                        {errors.subject && (
                          <span className="error__message">
                            <i className="fa fa-exclamation-triangle"></i>
                            {errors.subject}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form__group">
                        <textarea
                          placeholder="Tell us about your project... *"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className={errors.message ? "error" : ""}
                          rows={6}
                          required
                        ></textarea>
                        {errors.message && (
                          <span className="error__message">
                            <i className="fa fa-exclamation-triangle"></i>
                            {errors.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <motion.button
                        type="submit"
                        className={`site-btn ${isSubmitting ? "loading" : ""}`}
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fa fa-spinner fa-spin"></i>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fa fa-paper-plane"></i>
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        className="map"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div
                className="map__inner"
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="map__header">
                  <h3>Find Us Here</h3>
                  <p>
                    Visit our studio in the heart of Atlanta's Ethiopian
                    community
                  </p>
                </div>
                <div className="map__iframe">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8815295946243!2d-84.39489018481614!3d33.748995980672284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1640999151234!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Zohar Media Location"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
