import type { Metadata } from "next";
import { HeartHandshake, Truck, HandCoins, ShieldCheck, Award, Coins, Sun, Trophy, Store } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import StoryTimeline from "@/components/sections/StoryTimeline";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Story — From One Request to 1 Million Meals | Park City Initiative",
  description:
    "The story of Park City Initiative: from Bishop Jean Williams's request in 1999 to distributing over 1 million meals a year in Bridgeport, CT.",
  path: "/our-story",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Story", href: "/our-story" },
];

const milestones = [
  { year: "1999", title: "A Partnership is Born", description: "Bishop Jean Williams asks her daughter, Mary Green, for help feeding hungry families in Bridgeport.", icon: HeartHandshake },
  { year: "2003", title: "Metro Kidz Mobile Outreach Launches", description: "Mobile outreach begins serving 500+ children weekly across the city.", icon: Truck },
  { year: "2004", title: "Access to Recovery Provider", description: "PCI becomes an Access to Recovery provider, and United Way funding begins.", icon: HandCoins },
  { year: "2007", title: "Adopt-A-Block Program Launches", description: "A $10,000 city grant launches the Adopt-A-Block neighborhood cleanup program.", icon: ShieldCheck },
  { year: "2014", title: "First Refrigerated Truck", description: "A $15,000 Walmart grant funds PCI's first refrigerated delivery truck.", icon: Truck },
  { year: "2018", title: "686,000 lbs of Food Distributed", description: "PCI distributes 686,000 lbs of food and 340,000+ meals in a single year.", icon: Award },
  { year: "2020", title: "COVID-19 Volunteer Recognition", description: "PCI's pandemic-response volunteers are recognized by Senator Blumenthal.", icon: ShieldCheck },
  { year: "2021", title: "Major Funding Awards", description: "Hartford Healthcare awards $50,000 and First County Bank awards $5,000.", icon: Coins },
  { year: "2022", title: "S.C.A.M.P. Summer Camp Launches", description: "The first year of S.C.A.M.P. summer camp runs free for all participating families.", icon: Sun },
  { year: "2023", title: "One Million Meals & 20th Anniversary", description: "PCI hits the one-million-meal milestone, launches Park City Youth ACTS, opens PCK Academy, celebrates 20 years, and moves to 3160 Park Ave.", icon: Trophy },
  { year: "2025", title: "One-Stop-Shop Community Market Opens", description: "A 7,500 sq ft Community Market opens with a Hartford Health Care clinic, financial literacy programs, and wraparound services.", icon: Store },
];

export default function OurStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(breadcrumbItems.map((i) => ({ name: i.name, url: `${SITE.url}${i.href}` })))
          ),
        }}
      />
      <PageHero title="From Roots to Wings" tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <StoryTimeline milestones={milestones} />
      </Section>

      <CTABanner
        heading="Be Part of the Next Chapter"
        primaryHref="/donate"
        primaryLabel="Donate"
        secondaryHref="/volunteer"
        secondaryLabel="Volunteer"
      />
    </>
  );
}
