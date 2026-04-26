import Layout from "@/components/Layout";
import { ArrowRight, Zap, Wind, Leaf, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function RoofVents() {
  const ventTypes = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Solar Powered Roof Vents",
      description: "Energy-efficient ventilation powered by integrated solar panels. No electricity costs, automatic temperature-controlled operation.",
      benefits: [
        "Zero operating costs",
        "Automatic day/night operation",
        "Reduces attic temperature by up to 30°C",
        "Extends roof lifespan",
        "Eco-friendly solution",
      ],
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Whirlybirds Turbine Vents",
      description: "Passive wind-driven ventilation that operates 24/7 without electricity. Ideal for continuous air circulation and moisture removal.",
      benefits: [
        "Wind-powered operation",
        "No moving parts to maintain",
        "Continuous ventilation",
        "Removes moisture and humidity",
        "Prevents mold and condensation",
      ],
    },
  ];

  const advantages = [
    {
      title: "Energy Efficiency",
      description: "Reduce cooling costs by up to 40% in summer with improved attic ventilation working alongside your insulation.",
    },
    {
      title: "Moisture Control",
      description: "Prevent moisture buildup that can damage insulation and structural components. Essential for roof longevity.",
    },
    {
      title: "Temperature Regulation",
      description: "Maintain consistent indoor temperatures year-round by removing hot air in summer and excess moisture in winter.",
    },
    {
      title: "Roof Protection",
      description: "Proper ventilation extends roof lifespan by preventing heat damage and ice dam formation.",
    },
    {
      title: "Air Quality",
      description: "Continuous air circulation removes stale air, odours, and pollutants from your home.",
    },
    {
      title: "Quiet Operation",
      description: "Solar vents and whirlybirds operate silently, with no noise disturbance to your home.",
    },
  ];

  const comparisonData = [
    {
      feature: "Operating Cost",
      solar: "Free (solar powered)",
      whirlybird: "Free (wind powered)",
    },
    {
      feature: "Installation",
      solar: "Professional installation recommended",
      whirlybird: "Professional installation recommended",
    },
    {
      feature: "Maintenance",
      solar: "Minimal (annual cleaning)",
      whirlybird: "Minimal (occasional bearing lubrication)",
    },
    {
      feature: "Effectiveness",
      solar: "Excellent in sunny climates",
      whirlybird: "Excellent in all climates",
    },
    {
      feature: "Noise Level",
      solar: "Silent",
      whirlybird: "Minimal (slight rotation sound)",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="hero-overlay" />
        <div className="container relative z-10 text-center max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="trust-badge">
              <Leaf size={16} />
              Eco-Friendly Roof Ventilation
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Solar Powered Roof Vents & Whirlybirds
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Maximize your home's energy efficiency with professional roof ventilation solutions. Reduce cooling costs, prevent moisture damage, and extend your roof's lifespan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#quote-form" className="btn-primary no-underline inline-flex items-center justify-center gap-2">
              Get Free Quote
              <ArrowRight size={20} />
            </Link>
            <Link href="#comparison" className="btn-outline no-underline inline-flex items-center justify-center gap-2">
              Compare Options
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Vent Types Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Roof Ventilation Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the ventilation solution that best suits your home and climate
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ventTypes.map((vent, idx) => (
              <div key={idx} className="service-card">
                <div className="text-primary mb-4">{vent.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{vent.title}</h3>
                <p className="text-muted-foreground mb-6">{vent.description}</p>
                <div className="space-y-2">
                  {vent.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Add Roof Ventilation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold mb-3 text-foreground">{adv.title}</h3>
                <p className="text-muted-foreground text-sm">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Solar vs Whirlybird Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Solar Powered Vents</th>
                  <th className="text-left py-4 px-4 font-bold text-accent">Whirlybird Turbines</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.solar}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.whirlybird}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installation Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Installation & Maintenance</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Professional Installation</h3>
                <p className="text-muted-foreground">Our experienced team ensures proper installation for maximum efficiency and longevity. We handle all roof work safely and professionally.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Minimal Maintenance</h3>
                <p className="text-muted-foreground">Both solar vents and whirlybirds require minimal maintenance. Annual cleaning and occasional inspections keep them operating at peak efficiency.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Warranty Coverage</h3>
                <p className="text-muted-foreground">All installations come with comprehensive warranty coverage. We stand behind our work and provide ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Home's Ventilation?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a free quote for solar powered roof vents or whirlybird turbine installation. Our team will assess your roof and recommend the best solution for your needs.
          </p>
          <Link href="/contact#quote-form" className="btn-primary no-underline inline-flex items-center justify-center gap-2">
            Request Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
