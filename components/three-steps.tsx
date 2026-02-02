import { Map, BarChart3, Layers } from "lucide-react";

const steps = [
  {
    icon: Map,
    title: "Maps & Data",
    description: "Leverage BMINDSET's expertise to collect and analyze comprehensive geospatial maps and datasets.",
  },
  {
    icon: BarChart3,
    title: "Analysis",
    description: "Uncover valuable patterns and relationships within your geospatial data using advanced analysis techniques.",
  },
  {
    icon: Layers,
    title: "Applications",
    description: "Transform geospatial insights into practical applications that align with your business objectives.",
  },
];

export function ThreeSteps() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Simplifying Geospatial Insights in just{" "}
            <span className="text-primary">Three Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg h-full">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
