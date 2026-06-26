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
    "Learn about Park City Initiative, a 27-year-old Bridgeport, CT nonprofit fighting food insecurity and building community through youth programs and outreach.",
  path: "/about",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const staffPlaceholders = [
  { name: "Mary Green", role: "Chief Executive Officer" },
  // TODO: Add Program Director and Operations Manager when staff photos are available
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
        <p className="mx-auto max-w-3xl text-center text-brand-gray mb-12">
          For 27 years, Park City Initiative has been a steady presence in Bridgeport — meeting immediate needs while building a vision of thriving families and resilient neighborhoods. From our roots as a single food pantry to today's integrated programs serving youth, seniors, and entire blocks, we remain committed to the founding principle: that one person's request for help can spark a movement.
        </p>

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
              <h3 className="mt-4 font-semibold text-brand-charcoal">{person.name}</h3>
              <p className="text-sm text-brand-gray">{person.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          27 Years Strong
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { src: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b1?w=400&q=80', alt: 'Volunteers distributing food at community pantry' },
            { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80', alt: 'Community members working together' },
            { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80', alt: 'Volunteers packing food boxes for delivery' },
            { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80', alt: 'Community outreach event' },
            { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80', alt: 'Food pantry serving families' },
            { src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&q=80', alt: 'Park City Initiative staff and volunteers' },
          ].map((img, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={img.src}
                alt={img.alt}
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
