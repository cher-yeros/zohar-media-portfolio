"use client";

import Aos from "aos";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  tags: string[];
  videoUrl?: string;
}

const PortfolioShowcase: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [columns, setColumns] = useState<PortfolioItem[][]>([[], [], []]);
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to extract YouTube video ID and generate thumbnail URL
  const getYouTubeThumbnail = (url: string) => {
    let videoId = "";

    // Handle different YouTube URL formats
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtube.com/shorts/")) {
      videoId = url.split("shorts/")[1].split("?")[0];
    }

    // Return high quality thumbnail URL
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // Function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = "";

    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtube.com/shorts/")) {
      videoId = url.split("shorts/")[1].split("?")[0];
    }

    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const handlePlayButtonClick =
    (videoUrl: string, title: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      setSelectedVideo({ url: videoUrl, title });
    };

  const portfolioItems: PortfolioItem[] = useMemo(
    () => [
      {
        id: 1,
        image: getYouTubeThumbnail(
          "https://youtu.be/2S3yWP1PKg8?si=kq9hSb-10YcoGJhX"
        ),
        title: "Rise Of Fearless Game Launching Event",
        category: "video",
        tags: ["Event Coverage", "Game Launch"],
        videoUrl: "https://youtu.be/2S3yWP1PKg8?si=kq9hSb-10YcoGJhX",
      },
      {
        id: 2,
        image: getYouTubeThumbnail(
          "https://youtu.be/eLHHWSR-eLs?si=shUCVEowoL28C0MC"
        ),
        title: "Business in Africa Reality Show",
        category: "video",
        tags: ["Reality Show", "Business"],
        videoUrl: "https://youtu.be/eLHHWSR-eLs?si=shUCVEowoL28C0MC",
      },
      {
        id: 3,
        image: getYouTubeThumbnail("https://youtu.be/npRPBxRrH-U"),
        title: "Inside Adwa Museum Tour",
        category: "video",
        tags: ["Documentary", "Museum Tour"],
        videoUrl: "https://youtu.be/npRPBxRrH-U",
      },
      {
        id: 4,
        image: getYouTubeThumbnail("https://youtu.be/BY3rWSVROiA"),
        title: "Home Tour For Maya Residence",
        category: "video",
        tags: ["Real Estate", "Property Tour"],
        videoUrl: "https://youtu.be/BY3rWSVROiA",
      },
      {
        id: 5,
        image: getYouTubeThumbnail(
          "https://youtu.be/W9WYOi9cz-I?si=xKNuwUD8DWcCGtGe"
        ),
        title: "Fitness Videos For Reuben Geimah",
        category: "video",
        tags: ["Fitness", "Personal Training"],
        videoUrl: "https://youtu.be/W9WYOi9cz-I?si=xKNuwUD8DWcCGtGe",
      },
      {
        id: 6,
        image: getYouTubeThumbnail("https://youtu.be/jMpOk3DaQqY"),
        title: "Puagmae Fest Event Recap",
        category: "event",
        tags: ["Event Recap", "Festival"],
        videoUrl: "https://youtu.be/jMpOk3DaQqY",
      },
      {
        id: 7,
        image: getYouTubeThumbnail(
          "https://youtube.com/shorts/3xjub12INiQ?si=d1BAmU9UsIlY-XRh"
        ),
        title: "Gadzhi Style Editing for Act Da Verse",
        category: "video",
        tags: ["Music Video", "Creative Editing"],
        videoUrl: "https://youtube.com/shorts/3xjub12INiQ?si=d1BAmU9UsIlY-XRh",
      },
      {
        id: 8,
        image: getYouTubeThumbnail("https://youtu.be/11Ti4rJ9AE8"),
        title: "Faceless Video Edit - Collection 1",
        category: "video",
        tags: ["Creative Editing", "Faceless Content"],
        videoUrl: "https://youtu.be/11Ti4rJ9AE8",
      },
      {
        id: 9,
        image: getYouTubeThumbnail("https://youtu.be/sDDGmJ3XAqo"),
        title: "Menkem Transport Event Recap",
        category: "event",
        tags: ["Event Recap", "Transport"],
        videoUrl: "https://youtu.be/sDDGmJ3XAqo",
      },
    ],
    []
  );

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
  }, [isClient, portfolioItems]);

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
                    {item.videoUrl ? (
                      <button
                        onClick={handlePlayButtonClick(
                          item.videoUrl,
                          item.title
                        )}
                        className="play-btn video-popup"
                        style={{
                          background: "none",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      >
                        <i className="fa fa-play"></i>
                      </button>
                    ) : null}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-auto"
                      loading="lazy"
                    />
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

      {/* Video Popup Modal */}
      <Popup
        open={!!selectedVideo}
        closeOnDocumentClick
        onClose={() => setSelectedVideo(null)}
        modal
        contentStyle={{
          background: "transparent",
          border: "none",
          padding: 0,
          width: "auto",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
        overlayStyle={{
          background: "rgba(0, 0, 0, 0.8)",
        }}
      >
        {selectedVideo && (
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: "absolute",
                top: "-50px",
                right: "-10px",
                background: "rgba(0, 0, 0, 0.8)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#ffffff",
                zIndex: 1000,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                e.currentTarget.style.color = "#000000";
                e.currentTarget.style.border = "2px solid rgba(0, 0, 0, 0.3)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.border =
                  "2px solid rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ×
            </button>
            <iframe
              width="800"
              height="450"
              src={getYouTubeEmbedUrl(selectedVideo.url)}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                border: "none",
                borderRadius: "8px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        )}
      </Popup>
    </section>
  );
};

export default PortfolioShowcase;
