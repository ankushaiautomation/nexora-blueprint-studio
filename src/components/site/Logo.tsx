import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="NEXORA AI home">
      <span className="relative grid size-8 place-items-center rounded-lg bg-gradient-brand shadow-glow">
        <span className="size-3 rotate-45 rounded-[3px] border-2 border-primary-foreground transition-transform duration-500 group-hover:rotate-[225deg]" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        NEXORA <span className="text-gradient-brand">AI</span>
      </span>
    </Link>
  );
}
