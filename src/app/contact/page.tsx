'use client';

import React, { useState } from 'react';
import Layout from '../../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout title="Contact Us - Zohar Media Portfolio">
      {/* Breadcrumb Section */}
      <section className="breadcrumb-option spad set-bg" style={{ backgroundImage: 'url(/img/breadcrumb-bg.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Contact us</h2>
                <div className="breadcrumb__links">
                  <a href="/">Home</a>
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
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="contact__widget">
                <div className="contact__widget__item">
                  <div className="contact__widget__icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Address</h5>
                    <p>123 Creative Street, Media City, MC 12345</p>
                  </div>
                </div>
                <div className="contact__widget__item">
                  <div className="contact__widget__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Phone</h5>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact__widget__item">
                  <div className="contact__widget__icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Email</h5>
                    <p>info@zoharmedia.com</p>
                  </div>
                </div>
                <div className="contact__widget__item">
                  <div className="contact__widget__icon">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="contact__widget__text">
                    <h5>Working hours</h5>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="contact__form">
                <h3>Get in touch</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="site-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="map__inner">
                <div className="map__iframe">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1640999151234!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
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
