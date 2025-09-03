"use client";

import React from "react";
import Link from "next/link";

const CallToAction: React.FC = () => {
  return (
    <section
      className="callto spad set-bg"
      style={{ backgroundImage: "url(/img/callto-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="callto__text"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h2
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                Ready to tell your story?
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                Whether it&apos;s your business growth, special celebration, or
                creative vision, let&apos;s bring your ideas to life with
                professional quality and cultural authenticity.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                <Link href="/contact">
                  <div className="primary-btn">Start Your Story</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
