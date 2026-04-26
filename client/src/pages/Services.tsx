import Layout from "@/components/Layout";
import { CheckCircle, Zap, Shield, Award, Wrench, Wind } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Insulation Removal",
      description: "Safe and professional removal of old, contaminated, or damaged insulation",
      features: [
        "Blow-in insulation vacuum extraction",
        "Safe removal of dust and mould-contaminated insulation",
        "Rodent-contaminated insulation cleanup",
        "Professional disposal and recycling",
        "Complete site cleanup",
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "New Installation",
      description: "Expert installation for maximum energy efficiency and comfort",
      features: [
        "Ceiling insulation installation",
        "Roof insulation solutions",
        "Wall insulation for new builds",
        "Underfloor insulation",
        "New home construction support",
        "Renovation projects",
      ],
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Insulation Replacement",
      description: "Upgrade your insulation for improved energy efficiency",
      features: [
        "Remove old insulation safely",
        "Install new, high-performance materials",
        "Upgrade to better R-values",
        "Improve thermal performance",
        "Reduce energy costs",
        "Increase comfort levels",
      ],
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Roof Vents & Whirlybirds",
      description: "Professional installation of solar powered vents and turbine ventilation systems",
      features: [
        "Solar powered roof vents",
        "Whirlybird turbine installation",
        "Energy-efficient ventilation",
        "Moisture and humidity control",
        "Temperature regulation",
        "Roof protection and longevity",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Commercial & Industrial",
      description: "Specialized solutions for businesses and industrial facilities",
      features: [
        "Warehouse insulation",
        "Office building solutions",
        "Factory insulation",
        "Energy efficiency compliance",
        "Large-scale projects",
        "Minimal disruption installation",
      ],
    },
  ];

  const properties = [
    {
      title: "Residential Properties",
      description: "From new builds to renovations, we provide comprehensive insulation solutions for homes of all sizes.",
      services: ["New home insulation", "Renovation upgrades", "Removal and replacement", "Energy efficiency improvements"],
    },
    {
      title: "Commercial Properties",
      description: "Professional insulation services for offices, retail spaces, and commercial buildings.",
      services: ["Office buildings", "Retail spaces", "Warehouses", "Compliance solutions"],
    },
    {
      title: "Industrial Facilities",
      description: "Specialized insulation for factories, manufacturing plants, and industrial complexes.",
      services: ["Factory insulation", "Manufacturing facilities", "Large-scale projects", "Thermal management"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive insulation solutions tailored to your property type and needs
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-12">
            {serviceCategories.map((category, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-primary mb-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">{category.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-muted/50 rounded-lg overflow-hidden h-64 flex items-center justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <img src={[
                    'https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/service-removal-ahb8UQxcQYtcVyXFNNxg69.webp',
                    'https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/service-installation-aZsKbTJhBmFKBwyvmvDpTM.webp',
                    'https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/service-roof-vents-g7jHiHEb8hmneVFV2er5ko.webp',
                    'https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/service-roof-vents-g7jHiHEb8hmneVFV2er5ko.webp',
                    'https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/service-installation-aZsKbTJhBmFKBwyvmvDpTM.webp'
                  ][idx]} alt={category.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services by Property Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property, idx) => (
              <div key={idx} className="service-card">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{property.title}</h3>
                <p className="text-muted-foreground mb-6">{property.description}</p>
                <ul className="space-y-2">
                  {property.services.map((service, serviceIdx) => (
                    <li key={serviceIdx} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Contact us today for a free consultation and quote on any of our services.
          </p>
          <a href="/contact#quote-form" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-muted transition-colors">
            Get Free Quote
          </a>
        </div>
      </section>
    </Layout>
  );
}
