"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "si-1.png",
      title: "Motion graphics",
      description:
        "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
    },
    {
      icon: "si-2.png",
      title: "Scriptwriting and editing",
      description:
        "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
    },
    {
      icon: "si-3.png",
      title: "Video distribution",
      description:
        "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
    },
    {
      icon: "si-4.png",
      title: "Video hosting",
      description:
        "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
    },
  ];

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
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="services spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <motion.div
              className="services__title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-title">
                <span>Our services</span>
                <h2>What We do?</h2>
              </div>
              <p>
                If you hire a videographer of our team you will get a video
                professional to make a custom video for your business and, once
                the project is over.
              </p>
              <Link href="/services" className="primary-btn">
                View all services
              </Link>
            </motion.div>
          </div>
          <div className="col-lg-8">
            <motion.div
              className="row"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="col-lg-6 col-md-6 col-sm-6"
                  variants={itemVariants}
                >
                  <motion.div
                    className="services__item"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="services__item__icon"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <img
                        src={`/img/icons/${service.icon}`}
                        alt={service.title}
                      />
                    </motion.div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
