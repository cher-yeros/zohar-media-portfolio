"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero: React.FC = () => {
  const heroSlides = [
    {
      id: 1,
      background: "/img/hero/hero-1.jpg",
      subtitle: "Creative company dedicated to growth",
      title: "Zohar Media - Your Story, Beautifully Told",
      buttonText: "Discover Our Services",
      buttonLink: "/services",
    },
    {
      id: 2,
      background: "/img/hero/hero-1.jpg",
      subtitle: "From video production to event planning",
      title: "Complete Start-to-Finish Service",
      buttonText: "View Our Portfolio",
      buttonLink: "/portfolio",
    },
    {
      id: 3,
      background: "/img/hero/hero-1.jpg",
      subtitle: "Ethiopian style, culture, and audience expertise",
      title: "Professional & Personal Moments",
      buttonText: "Let's Connect",
      buttonLink: "/contact",
    },
  ];

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
    <section className="hero">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".hero__pagination",
          renderBullet: function (index, className) {
            const slideNumber = (index + 1).toString().padStart(2, "0");
            return `<button role="button" class="${className}" type="button">${slideNumber}</button>`;
          },
        }}
        className="hero__slider"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero__item set-bg"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <motion.div
                      className="hero__text"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.span
                        className="hero__subtitle"
                        variants={itemVariants}
                      >
                        {slide.subtitle}
                      </motion.span>
                      <motion.h2
                        className="hero__title"
                        variants={itemVariants}
                      >
                        {slide.title}
                      </motion.h2>
                      <motion.div variants={itemVariants}>
                        <Link href={slide.buttonLink}>
                          <motion.div
                            className="primary-btn"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            {slide.buttonText}
                          </motion.div>
                        </Link>
                      </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Link href="/about" className="primary-btn">
                        Learn About Us
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Numbered Pagination - Positioned outside Swiper */}
      <div className="hero__pagination"></div>
    </section>
  );
};

export default Hero;
