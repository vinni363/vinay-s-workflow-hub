import { Workflow, Database, LifeBuoy, GitBranch, Code2, Brain } from "lucide-react";

const groups = [
  {
    icon: Workflow,
    title: "Automation Platforms",
    items: ["K2 Five", "K2 SmartForms", "K2 SmartObjects", "K2 Workflow Designer"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["SQL Server", "Stored Procedures", "Complex Queries", "Data Integration"],
  },
  {
    icon: LifeBuoy,
    title: "ITSM & Support",
    items: ["ServiceNow", "Production Support", "Incident Resolution", "Change Management"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Tooling",
    items: ["Git", "Agile / Scrum", "Documentation", "Testing"],
  },
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "Java (basic)", "SQL", "Data Structures"],
  },
  {
    icon: Brain,
    title: "Cloud & AI",
    items: ["Oracle Cloud Infrastructure", "AI Foundations", "Data Engineering (learning)"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">02 — Skills</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl max-w-2xl">
            The stack I ship with.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="reveal group rounded-2xl border border-border/60 bg-card/40 p-6 hover:border-primary/40 hover:bg-card/70 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-lg">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <li
                    key={it}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-secondary-foreground border border-border/40"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
