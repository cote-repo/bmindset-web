import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SolutionHero } from "@/components/solution-hero";

export const metadata: Metadata = {
  title: "Agriculture GIS & Crop Monitoring | BMINDSET TECHNOLOGY",
  description:
    "Support precision agriculture with GIS, satellite monitoring, and water and land-use analytics.",
  keywords: [
    "Agricultural GIS platform",
    "Precision agriculture GIS",
    "Crop monitoring using satellite data",
    "Drought monitoring GIS",
    "Water resource GIS",
  ],
  alternates: {
    canonical: "https://www.bmindsets.com/agriculture-gis",
  },
  openGraph: {
    title: "Agriculture GIS & Crop Monitoring | BMINDSET TECHNOLOGY",
    description:
      "Support precision agriculture with GIS, satellite monitoring, and water and land-use analytics.",
    url: "https://www.bmindsets.com/agriculture-gis",
    images: ["/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agriculture GIS & Crop Monitoring | BMINDSET TECHNOLOGY",
    description:
      "Support precision agriculture with GIS, satellite monitoring, and water and land-use analytics.",
    images: ["/icon-512.png"],
  },
};

const agricultureUseCases = [
  "Crop health monitoring and yield estimation",
  "Irrigation planning and water stress analytics",
  "Soil, land use, and suitability mapping",
  "Drought risk tracking and early warning",
  "Supply chain visibility from farm to market",
  "Agri policy monitoring and reporting",
];

const outcomes = [
  "Reduce input waste with targeted interventions",
  "Improve crop resilience and productivity",
  "Optimize water allocation and conservation",
  "Strengthen food security decision-making",
];

const referenceSignals = [
  "Open-access agricultural layers and indicators for food security planning",
  "Multi-source datasets spanning crops, climate, and soil conditions",
  "Geospatial dashboards aligned to policy and program monitoring",
];

export default function AgricultureGISPage() {
  return (
    <main className="min-h-screen bg-background">
      <SolutionHero
        badge="Agriculture GIS"
        title="Precision agriculture powered by GIS and EO"
        description="Integrate satellite data, field observations, and agronomic models to guide smarter decisions across the agricultural value chain."
        primaryCta={{ label: "Book an agriculture demo", href: "/book-appointment" }}
        secondaryCta={{ label: "Explore EO analytics", href: "/satellite-data-analytics" }}
        imageSrc="/illustrations/hero-agriculture-gis.svg"
        imageAlt="Agriculture GIS illustration"
      />

      <section className="py-14 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Agriculture GIS use cases
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Build intelligence for farmers, agribusiness, and food security
            programs.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agricultureUseCases.map((item) => (
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
            Data foundations we align to
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We integrate authoritative agricultural and food security datasets
            to keep insights grounded in evidence.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {referenceSignals.map((item) => (
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
            Outcomes that scale
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Turn data into operational plans for agriculture and food security.
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
              Ready to modernize your agriculture GIS?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              We deliver end-to-end GIS systems for monitoring, planning, and
              operational decision-making.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/book-appointment">Talk to our agri team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
