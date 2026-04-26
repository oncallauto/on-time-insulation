import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/manus-storage/oti-logo_527d542b.webp" alt="On Time Insulation" className="h-10 w-auto" />
              <h3 className="font-bold text-lg">On Time Insulation</h3>
            </div>
            <p className="text-sm text-background/80">
              Professional insulation removal and installation services for residential, commercial, and industrial properties across Brisbane and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:text-primary transition-colors no-underline">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-primary transition-colors no-underline">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-primary transition-colors no-underline">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-primary transition-colors no-underline">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Brisbane CBD</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Inner West</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Southside</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>North Brisbane</span>
              </li>
              <li className="text-xs text-background/70 mt-2">
                And surrounding areas
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+61487720783" className="hover:text-primary transition-colors no-underline">
                  0487 720 783
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:timeinsulation786@gmail.com" className="hover:text-primary transition-colors no-underline">
                  timeinsulation786@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Brisbane, QLD 4000<br />Australia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <div className="space-y-1">
            <p>ABN: 36 689 436 342</p>
            <p>Licence: QLD Insulation Contractors Licence</p>
          </div>
          <p>
            © {currentYear} On Time Insulation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
