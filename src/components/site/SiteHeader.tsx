import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/75 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-surface-strong/70" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm" className="h-10 rounded-full px-5">
            <Link to="/contact">
              Contact Us <ArrowRight />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="glass" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] border-border bg-background">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="mt-2">
              <Logo />
            </div>
            <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
              {[{ to: "/", label: "Home" } as const, ...NAV_LINKS, { to: "/contact", label: "Contact" } as const].map(
                (l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 font-display text-lg text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                    activeProps={{ className: "bg-surface text-foreground" }}
                    activeOptions={{ exact: true }}
                  >
                    {l.label}
                  </Link>
                ),
              )}
            </nav>
            <Button asChild variant="hero" size="xl" className="mt-8 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book a Free Consultation
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
