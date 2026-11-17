import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "@/lib/contact";

const valid = {
  name: "Jane",
  email: "jane@company.com",
  company: "Acme",
  requirements: "Automate our lead follow-ups",
};

describe("contact form", () => {
  it("sends enquiries to ankush.aiautomation@gmail.com", () => {
    expect(buildMailto(valid).startsWith("mailto:ankush.aiautomation@gmail.com?")).toBe(true);
  });

  it("rejects an invalid business email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("allows company to be left empty", () => {
    expect(contactSchema.safeParse({ ...valid, company: "" }).success).toBe(true);
  });
});
