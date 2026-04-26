import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, Shield, Zap, Award, Wind } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Insulation Removal",
      description: "Safe vacuum extraction of old, contaminated, or damaged insulation",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "New Installation",
      description: "Professional installation for ceilings, roofs, walls, and underfloor",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Replacement",
      description: "Remove and upgrade insulation to improve energy efficiency",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Roof Vents & Whirlybirds",
      description: "Solar powered vents and turbine ventilation for energy efficiency",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Commercial Solutions",
      description: "Specialized services for warehouses, offices, and industrial facilities",
    },
  ];

  const benefits = [
    "Reduce energy bills by up to 40%",
    "Keep homes cool in summer & warm in winter",
    "Improve indoor air quality",
    "Remove hazardous insulation safely",
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      suburb: "Paddington",
      rating: 5,
      quote: "On Time Insulation did an excellent job. The team was professional, punctual, and the work was completed to a high standard.",
    },
    {
      name: "James Chen",
      suburb: "Fortitude Valley",
      rating: 5,
      quote: "Great service! They explained everything clearly and our home is now much more comfortable. Highly recommended.",
    },
    {
      name: "Emma Rodriguez",
      suburb: "Southside",
      rating: 5,
      quote: "Professional team, fair pricing, and excellent results. Our energy bills have already decreased noticeably.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/hero-insulation-MBUSPijzfTsJEUjPZZaSCw.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="hero-overlay" />
        <div className="container relative z-10 text-center max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="trust-badge">
              <Shield size={16} />
              Trusted by Brisbane Homeowners
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Professional Insulation Removal & Installation in Brisbane
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Safe, clean, energy-efficient solutions for homes and businesses. On Time, Every Time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#quote-form" className="btn-primary no-underline inline-flex items-center justify-center gap-2">
              Get Free Quote
              <ArrowRight size={20} />
            </Link>
            <Link href="#services" className="btn-outline no-underline inline-flex items-center justify-center gap-2">
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose On Time Insulation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive insulation solutions for residential, commercial, and industrial properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary no-underline inline-flex items-center gap-2">
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.suburb}, Brisbane</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Home's Energy Efficiency?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Get a free, no-obligation quote from our experienced team today.
          </p>
          <Link href="/contact#quote-form" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-muted transition-colors no-underline">
            Get Your Free Quote Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
