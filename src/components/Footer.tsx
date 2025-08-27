"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer__top__logo">
                <Link
                  href="/"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Image
                    src="/img/logo.png"
                    alt="Zohar Media Logo"
                    width={80}
                    height={80}
                  />
                  <span className="footer__logo__text">Zohar Media</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="footer__top__social">
                <a href="#" aria-label="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" aria-label="Dribbble">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__option">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__option__item">
                <h5>About us</h5>
                <p>
                  Zohar Media is a creative company dedicated to helping you
                  grow your brand, tell your story, and celebrate life's special
                  moments with deep understanding of Ethiopian style, culture,
                  and audience.
                </p>
                <Link href="/about" className="read__more">
                  Read more <span className="arrow_right"></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__option__item">
                <h5>Who we are</h5>
                <ul>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link href="/locations">Locations</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__option__item">
                <h5>Our work</h5>
                <ul>
                  <li>
                    <Link href="/portfolio">Video Production</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Event Coverage</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Social Media Content</Link>
                  </li>
                  <li>
                    <Link href="/services">Event Planning</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__option__item">
                <h5>Newsletter</h5>
                <p>
                  Stay updated with our latest projects, Ethiopian cultural
                  events, and creative insights. Subscribe to our newsletter for
                  exclusive content and special offers.
                </p>
                <form onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="footer__copyright__text">
                Copyright &copy; {new Date().getFullYear()} Zohar Media. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
