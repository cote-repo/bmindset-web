import { Truck, Zap, Building, Wheat, Radio, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Truck,
    title: "Transportation",
    description: "Enables efficient route planning, asset tracking, and real-time traffic analysis",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Manages energy and utility networks, improving infrastructure planning and outage management",
  },
  {
    icon: Building,
    title: "Smart Cities",
    description: "Creates smart cities by analyzing data for urban planning and citizen services",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Optimizes agriculture by providing insights on soil, crops, and water resources",
  },
  {
    icon: Radio,
    title: "Telecommunication",
    description: "Assists in network planning, optimizing coverage areas, and analyzing customer demographics",
  },
  {
    icon: ShieldAlert,
    title: "Disaster Management",
    description: "Supports disaster response with risk assessment, evacuation planning, and damage analysis",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Geospatial Solutions for Every Sector,{" "}
            <span className="text-primary">Industries We Transform</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <industry.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {industry.description}
              </p>
              <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                Know More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
