import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Vinay K N. Built with React &amp; Tailwind.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/vinni363" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/vinay-kn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
            <Linkedin size={16} />
          </a>
          <a href="mailto:vinaykariganur363@gmail.com" aria-label="Email" className="hover:text-foreground">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
