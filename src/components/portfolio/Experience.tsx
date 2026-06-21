const items = [
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "Kochi, India",
    period: "May 2024 — Present",
    bullets: [
      "Developed and deployed 15+ K2 Five workflows automating approval and business processes, materially reducing manual effort and approval turnaround time.",
      "Designed K2 SmartForms and SmartObjects integrated with SQL Server, enabling real-time data access and reporting for business users.",
      "Authored SQL queries and stored procedures that codified business logic and improved data consistency across systems.",
      "Resolved production issues across workflows, SmartObjects, and SQL—keeping application availability high and shrinking incident resolution time.",
      "Partnered with business stakeholders and cross-functional teams to translate requirements into scalable, maintainable workflow solutions.",
      "Supported deployments and change requests through ServiceNow-based ITSM processes.",
    ],
  },
  {
    role: "Bachelor of Engineering, Computer Science",
    company: "Jain Institute of Technology",
    location: "Davanagere, India",
    period: "2019 — 2023",
    bullets: [
      "Graduated with a focus on data structures, databases, and software engineering fundamentals.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">03 — Experience</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl">
            Where I've been building.
          </h2>
        </div>
        <ol className="relative border-l border-border/60 ml-3 md:ml-4 space-y-12">
          {items.map((it) => (
            <li key={it.role} className="reveal pl-8 md:pl-10 relative">
              <span className="absolute -left-[7px] top-2 size-3.5 rounded-full bg-primary shadow-glow" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-semibold text-xl md:text-2xl">
                  {it.role}{" "}
                  <span className="text-primary font-normal">@ {it.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground">{it.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{it.location}</p>
              <ul className="space-y-2.5 text-muted-foreground leading-relaxed">
                {it.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-primary/70 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
