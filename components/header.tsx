"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "#solutions",
    submenu: [
      { name: "GIS Platform", href: "/gis-platform" },
      { name: "Geospatial Analytics", href: "/geospatial-analytics" },
      { name: "Satellite Data Analytics", href: "/satellite-data-analytics" },
      { name: "Climate Risk Mapping", href: "/climate-risk-mapping" },
      { name: "Agriculture GIS", href: "/agriculture-gis" },
      { name: "Smart City GIS", href: "/smart-city-gis" },
    ],
  },
  {
    name: "Services",
    href: "#services",
    submenu: [
      { name: "GIS App Development", href: "#services" },
      { name: "Enterprise Solutions", href: "#services" },
      { name: "Data Analysis", href: "#services" },
      { name: "ML & AI Integration", href: "#services" },
    ],
  },
  {
    name: "Industries",
    href: "#industries",
    submenu: [
      { name: "Transportation", href: "#industries" },
      { name: "Energy & Utilities", href: "#industries" },
      { name: "Smart Cities", href: "#industries" },
      { name: "Agriculture", href: "#industries" },
    ],
  },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="BMINDSET TECHNOLOGY Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">
                BMINDSET
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                TECHNOLOGY
              </span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
                {item.submenu && <ChevronDown className="h-4 w-4" />}
              </Link>

              {item.submenu && activeDropdown === item.name && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="bg-card rounded-lg shadow-lg border border-border py-2 min-w-48">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/book-appointment">Talk to us</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/book-appointment">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
