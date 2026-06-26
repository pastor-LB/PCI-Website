import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import { GraduationCap, Truck, Sun } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Youth Programs Bridgeport CT | Park City Kidz Academy & Summer Camp | Park City Initiative",
  description:
    "Park City Kidz Academy, Kidz Mobile, and S.C.A.M.P. summer camp build tomorrow's leaders through life-skills training and mentorship in Bridgeport, CT.",
  path: "/one-child",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "One Child", href: "/one-child" },
];

export default function OneChildPage() {
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
      <PageHero title="Building Tomorrow's Leaders. Starting Today." tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="cream" padding="md">
        <blockquote className="mx-auto max-w-2xl text-center font-heading text-2xl italic text-brand-purple">
          &ldquo;It is easier to build strong children than to repair broken men and
          women.&rdquo;
          <footer className="mt-3 text-base text-brand-gray">— Bill Wilson, Metro World Child</footer>
        </blockquote>
      </Section>

      <Section background="white">
        <div className="grid gap-8 sm:grid-cols-3">
          <Card borderColor="gold">
            <GraduationCap className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">Kidz Academy</h3>
            <p className="mt-2 text-sm text-brand-gray">
              After-school life-skills training and academic mentorship for Bridgeport youth.
            </p>
          </Card>
          <Card borderColor="purple">
            <Truck className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">Kidz Mobile</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Mobile outreach bringing programming directly into Bridgeport neighborhoods.
            </p>
          </Card>
          <Card borderColor="charcoal">
            <Sun className="h-9 w-9 text-brand-purple" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">S.C.A.M.P.</h3>
            <p className="mt-2 text-sm text-brand-gray">
              A summer camp giving children a safe, fun, and enriching place to grow each
              summer.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Photo Gallery
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80"
                // TODO: Replace with actual PCI photography
                alt="Children participating in Park City Initiative youth programs"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section background="purple" padding="md">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-white">Sponsor a Camper</h2>
          <p className="mt-2 text-white/80">
            $25 sends a child to S.C.A.M.P. summer camp for a full week.
          </p>
          <div className="mt-6">
            <Button href="/donate?amount=25" variant="gold" size="lg">
              Sponsor a Camper — $25
            </Button>
          </div>
        </div>
      </Section>

      <CTABanner
        heading="Mentor a Child. Change a Future."
        primaryHref="/volunteer"
        primaryLabel="Volunteer"
      />
    </>
  );
}
