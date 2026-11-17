import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SectionHeading } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/Cards";
import { CtaBand } from "@/components/site/CtaBand";
import { PROCESS, SERVICES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: pageMeta(
      "AI Automation Services — Agents, Voice & RAG | NEXORA AI",
      "AI agents and chatbots, business process automation, AI voice assistants and knowledge systems with RAG — built by NEXORA AI.",
    ),
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="AI services that simplify how your business runs."
        description="From customer-facing agents to behind-the-scenes workflows, we build AI systems that remove friction and give your team time back."
      />
      <section className="pb-24">
        <Container className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </Container>
      </section>
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Our Process" title="How every engagement runs" />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li key={p.step} className="glass-card card-interactive rounded-2xl p-7">
                <span className="font-display text-3xl font-semibold text-gradient-brand">{p.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
