import Link from "next/link";
import services from "../data/services";
import "./home.scss";

export default function HomePage() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-content">
          <span className="home__trust-badge">20+ Years Experience</span>
          <h1 className="home__headline">Your Trusted Roofing Experts</h1>
          <p className="home__subheadline">
            Quality roofing services for homes and businesses. Reliable.
            Professional. Local.
          </p>
          <div className="home__cta-group">
            <Link href="/services" className="home__cta">
              View Our Services
            </Link>
            <Link href="/contact" className="home__cta home__cta--secondary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="home__services-preview">
        <span className="home__services-subtitle">What We Offer</span>
        <h2 className="home__section-title">Our Services</h2>
        <div className="home__services-list">
          {services.slice(0, 3).map((service) => (
            <div className="home__service-card" key={service.slug}>
              <img
                src="https://images.unsplash.com/photo-1635424709961-f3a150459ad4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={service.name}
                className="home__service-img"
                width={320}
                height={180}
                style={{
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: "160px",
                }}
              />
              <h3 className="home__service-title">{service.name}</h3>
              <p className="home__service-desc">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="home__service-link"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        <Link href="/services" className="home__more-services">
          See All Services
        </Link>
      </section>

      {/* About Section */}
      <section className="home__about">
        <div className="home__about-collage">
          {[1, 2, 3, 4].map((n) => (
            <img
              key={n}
              src="https://images.unsplash.com/photo-1635424825057-7fb6dcd651ef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`Collage ${n}`}
              className={`home__about-collage-img home__about-collage-img--${n}`}
              width={n % 2 === 0 ? 120 : 180}
              height={n % 2 === 0 ? 120 : 180}
            />
          ))}
        </div>
        <div className="home__about-content">
          <h2 className="home__section-title">About Us</h2>
          <p className="home__about-text">
            We are a family-owned roofing business with over 20 years of
            experience. Our team is dedicated to providing top-quality
            workmanship and customer service. Whether you need a small repair or
            a full roof replacement, we’re here to help.
          </p>
          <p className="home__about-text">
            Our skilled professionals are passionate about delivering results
            that last. We believe in honest communication, fair pricing, and
            treating every home as if it were our own. Your satisfaction and
            safety are our top priorities.
          </p>
          <a href="/contact" className="home__about-cta">
            Meet Our Team
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="home__contact-banner home__contact-banner--simple">
        <span className="home__contact-subtitle">Get in Touch</span>
        <h2 className="home__contact-title">Contact Us Today</h2>
        <p className="home__contact-message">
          Ready to start your roofing project or have questions? Our friendly
          team is here to help you every step of the way.
        </p>
        <div className="home__contact-info">
          <a href="tel:555-123-4567" className="home__contact-link">
            <strong>Call:</strong> (555) 123-4567
          </a>
          <a href="mailto:info@roofing.com" className="home__contact-link">
            <strong>Email:</strong> info@roofing.com
          </a>
        </div>
        <a href="/contact" className="home__contact-cta">
          Request a Free Quote
        </a>
      </section>
    </main>
  );
}
