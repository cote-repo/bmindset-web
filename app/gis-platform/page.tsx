import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SolutionHero } from "@/components/solution-hero";

export const metadata: Metadata = {
  title: "Enterprise GIS Platform | BMINDSET TECHNOLOGY",
  description:
    "Build a scalable enterprise GIS platform for mapping, data governance, APIs, and spatial workflows.",
  keywords: [
    "GIS software",
    "Enterprise GIS platform",
    "Geospatial data platform",
    "Cloud GIS software",
    "API-based GIS services",
    "Scalable GIS architecture",
  ],
  alternates: {
    canonical: "https://www.bmindsets.com/gis-platform",
  },
  openGraph: {
    title: "Enterprise GIS Platform | BMINDSET TECHNOLOGY",
    description:
      "Build a scalable enterprise GIS platform for mapping, data governance, APIs, and spatial workflows.",
    url: "https://www.bmindsets.com/gis-platform",
    images: ["/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise GIS Platform | BMINDSET TECHNOLOGY",
    description:
      "Build a scalable enterprise GIS platform for mapping, data governance, APIs, and spatial workflows.",
    images: ["/icon-512.png"],
  },
};

const capabilities = [
  "Unified data catalog for vector, raster, and 3D layers",
  "Role-based access, audit logs, and governance controls",
  "Spatial services for maps, tiles, routing, and geocoding",
  "ETL pipelines for ingestion, validation, and versioning",
  "API-first architecture with SDK-ready endpoints",
  "Multi-tenant deployments with cost controls",
];

const dataLayers = [
  "Administrative boundaries and geographic names",
  "Elevation, hydrography, and terrain models",
  "Transportation networks and routes",
  "Orthoimagery and basemap context layers",
  "Utilities, assets, and operational inventories",
];

export default function GISPlatformPage() {
  return (
    <main className="min-h-screen bg-background">
      <SolutionHero
        badge="GIS Platform"
        title="Enterprise GIS platform for data, maps, and workflows"
        description="Build the foundation for spatial decision-making with a secure, scalable GIS stack that unifies mapping, analytics, and data governance across teams."
        primaryCta={{ label: "Book a platform demo", href: "/book-appointment" }}
        secondaryCta={{ label: "Explore analytics", href: "/geospatial-analytics" }}
        imageSrc="/illustrations/hero-gis-platform.svg"
        imageAlt="Enterprise GIS platform illustration"
      />

      <section className="py-14 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Platform capabilities
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Everything you need to operationalize GIS across enterprise teams.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Core data layers you can standardize
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Bring together authoritative base layers with your operational data
            for a complete spatial picture. National mapping programs commonly
            standardize these core layers as the foundation of GIS.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {dataLayers.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-3"
              >
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Ready to modernize your GIS foundation?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              We help you design and launch an enterprise GIS platform aligned
              to your data, security, and operational requirements.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/book-appointment">Talk to a GIS architect</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
