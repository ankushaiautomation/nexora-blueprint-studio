import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildMailto, contactSchema, type ContactValues } from "@/lib/contact";

type Errors = Partial<Record<keyof ContactValues, string>>;

const fieldClass =
  "h-12 rounded-xl border-input bg-surface/70 px-4 text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-cyan";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    window.location.href = buildMailto(parsed.data);
    toast.success("Opening your email app", {
      description: "Your enquiry is pre-filled — just press send.",
    });
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass-card rounded-3xl p-6 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" id="name" error={errors.name}>
          <Input id="name" name="name" placeholder="Your name" autoComplete="name" maxLength={100} className={fieldClass} aria-invalid={!!errors.name} />
        </Field>
        <Field label="Business email" id="email" error={errors.email}>
          <Input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" maxLength={255} className={fieldClass} aria-invalid={!!errors.email} />
        </Field>
        <Field label="Company" id="company" error={errors.company} className="md:col-span-2">
          <Input id="company" name="company" placeholder="Company name (optional)" autoComplete="organization" maxLength={120} className={fieldClass} />
        </Field>
        <Field label="Project requirements" id="requirements" error={errors.requirements} className="md:col-span-2">
          <Textarea
            id="requirements"
            name="requirements"
            rows={6}
            maxLength={2000}
            placeholder="Tell us about your business, the process you want to automate and your goals."
            className="rounded-xl border-input bg-surface/70 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-cyan"
            aria-invalid={!!errors.requirements}
          />
        </Field>
      </div>
      <Button type="submit" variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
        Send Enquiry <Send />
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        Submitting opens your email app with your enquiry ready to send.
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  className,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-sm text-foreground/90">
        {label}
      </Label>
      {children}
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
