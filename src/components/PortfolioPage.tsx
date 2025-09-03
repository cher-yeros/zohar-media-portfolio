"use client";
import { IsotopeOptions } from "isotope-layout";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PortfolioPage() {
  const [isClient, setIsClient] = useState(false);
  const [filterKey, setFilterKey] = useState("*");
  const isotope = useRef<{
    destroy: () => void;
    arrange: (options: IsotopeOptions) => void;
  } | null>(null);

  useEffect(() => {
    setIsClient(true);
    // Aos.init({
    //   duration: 600,
    //   easing: "ease-in-out",
    //   once: true,
    //   mirror: false,
    // });
  }, []);

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

  const dataFilters = [
    { category: "branding", label: "Branding" },
    { category: "digital-marketing", label: "Digital Marketing" },
    { category: "web", label: "Web" },
    { category: "photography", label: "Photography" },
    { category: "ecommerce", label: "eCommerce" },
  ];

  const items = [
    {
      id: 1,
      category: "branding",
      img: "/img/portfolio/portfolio-1.jpg",
      title: "VIP Auto Tires & Service",
      tags: ["eCommerce", "Magento"],
    },
    {
      id: 2,
      category: "digital-marketing",
      img: "/img/portfolio/portfolio-2.jpg",
      title: "Digital Campaign",
      tags: ["Photography"],
    },
    {
      id: 3,
      category: "web",
      img: "/img/portfolio/portfolio-3.jpg",
      title: "Web Project",
      tags: ["eCommerce", "Magento"],
    },
    {
      id: 4,
      category: "photography",
      img: "/img/portfolio/portfolio-4.jpg",
      title: "Photography Collection",
      tags: ["Portrait", "Landscape"],
    },
    {
      id: 5,
      category: "ecommerce",
      img: "/img/portfolio/portfolio-5.jpg",
      title: "E-commerce Platform",
      tags: ["React", "Node.js"],
    },
    {
      id: 6,
      category: "branding",
      img: "/img/portfolio/portfolio-6.jpg",
      title: "Brand Identity Design",
      tags: ["Logo", "Branding"],
    },
    {
      id: 7,
      category: "web",
      img: "/img/portfolio/portfolio-7.jpg",
      title: "Corporate Website",
      tags: ["WordPress", "SEO"],
    },
    {
      id: 8,
      category: "digital-marketing",
      img: "/img/portfolio/portfolio-8.jpg",
      title: "Social Media Campaign",
      tags: ["Instagram", "Facebook"],
    },
    {
      id: 9,
      category: "photography",
      img: "/img/portfolio/portfolio-9.jpg",
      title: "Product Photography",
      tags: ["Commercial", "Studio"],
    },
  ];

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
              <button
                className={`filter-btn ${filterKey === "*" ? "active" : ""}`}
                onClick={handleFilterKeyChange("*")}
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  margin: "0 5px",
                  borderRadius: "20px",
                  border: "1px solid #ddd",
                  background: filterKey === "*" ? "#00bfe7" : "transparent",
                  color: filterKey === "*" ? "white" : "#333",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                All
              </button>
              {dataFilters.map((filter) => (
                <button
                  key={filter.label}
                  className={`filter-btn ${
                    filterKey === filter.category ? "active" : ""
                  }`}
                  onClick={handleFilterKeyChange(filter.category)}
                  style={{
                    padding: "8px 16px",
                    fontSize: "14px",
                    margin: "0 5px",
                    borderRadius: "20px",
                    border: "1px solid #ddd",
                    background:
                      filterKey === filter.category ? "#00bfe7" : "transparent",
                    color: filterKey === filter.category ? "white" : "#333",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="row filter-container">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 col-sm-6 filter-item ${item.category}`}
              // data-aos="fade-up"
              // data-aos-delay={200 + index * 100}
            >
              <div className="portfolio__item">
                <div className="portfolio__item__video">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="portfolio__item__hover">
                    <div className="portfolio__item__hover__text">
                      <h4>{item.title}</h4>
                      <ul>
                        {item.tags.map((tag, i) => (
                          <li key={i}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="portfolio__item__view">
                      <i className="fa fa-eye"></i>
                    </div>
                  </div>
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
    </section>
  );
}
