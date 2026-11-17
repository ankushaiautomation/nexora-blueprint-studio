import { z } from "zod";
import { CONTACT_EMAIL } from "./site";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your business email")
    .email("Please enter a valid email address")
    .max(255, "Email must be under 255 characters"),
  company: z.string().trim().max(120, "Company must be under 120 characters").optional().or(z.literal("")),
  requirements: z
    .string()
    .trim()
    .min(10, "Please share a few details (at least 10 characters)")
    .max(2000, "Please keep it under 2000 characters"),
});

export type ContactValues = z.infer<typeof contactSchema>;

/** Builds a mailto link so enquiries reach the agency inbox without any backend service. */
export function buildMailto(v: ContactValues) {
  const subject = `New project enquiry from ${v.name}${v.company ? ` (${v.company})` : ""}`;
  const body = [
    `Name: ${v.name}`,
    `Business email: ${v.email}`,
    `Company: ${v.company || "-"}`,
    "",
    "Project requirements:",
    v.requirements,
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
