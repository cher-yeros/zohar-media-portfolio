import React from 'react';
import Layout from '../../components/Layout';

export default function Services() {
  const services = [
    {
      icon: 'si-1.png',
      title: 'Video Production',
      description: 'Professional video production services including filming, editing, and post-production. We handle everything from concept development to final delivery.',
      features: ['Pre-production planning', 'Professional filming', 'Post-production editing', 'Color grading', 'Sound design']
    },
    {
      icon: 'si-2.png',
      title: 'Web Development',
      description: 'Custom website development with modern design and responsive layouts. We create websites that are both beautiful and functional.',
      features: ['Responsive design', 'Custom development', 'Content management', 'SEO optimization', 'Performance optimization']
    },
    {
      icon: 'si-3.png',
      title: 'Content Creation',
      description: 'Creative content development for digital platforms and marketing campaigns. We help brands tell their stories effectively.',
      features: ['Content strategy', 'Copywriting', 'Visual design', 'Social media content', 'Brand storytelling']
    },
    {
      icon: 'si-4.png',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience.',
      features: ['Social media marketing', 'Email marketing', 'PPC campaigns', 'Analytics & reporting', 'Conversion optimization']
    }
  ];

  return (
    <Layout title="Services - Zohar Media Portfolio">
      {/* Breadcrumb Section */}
      <section className="breadcrumb-option spad set-bg" style={{ backgroundImage: 'url(/img/breadcrumb-bg.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Our services</h2>
                <div className="breadcrumb__links">
                  <a href="/">Home</a>
                  <span>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our services</span>
                <h2>What we do</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                <div className="services__item services__item--large">
                  <div className="services__item__icon">
                    <img src={`/img/icons/${service.icon}`} alt={service.title} />
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <ul className="services__features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our process</span>
                <h2>How we work</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="process__item">
                <div className="process__item__number">01</div>
                <h5>Discovery</h5>
                <p>We start by understanding your needs, goals, and vision for the project.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="process__item">
                <div className="process__item__number">02</div>
                <h5>Planning</h5>
                <p>We create a detailed plan and timeline for your project execution.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="process__item">
                <div className="process__item__number">03</div>
                <h5>Execution</h5>
                <p>Our team works diligently to bring your vision to life with quality and precision.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="process__item">
                <div className="process__item__number">04</div>
                <h5>Delivery</h5>
                <p>We deliver your completed project and provide ongoing support as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
