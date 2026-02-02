import { Monitor, Building2, Database, Cpu, Satellite, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Monitor,
    title: "GIS App Development: Web, Mobile & Desktop",
    description: "Enabling seamless access to spatial data and analysis on multiple platforms be it web or mobile app",
  },
  {
    icon: Building2,
    title: "Enterprise Solution Implementation",
    description: "Ensuring smooth integration with existing enterprise systems & maximizing the benefits of spatial data",
  },
  {
    icon: Database,
    title: "GIS Data Creation & Analysis",
    description: "Providing expert insights and actionable intelligence for informed decision-making",
  },
  {
    icon: Cpu,
    title: "ML, AI & IOT Integration",
    description: "Leveraging advanced technologies to enhance GIS capabilities and automate processes for optimal efficiency",
  },
  {
    icon: Satellite,
    title: "Remote Sensing & Image Processing",
    description: "Delivers accurate and meaningful geospatial information from aerial and satellite imagery for various applications",
  },
  {
    icon: GraduationCap,
    title: "GIS Training & Consultancy",
    description: "Equip individuals and organizations with the necessary skills and knowledge to effectively leverage GIS technologies",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Journey from Maps to{" "}
            <span className="text-primary">Informed Decision-making</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
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
