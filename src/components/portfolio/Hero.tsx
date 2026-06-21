import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-hero-gradient animate-hero-shift" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <p className="reveal text-sm uppercase tracking-[0.2em] text-primary mb-6">
          Systems Engineer
        </p>
        <h1 className="reveal font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 max-w-4xl">
          <span className="text-gradient">Vinay K N</span>
        </h1>
        <p className="reveal text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
          Workflow Automation &amp; BPM Engineer
        </p>
        <p className="reveal text-base md:text-lg text-muted-foreground/90 max-w-2xl mb-10 leading-relaxed">
          I help enterprises replace manual approval chains with reliable, scalable
          K2 workflows—turning messy business processes into systems that just work.
        </p>

        <div className="reveal flex flex-wrap gap-3 mb-12">
          <a
            href={resumeAsset.url}
            download="Vinay_KN_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-10px_oklch(0.78_0.14_195/0.55)]"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 font-medium hover:bg-card/80 hover:-translate-y-0.5 transition-all"
          >
            <Mail size={16} /> Contact
          </a>
          <a
            href="https://github.com/vinni363"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 font-medium hover:bg-card/80 hover:-translate-y-0.5 transition-all"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/vinay-kn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 font-medium hover:bg-card/80 hover:-translate-y-0.5 transition-all"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <a
          href="#about"
          className="reveal inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="h-px w-12 bg-border" /> Scroll <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
