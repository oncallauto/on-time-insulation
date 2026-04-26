import { useEffect, useRef } from "react";

export default function ServiceAreaMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Brisbane city center coordinates
    const brisbaneCenter = { lat: -27.4698, lng: 153.0251 };

    // Initialize map
    map.current = new google.maps.Map(mapContainer.current, {
      zoom: 11,
      center: brisbaneCenter,
      styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{ color: "#3d5a80" }],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{ color: "#d5e8f7" }],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }],
        },
      ],
    });

    // Add main marker for Brisbane
    new google.maps.Marker({
      position: brisbaneCenter,
      map: map.current,
      title: "On Time Insulation - Brisbane",
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: "#0066cc",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
      },
    });

    // Add service area circle
    new google.maps.Circle({
      center: brisbaneCenter,
      radius: 25000, // 25km radius
      map: map.current,
      fillColor: "#0066cc",
      fillOpacity: 0.1,
      strokeColor: "#0066cc",
      strokeOpacity: 0.3,
      strokeWeight: 2,
    });

    // Add service area markers
    const serviceAreas = [
      { lat: -27.4629, lng: 153.0088, label: "CBD" },
      { lat: -27.4898, lng: 153.0251, label: "South Brisbane" },
      { lat: -27.4298, lng: 153.0251, label: "North Brisbane" },
      { lat: -27.4698, lng: 152.9951, label: "West" },
      { lat: -27.4698, lng: 153.0551, label: "East" },
    ];

    serviceAreas.forEach((area) => {
      new google.maps.Marker({
        position: { lat: area.lat, lng: area.lng },
        map: map.current,
        title: area.label,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
          fillColor: "#4da6ff",
          fillOpacity: 0.7,
          strokeColor: "#ffffff",
          strokeWeight: 1,
        },
      });
    });
  }, []);

  return (
    <div className="space-y-4">
      <div
        ref={mapContainer}
        className="w-full h-96 rounded-lg border border-border shadow-sm"
      />
      <p className="text-sm text-muted-foreground text-center">
        We service Brisbane and surrounding areas within a 25km radius
      </p>
    </div>
  );
}
