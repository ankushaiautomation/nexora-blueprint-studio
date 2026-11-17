import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Section";

export function CtaBand() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="glass-card relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-16 md:py-20">
          <div
            className="absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl animate-pulse-glow"
            aria-hidden
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              Ready to put <span className="text-gradient-brand">intelligent automation</span> to work?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
              Tell us about your business and we'll map out where AI can save time and improve the
              customer experience.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Book a Free Consultation <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
