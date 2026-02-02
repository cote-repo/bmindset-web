import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "GIS Platform",
    description:
      "Enterprise GIS foundation for data management, mapping, and spatial workflows.",
    href: "/gis-platform",
  },
  {
    title: "Geospatial Analytics",
    description:
      "Location intelligence, spatial modeling, and decision-ready insights.",
    href: "/geospatial-analytics",
  },
  {
    title: "Satellite Data Analytics",
    description:
      "EO pipelines for multispectral imagery, time series, and change detection.",
    href: "/satellite-data-analytics",
  },
  {
    title: "Climate Risk Mapping",
    description:
      "Risk visualization for flood, drought, heat, and resilience planning.",
    href: "/climate-risk-mapping",
  },
  {
    title: "Agriculture GIS",
    description:
      "Crop monitoring, water planning, and precision ag decision support.",
    href: "/agriculture-gis",
  },
  {
    title: "Smart City GIS",
    description:
      "Urban planning, mobility, and infrastructure intelligence for cities.",
    href: "/smart-city-gis",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore platform-specific GIS capabilities
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Navigate directly to the solution area you care about. Each page
              outlines the data, analytics, and outcomes we deliver.
            </p>
          </div>
          <Button asChild className="w-fit">
            <Link href="/book-appointment">Book a demo</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {solution.description}
              </p>
              <div className="mt-4 text-sm font-medium text-primary">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
