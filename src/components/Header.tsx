"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    if (!pathname) return false;
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Initialize SlickNav for mobile menu
  useEffect(() => {
    const initSlickNav = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== "undefined" && (window as any).jQuery) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).jQuery as any;
        if ($.fn.slicknav) {
          // Only initialize SlickNav on mobile/tablet screens
          if (window.innerWidth <= 991) {
            $(".header__nav__menu").slicknav({
              label: "MENU",
              prependTo: ".header .container",
              allowParentLinks: true,
              closeOnClick: true,
              duplicate: false,
              brand: "",
            });
          }
        }
      }
    };

    // Initialize SlickNav after a short delay to ensure jQuery is loaded
    const timer = setTimeout(initSlickNav, 100);

    // Also handle window resize
    const handleResize = () => {
      if (window.innerWidth > 991) {
        // Destroy SlickNav on desktop
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).jQuery && (window as any).jQuery.fn.slicknav) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const $ = (window as any).jQuery as any;
          $(".header__nav__menu").slicknav("destroy");
        }
        // Show the original navigation
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).jQuery as any;
        $(".header__nav__menu").show();
      } else {
        // Initialize SlickNav on mobile
        initSlickNav();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              <nav className="header__nav__menu">
                <ul>
                  <li className={isActivePath("/") ? "active" : ""}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={isActivePath("/about") ? "active" : ""}>
                    <Link href="/about">About</Link>
                  </li>
                  <li className={isActivePath("/portfolio") ? "active" : ""}>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li className={isActivePath("/services") ? "active" : ""}>
                    <Link href="/services">Services</Link>
                  </li>
                  {/* <li className={isActivePath("/blog") ? "active" : ""}>
                    <Link href="/blog">
                      Blog
                    </Link>
                  </li> */}
                  <li className={isActivePath("/contact") ? "active" : ""}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="header__nav__social">
                <a
                  href="https://facebook.com/zoharmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/zoharmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com/company/zoharmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://instagram.com/zoharmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://youtube.com/@zoharmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
