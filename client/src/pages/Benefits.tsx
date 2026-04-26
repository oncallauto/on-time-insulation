import Layout from "@/components/Layout";
import { Thermometer, DollarSign, Zap, Volume2, Home, TrendingUp } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Thermometer className="w-10 h-10" />,
      title: "Winter Warmth",
      description: "Insulation retains heat inside your home, reducing heating costs and maintaining comfortable temperatures.",
      savings: "Up to 30% heating savings",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Summer Cooling",
      description: "Blocks external heat from entering your home, keeping it cooler and reducing air conditioning usage.",
      savings: "Up to 40% cooling savings",
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Lower Energy Bills",
      description: "Reduced heating and cooling needs translate directly to lower monthly energy bills.",
      savings: "Average $30-50/month savings",
    },
    {
      icon: <Volume2 className="w-10 h-10" />,
      title: "Noise Reduction",
      description: "Insulation absorbs sound, reducing outside noise and creating a quieter, more peaceful home.",
      savings: "15-20dB noise reduction",
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Increased Comfort",
      description: "Eliminates drafts and cold spots, providing consistent comfort throughout your home.",
      savings: "Year-round comfort",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Property Value",
      description: "Modern insulation is an attractive upgrade that increases your home's resale value.",
      savings: "3-5% property value increase",
    },
  ];

  const seasons = [
    {
      season: "Winter",
      title: "Retains Heat Inside",
      points: [
        "Prevents warm air from escaping through walls, roof, and floor",
        "Reduces heating system workload",
        "Maintains consistent indoor temperatures",
        "Eliminates cold spots and drafts",
        "Reduces heating costs by 20-30%",
      ],
    },
    {
      season: "Summer",
      title: "Blocks External Heat",
      points: [
        "Reflects solar heat away from your home",
        "Reduces cooling system workload",
        "Maintains cooler indoor temperatures",
        "Improves air conditioning efficiency",
        "Reduces cooling costs by 30-40%",
      ],
    },
    {
      season: "Year-Round",
      title: "Overall Benefits",
      points: [
        "Consistent thermal performance",
        "Improved indoor air quality",
        "Better humidity control",
        "Reduced environmental impact",
        "Long-term cost savings",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Benefits of Insulation</h1>
          <p className="text-lg text-muted-foreground">
            Discover how proper insulation improves comfort, reduces costs, and increases your home's value
          </p>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="service-card">
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{benefit.description}</p>
                <p className="text-primary font-semibold text-sm">{benefit.savings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Seasonal Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasons.map((season, idx) => (
              <div key={idx} className="service-card">
                <div className="text-primary font-bold text-lg mb-2">{season.season}</div>
                <h3 className="text-xl font-bold mb-6 text-foreground">{season.title}</h3>
                <ul className="space-y-3">
                  {season.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Efficiency Infographic */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/benefits-energy-8i2feNMtRT34X8pXsbqent.webp" alt="Insulation Benefits Infographic" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Energy Efficiency & Environmental Impact</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Reduce Your Carbon Footprint</h3>
              <p className="text-muted-foreground mb-4">
                Proper insulation reduces your home's energy consumption, which means less reliance on fossil fuels and a smaller carbon footprint. By reducing heating and cooling needs, you're directly contributing to environmental protection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Lower Energy Consumption</h3>
              <p className="text-muted-foreground mb-4">
                Modern insulation can reduce your home's energy consumption by 30-40%, which translates to significant savings on your energy bills and reduced environmental impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Support Renewable Energy</h3>
              <p className="text-muted-foreground">
                With lower energy needs, your home becomes an ideal candidate for solar panels and other renewable energy solutions, further reducing your environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Comfort */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Health & Comfort Benefits</h2>
          <div className="space-y-6">
            <div className="service-card">
              <h3 className="text-lg font-bold mb-3 text-foreground">Improved Indoor Air Quality</h3>
              <p className="text-muted-foreground">
                Proper insulation helps maintain consistent humidity levels and reduces drafts that can bring in dust and allergens, leading to better indoor air quality.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-lg font-bold mb-3 text-foreground">Eliminate Drafts & Cold Spots</h3>
              <p className="text-muted-foreground">
                Insulation eliminates uncomfortable drafts and cold spots, creating a more pleasant living environment and reducing the risk of cold-related health issues.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-lg font-bold mb-3 text-foreground">Moisture Control</h3>
              <p className="text-muted-foreground">
                Proper insulation helps prevent moisture infiltration, reducing mould growth and the associated health risks like respiratory problems and allergies.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-lg font-bold mb-3 text-foreground">Noise Reduction</h3>
              <p className="text-muted-foreground">
                Insulation absorbs sound, creating a quieter home environment that reduces stress and improves sleep quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Financial Benefits</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Immediate Savings</h3>
              <p className="text-muted-foreground mb-4">
                You'll notice lower energy bills immediately after insulation installation, with savings typically ranging from $30-50 per month depending on your home size and climate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Long-Term ROI</h3>
              <p className="text-muted-foreground mb-4">
                Most homeowners see a return on investment within 3-5 years through energy savings alone. After that, the savings continue for the life of the insulation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Increased Property Value</h3>
              <p className="text-muted-foreground mb-4">
                Modern insulation is an attractive feature for home buyers, typically increasing property value by 3-5% and making your home more competitive on the market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Tax Incentives</h3>
              <p className="text-muted-foreground">
                Depending on your location, you may be eligible for government tax incentives or rebates for energy-efficient home improvements, including insulation upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience These Benefits?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Get a free quote and start saving money while improving your home's comfort and value.
          </p>
          <a href="/contact#quote-form" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-muted transition-colors">
            Get Free Quote
          </a>
        </div>
      </section>
    </Layout>
  );
}
