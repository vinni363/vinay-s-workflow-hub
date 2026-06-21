import { Award } from "lucide-react";

const certs = [
  { name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate", issuer: "Oracle" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-28 md:py-36 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">05 — Certifications</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl">Credentials.</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {certs.map((c) => (
            <div
              key={c.name}
              className="reveal group flex items-center gap-4 rounded-full border border-border/60 bg-card/40 pl-3 pr-6 py-3 hover:border-primary/40 hover:bg-card/70 transition-all"
            >
              <div className="size-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground shadow-glow">
                <Award size={18} />
              </div>
              <div>
                <p className="font-medium leading-tight">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
