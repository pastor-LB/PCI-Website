import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Programs — Food Pantry, Youth Development & Community",
  description:
    "Explore Park City Initiative's three core programs: One Meal (food pantry), One Child (youth development), and One Block (community leadership) in Bridgeport, CT.",
  path: "/programs",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
];

const programs = [
  {
    title: "One Meal",
    subtitle: "Food Pantry & Senior Support",
    description:
      "The Bishop Jean Williams Food Pantry, Senior Care Boxes, and Mobile Pantry deliver free, nutritious food to families and seniors across Bridgeport.",
    details: [
      "1,000,000+ meals distributed annually",
      "900+ families served weekly",
      "5,650 senior care boxes delivered yearly",
      "3 distribution channels (walk-in, drive-thru, mobile)",
    ],
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b1?w=900&q=80",
    href: "/one-meal",
  },
  {
    title: "One Child",
    subtitle: "Youth Development & Education",
    description:
      "Park City Kidz Academy, Kidz Mobile, and S.C.A.M.P. give children life-skills training, mentorship, and a safe place to learn and grow.",
    details: [
      "220+ children in life-skills training programs",
      "After-school tutoring & mentorship",
      "S.C.A.M.P. free summer camp for all ages",
      "College prep & career readiness support",
    ],
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=80",
    href: "/one-child",
  },
  {
    title: "One Block",
    subtitle: "Community Transformation & Leadership",
    description:
      "Park City Youth ACTS, Adopt-A-Block, and career readiness training empower young leaders to transform their own neighborhoods.",
    details: [
      "Community-led neighborhood cleanup initiatives",
      "Youth leadership training programs",
      "Job readiness & employment pathways",
      "Volunteer-powered block transformation",
    ],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80",
    href: "/one-block",
  },
];

export default function ProgramsPage() {
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
      <PageHero
        title="Meeting basic needs today. Restoring hope for tomorrow. Transforming lives forever."
        tall
      />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-brand-purple mb-4">
            Three Integrated Programs. One Transformative Mission.
          </h2>
          <p className="text-lg text-brand-gray">
            Park City Initiative operates three cornerstone programs that work together
            to address immediate needs while building long-term resilience and opportunity
            in Bridgeport families and neighborhoods. Each program is designed to complement
            the others, creating a holistic approach to community transformation.
          </p>
        </div>
      </Section>

      {programs.map((program, index) => (
        <Section key={program.title} background={index % 2 === 0 ? "white" : "cream"}>
          <div
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-lg sm:h-96">
              <Image
                src={program.image}
                // TODO: Replace with actual PCI photography
                alt={`${program.title} program — ${program.subtitle}`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-wide text-brand-gold">
                {program.subtitle}
              </span>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-brand-purple">
                {program.title}
              </h2>
              <p className="mt-4 text-brand-gray">{program.description}</p>

              <div className="mt-6 space-y-2">
                {program.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-brand-gold flex-shrink-0" />
                    <p className="text-sm text-brand-charcoal">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href={program.href} variant="primary">
                  Learn More About {program.title} →
                </Button>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section background="purple" padding="md">
        <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-white">Need Help Now?</h2>
            <p className="mt-1 text-white/80">We&apos;re here to connect you with the right support.</p>
          </div>
          <Link href="/get-help">
            <span className="rounded-lg bg-brand-gold px-6 py-3 font-bold uppercase tracking-wide text-brand-purple-dark">
              Get Help
            </span>
          </Link>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-white">Support Our Programs</h2>
            <p className="mt-1 text-white/80">Your gift keeps these programs running.</p>
          </div>
          <Link href="/donate">
            <span className="rounded-lg bg-white px-6 py-3 font-bold uppercase tracking-wide text-brand-purple">
              Donate
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}
