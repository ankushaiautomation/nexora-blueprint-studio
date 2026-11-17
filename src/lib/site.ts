import {
  Bot,
  Workflow,
  AudioLines,
  BookOpenText,
  Building2,
  ShoppingBag,
  Croissant,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

export const CONTACT_EMAIL = "ankush.aiautomation@gmail.com";

/**
 * WhatsApp placeholder — replace with the real link (e.g. "https://wa.me/919999999999")
 * once the number is provided. While this is null, the button shows a "coming soon" notice.
 */
export const WHATSAPP_URL: string | null = null;

export const NAV_LINKS = [
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  summary: string;
  benefits: string[];
};

export const SERVICES: Service[] = [
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    summary:
      "Custom conversational agents that answer questions, qualify leads and complete tasks across your website, WhatsApp and internal tools.",
    benefits: [
      "Respond to customers around the clock",
      "Qualify and route leads automatically",
      "Hand off to your team with full context",
    ],
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    summary:
      "End-to-end workflows that connect your apps, remove repetitive manual steps and keep data flowing between systems.",
    benefits: [
      "Reduce time spent on repetitive admin",
      "Fewer copy-paste errors between tools",
      "Clear, auditable workflow logic",
    ],
  },
  {
    icon: AudioLines,
    title: "AI Voice Assistants",
    summary:
      "Natural-sounding voice agents that handle inbound calls, bookings and common enquiries so your team can focus on complex conversations.",
    benefits: [
      "Never miss an inbound call",
      "Book appointments and capture details",
      "Escalate important calls to a human",
    ],
  },
  {
    icon: BookOpenText,
    title: "AI Knowledge Systems & RAG",
    summary:
      "Private AI assistants grounded in your own documents, policies and product data — giving accurate answers with source references.",
    benefits: [
      "Instant answers from your own knowledge",
      "Faster onboarding for new team members",
      "Responses grounded in your source documents",
    ],
  },
];

export type Solution = {
  icon: LucideIcon;
  industry: string;
  headline: string;
  useCases: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    icon: Building2,
    industry: "Real Estate Agencies",
    headline: "Capture, qualify and nurture property leads automatically.",
    useCases: [
      "24/7 property enquiry assistant on website and WhatsApp",
      "Lead qualification by budget, location and timeline",
      "Automated viewing scheduling and reminders",
      "CRM updates and follow-up sequences",
    ],
  },
  {
    icon: ShoppingBag,
    industry: "E-commerce Businesses",
    headline: "Deliver instant support and smarter shopping experiences.",
    useCases: [
      "Product recommendation and sizing assistant",
      "Order status and returns handling",
      "Abandoned cart and post-purchase follow-ups",
      "Inventory and order data synced across tools",
    ],
  },
  {
    icon: Croissant,
    industry: "Bakeries & Retail Stores",
    headline: "Take orders and answer customers without slowing the counter.",
    useCases: [
      "Menu, pricing and availability questions answered instantly",
      "Custom cake and pre-order intake",
      "Pickup and delivery confirmations",
      "Daily order summaries for the team",
    ],
  },
  {
    icon: BriefcaseBusiness,
    industry: "Service-Based Businesses",
    headline: "Automate bookings, intake and client communication.",
    useCases: [
      "Appointment booking and rescheduling",
      "Client intake forms processed automatically",
      "Quote and proposal drafting with AI",
      "Internal knowledge assistant for your team",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  /** Placeholder until a live demo URL is available. */
  demoUrl: string | null;
};

export const PROJECTS: Project[] = [
  {
    title: "AI Bakery Assistant",
    category: "Conversational AI",
    description:
      "A demonstration chat assistant for a bakery that answers menu questions, takes custom cake requests and confirms pickup times.",
    features: ["Menu & pricing Q&A", "Custom order intake", "Pickup confirmations"],
    stack: ["LLM Agent", "Order Workflow", "Web Chat"],
    demoUrl: null,
  },
  {
    title: "AI Computer Store Assistant",
    category: "Retail AI",
    description:
      "A demonstration product advisor that helps shoppers compare laptops and components based on budget and use case.",
    features: ["Guided product comparison", "Spec-based recommendations", "Stock enquiry handling"],
    stack: ["RAG", "Product Catalogue", "Web Chat"],
    demoUrl: null,
  },
  {
    title: "Real Estate AI Assistant",
    category: "Lead Qualification",
    description:
      "A demonstration assistant that answers property enquiries, qualifies buyers and books viewing appointments.",
    features: ["Property search Q&A", "Buyer qualification", "Viewing scheduling"],
    stack: ["AI Agent", "Calendar Automation", "CRM Sync"],
    demoUrl: null,
  },
  {
    title: "AI Lead Management System",
    category: "Process Automation",
    description:
      "A demonstration pipeline that captures leads from multiple channels, scores them with AI and triggers personalised follow-ups.",
    features: ["Multi-channel lead capture", "AI lead scoring", "Automated follow-ups"],
    stack: ["Workflow Automation", "AI Scoring", "Email & CRM"],
    demoUrl: null,
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    text: "We map your current workflows and identify where AI creates practical value.",
  },
  {
    step: "02",
    title: "Design",
    text: "We design the agent, automation logic and integrations around your real operations.",
  },
  {
    step: "03",
    title: "Build",
    text: "We develop, test and refine the solution with your team's feedback.",
  },
  {
    step: "04",
    title: "Launch & Improve",
    text: "We deploy, monitor performance and keep improving the system over time.",
  },
];
