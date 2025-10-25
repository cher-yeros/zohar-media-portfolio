"use client";

import { FC } from "react";
import Link from "next/link";
import {
  SOCIAL_MEDIA_LINKS,
  ADDITIONAL_SOCIAL_LINKS,
} from "../constants/socialMedia";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  extraClass?: string;
  socials: { platform: string; url: string; icon: string; ariaLabel: string }[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Zara Yohannes",
    role: "Creative Director",
    image: "/img/team/team-1.jpg",
    socials: SOCIAL_MEDIA_LINKS.filter((social) =>
      ["facebook", "x", "linkedin", "instagram"].includes(social.platform)
    ),
  },
  {
    id: 2,
    name: "Dawit Tesfaye",
    role: "Video Producer",
    image: "/img/team/team-2.jpg",
    extraClass: "team__item--second",
    socials: [
      ...SOCIAL_MEDIA_LINKS.filter((social) =>
        ["facebook", "youtube", "instagram"].includes(social.platform)
      ),
      ...ADDITIONAL_SOCIAL_LINKS.filter(
        (social) => social.platform === "vimeo"
      ),
    ],
  },
  {
    id: 3,
    name: "Meron Girma",
    role: "Event Coordinator",
    image: "/img/team/team-3.jpg",
    extraClass: "team__item--third",
    socials: [
      {
        platform: "facebook",
        url: "#",
        icon: "fa fa-facebook",
        ariaLabel: "Facebook",
      },
      {
        platform: "x",
        url: "#",
        icon: "fa fa-x-twitter",
        ariaLabel: "X",
      },
      {
        platform: "pinterest",
        url: "#",
        icon: "fa fa-pinterest",
        ariaLabel: "Pinterest",
      },
      {
        platform: "instagram",
        url: "#",
        icon: "fa fa-instagram",
        ariaLabel: "Instagram",
      },
    ],
  },
  {
    id: 4,
    name: "Abel Bekele",
    role: "Social Media Manager",
    image: "/img/team/team-4.jpg",
    extraClass: "team__item--four",
    socials: SOCIAL_MEDIA_LINKS.filter((social) =>
      ["facebook", "x", "linkedin", "instagram"].includes(social.platform)
    ),
  },
];

const Team: FC = () => {
  return (
    <section
      className="team spad relative"
      style={{
        backgroundImage: "url('/img/team-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10">
        {/* Section Title */}
        <div
          className="row"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="col-lg-12">
            <div className="section-title team__title text-center">
              <span>Nice to meet</span>
              <h2>Our Creative Team</h2>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="col-lg-3 col-md-6 col-sm-6 p-0"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={200 + index * 100}
            >
              <div
                className={`team__item ${member.extraClass || ""} relative`}
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              >
                <div className="team__item__text absolute bottom-0 w-full text-center text-white p-4 bg-black/50">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  {/* <div className="team__item__social flex justify-center gap-3 mt-2">
                    {member.socials.map((social, i) => (
                      <Link key={i} href={social.url}>
                        <i className={social.icon}></i>
                      </Link>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}

          {/* Button */}
          <div
            className="col-lg-12 p-0"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            <div className="team__btn text-center mt-6">
              <Link href="/about" className="primary-btn">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
