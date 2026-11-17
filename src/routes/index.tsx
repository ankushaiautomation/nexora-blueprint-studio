import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Layers, Gauge } from "lucide-react";
import heroImage from "@/assets/hero-ai-core.jpg";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, SectionHeading } from "@/components/site/Section";
import { ProjectCard, ServiceCard } from "@/components/site/Cards";
import { CtaBand } from "@/components/site/CtaBand";
import { PROCESS, PROJECTS, SERVICES, SOLUTIONS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "NEXORA AI — Intelligent AI Automation for Business",
      "NEXORA AI builds custom AI agents, chatbots, voice assistants and automation systems that simplify business operations.",
    ),
  }),
  component: Index,
});

const PRINCIPLES = [
  { icon: Sparkles, title: "Practical AI", text: "Solutions built around real business workflows, not hype." },
  { icon: Layers, title: "Fits Your Stack", text: "Designed to work alongside the tools your team already uses." },
  { icon: ShieldCheck, title: "Responsible by Design", text: "Clear guardrails, human hand-off and data-aware architecture." },
  { icon: Gauge, title: "Built to Improve", text: "Monitored and refined over time as your needs evolve." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="bg-hero-glow absolute inset-0" aria-hidden />
        <div className="bg-grid absolute inset-0" aria-hidden />
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <Eyebrow>AI Automation Agency</Eyebrow>
            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.02] text-gradient sm:text-6xl lg:text-7xl">
              Transform Your Business with Intelligent AI Automation.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              NEXORA AI designs and builds AI agents and automation systems that handle repetitive
              work, respond to customers instantly and connect your tools — so your team can focus on
              what moves the business forward.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/solutions">
                  Explore Our Solutions <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
            <p className="mt-10 font-display text-sm tracking-wide text-muted-foreground">
              Intelligence That Moves Business Forward.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl animate-fade-up [animation-delay:150ms]">
            <div className="absolute inset-6 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-glow">
              <img
                src={heroImage}
                alt="Glowing AI neural core surrounded by orbiting data streams"
                width={1408}
                height={1408}
                className="aspect-square w-full object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
            <div className="glass-card absolute -bottom-6 left-4 right-4 rounded-2xl p-4 sm:left-auto sm:right-[-1rem] sm:w-64">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Agent workflow</p>
              <div className="mt-3 space-y-2 text-sm">
                {["Enquiry received", "Intent understood", "Task automated"].map((t, i) => (
                  <div key={t} className="flex items-center gap-2.5">
                    <span className={`size-2 rounded-full ${i === 2 ? "bg-cyan" : "bg-primary"}`} />
                    <span className="text-foreground/90">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-y border-border bg-surface/30 py-14">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <Icon className="mt-0.5 size-5 shrink-0 text-cyan" />
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Services"
              title={<>AI systems engineered for <span className="text-gradient-brand">real operations</span></>}
              description="Four core capabilities that help businesses respond faster, work leaner and scale without adding complexity."
            />
            <Button asChild variant="glass" className="rounded-full self-start md:self-auto">
              <Link to="/services">All services <ArrowRight /></Link>
            </Button>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions teaser */}
      <section className="relative py-24 md:py-32">
        <div className="bg-hero-glow absolute inset-0 opacity-60" aria-hidden />
        <Container className="relative">
          <SectionHeading
            align="center"
            eyebrow="Solutions"
            title="Built for the way your industry works"
            description="Tailored automation for teams that need to move quickly and serve customers well."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map(({ icon: Icon, industry, headline }) => (
              <Link
                key={industry}
                to="/solutions"
                className="glass-card card-interactive group flex flex-col rounded-2xl p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{industry}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{headline}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-cyan">
                  View use cases <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="A clear path from idea to intelligent system"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="bg-background p-7 transition-colors hover:bg-surface">
                <span className="font-display text-sm text-gradient-brand">{p.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio teaser */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Portfolio"
              title="Demonstration projects"
              description="Example builds that show how our AI assistants and automations work in practice."
            />
            <Button asChild variant="glass" className="rounded-full self-start md:self-auto">
              <Link to="/portfolio">View portfolio <ArrowRight /></Link>
            </Button>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
