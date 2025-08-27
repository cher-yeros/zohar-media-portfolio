"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testimonial() {
  const testimonials = [
    {
      text: "Zohar Media perfectly captured our wedding with authentic Ethiopian traditions. Their understanding of our culture made all the difference in telling our story beautifully.",
      img: "/img/testimonial/ta-1.jpg",
      name: "Almaz Tadesse",
      role: "Bride & Entrepreneur",
    },
    {
      text: "Working with Zohar Media for our business promotion was exceptional. They created engaging social media content that truly resonated with our Ethiopian community.",
      img: "/img/testimonial/ta-2.jpg",
      name: "Daniel Haile",
      role: "Restaurant Owner",
    },
    {
      text: "From planning to execution, Zohar Media made our graduation celebration unforgettable. The video quality and attention to cultural details were outstanding.",
      img: "/img/testimonial/ta-3.jpg",
      name: "Sara Bekele",
      role: "Medical Graduate",
    },
    {
      text: "Their event planning service for our corporate launch was professional and seamless. They understand both business needs and Ethiopian cultural elements perfectly.",
      img: "/img/testimonial/ta-1.jpg",
      name: "Michael Getachew",
      role: "Tech Entrepreneur",
    },
    {
      text: "Zohar Media's social media management has grown our following significantly. They create content that speaks to our community in an authentic way.",
      img: "/img/testimonial/ta-2.jpg",
      name: "Hanan Ahmed",
      role: "Fashion Designer",
    },
  ];

  return (
    <section
      className="testimonial spad"
      style={{ backgroundImage: "url('/img/testimonial-bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center-title">
              <span>Loved By Clients</span>
              <h2>Stories from our community</h2>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial__slider"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial__item">
                <div className="testimonial__text">
                  <p>{t.text}</p>
                </div>
                <div className="testimonial__author">
                  <div className="testimonial__author__pic">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div className="testimonial__author__text">
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
