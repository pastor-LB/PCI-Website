import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | Park City Initiative",
  description: "Park City Initiative's privacy policy describing how we collect and use information.",
  path: "/privacy",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <div className="flex min-h-[30vh] items-center bg-gradient-to-br from-brand-purple to-brand-purple-dark px-4 pt-28 pb-12 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto font-heading text-4xl font-bold text-white">Privacy Policy</h1>
      </div>
      <Breadcrumbs items={breadcrumbItems} />
      <Section background="white">
        <div className="mx-auto max-w-3xl space-y-4 text-brand-gray">
          <p>
            Park City Initiative (&ldquo;PCI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This page describes,
            in summary form, how we handle information collected through {SITE.url}.
          </p>
          <p>
            Information submitted through our contact, volunteer, get-help, and newsletter forms
            is used solely to respond to your request and, where applicable, to send program
            updates you have opted into. We do not sell personal information.
          </p>
          <p>
            For questions about this policy, contact us at{" "}
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
