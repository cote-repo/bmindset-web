import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "GIS Platform", href: "/gis-platform" },
    { name: "Geospatial Analytics", href: "/geospatial-analytics" },
    { name: "Satellite Data Analytics", href: "/satellite-data-analytics" },
    { name: "Climate Risk Mapping", href: "/climate-risk-mapping" },
    { name: "Agriculture GIS", href: "/agriculture-gis" },
    { name: "Smart City GIS", href: "/smart-city-gis" },
  ],
  services: [
    { name: "GIS App Development", href: "#services" },
    { name: "Enterprise Solutions", href: "#services" },
    { name: "Data Analysis", href: "#services" },
    { name: "ML & AI Integration", href: "#services" },
    { name: "Remote Sensing", href: "#services" },
    { name: "Training & Consultancy", href: "#services" },
  ],
  industries: [
    { name: "Transportation", href: "#industries" },
    { name: "Energy & Utilities", href: "#industries" },
    { name: "Smart Cities", href: "#industries" },
    { name: "Agriculture", href: "#industries" },
    { name: "Telecommunication", href: "#industries" },
    { name: "Disaster Management", href: "#industries" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.jpg"
                alt="BMINDSET TECHNOLOGY Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">BMINDSET</span>
                <span className="text-xs text-sidebar-foreground/70 leading-tight">TECHNOLOGY</span>
              </div>
            </Link>
            <p className="text-sm text-sidebar-foreground/70 mb-6">
              Transforming geospatial data into actionable insights for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-sidebar-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-sidebar-foreground/70">
                  India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sidebar-primary flex-shrink-0" />
                <a href="mailto:info@bmindsets.com" className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  info@bmindsets.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sidebar-primary flex-shrink-0" />
                <a href="tel:+919493604752" className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  +91 9493604752
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-sidebar-foreground/70">
            &copy; {new Date().getFullYear()} BMINDSET TECHNOLOGY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
