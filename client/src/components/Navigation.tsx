import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "New Homes", href: "/new-homes" },
    { label: "Old Homes", href: "/old-homes" },
    { label: "Roof Vents", href: "/roof-vents" },
    { label: "Hazards & Safety", href: "/hazards" },
    { label: "Benefits", href: "/benefits" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky-header">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img src="/manus-storage/oti-logo_527d542b.webp" alt="On Time Insulation" className="h-16 w-auto" />
          <div className="hidden sm:block">
            <p className="font-bold text-foreground text-sm">On Time Insulation</p>
            <p className="text-xs text-muted-foreground">Brisbane, Australia</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors no-underline">
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/contact#quote-form" className="hidden md:inline-block btn-primary no-underline">
            Get Free Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-muted/50">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors no-underline"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#quote-form"
              className="block btn-primary text-center mt-4 no-underline"
              onClick={() => setIsOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
