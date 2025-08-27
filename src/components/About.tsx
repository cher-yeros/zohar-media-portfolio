"use client";

import { FC } from "react";
import Image from "next/image";

interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    icon: "/img/icons/si-3.png",
    title: "Complete Service",
    description: "Start-to-finish service for all your creative needs.",
  },
  {
    id: 2,
    icon: "/img/icons/si-4.png",
    title: "Cultural Expertise",
    description: "Deep understanding of Ethiopian style and audience.",
  },
];

const About: FC = () => {
  return (
    <section className="about spad">
      <div className="container">
        <div className="row">
          {/* Left side - images */}
          <div className="col-lg-6">
            <div className="about__pic">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="about__pic__item about__pic__item--large relative w-full h-[350px]">
                    <Image
                      src="/img/about/about-1.jpg"
                      alt="About us"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="about__pic__item relative w-full h-[170px] mb-4">
                        <Image
                          src="/img/about/about-2.jpg"
                          alt="About us"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="about__pic__item relative w-full h-[170px]">
                        <Image
                          src="/img/about/about-3.jpg"
                          alt="About us"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - text */}
          <div className="col-lg-6">
            <div className="about__text">
              <div className="section-title">
                <span>About Zohar Media</span>
                <h2>Who we are?</h2>
              </div>

              {/* Services */}
              <div className="row">
                {services.map((service) => (
                  <div key={service.id} className="col-lg-6 col-md-6 col-sm-6">
                    <div className="services__item">
                      <div className="services__item__icon">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={40}
                          height={40}
                        />
                      </div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="about__text__desc mt-4">
                <p>
                  Zohar Media is a creative company dedicated to helping you
                  grow your brand, tell your story, and celebrate life's special
                  moments. We offer complete start-to-finish service with
                  quality work at fair prices, trusted by our clients for their
                  most important occasions and business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
