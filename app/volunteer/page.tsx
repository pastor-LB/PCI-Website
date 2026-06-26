import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import VolunteerForm from "@/components/forms/VolunteerForm";
import { Utensils, GraduationCap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Volunteer in Bridgeport CT | Join Park City Initiative | Help Your Community",
  description:
    "Volunteer with Park City Initiative in Bridgeport, CT. Help at the food pantry, mentor youth, or lead an Adopt-A-Block cleanup in your neighborhood.",
  path: "/volunteer",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Get Involved", href: "/volunteer" },
  { name: "Volunteer", href: "/volunteer" },
];

const opportunities = [
  {
    title: "Food Pantry Volunteer",
    schedule: "Flexible",
    description: "Help sort, pack, and distribute groceries at the Bishop Jean Williams Community Market.",
    icon: Utensils,
  },
  {
    title: "Youth Leader / Mentor",
    schedule: "After school + Saturdays",
    description: "Mentor children in Kidz Academy and S.C.A.M.P. summer camp.",
    icon: GraduationCap,
  },
  {
    title: "Adopt-A-Block Lead",
    schedule: "Monthly",
    description: "Organize and lead a community cleanup on your block.",
    icon: ShieldCheck,
  },
];

export default function VolunteerPage() {
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
      <PageHero title="The Greatest Part of Us Is You." tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="grid gap-8 sm:grid-cols-3">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <Card key={opportunity.title} borderColor="gold">
                <Icon className="h-9 w-9 text-brand-purple" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">
                  {opportunity.title}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-gold">
                  {opportunity.schedule}
                </p>
                <p className="mt-2 text-sm text-brand-gray">{opportunity.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Volunteer Intake Form
        </h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <VolunteerForm />
        </div>
        <p className="mt-6 text-center text-sm text-brand-gray">
          Already a volunteer?{" "}
          <Link href="/contact" className="font-semibold text-brand-purple underline">
            Share your story →
          </Link>
        </p>
      </Section>
    </>
  );
}
