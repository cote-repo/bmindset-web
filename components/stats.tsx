const stats = [
  { value: "100+", label: "Successful Implementations" },
  { value: "80%", label: "Cost saving in resource utilization" },
  { value: "20+", label: "Countries served by BMINDSET" },
  { value: "90+", label: "Improved Decision-Making" },
];

export function Stats() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-primary-foreground mb-12">
          Driving Success: Transformative Geospatial Solutions in Action
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
