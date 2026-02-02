import { Link2, Lightbulb, Cloud, Package } from "lucide-react";

const reasons = [
  {
    icon: Link2,
    title: "End-to-end Integration",
    description: "Seamless geospatial tech integration for efficient data utilization",
  },
  {
    icon: Lightbulb,
    title: "Innovative GIS Solution",
    description: "Customized solutions driving innovation & competitive advantage",
  },
  {
    icon: Cloud,
    title: "Cloud Based Access",
    description: "Secure, scalable, and accessible geospatial data and applications",
  },
  {
    icon: Package,
    title: "One-stop Solution",
    description: "Simplify your geospatial journey with all comprehensive services",
  },
];

export function WhyUs() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why BMINDSET:{" "}
              <span className="text-primary">Transforming Geospatial Possibilities</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-border">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <svg className="w-3/4 h-3/4" viewBox="0 0 200 200">
                  {/* Network visualization */}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className="[stop-color:var(--primary)]" stopOpacity="0.6" />
                      <stop offset="100%" className="[stop-color:var(--accent)]" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  {/* Connection lines */}
                  <line x1="100" y1="50" x2="50" y2="100" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="100" y1="50" x2="150" y2="100" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="50" y1="100" x2="100" y2="150" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="150" y1="100" x2="100" y2="150" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="50" y1="100" x2="150" y2="100" stroke="url(#lineGradient)" strokeWidth="2" />
                  {/* Nodes */}
                  <circle cx="100" cy="50" r="12" className="fill-primary" />
                  <circle cx="50" cy="100" r="10" className="fill-accent" />
                  <circle cx="150" cy="100" r="10" className="fill-primary" />
                  <circle cx="100" cy="150" r="12" className="fill-accent" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
