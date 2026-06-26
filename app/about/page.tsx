import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import PartnerLogos from "@/components/sections/PartnerLogos";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us — Park City Initiative | Nonprofit Bridgeport CT",
  description:
    "Learn about Park City Initiative, a 22-year-old Bridgeport, CT nonprofit fighting food insecurity and building community through youth programs and outreach.",
  path: "/about",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const staffPlaceholders = [
  { name: "Mary Green", role: "Chief Executive Officer" },
  { name: "Staff Member", role: "Program Director" }, // PLACEHOLDER
  { name: "Staff Member", role: "Operations Manager" }, // PLACEHOLDER
];

export default function AboutPage() {
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
      <PageHero title="We Are Park City Initiative" tall={false} />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="grid gap-8 sm:grid-cols-2">
          <Card borderColor="gold">
            <h2 className="font-heading text-2xl font-semibold text-brand-purple">Our Mission</h2>
            <p className="mt-3 text-brand-gray">
              To meet basic needs today, restore hope for tomorrow, and transform lives forever
              through food assistance, youth development, and community outreach in Bridgeport,
              CT.
            </p>
          </Card>
          <Card borderColor="purple">
            <h2 className="font-heading text-2xl font-semibold text-brand-purple">Our Vision</h2>
            <p className="mt-3 text-brand-gray">
              A Bridgeport where every family has access to nutritious food, every child has the
              support to dream big, and every block has neighbors looking out for one another.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Meet the Leadership
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {staffPlaceholders.map((person) => (
            <div key={person.name + person.role} className="text-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-brand-gray-light">
                {/* TODO: Replace with actual PCI photography */}
              </div>
              <p className="mt-4 font-semibold text-brand-charcoal">{person.name}</p>
              <p className="text-sm text-brand-gray">{person.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          22 Years Strong
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&q=80"
                // TODO: Replace with actual PCI photography
                alt="PCI volunteers serving the Bridgeport community"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      <div id="partners">
        <PartnerLogos />
      </div>

      <CTABanner
        heading="Join the Family. Volunteer or Donate Today."
        primaryHref="/donate"
        primaryLabel="Donate"
        secondaryHref="/volunteer"
        secondaryLabel="Volunteer"
      />
    </>
  );
}
