import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SolutionHero } from "@/components/solution-hero";

export const metadata: Metadata = {
  title: "Geospatial Analytics & Location Intelligence | BMINDSET TECHNOLOGY",
  description:
    "Transform geospatial data into actionable intelligence with spatial analytics, modeling, and decision-ready dashboards.",
  keywords: [
    "Geospatial analytics",
    "Location intelligence platform",
    "Spatial data analytics",
    "Spatial AI analytics",
    "Decision intelligence using GIS",
  ],
  alternates: {
    canonical: "https://www.bmindsets.com/geospatial-analytics",
  },
  openGraph: {
    title: "Geospatial Analytics & Location Intelligence | BMINDSET TECHNOLOGY",
    description:
      "Transform geospatial data into actionable intelligence with spatial analytics, modeling, and decision-ready dashboards.",
    url: "https://www.bmindsets.com/geospatial-analytics",
    images: ["/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geospatial Analytics & Location Intelligence | BMINDSET TECHNOLOGY",
    description:
      "Transform geospatial data into actionable intelligence with spatial analytics, modeling, and decision-ready dashboards.",
    images: ["/icon-512.png"],
  },
};

const analytics = [
  "Spatial joins, clustering, and hotspot detection",
  "Drive-time and service-area modeling",
  "Change detection and trend analysis",
  "Real-time sensor and IoT data fusion",
  "Automated reporting for stakeholders",
  "Scenario testing for planning decisions",
];

const foundations = [
  "Fuse geospatial layers with business data and KPIs",
  "Align spatial models to decisions and operational workflows",
  "Deliver insights through maps, dashboards, and alerts",
  "Maintain data quality with governance and metadata",
];

const outcomes = [
  "Identify underserved areas and growth opportunities",
  "Optimize asset placement and maintenance routes",
  "Reduce risk through early warning insights",
  "Align investments with evidence-based planning",
];

export default function GeospatialAnalyticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SolutionHero
        badge="Geospatial Analytics"
        title="Location intelligence for data-driven decisions"
        description="Turn location data into measurable outcomes with spatial analytics, visualization, and AI-ready pipelines."
        primaryCta={{ label: "Book an analytics demo", href: "/book-appointment" }}
        secondaryCta={{ label: "Explore platform", href: "/gis-platform" }}
        imageSrc="/illustrations/hero-geospatial-analytics.svg"
        imageAlt="Geospatial analytics illustration"
      />

      <section className="py-14 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Analytics capabilities
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Combine spatial data with business and operational context to reveal
            patterns, risks, and opportunities.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {analytics.map((item) => (
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
            Location intelligence foundations
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Location intelligence combines geospatial data with business context
            to reveal spatial relationships and guide decisions. We operationalize
            these principles in dashboards and workflows.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {foundations.map((item) => (
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
            Outcome-driven insight delivery
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Every model is tied to an operational outcome, enabling measurable
            impact.
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
              Ready to operationalize geospatial intelligence?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              We design analytics pipelines that deliver insight to the teams
              making critical decisions.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/book-appointment">Talk to our analytics team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
