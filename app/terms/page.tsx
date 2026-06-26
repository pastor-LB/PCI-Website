import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Use | Park City Initiative",
  description: "Terms of use for the Park City Initiative website.",
  path: "/terms",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Terms of Use", href: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <div className="flex min-h-[30vh] items-center bg-gradient-to-br from-brand-purple to-brand-purple-dark px-4 pt-28 pb-12 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto font-heading text-4xl font-bold text-white">Terms of Use</h1>
      </div>
      <Breadcrumbs items={breadcrumbItems} />
      <Section background="white">
        <div className="mx-auto max-w-3xl space-y-4 text-brand-gray">
          <p>
            By using {SITE.url}, you agree to use this site for lawful purposes only. Content on
            this site is provided for informational purposes about Park City Initiative&apos;s
            programs and services.
          </p>
          <p>
            All content, trademarks, and the PCI name are the property of Park City Initiative
            Corp. unless otherwise noted.
          </p>
          <p>
            Questions about these terms can be directed to{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-brand-purple underline">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
