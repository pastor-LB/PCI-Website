import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { websiteSchema } from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import MissionClarity from "@/components/sections/MissionClarity";
import ProgramCards from "@/components/sections/ProgramCards";
import FoundingStory from "@/components/sections/FoundingStory";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import PartnerLogos from "@/components/sections/PartnerLogos";
import DonateWidget from "@/components/sections/DonateWidget";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export const metadata: Metadata = generatePageMetadata({
  title: "Food Pantry & Community Programs | Park City Initiative — Bridgeport, CT",
  description:
    "Park City Initiative serves Bridgeport, CT families through the Bishop Jean Williams Food Pantry, youth development programs, and community outreach. Over 1 million meals distributed annually.",
  path: "/",
  keywords: [
    "Bridgeport food pantry",
    "Park City Initiative",
    "Bridgeport CT nonprofit",
    "food bank Bridgeport",
    "youth programs Bridgeport",
  ],
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <Hero />
      <ImpactStats />
      <MissionClarity />
      <ProgramCards />
      <FoundingStory />
      <TestimonialCarousel />
      <PartnerLogos />
      <DonateWidget />
      <NewsletterSignup />
    </>
  );
}
