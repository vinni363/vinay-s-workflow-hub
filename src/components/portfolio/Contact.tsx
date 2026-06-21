import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:vinaykariganur363@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 reveal">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">06 — Contact</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-5">
            Let's automate something useful.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Have a workflow that should run itself? Need help wiring K2, SQL Server, or
            ServiceNow? Drop a message—I usually reply within a day.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              <a
                href="mailto:vinaykariganur363@gmail.com"
                className="hover:text-foreground text-muted-foreground"
              >
                vinaykariganur363@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github size={16} className="text-primary" />
              <a
                href="https://github.com/vinni363"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground text-muted-foreground"
              >
                github.com/vinni363
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={16} className="text-primary" />
              <a
                href="https://linkedin.com/in/vinay-kn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground text-muted-foreground"
              >
                linkedin.com/in/vinay-kn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-primary" />
              <span className="text-muted-foreground">Davangere, Karnataka, India</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7 reveal rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-lg bg-input/40 border border-border/60 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-y"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:-translate-y-0.5 transition-all"
          >
            <Send size={16} />
            {sent ? "Opening your email…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg bg-input/40 border border-border/60 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}
