import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "K2 Workflow Templates",
    description:
      "A reusable library of K2 Five workflow patterns for common enterprise approvals. Cuts ramp-up time on new automation projects by giving developers a tested starting point.",
    tech: ["K2 Five", "SmartForms", "SmartObjects"],
    repo: "https://github.com/vinni363",
  },
  {
    name: "SQL Procedures Toolkit",
    description:
      "Stored procedures and SQL utilities that encode common business logic—data validation, audit trails, and reporting—designed to drop into existing SQL Server environments.",
    tech: ["SQL Server", "T-SQL", "Stored Procedures"],
    repo: "https://github.com/vinni363",
  },
  {
    name: "ServiceNow Integration Helpers",
    description:
      "Scripts and patterns for wiring K2 workflows into ServiceNow ITSM—change requests, incidents, and approvals that stay in sync between both systems.",
    tech: ["ServiceNow", "K2", "REST"],
    repo: "https://github.com/vinni363",
  },
  {
    name: "OCI AI Foundations Notes",
    description:
      "Personal study notes and hands-on labs from the Oracle Cloud Infrastructure AI Foundations certification—covering core ML/AI concepts and OCI services.",
    tech: ["OCI", "AI", "Python"],
    repo: "https://github.com/vinni363",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">04 — Projects</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl">Selected work.</h2>
          </div>
          <a
            href="https://github.com/vinni363"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Github size={16} /> See all on GitHub
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative rounded-2xl border border-border/60 bg-card/40 p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/70 hover:shadow-card"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.14_195/0.12),transparent_60%)]"
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-semibold text-xl">{p.name}</h3>
                  <span className="size-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <ArrowUpRight size={16} className="transition-transform group-hover:rotate-0 -rotate-12" />
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 border border-border/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  View Project <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
