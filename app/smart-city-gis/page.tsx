import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SolutionHero } from "@/components/solution-hero";

export const metadata: Metadata = {
  title: "Smart City GIS & Urban Planning | BMINDSET TECHNOLOGY",
  description:
    "Enable smarter urban planning, mobility, and infrastructure management with GIS-driven city intelligence.",
  keywords: [
    "Smart city GIS platform",
    "Urban planning GIS",
    "Infrastructure mapping software",
    "Public sector GIS solutions",
    "Utility network GIS",
  ],
  alternates: {
    canonical: "https://www.bmindsets.com/smart-city-gis",
  },
  openGraph: {
    title: "Smart City GIS & Urban Planning | BMINDSET TECHNOLOGY",
    description:
      "Enable smarter urban planning, mobility, and infrastructure management with GIS-driven city intelligence.",
    url: "https://www.bmindsets.com/smart-city-gis",
    images: ["/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart City GIS & Urban Planning | BMINDSET TECHNOLOGY",
    description:
      "Enable smarter urban planning, mobility, and infrastructure management with GIS-driven city intelligence.",
    images: ["/icon-512.png"],
  },
};

const cityUseCases = [
  "Urban growth monitoring and land-use planning",
  "Public transport accessibility analysis",
  "Utility networks and asset management",
  "Infrastructure planning and capital prioritization",
  "Disaster risk and emergency response planning",
  "Citizen-facing dashboards and transparency",
];

const outcomes = [
  "Accelerate data-driven urban policy decisions",
  "Improve service delivery and maintenance",
  "Reduce risk exposure for critical assets",
  "Communicate city performance with clarity",
];

const indicators = [
  "Public transport access and service coverage",
  "Land consumption and urban growth monitoring",
  "Air quality and environmental exposure mapping",
  "Access to public and open spaces",
  "Disaster risk and resilience indicators",
];

export default function SmartCityGISPage() {
  return (
    <main className="min-h-screen bg-background">
      <SolutionHero
        badge="Smart City GIS"
        title="Urban intelligence for sustainable cities"
        description="Connect spatial data, infrastructure systems, and citizen services to guide smarter city decisions."
        primaryCta={{ label: "Book a smart city demo", href: "/book-appointment" }}
        secondaryCta={{ label: "Explore analytics", href: "/geospatial-analytics" }}
        imageSrc="/illustrations/hero-smart-city.svg"
        imageAlt="Smart city GIS illustration"
      />

      <section className="py-14 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Smart city GIS use cases
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We design city platforms that connect planning, mobility, and
            infrastructure services.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityUseCases.map((item) => (
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
            Urban indicators we align to
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Global urban indicators rely on spatial data to track progress on
            sustainable cities and community wellbeing.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {indicators.map((item) => (
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

      <section className="py-14 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Outcomes for public-sector impact
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We deliver measurable outcomes that align with policy goals and
            community needs.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
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
              Ready to build a city intelligence platform?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              We help cities create GIS systems that support planning,
              resilience, and service delivery.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/book-appointment">Talk to our urban team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
