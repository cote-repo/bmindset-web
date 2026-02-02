import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SolutionHero } from "@/components/solution-hero";

export const metadata: Metadata = {
  title: "Climate Risk Mapping & Resilience Analytics | BMINDSET TECHNOLOGY",
  description:
    "Visualize flood, drought, and climate hazards with data-driven risk mapping and resilience planning tools.",
  keywords: [
    "Climate risk mapping",
    "Climate intelligence platform",
    "Disaster risk GIS platform",
    "Flood and drought risk mapping",
    "Environmental monitoring GIS",
  ],
  alternates: {
    canonical: "https://www.bmindsets.com/climate-risk-mapping",
  },
  openGraph: {
    title: "Climate Risk Mapping & Resilience Analytics | BMINDSET TECHNOLOGY",
    description:
      "Visualize flood, drought, and climate hazards with data-driven risk mapping and resilience planning tools.",
    url: "https://www.bmindsets.com/climate-risk-mapping",
    images: ["/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Climate Risk Mapping & Resilience Analytics | BMINDSET TECHNOLOGY",
    description:
      "Visualize flood, drought, and climate hazards with data-driven risk mapping and resilience planning tools.",
    images: ["/icon-512.png"],
  },
};

const riskCapabilities = [
  "Hazard, exposure, and vulnerability scoring",
  "Scenario-based flood and coastal impact modeling",
  "Drought and water-stress monitoring",
  "Heat stress and urban risk hotspots",
  "Infrastructure and asset risk overlays",
  "Reporting for ESG and resilience planning",
];

const outcomes = [
  "Prioritize adaptation investments with evidence",
  "Identify high-risk communities and assets",
  "Improve emergency planning and response",
  "Communicate risk clearly to stakeholders",
];

const referenceSignals = [
  "Sea level rise impact mapping with scenarios up to 10 feet",
  "Depth rasters for ocean-connected inundation and depth above ground",
  "Socioeconomic vulnerability overlays for prioritization",
];

export default function ClimateRiskMappingPage() {
  return (
    <main className="min-h-screen bg-background">
      <SolutionHero
        badge="Climate Risk Mapping"
        title="Climate intelligence for resilient decisions"
        description="Map risk across hazards, assets, and communities to guide climate adaptation and resilience planning."
        primaryCta={{ label: "Book a climate demo", href: "/book-appointment" }}
        secondaryCta={{ label: "Explore EO analytics", href: "/satellite-data-analytics" }}
        imageSrc="/illustrations/hero-climate-risk.svg"
        imageAlt="Climate risk mapping illustration"
      />

      <section className="py-14 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Risk analytics capabilities
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Move from static maps to dynamic risk intelligence across scenarios.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {riskCapabilities.map((item) => (
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
            Reference signals we align to
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We integrate leading public datasets to ground risk models in
            defensible evidence.
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
            Outcomes that matter
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We translate climate signals into clear priorities and action.
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
              Ready to build a climate risk map?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              We help agencies and enterprises design maps that communicate risk
              clearly and support real action.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/book-appointment">Talk to our climate team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
