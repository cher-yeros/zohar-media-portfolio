"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      className="callto spad set-bg"
      style={{ backgroundImage: "url(/img/callto-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="callto__text"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.h2 variants={itemVariants}>
                Ready to get started?
              </motion.h2>
              <motion.p variants={itemVariants}>
                Let's discuss your project and create something amazing
                together.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link href="/contact">
                  <motion.div
                    className="primary-btn"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Get in touch
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
