export const SITE = {
  name: "Park City Initiative",
  shortName: "PCI",
  tagline: "One Meal. One Child. One Block at a Time.",
  description:
    "Park City Initiative is a Bridgeport, CT nonprofit serving families facing food insecurity through the Bishop Jean Williams Food Pantry, youth development programs, and community outreach. Over 1 million meals served annually.",
  url: "https://www.parkcityinitiative.org",
  phone: "203-873-0260",
  phoneDisplay: "(203) 873-0260",
  email: "help@parkcityinitiative.org",
  infoEmail: "info@parkcityinitiative.org",
  address: {
    street: "857 Howard Ave",
    city: "Bridgeport",
    state: "CT",
    zip: "06605",
    full: "857 Howard Ave, Bridgeport, CT 06605",
  },
  mailingAddress: "P.O. Box 915, Bridgeport, CT 06601",
  social: {
    facebook: "https://www.facebook.com/PCIBpt",
    instagram: "https://www.instagram.com/pcibpt/",
  },
  ein: "[ INSERT EIN ]",
  founded: 1999,
  stats: {
    meals: "1,000,000+",
    families: "900+",
    seniors: "5,650",
    children: "220+",
    volunteers: "241+",
    years: "27+",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/our-story" },
      { label: "Our Impact", href: "/our-impact" },
      { label: "Partners", href: "/about#partners" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "One Meal (Food Pantry)", href: "/one-meal" },
      { label: "One Child (Youth Programs)", href: "/one-child" },
      { label: "One Block (Community Acts)", href: "/one-block" },
    ],
  },
  {
    label: "Get Involved",
    href: "/volunteer",
    children: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Walk-A-Thon", href: "/walk-a-thon" },
    ],
  },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Get Help", href: "/get-help" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Programs", href: "/programs" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_PROGRAM_LINKS = [
  { label: "One Meal", href: "/one-meal" },
  { label: "One Child", href: "/one-child" },
  { label: "One Block", href: "/one-block" },
  { label: "Walk-A-Thon 2026", href: "/walk-a-thon" },
] as const;
