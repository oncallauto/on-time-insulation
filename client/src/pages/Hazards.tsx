import Layout from "@/components/Layout";
import { AlertTriangle, Shield, CheckCircle } from "lucide-react";

export default function Hazards() {
  const hazards = [
    {
      title: "Dust & Airborne Particles",
      description: "Old insulation can deteriorate into fine dust particles that become airborne when disturbed, causing respiratory issues.",
      icon: <AlertTriangle className="w-8 h-8" />,
    },
    {
      title: "Mould & Moisture",
      description: "Moisture infiltration can cause mould growth in insulation, creating health hazards and structural damage.",
      icon: <AlertTriangle className="w-8 h-8" />,
    },
    {
      title: "Rodent & Pest Contamination",
      description: "Rodents and insects can infest insulation, leaving droppings and creating disease vectors.",
      icon: <AlertTriangle className="w-8 h-8" />,
    },
    {
      title: "Fire Risk",
      description: "Some older insulation materials are flammable or don't meet modern fire safety standards.",
      icon: <AlertTriangle className="w-8 h-8" />,
    },
    {
      title: "Asbestos & Hazardous Materials",
      description: "Insulation installed before the 1980s may contain asbestos, which is a serious health hazard when disturbed.",
      icon: <AlertTriangle className="w-8 h-8" />,
    },
    {
      title: "Bacteria & Pathogens",
      description: "Contaminated insulation can harbour harmful bacteria and pathogens that affect indoor air quality.",
      icon: <AlertTriangle className="w-8 h-8" />,
    },
  ];

  const safetySteps = [
    {
      step: "1",
      title: "Professional Assessment",
      description: "We inspect your insulation to identify any hazards or contamination before removal.",
    },
    {
      step: "2",
      title: "PPE & Equipment",
      description: "Our team uses professional-grade personal protective equipment and respiratory protection.",
    },
    {
      step: "3",
      title: "Containment",
      description: "We contain the work area to prevent dust and particles from spreading throughout your home.",
    },
    {
      step: "4",
      title: "Vacuum Extraction",
      description: "We use HEPA-filtered vacuum systems to safely extract insulation without creating airborne hazards.",
    },
    {
      step: "5",
      title: "Safe Disposal",
      description: "All removed material is disposed of according to environmental and health regulations.",
    },
    {
      step: "6",
      title: "Verification",
      description: "We verify the area is clean and safe before installation of new insulation.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hazards & Safety</h1>
          <p className="text-lg text-muted-foreground">
            Understanding the risks of old insulation and how we safely remove it
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">The Risks of Old Insulation</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Old, deteriorated, or contaminated insulation poses serious health and safety risks to your family. Many homeowners don't realize the dangers lurking in their attics and walls until problems arise.
          </p>
        </div>
      </section>

      {/* Safety Hazards Infographic */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/e7aU99kLXTtjVvJ4ZuTxaQ/safety-hazards-GyDLRm6vRvoK5UdQhR93qY.webp" alt="Insulation Safety Hazards" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Hazards Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hazards.map((hazard, idx) => (
              <div key={idx} className="service-card">
                <div className="text-red-500 mb-4">{hazard.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{hazard.title}</h3>
                <p className="text-muted-foreground text-sm">{hazard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Process */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Safe Removal Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetySteps.map((item, idx) => (
              <div key={idx} className="service-card">
                <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Impact */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Health Impact of Contaminated Insulation</h2>
          <div className="space-y-6">
            <div className="service-card">
              <h3 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Respiratory Issues
              </h3>
              <p className="text-muted-foreground">
                Dust particles and mould spores from deteriorated insulation can cause asthma, allergies, and other respiratory problems.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Allergic Reactions
              </h3>
              <p className="text-muted-foreground">
                Mould and pest droppings in insulation can trigger severe allergic reactions and worsen existing allergies.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Asbestos Exposure
              </h3>
              <p className="text-muted-foreground">
                Asbestos-containing insulation poses a serious lung cancer risk when fibres are inhaled. Professional removal is essential.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Infections & Disease
              </h3>
              <p className="text-muted-foreground">
                Bacteria, viruses, and pathogens in contaminated insulation can cause infections and illness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Why Professional Removal is Essential</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Proper Equipment</h3>
                <p className="text-muted-foreground">
                  We use HEPA-filtered vacuum systems and professional-grade equipment designed for safe hazardous material removal.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  We follow all Queensland and Australian regulations for hazardous material handling and disposal.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Health Protection</h3>
                <p className="text-muted-foreground">
                  Our trained team protects your family and themselves with proper containment and safety protocols.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Proper Disposal</h3>
                <p className="text-muted-foreground">
                  Hazardous materials are disposed of at licensed facilities that handle them according to regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Concerned About Your Insulation?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Get a professional assessment and safe removal quote today.
          </p>
          <a href="/contact#quote-form" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-muted transition-colors">
            Get Free Assessment
          </a>
        </div>
      </section>
    </Layout>
  );
}
