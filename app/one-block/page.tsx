import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";
import { Briefcase, ShieldCheck, Users2 } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Youth Community Leadership & Workforce Development | PCY ACTS | Park City Initiative",
  description:
    "Park City Youth ACTS trains young leaders in career readiness, leads Adopt-A-Block cleanups, and develops community leadership in Bridgeport, CT.",
  path: "/one-block",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "One Block", href: "/one-block" },
];

const offerings = [
  {
    title: "Career Readiness",
    description: "Workforce training, resume building, and job-shadowing for Bridgeport youth.",
    icon: Briefcase,
  },
  {
    title: "Adopt-A-Block",
    description: "Neighborhood cleanups that transform blocks and build civic pride.",
    icon: ShieldCheck,
  },
  {
    title: "Leadership Training",
    description: "Hands-on leadership development through Park City Youth ACTS.",
    icon: Users2,
  },
];

const stats = [
  { value: "241+", label: "Youth Served", variant: "purple-on-light" as const },
  { value: "18+", label: "Blocks Adopted", variant: "purple-on-light" as const },
  { value: "50+", label: "Sessions Run Annually", variant: "purple-on-light" as const },
];

export default function OneBlockPage() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(breadcrumbItems.map((i) => ({ name: i.name, url: `${SITE.url}${i.href}` })))
          ),
        }}
      />
      <PageHero title="Engage. Transform. Serve. One Block at a Time." tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="grid gap-8 sm:grid-cols-3">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <Card key={offering.title} borderColor="gold">
                <Icon className="h-9 w-9 text-brand-purple" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">{offering.title}</h3>
                <p className="mt-2 text-sm text-brand-gray">{offering.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="purple" padding="md">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} variant="gold-on-dark" />
          ))}
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Get Involved
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-brand-charcoal">Join Our Team</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Apply to join Park City Youth ACTS as a participant or youth leader.
            </p>
            <a href="/volunteer" className="mt-4 inline-block font-semibold text-brand-purple hover:text-brand-gold">
              Apply Now →
            </a>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-brand-charcoal">Lead a Cleanup</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Organize an Adopt-A-Block cleanup in your neighborhood.
            </p>
            <a
              href="mailto:help@parkcityinitiative.org?subject=Lead%20a%20Block%20Cleanup"
              className="mt-4 inline-block font-semibold text-brand-purple hover:text-brand-gold"
            >
              Email Us →
            </a>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-brand-charcoal">Train Our Leaders</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Share your professional expertise with our youth leadership trainees.
            </p>
            <a
              href="mailto:help@parkcityinitiative.org?subject=Volunteer%20to%20Train%20Youth%20Leaders"
              className="mt-4 inline-block font-semibold text-brand-purple hover:text-brand-gold"
            >
              Email Us →
            </a>
          </Card>
        </div>
      </Section>
    </>
  );
}
