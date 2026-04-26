import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Plus, Minus } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import ServiceAreaMap from "@/components/ServiceAreaMap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    propertyType: "old" as const,
    serviceType: "removal" as const,
    message: "",
  });

  const [homeSize, setHomeSize] = useState(150);
  const [currentInsulation, setCurrentInsulation] = useState("poor");

  const submitQuote = trpc.quotes.submit.useMutation({
    onSuccess: () => {
      toast.success("Quote request submitted! We'll contact you soon.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        suburb: "",
        propertyType: "old",
        serviceType: "removal",
        message: "",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit quote. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuote.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Energy savings calculator
  const calculateSavings = () => {
    let baseConsumption = homeSize * 0.5; // kWh per m² per year
    let savingsPercentage = 0;

    if (currentInsulation === "poor") savingsPercentage = 35;
    else if (currentInsulation === "fair") savingsPercentage = 25;
    else if (currentInsulation === "good") savingsPercentage = 15;

    const annualSavings = (baseConsumption * savingsPercentage) / 100;
    const monthlySavings = annualSavings / 12;
    const costPerKwh = 0.28; // Average Brisbane rate
    const annualCost = annualSavings * costPerKwh;
    const monthlyCost = annualCost / 12;

    return { monthlyCost, annualCost };
  };

  const savings = calculateSavings();

  const faqs = [
    {
      question: "How much does insulation removal cost?",
      answer: "Costs vary depending on the size of your home, the type of insulation, and any contamination. We provide free quotes after assessing your property.",
    },
    {
      question: "Is old insulation dangerous?",
      answer: "Yes, old insulation can contain asbestos, harbour mould and pests, and deteriorate into harmful dust particles. Professional removal is recommended.",
    },
    {
      question: "How long does installation take?",
      answer: "Installation time depends on your home size and the type of insulation. Most residential projects take 1-3 days.",
    },
    {
      question: "Do you service commercial properties?",
      answer: "Yes, we provide specialized insulation solutions for commercial and industrial properties. Contact us for a consultation.",
    },
    {
      question: "What's the best insulation for Brisbane's climate?",
      answer: "Brisbane's hot, humid climate benefits from reflective and bulk insulation. We recommend a combination approach tailored to your home.",
    },
    {
      question: "How long does insulation last?",
      answer: "Quality insulation typically lasts 15-80 years depending on the material and conditions. We use high-performance materials built to last.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Contact us for a free quote or to discuss your insulation needs
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="service-card text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Phone</h3>
              <a href="tel:+61487720783" className="text-primary hover:text-accent transition-colors">
                0487 720 783
              </a>
            </div>
            <div className="service-card text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Email</h3>
              <a href="mailto:timeinsulation786@gmail.com" className="text-primary hover:text-accent transition-colors">
                timeinsulation786@gmail.com
              </a>
            </div>
            <div className="service-card text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Service Area</h3>
              <p className="text-muted-foreground">Brisbane & Surrounding Areas</p>
            </div>
          </div>

          {/* Quote Form */}
          <div id="quote-form" className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Your Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-muted/30 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus-ring bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus-ring bg-background"
                    placeholder="(07) 0000 0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus-ring bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Suburb *</label>
                  <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus-ring bg-background"
                    placeholder="e.g., Paddington"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Property Type *</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus-ring bg-background"
                  >
                    <option value="new">New Home</option>
                    <option value="old">Existing Home</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Type *</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus-ring bg-background"
                  >
                    <option value="removal">Removal</option>
                    <option value="installation">Installation</option>
                    <option value="replacement">Replacement</option>
                    <option value="roof-vents">Roof Vents & Whirlybirds</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus-ring bg-background"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitQuote.isPending}
                className="w-full btn-primary disabled:opacity-50"
              >
                {submitQuote.isPending ? "Submitting..." : "Get Free Quote"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Service Area</h2>
          <ServiceAreaMap />
        </div>
      </section>

      {/* Energy Savings Calculator */}
      <section className="section-padding">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Energy Savings Calculator</h2>
          <div className="service-card">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  Home Size: <span className="text-primary font-bold">{homeSize} m²</span>
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setHomeSize(Math.max(50, homeSize - 50))}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    value={homeSize}
                    onChange={(e) => setHomeSize(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <button
                    onClick={() => setHomeSize(Math.min(500, homeSize + 50))}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-4">Current Insulation Status</label>
                <div className="grid grid-cols-3 gap-4">
                  {["poor", "fair", "good"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setCurrentInsulation(status)}
                      className={`p-3 rounded-lg font-medium transition-colors ${
                        currentInsulation === status
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/70"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-4">Estimated Monthly Savings</h3>
                <p className="text-3xl font-bold text-primary mb-2">${savings.monthlyCost.toFixed(2)}</p>
                <p className="text-muted-foreground">
                  Annual savings: <span className="font-bold text-foreground">${savings.annualCost.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-bold text-foreground text-left">{faq.question}</h3>
                  <span className="text-primary flex-shrink-0">
                    {expandedFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-muted/30 border-t border-border">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
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
            Scroll up to submit your quote request or call us directly.
          </p>
          <a href="tel:+61733333333" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-muted transition-colors">
            Call Now
          </a>
        </div>
      </section>
    </Layout>
  );
}
