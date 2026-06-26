import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import GetHelpForm from "@/components/forms/GetHelpForm";
import { Utensils, ShieldAlert, GraduationCap, Phone } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Get Help Now — Food, Housing, Youth Programs | Bridgeport CT | Park City Initiative",
  description:
    "Need food, housing, or youth program support in Bridgeport, CT? Park City Initiative connects you with the resources you need — no judgment, no wait.",
  path: "/get-help",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Get Help", href: "/get-help" },
];

export default function GetHelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentService",
            name: "Park City Initiative Community Assistance",
            serviceType: "Food Assistance, Crisis Resources, Youth Programs",
            provider: { "@type": "Organization", name: SITE.name },
            areaServed: "Bridgeport, CT",
          }),
        }}
      />
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(breadcrumbItems.map((i) => ({ name: i.name, url: `${SITE.url}${i.href}` })))
          ),
        }}
      />
      <PageHero
        title="You Don't Have to Figure This Out Alone."
        subtitle="Whether you need food, a connection to crisis resources, or a youth program for your child, our team is here to help — confidentially and without judgment."
        tall
      />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="grid gap-8 sm:grid-cols-3">
          <Card borderColor="gold">
            <Utensils className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">Food Assistance</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Pantry access, senior care boxes, and mobile pantry deliveries.
            </p>
          </Card>
          <Card borderColor="purple">
            <ShieldAlert className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">Crisis Resources</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Connections to housing, recovery, and emergency support services.
            </p>
          </Card>
          <Card borderColor="charcoal">
            <GraduationCap className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">Youth Programs</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Enroll a child in Kidz Academy, Kidz Mobile, or S.C.A.M.P.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="cream">
        <div className="mx-auto max-w-3xl rounded-2xl bg-brand-purple p-8 text-center text-white shadow-lg">
          <Phone className="mx-auto h-8 w-8 text-brand-gold" aria-hidden="true" />
          <p className="mt-3 font-heading text-3xl font-bold">{SITE.phoneDisplay}</p>
          <p className="mt-2 text-white/80">
            Walk-ins welcome Wednesdays at the Community Market, {SITE.address.full}.
          </p>
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Request Help
        </h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <GetHelpForm />
        </div>
      </Section>
    </>
  );
}
