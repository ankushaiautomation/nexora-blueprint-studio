import { Check, ExternalLink, FlaskConical } from "lucide-react";
import type { Project, Service, Solution } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <article className="glass-card card-interactive group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 md:p-8">
      <div
        className="absolute -right-16 -top-16 size-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-xl border border-border bg-surface-strong text-cyan transition-colors group-hover:border-cyan/40">
          <Icon className="size-6" />
        </span>
        <span className="font-display text-sm text-muted-foreground">0{index + 1}</span>
      </div>
      <h3 className="mt-7 text-xl font-semibold text-foreground md:text-2xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">{service.summary}</p>
      <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
        {service.benefits.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan" />
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <article className="glass-card card-interactive flex h-full flex-col rounded-2xl p-7 md:p-8">
      <div className="flex items-center gap-4">
        <span className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
          <Icon className="size-5" />
        </span>
        <h3 className="text-lg font-semibold text-foreground md:text-xl">{solution.industry}</h3>
      </div>
      <p className="mt-5 text-base leading-relaxed text-foreground/90">{solution.headline}</p>
      <ul className="mt-6 grid gap-2.5">
        {solution.useCases.map((u) => (
          <li
            key={u}
            className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
            {u}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card card-interactive group flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="relative h-44 overflow-hidden border-b border-border bg-surface">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div
          className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-3xl transition-transform duration-700 group-hover:scale-125"
          aria-hidden
        />
        <div className="absolute inset-x-6 bottom-6 space-y-2">
          <div className="h-2 w-3/5 rounded-full bg-foreground/15" />
          <div className="h-2 w-2/5 rounded-full bg-cyan/40" />
          <div className="ml-auto h-7 w-1/2 rounded-lg border border-border bg-background/60" />
        </div>
        <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-background/70 px-3 py-1 text-xs font-medium text-cyan backdrop-blur">
          <FlaskConical className="size-3.5" /> Demo Project
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-5 space-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/90">
              <Check className="size-4 text-cyan" /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-7">
          {project.demoUrl ? (
            <Button asChild variant="glass" className="w-full rounded-full">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                View Live Demo <ExternalLink />
              </a>
            </Button>
          ) : (
            <Button variant="glass" className="w-full rounded-full" disabled aria-label={`${project.title} demo link placeholder`}>
              [Demo link placeholder — coming soon]
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
