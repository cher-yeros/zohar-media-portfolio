"use client";

import React from "react";
import Link from "next/link";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "si-1.png",
      title: "Video & Media Production",
      description:
        "Create stunning videos for business and personal use, including TV commercials, social media content, documentaries, event coverage, and professional editing with music, effects, and subtitles.",
    },
    {
      icon: "si-2.png",
      title: "Social Media Management",
      description:
        "Grow your followers and maintain your brand online. We plan and create posts, design content, manage comments and messages, and provide performance reports so you can focus on your business.",
    },
    {
      icon: "si-3.png",
      title: "Event Planning & Production",
      description:
        "Organize and manage events of all sizes including weddings, parties, corporate events, launches, and live shows with complete stage, lighting, sound, and video production.",
    },
    {
      icon: "si-4.png",
      title: "Professional Editing",
      description:
        "High-quality post-production services including professional editing, color correction, sound design, motion graphics, and visual effects to bring your vision to life.",
    },
  ];

  return (
    <section className="services spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="services__title"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="section-title">
                <span>Our services</span>
                <h2>Professional Media Services</h2>
              </div>
              <p>
                Zohar Media offers comprehensive creative services to help you
                grow your brand, tell your story, and celebrate life&apos;s
                special moments. From video production to event planning, we
                bring your ideas to life professionally and effortlessly.
              </p>
              <Link href="/services" className="primary-btn">
                View all services
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="services__item">
                    <div className="services__item__icon">
                      <img
                        src={`/img/icons/${service.icon}`}
                        alt={service.title}
                      />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
