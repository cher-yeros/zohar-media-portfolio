"use client";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import PortfolioPage from "@/components/PortfolioPage";
import Aos from "aos";

export default function Portfolio() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const portfolioItems = [
    {
      id: 1,
      category: "video",
      image: "/img/portfolio/portfolio-1.jpg",
      title: "Corporate Video Production",
      description: "Professional corporate video for tech company",
    },
    {
      id: 2,
      category: "web",
      image: "/img/portfolio/portfolio-2.jpg",
      title: "E-commerce Website",
      description: "Modern e-commerce platform design",
    },
    {
      id: 3,
      category: "video",
      image: "/img/portfolio/portfolio-3.jpg",
      title: "Product Launch Video",
      description: "Creative product launch campaign",
    },
    {
      id: 4,
      category: "web",
      image: "/img/portfolio/portfolio-4.jpg",
      title: "Portfolio Website",
      description: "Artist portfolio and gallery",
    },
    {
      id: 5,
      category: "video",
      image: "/img/portfolio/portfolio-5.jpg",
      title: "Event Coverage",
      description: "Live event filming and editing",
    },
    {
      id: 6,
      category: "web",
      image: "/img/portfolio/portfolio-6.jpg",
      title: "Restaurant Website",
      description: "Modern restaurant website design",
    },
    {
      id: 7,
      category: "video",
      image: "/img/portfolio/portfolio-7.jpg",
      title: "Music Video",
      description: "Creative music video production",
    },
    {
      id: 8,
      category: "web",
      image: "/img/portfolio/portfolio-8.jpg",
      title: "Blog Platform",
      description: "Content management system",
    },
    {
      id: 9,
      category: "video",
      image: "/img/portfolio/portfolio-9.jpg",
      title: "Documentary",
      description: "Short documentary film",
    },
  ];

  return (
    <Layout title="Portfolio - Zohar Media Portfolio">
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-option spad set-bg"
        style={{ backgroundImage: "url(/img/breadcrumb-bg.jpg)" }}
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text text-center">
                <h2 data-aos="fade-up" data-aos-delay="100">
                  Portfolio
                </h2>
                <div
                  className="breadcrumb__links"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Link href="/">Home</Link>
                  <span>Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioPage />
    </Layout>
  );
}
