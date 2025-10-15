import React from "react";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import Link from "next/link";
import "../../styles/contact.css";
import { SOCIAL_MEDIA_LINKS, CONTACT_INFO } from "../../constants/socialMedia";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zohar Media for professional videography and media services in Atlanta. Contact us for corporate videos, events, weddings, and creative content production.",
  keywords: [
    "contact Zohar Media",
    "Atlanta videographer contact",
    "video production quote",
    "media services contact",
    "videography consultation",
    "Atlanta video production",
  ],
  openGraph: {
    title: "Contact Us - Zohar Media",
    description:
      "Get in touch with Zohar Media for professional videography and media services in Atlanta. Contact us for corporate videos, events, weddings, and creative content production.",
    url: "https://zoharmedia.net/contact",
    images: [
      {
        url: "/img/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Zohar Media",
      },
    ],
  },
  twitter: {
    title: "Contact Us - Zohar Media",
    description:
      "Get in touch with Zohar Media for professional videography and media services in Atlanta.",
    images: ["/img/og-contact.jpg"],
  },
};

export default function Contact() {
  return (
    <Layout>
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-option spad set-bg"
        style={{ backgroundImage: "url(/img/breadcrumb-bg.jpg)" }}
        data-aos="fade-in"
        data-aos-duration="800"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="breadcrumb__text text-center"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <h2>Let&apos;s Tell Your Story</h2>
                <p className="breadcrumb__subtitle">
                  Get in touch with Zohar Media for all your creative needs
                </p>
                <div className="breadcrumb__links">
                  <Link href="/">Home</Link>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="contact__widget"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="contact__widget__header">
                  <h3>Get in Touch</h3>
                  <p>
                    Ready to bring your vision to life? Contact Zohar Media
                    today!
                  </p>
                </div>

                <div
                  className="contact__widget__item"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
                  <div className="contact__widget__icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Our Location</h5>
                    <p>{CONTACT_INFO.ADDRESS}</p>
                  </div>
                </div>

                <div
                  className="contact__widget__item"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  <div className="contact__widget__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Call Us</h5>
                    <p>
                      {CONTACT_INFO.PHONE_PRIMARY}
                      <br />
                      {CONTACT_INFO.PHONE_SECONDARY}
                    </p>
                  </div>
                </div>

                <div
                  className="contact__widget__item"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="400"
                >
                  <div className="contact__widget__icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Email Us</h5>
                    <p>{CONTACT_INFO.EMAIL}</p>
                  </div>
                </div>

                <div
                  className="contact__widget__item"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="500"
                >
                  <div className="contact__widget__icon">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Business Hours</h5>
                    <p>
                      Monday - Friday: 9:00 AM - 7:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div
                  className="contact__social"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  <h5>Follow Us</h5>
                  <div className="contact__social__links">
                    {SOCIAL_MEDIA_LINKS.filter(
                      (social) => social.platform !== "twitter"
                    ).map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social__link ${social.platform}`}
                        aria-label={social.ariaLabel}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map" data-aos="fade-in" data-aos-duration="800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="map__inner"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <div className="map__header">
                  <h3>Find Us Here</h3>
                  <p>
                    Visit our studio in the heart of Atlanta&apos;s Ethiopian
                    community
                  </p>
                </div>
                <div className="map__iframe">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8815295946243!2d-84.39489018481614!3d33.748995980672284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1640999151234!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Zohar Media Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
