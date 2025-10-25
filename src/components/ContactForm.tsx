"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="col-lg-6 col-md-6">
      <div
        className="services__item"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <h4>Send Us a Message</h4>
        <p>
          Tell us about your project and let&apos;s create something amazing
          together!
        </p>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div
            className="alert alert-success"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <i className="fa fa-check-circle"></i>
            Thank you! Your message has been sent successfully. We&apos;ll get
            back to you soon!
          </div>
        )}

        {submitStatus === "error" && (
          <div
            className="alert alert-error"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <i className="fa fa-exclamation-circle"></i>
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Your Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? "error" : ""}
                  required
                />
                {errors.name && (
                  <span className="error__message">
                    <i className="fa fa-exclamation-triangle"></i>
                    {errors.name}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Your Email *"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "error" : ""}
                  required
                />
                {errors.email && (
                  <span className="error__message">
                    <i className="fa fa-exclamation-triangle"></i>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Subject *"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={errors.subject ? "error" : ""}
                  required
                />
                {errors.subject && (
                  <span className="error__message">
                    <i className="fa fa-exclamation-triangle"></i>
                    {errors.subject}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form__group">
                <textarea
                  placeholder="Tell us about your project... *"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? "error" : ""}
                  rows={6}
                  required
                ></textarea>
                {errors.message && (
                  <span className="error__message">
                    <i className="fa fa-exclamation-triangle"></i>
                    {errors.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <button
                type="submit"
                className={`site-btn ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                {isSubmitting ? (
                  <>
                    <i className="fa fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fa fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
