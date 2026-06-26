import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import StatCard from "@/components/ui/StatCard";
import CTABanner from "@/components/sections/CTABanner";
import { Utensils, Users, HeartHandshake, GraduationCap, Trophy, Sparkles } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Impact in 2025 | Park City Initiative — Bridgeport CT Food Bank & Youth Programs",
  description:
    "See Park City Initiative's 2025 impact: 1 million+ meals distributed, 32,429 families supported, 5,650 senior care boxes, and 220 children in life-skills training.",
  path: "/our-impact",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Impact", href: "/our-impact" },
];

const stats = [
  { value: "1,000,000+", label: "Meals Distributed", icon: <Utensils /> },
  { value: "32,429", label: "Families Supported", icon: <Users /> },
  { value: "5,650", label: "Senior Care Boxes", icon: <HeartHandshake /> },
  { value: "220", label: "Children in Life-Skills Training", icon: <GraduationCap /> },
  { value: "60", label: "Students Sponsored — Inspire Sports Camp", icon: <Trophy /> },
  { value: "241+", label: "Active Volunteers", icon: <Sparkles /> },
];

export default function OurImpactPage() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema(
              "Our Impact in 2025",
              "Park City Initiative's 2025 annual impact report.",
              `${SITE.url}/our-impact`
            )
          ),
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
      <PageHero title="Numbers Don't Lie. Lives Are Changing." tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} variant="purple-on-light" />
          ))}
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Program Breakdown
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="font-semibold text-brand-purple">One Meal</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Food Pantry, Senior Care Boxes, and Mobile Pantry combined to distribute over 1
              million meals to 32,429 families in 2025.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="font-semibold text-brand-purple">One Child</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Kidz Academy, Kidz Mobile, and S.C.A.M.P. served 220 children with life-skills
              training and mentorship.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="font-semibold text-brand-purple">One Block</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Park City Youth ACTS engaged 241+ volunteers in Adopt-A-Block cleanups and career
              readiness training.
            </p>
          </div>
        </div>
      </Section>

      <Section background="white">
        <h2 className="font-heading text-2xl font-semibold text-brand-purple">Our Future</h2>
        <p className="mt-3 max-w-3xl text-brand-gray">
          In 2026, PCI is expanding wraparound services at the One-Stop-Shop Community Market,
          growing youth workforce development, and deepening partnerships with local healthcare
          providers to reach even more Bridgeport families.
        </p>
        <p className="mt-4 text-sm text-brand-gray">
          Read our full{" "}
          <a href="/transparency" className="font-semibold text-brand-purple underline">
            financial transparency report
          </a>
          .
        </p>
      </Section>

      <CTABanner
        heading="Help Us Do More in 2026"
        primaryHref="/donate"
        primaryLabel="Donate"
      />
    </>
  );
}
