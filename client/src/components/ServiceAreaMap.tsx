import { MapPin } from "lucide-react";

export default function ServiceAreaMap() {
  const serviceAreas = [
    { name: "Brisbane CBD", suburb: "Brisbane" },
    { name: "Inner West", suburb: "Paddington, Toowong, Auchenflower" },
    { name: "Southside", suburb: "Kangaroo Point, South Bank, Dutton Park" },
    { name: "North Brisbane", suburb: "Fortitude Valley, New Farm, Teneriffe" },
    { name: "Eastern Suburbs", suburb: "Bulimba, Balmoral, Hawthorne" },
  ];

  return (
    <div className="space-y-6">
      {/* Service Area Display */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Brisbane Service Coverage</h3>
          <p className="text-muted-foreground">
            We proudly serve Brisbane and surrounding areas within a 25km radius from the CBD.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceAreas.map((area, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border/50">
              <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground">{area.name}</h4>
                <p className="text-sm text-muted-foreground">{area.suburb}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Coverage Info */}
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Not listed above?</span> Contact us to check if we service your area. We frequently expand our coverage to meet demand.
          </p>
        </div>
      </div>

      {/* Service Hours */}
      <div className="bg-background border border-border rounded-lg p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Service Hours & Response Time</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Standard Service Hours</p>
            <p className="text-foreground">Monday - Friday: 7:00 AM - 5:00 PM</p>
            <p className="text-foreground">Saturday: 8:00 AM - 2:00 PM</p>
            <p className="text-foreground">Sunday: Closed</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Emergency Response</p>
            <p className="text-foreground">24/7 Emergency Contact Available</p>
            <p className="text-foreground">Response Time: Within 24-48 hours</p>
            <p className="text-foreground">Same-day quotes for urgent requests</p>
          </div>
        </div>
      </div>
    </div>
  );
}
