import About from "@/components/About";
import Counter from "@/components/Counter";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";
import Layout from "../../components/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zohar Media's story, mission, and team. We are passionate videographers and content creators based in Atlanta, dedicated to bringing your vision to life through professional media services.",
  keywords: [
    "about Zohar Media",
    "Atlanta videography team",
    "professional videographers",
    "media company story",
    "video production team",
    "creative professionals Atlanta",
  ],
  openGraph: {
    title: "About Us - Zohar Media",
    description:
      "Learn about Zohar Media's story, mission, and team. We are passionate videographers and content creators based in Atlanta, dedicated to bringing your vision to life.",
    url: "https://zoharmedia.net/about",
    images: [
      {
        url: "/img/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Zohar Media Team",
      },
    ],
  },
  twitter: {
    title: "About Us - Zohar Media",
    description:
      "Learn about Zohar Media's story, mission, and team. We are passionate videographers and content creators based in Atlanta.",
    images: ["/img/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <Layout>
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-option spad set-bg"
        style={{ backgroundImage: "url(/img/breadcrumb-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text text-center">
                <h2>About us</h2>
                <div className="breadcrumb__links">
                  <Link href="/">Home</Link>
                  <span>About</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* About Section */}
      <About />

      <Testimonial />

      <Counter />

      {/* Team Section */}
      <Team />
    </Layout>
  );
}
