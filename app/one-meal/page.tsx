import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import GetHelpForm from "@/components/forms/GetHelpForm";
import { Store, HeartHandshake, Truck } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Bishop Jean Williams Food Pantry | Free Food Bridgeport CT | Park City Initiative",
  description:
    "Free food pantry, senior care boxes, and mobile pantry services from the Bishop Jean Williams Food Pantry at Park City Initiative in Bridgeport, CT.",
  path: "/one-meal",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "One Meal", href: "/one-meal" },
];

const steps = [
  "Call (203) 873-0260 or fill out the Get Help form below",
  "Tell us your household size and needs",
  "We'll confirm pantry hours or schedule a delivery",
  "Visit us or receive your delivery — no judgment, just help",
];

export default function OneMealPage() {
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
      <PageHero title="No One in Bridgeport Should Go to Bed Hungry." tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="grid gap-8 sm:grid-cols-3">
          <Card borderColor="gold">
            <Store className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">Community Market</h3>
            <p className="mt-2 text-sm text-brand-gray">
              A 7,500 sq ft walk-in market with free groceries every Wednesday.
            </p>
          </Card>
          <Card borderColor="purple">
            <HeartHandshake className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">Senior Care Boxes</h3>
            <p className="mt-2 text-sm text-brand-gray">
              5,650 senior care boxes delivered annually to homebound and elderly neighbors.
            </p>
          </Card>
          <Card borderColor="charcoal">
            <Truck className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">Mobile Pantry</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Mobile pantry distributions bring food directly to Bridgeport neighborhoods.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          How to Get Help
        </h2>
        <ol className="mx-auto mt-10 max-w-2xl space-y-6">
          {steps.map((step, index) => (
            <li key={step} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold font-bold text-brand-purple-dark">
                {index + 1}
              </span>
              <p className="text-brand-gray">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section background="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <Card borderColor="gold">
            <h3 className="text-lg font-semibold text-brand-charcoal">Pantry Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-gray">
              <li>Community Market: Wednesdays, walk-in welcome</li>
              <li>Drive-Thru: Tuesdays &amp; Thursdays</li>
              <li>{SITE.address.full}</li>
              <li>{SITE.phoneDisplay}</li>
            </ul>
            <div className="mt-6 aspect-video overflow-hidden rounded-lg">
              <iframe
                title="Map to Bishop Jean Williams Food Pantry"
                src="https://www.google.com/maps?q=857+Howard+Ave+Bridgeport+CT+06605&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              Need mobile pantry dates?{" "}
              <a
                href="https://ctfoodshare.org/find-food/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-purple underline"
              >
                See the CT Foodshare mobile pantry schedule →
              </a>
            </p>
          </Card>
          <div>
            <h3 className="text-lg font-semibold text-brand-charcoal">Request Food Assistance</h3>
            <div className="mt-4">
              <GetHelpForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
