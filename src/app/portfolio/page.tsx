import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import PortfolioPage from "@/components/PortfolioPage";
import PortfolioClient from "./PortfolioClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Zohar Media's portfolio of professional videography and media projects. View our corporate videos, event coverage, wedding films, and creative content productions.",
  keywords: [
    "Zohar Media portfolio",
    "Atlanta videography portfolio",
    "professional video examples",
    "corporate video portfolio",
    "event videography samples",
    "wedding video portfolio",
    "creative content examples",
  ],
  openGraph: {
    title: "Portfolio - Zohar Media",
    description:
      "Explore Zohar Media's portfolio of professional videography and media projects. View our corporate videos, event coverage, wedding films, and creative content productions.",
    url: "https://zoharmedia.net/portfolio",
    images: [
      {
        url: "/img/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Zohar Media Portfolio",
      },
    ],
  },
  twitter: {
    title: "Portfolio - Zohar Media",
    description:
      "Explore Zohar Media's portfolio of professional videography and media projects.",
    images: ["/img/og-portfolio.jpg"],
  },
};

export default function Portfolio() {
  return (
    <Layout>
      <PortfolioClient />
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-option spad set-bg"
        style={{ backgroundImage: "url(/img/breadcrumb-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text text-center">
                <h2>Portfolio</h2>
                <div className="breadcrumb__links">
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
