import { createFileRoute } from "@tanstack/react-router";
import { Mail, Clock, MessageSquareText } from "lucide-react";
import { Container, PageHeader } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CONTACT_EMAIL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta(
      "Contact NEXORA AI — Book a Free AI Consultation",
      "Get in touch with NEXORA AI to discuss AI agents, automation and voice assistants for your business. Book a free consultation.",
    ),
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something intelligent."
        description="Share a few details about your business and what you'd like to automate. We'll get back to you to arrange a free consultation."
      />
      <section className="pb-24 md:pb-32">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <aside className="space-y-5">
            <div className="glass-card rounded-2xl p-7">
              <Mail className="size-6 text-cyan" />
              <h2 className="mt-5 text-lg font-semibold text-foreground">Email us</h2>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 block break-all text-muted-foreground transition-colors hover:text-cyan"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="glass-card rounded-2xl p-7">
              <MessageSquareText className="size-6 text-cyan" />
              <h2 className="mt-5 text-lg font-semibold text-foreground">Prefer WhatsApp?</h2>
              <p className="mt-2 text-sm text-muted-foreground">Start a quick conversation with our team.</p>
              <WhatsAppButton className="mt-5 w-full" />
            </div>
            <div className="glass-card rounded-2xl p-7">
              <Clock className="size-6 text-cyan" />
              <h2 className="mt-5 text-lg font-semibold text-foreground">What happens next</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We review your requirements, then reach out to schedule a free consultation to explore
                the right AI solution for you.
              </p>
            </div>
          </aside>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
