import { Link } from "@tanstack/react-router";
import { Briefcase, Home, User } from "lucide-react";

const links = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/about", label: "About", Icon: User },
  { to: "/work", label: "Work", Icon: Briefcase },
] as const;

export function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="flex items-center gap-1 rounded-full border border-border/70 bg-background/70 px-2 py-1.5 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
      >
        {links.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: true }}
            activeProps={{
              className:
                "bg-card text-foreground border-border/80",
            }}
            inactiveProps={{
              className:
                "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/60",
            }}
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors"
          >
            <Icon size={14} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
