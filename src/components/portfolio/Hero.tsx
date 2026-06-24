import { Link } from "@tanstack/react-router";
import { Calendar, Download, Github, Linkedin, Mail } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import avatar from "@/assets/vinay-headshot.png.asset.json";

const socials = [
  { href: "https://github.com/vinni363", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/vinay-kn", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:vinaykn@example.com", label: "Email", Icon: Mail },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      <div className="absolute inset-0 bg-hero-gradient animate-hero-shift" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[140px]"
        aria-hidden
      />

      <div className="relative w-full max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="reveal relative mb-10">
          <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-br from-primary/50 to-transparent blur-xl opacity-70" aria-hidden />
          <img
            src={avatar.url}
            alt="Vinay K N — portrait"
            className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover ring-1 ring-border/80 shadow-glow"
          />
        </div>

        <h1 className="reveal font-display font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-4">
          Vinay K N
        </h1>
        <p className="reveal text-lg md:text-xl text-muted-foreground mb-8">
          Systems Engineer — Workflow Automation &amp; BPM
        </p>

        <div className="reveal flex flex-wrap items-center justify-center gap-2 mb-10">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-card hover:-translate-y-0.5 transition-all"
            >
              <Icon size={14} /> {label}
            </a>
          ))}
        </div>

        <div className="reveal space-y-5 text-base md:text-lg text-muted-foreground/95 leading-relaxed max-w-2xl mb-10">
          <p>
            Assistant System Engineer at <span className="text-foreground font-medium">Tata Consultancy Services</span>,
            designing K2 Five workflows and SmartForms that replace manual approval chains with
            reliable, auditable automation.
          </p>
          <p>
            I specialize in BPM, low-code workflow design, SQL Server integrations, and Oracle Cloud
            Infrastructure AI services — turning messy business processes into systems that just work.
          </p>
        </div>

        <div className="reveal flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm font-medium hover:bg-card transition-all"
          >
            About Me
          </Link>
          <a
            href={resumeAsset.url}
            download="Vinay_KN_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:-translate-y-0.5 transition-all"
          >
            <Download size={14} /> Resume
          </a>
          <Link
            to="/about"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-glow hover:-translate-y-0.5 transition-all"
          >
            <Calendar size={14} /> Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
