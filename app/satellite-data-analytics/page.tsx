import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SolutionHero } from "@/components/solution-hero";

export const metadata: Metadata = {
  title: "Satellite Data Analytics & EO Insights | BMINDSET TECHNOLOGY",
  description:
    "Extract actionable insights from satellite imagery with multispectral analytics, time-series change detection, and EO workflows.",
  keywords: [
    "Satellite data analytics",
    "Remote sensing GIS platform",
    "Earth observation analytics",
    "Satellite imagery processing",
    "Multispectral satellite analysis",
  ],
  alternates: {
    canonical: "https://www.bmindsets.com/satellite-data-analytics",
  },
  openGraph: {
    title: "Satellite Data Analytics & EO Insights | BMINDSET TECHNOLOGY",
    description:
      "Extract actionable insights from satellite imagery with multispectral analytics, time-series change detection, and EO workflows.",
    url: "https://www.bmindsets.com/satellite-data-analytics",
    images: ["/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satellite Data Analytics & EO Insights | BMINDSET TECHNOLOGY",
    description:
      "Extract actionable insights from satellite imagery with multispectral analytics, time-series change detection, and EO workflows.",
    images: ["/icon-512.png"],
  },
};

const workflows = [
  {
    title: "Atmospheric correction & preprocessing",
    description: "Calibrate imagery and normalize reflectance for analysis.",
    image: "/illustrations/workflows/satellite-dish.jpg",
  },
  {
    title: "Spectral indices & feature extraction",
    description: "Vegetation, water, and soil indices for thematic mapping.",
    image: "/illustrations/workflows/aerial-fields.jpg",
  },
  {
    title: "Change detection & monitoring",
    description: "Detect land-use, infrastructure, and environmental change.",
    image: "/illustrations/workflows/aerial-city.jpg",
  },
  {
    title: "Time-series analytics",
    description: "Track seasonal trends and anomaly signals over time.",
    image: "/illustrations/workflows/aerial-fields.jpg",
  },
  {
    title: "Cloud masking & mosaicking",
    description: "Quality controls to produce reliable, cloud-free layers.",
    image: "/illustrations/workflows/satellite-dish.jpg",
  },
  {
    title: "Operational delivery",
    description: "Dashboards, alerts, and APIs for real-world decisions.",
    image: "/illustrations/workflows/aerial-city.jpg",
  },
];

const dataSources = [
  "Landsat 8 imagery with a 16-day revisit and 11 spectral bands",
  "Sentinel-2 multispectral imagery with 13 bands, 10/20/60m resolution, and a 290 km swath",
  "Multi-source time series for trend and anomaly detection",
];

export default function SatelliteDataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SolutionHero
        badge="Satellite Data Analytics"
        title="Turn EO imagery into operational intelligence"
        description="Build satellite analytics pipelines for monitoring, forecasting, and decision-ready reporting across industries."
        primaryCta={{ label: "Book an EO demo", href: "/book-appointment" }}
        secondaryCta={{ label: "Explore climate risk", href: "/climate-risk-mapping" }}
        imageSrc="/illustrations/hero-satellite-analytics.svg"
        imageAlt="Satellite data analytics illustration"
      />

      <section className="py-14 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Analytics workflows we deliver
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            From raw imagery to insight, we streamline the full EO lifecycle.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workflows.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 360px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Satellite data foundations
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We align analytics to the strengths of leading Earth observation
            missions.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {dataSources.map((item) => (
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
              Ready to scale EO analytics?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              We help teams operationalize EO pipelines with automation and
              reliable delivery.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/book-appointment">Talk to our EO team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
