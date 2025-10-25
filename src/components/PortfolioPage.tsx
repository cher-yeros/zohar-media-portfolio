"use client";
import Aos from "aos";
import { IsotopeOptions } from "isotope-layout";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);
  const [filterKey, setFilterKey] = useState("*");
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const isotope = useRef<{
    destroy: () => void;
    arrange: (options: IsotopeOptions) => void;
  } | null>(null);

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

    console.log(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

    // Return high quality thumbnail URL
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  useEffect(() => {
    setIsClient(true);
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  // Set initial filter based on URL parameter
  useEffect(() => {
    const filterParam = searchParams.get("filter");
    if (filterParam) {
      setFilterKey(filterParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!isClient) return;

    const initIsotope = async () => {
      try {
        const Isotope = (await import("isotope-layout")).default;
        isotope.current = new Isotope(".filter-container", {
          itemSelector: ".filter-item",
          layoutMode: "fitRows",
        });
      } catch (error) {
        console.error("Failed to load Isotope:", error);
      }
    };

    initIsotope();

    return () => isotope.current?.destroy();
  }, [isClient]);

  useEffect(() => {
    if (!isotope.current) return;

    if (filterKey === "*") {
      isotope.current.arrange({ filter: `*` });
    } else {
      isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  const handlePlayButtonClick =
    (videoUrl: string, title: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      setSelectedVideo({ url: videoUrl, title });
    };

  const dataFilters = [
    { category: "video-media-production", label: "Video & Media Production" },
    { category: "social-media-management", label: "Social Media Management" },
    {
      category: "event-planning-production",
      label: "Event Planning & Production",
    },
    { category: "professional-editing", label: "Professional Editing" },
  ];

  const items = [
    // Video & Media Production
    {
      id: 1,
      category: "video-media-production",
      img: getYouTubeThumbnail(
        "https://youtu.be/2S3yWP1PKg8?si=kq9hSb-10YcoGJhX"
      ),
      title: "Rise Of Fearless Game Launching Event",
      tags: ["Event Coverage", "Game Launch"],
      videoUrl: "https://youtu.be/2S3yWP1PKg8?si=kq9hSb-10YcoGJhX",
    },
    {
      id: 2,
      category: "video-media-production",
      img: getYouTubeThumbnail("https://www.youtube.com/watch?v=2S3yWP1PKg8"),
      title: "Adwa Game Launching Event",
      tags: ["Event Coverage", "Game Launch"],
      videoUrl: "https://www.youtube.com/watch?v=2S3yWP1PKg8",
    },
    {
      id: 3,
      category: "video-media-production",
      img: getYouTubeThumbnail(
        "https://youtu.be/eLHHWSR-eLs?si=shUCVEowoL28C0MC"
      ),
      title: "Business in Africa Reality Show",
      tags: ["Reality Show", "Business"],
      videoUrl: "https://youtu.be/eLHHWSR-eLs?si=shUCVEowoL28C0MC",
    },
    {
      id: 4,
      category: "video-media-production",
      img: getYouTubeThumbnail("https://youtu.be/npRPBxRrH-U"),
      title: "Inside Adwa Museum Tour",
      tags: ["Documentary", "Museum Tour"],
      videoUrl: "https://youtu.be/npRPBxRrH-U",
    },
    {
      id: 5,
      category: "video-media-production",
      img: getYouTubeThumbnail("https://youtu.be/BY3rWSVROiA"),
      title: "Home Tour For Maya Residence",
      tags: ["Real Estate", "Property Tour"],
      videoUrl: "https://youtu.be/BY3rWSVROiA",
    },
    {
      id: 6,
      category: "video-media-production",
      img: getYouTubeThumbnail(
        "https://youtu.be/N7zMOdbVKKY?si=iUd6Q_b714yGR12k"
      ),
      title: "Maya Residence - Additional Tour",
      tags: ["Real Estate", "Property Tour"],
      videoUrl: "https://youtu.be/N7zMOdbVKKY?si=iUd6Q_b714yGR12k",
    },
    {
      id: 7,
      category: "video-media-production",
      img: getYouTubeThumbnail(
        "https://youtu.be/W9WYOi9cz-I?si=xKNuwUD8DWcCGtGe"
      ),
      title: "Fitness Videos For Reuben Geimah",
      tags: ["Fitness", "Personal Training"],
      videoUrl: "https://youtu.be/W9WYOi9cz-I?si=xKNuwUD8DWcCGtGe",
    },
    {
      id: 8,
      category: "video-media-production",
      img: getYouTubeThumbnail(
        "https://youtu.be/Qi3-BnQAUs8?si=LakYpdsuZ0VElSzw"
      ),
      title: "Fitness Videos For Reuben Geimah - Part 2",
      tags: ["Fitness", "Personal Training"],
      videoUrl: "https://youtu.be/Qi3-BnQAUs8?si=LakYpdsuZ0VElSzw",
    },

    // Event Planning & Production
    {
      id: 9,
      category: "event-planning-production",
      img: getYouTubeThumbnail("https://youtu.be/jMpOk3DaQqY"),
      title: "Puagmae Fest Event Recap",
      tags: ["Event Recap", "Festival"],
      videoUrl: "https://youtu.be/jMpOk3DaQqY",
    },
    {
      id: 10,
      category: "event-planning-production",
      img: getYouTubeThumbnail("https://youtu.be/sDDGmJ3XAqo"),
      title: "Menkem Transport Event Recap",
      tags: ["Event Recap", "Transport"],
      videoUrl: "https://youtu.be/sDDGmJ3XAqo",
    },

    // Professional Editing
    {
      id: 11,
      category: "professional-editing",
      img: getYouTubeThumbnail(
        "https://youtube.com/shorts/3xjub12INiQ?si=d1BAmU9UsIlY-XRh"
      ),
      title: "Gadzhi Style Editing for Act Da Verse",
      tags: ["Music Video", "Creative Editing"],
      videoUrl: "https://youtube.com/shorts/3xjub12INiQ?si=d1BAmU9UsIlY-XRh",
    },
    {
      id: 12,
      category: "professional-editing",
      img: getYouTubeThumbnail(
        "https://youtube.com/shorts/yTps291c3xg?si=WC-hTWfv7KvigtQ-"
      ),
      title: "Gadzhi Style Editing - Short 2",
      tags: ["Music Video", "Creative Editing"],
      videoUrl: "https://youtube.com/shorts/yTps291c3xg?si=WC-hTWfv7KvigtQ-",
    },
    {
      id: 13,
      category: "professional-editing",
      img: getYouTubeThumbnail(
        "https://youtube.com/shorts/WeU3h0k-Od8?si=c3ln7BCXvBjfd-Qx"
      ),
      title: "Gadzhi Style Editing - Short 3",
      tags: ["Music Video", "Creative Editing"],
      videoUrl: "https://youtube.com/shorts/WeU3h0k-Od8?si=c3ln7BCXvBjfd-Qx",
    },
    {
      id: 14,
      category: "professional-editing",
      img: getYouTubeThumbnail("https://youtu.be/11Ti4rJ9AE8"),
      title: "Faceless Video Edit - Collection 1",
      tags: ["Creative Editing", "Faceless Content"],
      videoUrl: "https://youtu.be/11Ti4rJ9AE8",
    },
    {
      id: 15,
      category: "professional-editing",
      img: getYouTubeThumbnail("https://youtu.be/1LMGU1gIo-0"),
      title: "Faceless Video Edit - Collection 2",
      tags: ["Creative Editing", "Faceless Content"],
      videoUrl: "https://youtu.be/1LMGU1gIo-0",
    },
    {
      id: 16,
      category: "professional-editing",
      img: getYouTubeThumbnail("https://youtu.be/l2MyOX_qkdY"),
      title: "Faceless Video Edit - Collection 3",
      tags: ["Creative Editing", "Faceless Content"],
      videoUrl: "https://youtu.be/l2MyOX_qkdY",
    },
    {
      id: 17,
      category: "professional-editing",
      img: getYouTubeThumbnail("https://youtu.be/z0j7T87VYwU"),
      title: "Faceless Video Edit - Collection 4",
      tags: ["Creative Editing", "Faceless Content"],
      videoUrl: "https://youtu.be/z0j7T87VYwU",
    },
    {
      id: 18,
      category: "professional-editing",
      img: getYouTubeThumbnail("https://youtu.be/43i8FQKJVp0"),
      title: "Faceless Video Edit - Collection 5",
      tags: ["Creative Editing", "Faceless Content"],
      videoUrl: "https://youtu.be/43i8FQKJVp0",
    },
  ];

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

  if (!isClient) {
    return null;
  }

  return (
    <section className="portfolio spad">
      <div className="container">
        {/* Filter Menu */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="portfolio__filter"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <ul
                className="portfolio__filter"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  className={`${
                    filterKey === "*" ? "active mixitup-control-active" : ""
                  }`}
                  data-filter="*"
                  onClick={handleFilterKeyChange("*")}
                  style={{
                    display: "inline-block",
                    fontSize: "16px",
                    color: "#adadad",
                    marginRight: "5px",
                    cursor: "pointer",
                    padding: "6px 22px",
                    border:
                      filterKey === "*"
                        ? "1px solid #00bfe7"
                        : "1px solid transparent",
                  }}
                >
                  All
                </li>
                {dataFilters.map((filter) => (
                  <li
                    key={filter.label}
                    className={`${
                      filterKey === filter.category
                        ? "active mixitup-control-active"
                        : ""
                    }`}
                    data-filter={`.${filter.category}`}
                    onClick={handleFilterKeyChange(filter.category)}
                    style={{
                      display: "inline-block",
                      fontSize: "16px",
                      color: "#adadad",
                      marginRight: "5px",
                      cursor: "pointer",
                      padding: "6px 22px",
                      border:
                        filterKey === filter.category
                          ? "1px solid #00bfe7"
                          : "1px solid transparent",
                    }}
                  >
                    {filter.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="row filter-container">
          {items.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 col-sm-6 filter-item ${item.category}`}
              // data-aos="fade-up"
              // data-aos-delay={200 + index * 100}
            >
              <div className="portfolio__item">
                <div
                  className="portfolio__item__video"
                  style={{
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  {item.videoUrl ? (
                    <button
                      onClick={handlePlayButtonClick(item.videoUrl, item.title)}
                      className="play-btn video-popup"
                      style={{
                        background: "none",
                        // border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      <i className="fa fa-play"></i>
                    </button>
                  ) : null}
                </div>
                <div className="portfolio__item__text">
                  <h4>{item.title}</h4>
                  <ul>
                    {item.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
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
}
