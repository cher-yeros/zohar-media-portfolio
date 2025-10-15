import Counter from "@/components/Counter";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Team from "@/components/Team";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ServicesSection from "../components/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Professional videography and media services in Atlanta. We specialize in corporate videos, event coverage, wedding videography, and creative content production. Contact us for your next project.",
  keywords: [
    "Atlanta videographer",
    "professional videography",
    "corporate video production",
    "event videography",
    "wedding videography",
    "creative content",
    "media services Atlanta",
    "video production company",
  ],
  openGraph: {
    title: "Zohar Media - Professional Videography & Media Services",
    description:
      "Professional videography and media services in Atlanta. We specialize in corporate videos, event coverage, wedding videography, and creative content production.",
    url: "https://zoharmedia.net",
    images: [
      {
        url: "/img/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Zohar Media Homepage - Professional Videography Services",
      },
    ],
  },
  twitter: {
    title: "Zohar Media - Professional Videography & Media Services",
    description:
      "Professional videography and media services in Atlanta. We specialize in corporate videos, event coverage, wedding videography, and creative content production.",
    images: ["/img/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      {/* <WorkSection /> */}
      <PortfolioShowcase />

      {/* <Gallery /> */}

      <Counter />

      <Team />

      {/* <AboutSection /> */}
      <CallToAction />
    </Layout>
  );
}
