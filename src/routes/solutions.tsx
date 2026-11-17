import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Section";
import { SolutionCard } from "@/components/site/Cards";
import { CtaBand } from "@/components/site/CtaBand";
import { SOLUTIONS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: pageMeta(
      "Industry AI Solutions — Real Estate, E-commerce & Retail | NEXORA AI",
      "AI automation use cases for real estate agencies, e-commerce brands, bakeries, retail stores and service-based businesses.",
    ),
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="AI automation tailored to your industry."
        description="Every business has different bottlenecks. These are the practical use cases we design for the industries we work with most."
      />
      <section className="pb-12">
        <Container className="grid gap-5 md:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <SolutionCard key={s.industry} solution={s} />
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
