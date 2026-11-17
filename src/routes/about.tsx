import { createFileRoute } from "@tanstack/react-router";
import { Compass, Cpu, Handshake, Target } from "lucide-react";
import heroImage from "@/assets/hero-ai-core.jpg";
import { Container, PageHeader, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "About NEXORA AI — AI Automation Development Agency",
      "NEXORA AI is an AI automation development agency focused on building practical, AI-powered solutions for businesses.",
    ),
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Target, title: "Practical first", text: "We start with the business problem and only use AI where it creates genuine value." },
  { icon: Cpu, title: "Thoughtful engineering", text: "Clean architecture, sensible guardrails and systems that are easy to maintain." },
  { icon: Handshake, title: "Close collaboration", text: "We work alongside your team so every solution fits how you actually operate." },
  { icon: Compass, title: "Long-term thinking", text: "We build foundations that can grow as your business and AI capabilities evolve." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Practical AI, built for business."
        description="NEXORA AI is an AI automation development agency focused on building practical AI-powered business solutions — agents, assistants and workflows that make everyday operations simpler."
      />
      <section className="pb-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={heroImage}
              alt="Abstract AI core representing NEXORA AI's technology focus"
              width={1408}
              height={1408}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Mission"
              title={<>Intelligence that moves <span className="text-gradient-brand">business forward</span></>}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                AI is changing how businesses operate, but many teams don't know where to begin. We
                bridge that gap by turning modern AI capabilities into reliable systems that solve
                specific, everyday problems.
              </p>
              <p>
                Whether it's answering customer enquiries, automating administrative work or making
                company knowledge instantly accessible, our focus is the same: useful technology that
                saves time and improves the experience for your customers and team.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading align="center" eyebrow="What Guides Us" title="Our principles" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass-card card-interactive rounded-2xl p-7">
                <Icon className="size-6 text-cyan" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
