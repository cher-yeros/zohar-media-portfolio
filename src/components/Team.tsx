"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  extraClass?: string;
  socials: { platform: string; url: string; icon: string }[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Amanda Stone",
    role: "Videographer",
    image: "/img/team/team-1.jpg",
    socials: [
      { platform: "facebook", url: "#", icon: "fa fa-facebook" },
      { platform: "twitter", url: "#", icon: "fa fa-twitter" },
      { platform: "dribbble", url: "#", icon: "fa fa-dribbble" },
      { platform: "instagram", url: "#", icon: "fa fa-instagram" },
    ],
  },
  {
    id: 2,
    name: "Amanda Stone",
    role: "Videographer",
    image: "/img/team/team-2.jpg",
    extraClass: "team__item--second",
    socials: [
      { platform: "facebook", url: "#", icon: "fa fa-facebook" },
      { platform: "twitter", url: "#", icon: "fa fa-twitter" },
      { platform: "dribbble", url: "#", icon: "fa fa-dribbble" },
      { platform: "instagram", url: "#", icon: "fa fa-instagram" },
    ],
  },
  {
    id: 3,
    name: "Amanda Stone",
    role: "Videographer",
    image: "/img/team/team-3.jpg",
    extraClass: "team__item--third",
    socials: [
      { platform: "facebook", url: "#", icon: "fa fa-facebook" },
      { platform: "twitter", url: "#", icon: "fa fa-twitter" },
      { platform: "dribbble", url: "#", icon: "fa fa-dribbble" },
      { platform: "instagram", url: "#", icon: "fa fa-instagram" },
    ],
  },
  {
    id: 4,
    name: "Amanda Stone",
    role: "Videographer",
    image: "/img/team/team-4.jpg",
    extraClass: "team__item--four",
    socials: [
      { platform: "facebook", url: "#", icon: "fa fa-facebook" },
      { platform: "twitter", url: "#", icon: "fa fa-twitter" },
      { platform: "dribbble", url: "#", icon: "fa fa-dribbble" },
      { platform: "instagram", url: "#", icon: "fa fa-instagram" },
    ],
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
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title team__title text-center">
              <span>Nice to meet</span>
              <h2>OUR Team</h2>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="row">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-3 col-md-6 col-sm-6 p-0">
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
                  <div className="team__item__social flex justify-center gap-3 mt-2">
                    {member.socials.map((social, i) => (
                      <Link key={i} href={social.url}>
                        <i className={social.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Button */}
          <div className="col-lg-12 p-0">
            <div className="team__btn text-center mt-6">
              <Link href="#" className="primary-btn">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
