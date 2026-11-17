import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { Container, PageHeader } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/Cards";
import { CtaBand } from "@/components/site/CtaBand";
import { PROJECTS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: pageMeta(
      "Portfolio — AI Assistant & Automation Demos | NEXORA AI",
      "Demonstration projects by NEXORA AI: AI bakery assistant, computer store assistant, real estate assistant and AI lead management system.",
    ),
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Demonstration projects."
        description="A selection of demo builds that show how NEXORA AI assistants and automations work across different business scenarios."
      />
      <section className="pb-12">
        <Container>
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-border bg-surface/60 px-5 py-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-cyan" />
            These are demonstration projects built to showcase capabilities. Live demo links will be
            added soon.
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
