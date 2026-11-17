import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppButton({ className }: { className?: string | undefined }) {
  if (WHATSAPP_URL) {
    return (
      <Button asChild variant="glass" size="xl" className={className}>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <MessageCircle /> Chat on WhatsApp
        </a>
      </Button>
    );
  }
  return (
    <Button
      variant="glass"
      size="xl"
      className={className}
      onClick={() =>
        toast("WhatsApp coming soon", {
          description: "Our WhatsApp number will be added shortly. Please use email for now.",
        })
      }
    >
      <MessageCircle /> Chat on WhatsApp
      <span className="rounded-full bg-surface-strong px-2 py-0.5 text-[0.65rem] text-muted-foreground">
        Placeholder
      </span>
    </Button>
  );
}
