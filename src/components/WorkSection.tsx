"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "glightbox/dist/css/glightbox.min.css";

interface WorkItem {
  id: number;
  image: string;
  type: string;
  title?: string;
  tags?: string[];
  hasHover: boolean;
  videoUrl: string;
  category: string;
}

const WorkSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const isotopeRef = useRef<{
    destroy: () => void;
    arrange: (options: any) => void;
  } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const workItems: WorkItem[] = [
    {
      id: 1,
      image: "/img/work/work-1.jpg",
      type: "wide__item",
      title: "Ethiopian Cultural Documentary",
      tags: ["Documentary", "Cultural Heritage"],
      hasHover: true,
      videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      category: "video",
    },
    {
      id: 2,
      image: "/img/work/work-2.jpg",
      type: "small__item",
      hasHover: false,
      videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      category: "social",
    },
    {
      id: 3,
      image: "/img/work/work-3.jpg",
      type: "small__item",
      hasHover: false,
      videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      category: "events",
    },
    {
      id: 4,
      image: "/img/work/work-4.jpg",
      type: "large__item",
      title: "Traditional Wedding Coverage",
      tags: ["Wedding", "Ethiopian Culture"],
      hasHover: true,
      videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      category: "events",
    },
    {
      id: 5,
      image: "/img/work/work-5.jpg",
      type: "small__item",
      hasHover: false,
      videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      category: "video",
    },
    {
      id: 6,
      image: "/img/work/work-6.jpg",
      type: "small__item",
      hasHover: false,
      videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      category: "social",
    },
    {
      id: 7,
      image: "/img/work/work-7.jpg",
      type: "wide__item",
      title: "Business Commercial Campaign",
      tags: ["Commercial", "Brand Promotion"],
      hasHover: true,
      videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      category: "video",
    },
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "video", label: "Video Production" },
    { key: "events", label: "Event Coverage" },
    { key: "social", label: "Social Media" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !gridRef.current) return;

    // Initialize Isotope
    const initIsotope = async () => {
      try {
        const Isotope = (await import("isotope-layout")).default;
        const grid = gridRef.current;
        if (grid) {
          isotopeRef.current = new Isotope(grid, {
            itemSelector: ".work__item",
            layoutMode: "fitRows",
            percentPosition: false,
            fitRows: {
              gutter: 20,
            },
            transitionDuration: "0.4s",
          });
        }
      } catch (error) {
        console.error("Failed to load Isotope:", error);
      }
    };

    initIsotope();

    // Cleanup
    return () => {
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, [isClient]);

  useEffect(() => {
    if (!isotopeRef.current) return;

    if (activeFilter === "all") {
      isotopeRef.current.arrange({ filter: "*" });
    } else {
      isotopeRef.current.arrange({
        filter: `[data-category="${activeFilter}"]`,
      });
    }
  }, [activeFilter]);

  useEffect(() => {
    if (!isClient) return;

    // Dynamically import GLightbox only on client side
    const initGLightbox = async () => {
      try {
        const GLightbox = (await import("glightbox")).default;

        // Initialize GLightbox for video popups
        const lightbox = GLightbox({
          selector: ".video-popup",
          touchNavigation: true,
          loop: true,
          autoplayVideos: true,
          plyr: {
            css: "https://cdn.plyr.io/3.6.8/plyr.css",
            js: "https://cdn.plyr.io/3.6.8/plyr.js",
            config: {
              ratio: "16:9",
              muted: false,
              hideControls: true,
              youtube: {
                noCookie: true,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
              },
            },
          },
        });

        return () => {
          lightbox.destroy();
        };
      } catch (error) {
        console.error("Failed to load GLightbox:", error);
      }
    };

    initGLightbox();
  }, [isClient]);

  const handleFilterClick = (filterKey: string) => {
    setActiveFilter(filterKey);
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className="work spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center-title">
              <span>Our Portfolio</span>
              <h2>Stories We've Told</h2>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row">
          <div className="col-lg-12">
            <div className="work__filter">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${
                    activeFilter === filter.key ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Work Grid */}
        <div className="work__gallery" ref={gridRef}>
          {workItems.map((item) => (
            <div
              key={item.id}
              className={`work__item ${item.type}`}
              data-category={item.category}
            >
              <div
                className="work__item__pic set-bg"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {item.hasHover && (
                  <div className="work__item__hover">
                    <div className="work__item__hover__text">
                      <h4>{item.title}</h4>
                      <ul>
                        {item.tags?.map((tag, index) => (
                          <li key={index}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                    <a href={item.videoUrl} className="video-popup">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
