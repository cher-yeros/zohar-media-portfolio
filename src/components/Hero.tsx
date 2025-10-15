"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
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
                    <div
                      className="hero__text"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200"
                    >
                      <span
                        className="hero__subtitle"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="300"
                      >
                        {slide.subtitle}
                      </span>
                      <h1
                        className="hero__title"
                        style={{ fontWeight: "bold" }}
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="400"
                      >
                        {slide.title}
                      </h1>
                      <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="500"
                      >
                        <Link href={slide.buttonLink}>
                          <div className="primary-btn">{slide.buttonText}</div>
                        </Link>
                      </div>
                    </div>

                    <div
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="600"
                    >
                      <Link href="/about" className="primary-btn">
                        Learn About Us
                      </Link>
                    </div>
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
