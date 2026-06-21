export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 reveal">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">01 — About</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            Built for the boring problems that matter.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg reveal">
          <p>
            I'm a K2 Workflow Automation Developer with{" "}
            <span className="text-foreground font-medium">2+ years</span> of experience
            designing, developing, and supporting enterprise workflow applications using
            K2 Five, SmartForms, SmartObjects, SQL Server, and ServiceNow.
          </p>
          <p>
            My day-to-day is workflow automation, process optimization, backend integration,
            production support, and SQL development—translating real business requirements
            into scalable solutions inside Agile teams.
          </p>
          <p>
            I'm Oracle Cloud Infrastructure AI Foundations certified and actively expanding
            into <span className="text-foreground font-medium">Data Engineering and AI</span>,
            because the next generation of automation is intelligent by default.
          </p>
        </div>
      </div>
    </section>
  );
}
