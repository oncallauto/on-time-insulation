import Layout from "@/components/Layout";
import { Award, Users, Zap, Shield } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We deliver high-quality workmanship on every project, no matter the size.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Reliability",
      description: "On time, every time. We respect your schedule and deliver as promised.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety",
      description: "Your safety and that of our team is our top priority in every job.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description: "We work efficiently to minimize disruption and maximize results.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "1000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About On Time Insulation</h1>
          <p className="text-lg text-muted-foreground">
            Brisbane's trusted insulation specialists with over 15 years of experience
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              On Time Insulation was founded on a simple principle: provide professional, reliable insulation services that homeowners and businesses can trust. With over 15 years of experience in the industry, we've built our reputation on delivering exceptional results, every single time.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of experienced specialists has completed over 500 projects across Brisbane and surrounding areas, helping homeowners reduce energy costs, improve comfort, and create healthier living spaces. We're committed to safety, quality, and customer satisfaction in everything we do.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're building a new home, renovating an existing property, or need to remove hazardous insulation, we have the expertise and experience to deliver outstanding results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="service-card text-center">
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/about-team-LRyuoXkQyx9Nb2saRF3wA3.webp" alt="On Time Insulation Team" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Team & Credentials */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Our Team & Credentials</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Experienced Specialists</h3>
              <p className="text-muted-foreground">
                Our team consists of highly trained and certified insulation specialists with extensive experience in residential, commercial, and industrial projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Licensed & Insured</h3>
              <p className="text-muted-foreground">
                We are fully licensed and insured, meeting all Queensland safety and building standards. Our work is backed by comprehensive warranties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Safety First</h3>
              <p className="text-muted-foreground">
                We prioritize safety in every aspect of our work, using professional-grade equipment and following strict safety protocols to protect your home and our team.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Every project is inspected and tested to ensure it meets our high standards and provides the energy efficiency benefits you expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Contact us today to discuss your insulation needs and get a free quote.
          </p>
          <a href="/contact#quote-form" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-muted transition-colors">
            Get Free Quote
          </a>
        </div>
      </section>
    </Layout>
  );
}
