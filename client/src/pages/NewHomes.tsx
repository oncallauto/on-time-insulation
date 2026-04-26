import Layout from "@/components/Layout";
import { CheckCircle, Lightbulb, Home, TrendingDown } from "lucide-react";

export default function NewHomes() {
  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Energy Efficiency from Day One",
      description: "Proper insulation installed during construction ensures maximum energy efficiency from the start.",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Comfort & Climate Control",
      description: "Maintain consistent temperatures throughout your home in all seasons.",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Lower Operating Costs",
      description: "Reduce heating and cooling costs significantly over the life of your home.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Planning & Assessment",
      description: "We work with builders and architects to determine the optimal insulation solution for your home design.",
    },
    {
      step: "2",
      title: "Material Selection",
      description: "Choose from high-performance insulation materials suited to Brisbane's climate.",
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "Our team installs insulation at the right stage of construction for maximum effectiveness.",
    },
    {
      step: "4",
      title: "Quality Inspection",
      description: "We inspect and test all work to ensure it meets building codes and performance standards.",
    },
  ];

  const areas = [
    "Ceiling insulation for maximum heat retention",
    "Roof insulation to prevent heat gain in summer",
    "Wall insulation for thermal mass and soundproofing",
    "Underfloor insulation for ground-level protection",
    "Thermal breaks in structural elements",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insulation for New Homes</h1>
          <p className="text-lg text-muted-foreground">
            Build energy-efficient homes from the ground up with professional insulation solutions
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Why Insulation Matters in New Construction</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Installing proper insulation during new home construction is one of the most cost-effective investments you can make. It sets the foundation for long-term energy efficiency, comfort, and cost savings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="service-card">
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="service-card h-full">
                  <div className="text-3xl font-bold text-primary mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Comprehensive Coverage</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We provide insulation solutions for all areas of your new home:
          </p>
          <ul className="space-y-4">
            {areas.map((area, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Building Codes */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Building Code Compliance</h2>
          <p className="text-lg text-muted-foreground mb-6">
            All our new home insulation installations comply with Queensland Building Code and National Construction Code requirements. We ensure your home meets or exceeds energy efficiency standards.
          </p>
          <div className="service-card">
            <h3 className="font-bold mb-4 text-foreground">Standards We Meet:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full" />
                NCC Energy Efficiency Requirements
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Queensland Building Code Standards
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Australian Standards AS/NZS 4859.1
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Thermal Performance Ratings
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Planning a New Home?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Let us help you build an energy-efficient home from the start. Contact us for a consultation with your builder.
          </p>
          <a href="/contact#quote-form" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-muted transition-colors">
            Get Free Quote
          </a>
        </div>
      </section>
    </Layout>
  );
}
