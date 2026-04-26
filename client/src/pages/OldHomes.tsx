import Layout from "@/components/Layout";
import { AlertTriangle, RefreshCw, DollarSign, Zap } from "lucide-react";

export default function OldHomes() {
  const signs = [
    "High heating and cooling bills",
    "Uneven temperatures throughout the home",
    "Drafts and cold spots",
    "Visible signs of old or damaged insulation",
    "Moisture or mould in the attic",
    "Pest droppings or contamination",
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce Energy Bills",
      description: "Save up to 40% on heating and cooling costs with modern insulation.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Improve Comfort",
      description: "Eliminate drafts and maintain consistent temperatures year-round.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Remove Hazards",
      description: "Safely remove contaminated, mouldy, or pest-infested insulation.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Increase Property Value",
      description: "Modern insulation is a valuable upgrade that appeals to buyers.",
    },
  ];

  const process = [
    {
      title: "Inspection",
      description: "We assess your current insulation and identify any issues or hazards.",
    },
    {
      title: "Safe Removal",
      description: "Old insulation is safely removed using professional equipment and techniques.",
    },
    {
      title: "Cleanup",
      description: "The area is thoroughly cleaned and prepared for new insulation.",
    },
    {
      title: "Installation",
      description: "Modern, high-performance insulation is installed to maximize efficiency.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insulation for Existing Homes</h1>
          <p className="text-lg text-muted-foreground">
            Upgrade your home's insulation to improve comfort, reduce costs, and remove hazards
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/old-homes-renovation-5rTanmHqJueFSzPm3VtpQH.webp" alt="Old Home Insulation Renovation" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Is Your Home Losing Energy?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Many older homes have inadequate or deteriorated insulation that wastes energy and money. If your home shows any of these signs, it's time to consider an upgrade:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {signs.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Upgrading Your Insulation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Process */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Upgrade Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="service-card">
                <div className="text-4xl font-bold text-primary/20 mb-4">{idx + 1}</div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Common Issues in Older Homes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Settling & Compression</h3>
              <p className="text-muted-foreground">
                Over time, insulation settles and compresses, reducing its effectiveness. This is especially common in homes that are 20+ years old.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Moisture & Mould</h3>
              <p className="text-muted-foreground">
                Moisture infiltration can cause mould growth and insulation degradation. This is a health hazard that requires professional removal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Pest Contamination</h3>
              <p className="text-muted-foreground">
                Rodents and insects can infest insulation, creating health risks. We safely remove contaminated material and prevent future infestations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Asbestos & Hazardous Materials</h3>
              <p className="text-muted-foreground">
                Older insulation may contain asbestos or other hazardous materials. We safely identify and remove these materials according to regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Return on Investment</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Upgrading your home's insulation is one of the best investments you can make. Most homeowners see a return on investment within 3-5 years through energy savings alone.
          </p>
          <div className="service-card">
            <h3 className="font-bold mb-4 text-foreground">Average Savings:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full" />
                30-40% reduction in heating/cooling costs
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Increased home resale value
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Improved comfort year-round
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Reduced environmental impact
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Home?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Get a free assessment and quote for your home's insulation upgrade.
          </p>
          <a href="/contact#quote-form" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-muted transition-colors">
            Get Free Quote
          </a>
        </div>
      </section>
    </Layout>
  );
}
