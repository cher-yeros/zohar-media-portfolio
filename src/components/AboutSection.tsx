"use client";

import React from "react";
import Link from "next/link";

const AboutSection: React.FC = () => {
  return (
    <section className="about spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="about__text"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <span>About Zohar Media</span>
                <h2>
                  Everyone has a story to tell. <br />
                  We help you share it beautifully.
                </h2>
              </div>
              <div
                className="about__pic__item"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div
                      className="about__pic__item__large set-bg"
                      style={{ backgroundImage: "url(/img/about/about-1.jpg)" }}
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="400"
                    ></div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div
                      className="about__pic__item__large set-bg"
                      style={{ backgroundImage: "url(/img/about/about-2.jpg)" }}
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="500"
                    ></div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div
                      className="about__pic__item__large set-bg"
                      style={{ backgroundImage: "url(/img/about/about-3.jpg)" }}
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="600"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="about__text__desc"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="700"
              >
                <p>
                  Zohar Media is a creative company dedicated to helping you
                  grow your brand, tell your story, and celebrate life&apos;s
                  special moments. We do a wide range of work — from video
                  production and social media management to event planning and
                  capturing memories.
                </p>
                <p>
                  Whether you&apos;re a business promoting your brand, or an
                  individual celebrating a wedding, birthday, or graduation, we
                  bring your ideas to life professionally and effortlessly. Our
                  deep understanding of Ethiopian style, culture, and audience
                  ensures your message resonates perfectly with your target
                  community.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="800"
                >
                  <Link href="/about" className="primary-btn">
                    About us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
