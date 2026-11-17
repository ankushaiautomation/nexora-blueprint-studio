import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL, NAV_LINKS, SERVICES } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="glow-line absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Intelligence That Moves Business Forward. We design and build AI agents and automation
            systems for growing businesses.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-cyan"
          >
            <Mail className="size-4" /> {CONTACT_EMAIL}
          </a>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold text-foreground">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link to="/services" className="text-muted-foreground transition-colors hover:text-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} NEXORA AI. All rights reserved.</p>
          <p>AI Automation & Technology</p>
        </div>
      </div>
    </footer>
  );
}
