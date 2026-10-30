import {
  BadgeCheck,
  CalendarDays,
  Clock,
  Globe,
  Home,
  MapPin,
  MessageCircle,
  ReceiptText,
  Share2,
  Wrench,
} from "lucide-react";
import "../i18n";

export const navLinks = [
  { href: "/", label: "header.home" },
  { href: "/services", label: "header.services" },
  { href: "#how-it-works", label: "header.howItWorks" },
  { href: "/contact", label: "header.contact" },
];

export const howItWorksSteps = [
  {
    icon: Wrench,
    titleKey: "howItWorks.steps.choose.title",
    descriptionKey: "howItWorks.steps.choose.description",
    highlightKey: "howItWorks.steps.choose.highlight",
  },
  {
    icon: CalendarDays,
    titleKey: "howItWorks.steps.schedule.title",
    descriptionKey: "howItWorks.steps.schedule.description",
    highlightKey: "howItWorks.steps.schedule.highlight",
  },
  {
    icon: Home,
    titleKey: "howItWorks.steps.complete.title",
    descriptionKey: "howItWorks.steps.complete.description",
    highlightKey: "howItWorks.steps.complete.highlight",
  },
];

export const whyChooseHomioFeatures = [
  {
    icon: BadgeCheck,
    titleKey: "whyChooseHomio.features.verified.title",
    descriptionKey: "whyChooseHomio.features.verified.description",
  },
  {
    icon: ReceiptText,
    titleKey: "whyChooseHomio.features.prices.title",
    descriptionKey: "whyChooseHomio.features.prices.description",
  },
  {
    icon: Clock,
    titleKey: "whyChooseHomio.features.flexible.title",
    descriptionKey: "whyChooseHomio.features.flexible.description",
  },
  {
    icon: MapPin,
    titleKey: "whyChooseHomio.features.tracking.title",
    descriptionKey: "whyChooseHomio.features.tracking.description",
  },
];

export const testimonials = [
  {
    quoteKey: "testimonials.items.nour.quote",
    nameKey: "testimonials.items.nour.name",
    roleKey: "testimonials.items.nour.role",
    initials: "NH",
  },
  {
    quoteKey: "testimonials.items.ahmed.quote",
    nameKey: "testimonials.items.ahmed.name",
    roleKey: "testimonials.items.ahmed.role",
    initials: "AF",
  },
  {
    quoteKey: "testimonials.items.mariam.quote",
    nameKey: "testimonials.items.mariam.name",
    roleKey: "testimonials.items.mariam.role",
    initials: "MA",
  },
];

export const footerLinkGroups = [
  {
    titleKey: "footer.servicesTitle",
    links: [
      { labelKey: "footer.links.cleaning", href: "#" },
      { labelKey: "footer.links.plumbing", href: "#" },
      { labelKey: "footer.links.electrical", href: "#" },
      { labelKey: "footer.links.maintenance", href: "#" },
    ],
  },
  {
    titleKey: "footer.companyTitle",
    links: [
      { labelKey: "footer.links.about", href: "#" },
      { labelKey: "footer.links.howItWorks", href: "#" },
      { labelKey: "footer.links.contact", href: "#" },
      { labelKey: "footer.links.careers", href: "#" },
    ],
  },
  {
    titleKey: "footer.supportTitle",
    links: [
      { labelKey: "footer.links.help", href: "#" },
      { labelKey: "footer.links.faqs", href: "#" },
      { labelKey: "footer.links.terms", href: "#" },
      { labelKey: "footer.links.privacy", href: "#" },
    ],
  },
];

export const footerSocials = [
  { icon: Globe, href: "#", labelKey: "footer.social.website" },
  { icon: MessageCircle, href: "#", labelKey: "footer.social.support" },
  { icon: Share2, href: "#", labelKey: "footer.social.share" },
];
