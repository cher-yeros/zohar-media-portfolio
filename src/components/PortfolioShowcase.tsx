"use client";

import Aos from "aos";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  tags: string[];
}

const PortfolioShowcase: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [columns, setColumns] = useState<PortfolioItem[][]>([[], [], []]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: "/img/portfolio/portfolio-1.jpg",
      title: "Wedding Photography",
      category: "photography",
      tags: ["Wedding", "Portrait", "Event"],
    },
    {
      id: 2,
      image: "/img/portfolio/portfolio-2.jpg",
      title: "Corporate Video",
      category: "video",
      tags: ["Corporate", "Business", "Marketing"],
    },
    {
      id: 3,
      image: "/img/portfolio/portfolio-3.jpg",
      title: "Product Photography",
      category: "photography",
      tags: ["Product", "Commercial", "Studio"],
    },
    {
      id: 4,
      image: "/img/portfolio/portfolio-4.jpg",
      title: "Event Coverage",
      category: "event",
      tags: ["Event", "Live", "Performance"],
    },
    {
      id: 5,
      image: "/img/portfolio/portfolio-5.jpg",
      title: "Documentary Film",
      category: "video",
      tags: ["Documentary", "Storytelling", "Real"],
    },
    {
      id: 6,
      image: "/img/portfolio/portfolio-6.jpg",
      title: "Portrait Session",
      category: "photography",
      tags: ["Portrait", "Studio", "Professional"],
    },
    {
      id: 7,
      image: "/img/portfolio/portfolio-7.jpg",
      title: "Music Video",
      category: "video",
      tags: ["Music", "Creative", "Artistic"],
    },
    {
      id: 8,
      image: "/img/portfolio/portfolio-8.jpg",
      title: "Commercial Shoot",
      category: "commercial",
      tags: ["Commercial", "Advertising", "Brand"],
    },
    {
      id: 9,
      image: "/img/portfolio/portfolio-9.jpg",
      title: "Fashion Photography",
      category: "photography",
      tags: ["Fashion", "Style", "Editorial"],
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const distributeItems = () => {
      const numColumns =
        window.innerWidth > 1200 ? 3 : window.innerWidth > 768 ? 2 : 1;
      const newColumns: PortfolioItem[][] = Array.from(
        { length: numColumns },
        () => []
      );

      portfolioItems.forEach((item, index) => {
        const columnIndex = index % numColumns;
        newColumns[columnIndex].push(item);
      });

      setColumns(newColumns);
    };

    distributeItems();
    window.addEventListener("resize", distributeItems);

    return () => {
      window.removeEventListener("resize", distributeItems);
    };
  }, [isClient]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: "easeOut" as const,
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className="portfolio-showcase spad">
      <div className="container">
        <div className="row " data-aos="fade-up">
          <div className="col-lg-12">
            <div className="section-title center-title">
              <span>Our Portfolio</span>
              <h2>Creative Showcase</h2>
            </div>
          </div>
        </div>

        <motion.div
          className="masonry-container"
          data-aos="fade-up"
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="masonry-column">
              {column.map((item) => (
                <motion.div
                  key={item.id}
                  className="portfolio-item"
                  data-aos="fade-up"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <div className="portfolio-item-image" data-aos="fade-up">
                    <a
                      href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      className="play-btn video-popup"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="portfolio-item-overlay">
                      <div className="portfolio-item-overlay-content">
                        <h4>{item.title}</h4>
                        <div className="portfolio-item-tags">
                          {item.tags.map((tag, index) => (
                            <span key={index} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="portfolio-item-category">
                          {item.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
