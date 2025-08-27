"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="about spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="about__text"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="section-title" variants={itemVariants}>
                <span>About us</span>
                <h2>
                  We are the best in <br />
                  our field
                </h2>
              </motion.div>
              <motion.div className="about__pic__item" variants={itemVariants}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <motion.div
                      className="about__pic__item__large set-bg"
                      style={{ backgroundImage: "url(/img/about/about-1.jpg)" }}
                      variants={imageVariants}
                    ></motion.div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <motion.div
                      className="about__pic__item__large set-bg"
                      style={{ backgroundImage: "url(/img/about/about-2.jpg)" }}
                      variants={imageVariants}
                    ></motion.div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <motion.div
                      className="about__pic__item__large set-bg"
                      style={{ backgroundImage: "url(/img/about/about-3.jpg)" }}
                      variants={imageVariants}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="about__text__desc" variants={itemVariants}>
                <p>
                  Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an
                  award-winning, full-service production company specializing in
                  creative video content. We work with brands, agencies, and
                  production companies to create compelling visual stories that
                  engage and inspire audiences.
                </p>
                <p>
                  Our team of experienced professionals brings together
                  expertise in cinematography, editing, sound design, and
                  post-production to deliver high-quality content that meets the
                  highest industry standards. We pride ourselves on our
                  attention to detail, creative vision, and commitment to
                  excellence.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/about" className="primary-btn">
                    About us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
