"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".header__nav__menu") &&
        !target.closest(".mobile-menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <Image
                  src="/img/logo.png"
                  alt="Zohar Media Logo"
                  width={100}
                  height={100}
                />
                <span className="header__logo__text">Zohar Media</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="header__nav__option">
              <nav
                className={`header__nav__menu mobile-menu ${
                  isMobileMenuOpen ? "active" : ""
                }`}
              >
                <ul>
                  <li className={isActivePath("/") ? "active" : ""}>
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li className={isActivePath("/about") ? "active" : ""}>
                    <Link
                      href="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li className={isActivePath("/portfolio") ? "active" : ""}>
                    <Link
                      href="/portfolio"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className={isActivePath("/services") ? "active" : ""}>
                    <Link
                      href="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                  </li>
                  {/* <li className={isActivePath("/blog") ? "active" : ""}>
                    <Link
                      href="/blog"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li> */}
                  <li className={isActivePath("/contact") ? "active" : ""}>
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="header__nav__social">
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
              <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};

export default Header;
