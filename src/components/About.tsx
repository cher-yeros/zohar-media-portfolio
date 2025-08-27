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
    title: "Video distribution",
    description: "Whether you’re halfway through the editing process, or you.",
  },
  {
    id: 2,
    icon: "/img/icons/si-4.png",
    title: "Video hosting",
    description: "Whether you’re halfway through the editing process, or you.",
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
                <span>About videograph</span>
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
                  Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an
                  award-winning, full-service production company specializing in
                  commercial, broadcast, tourism & action sport video production
                  services has been featured.
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
