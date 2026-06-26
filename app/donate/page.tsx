import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import DonatePanel from "@/components/sections/DonatePanel";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Donate to Park City Initiative | Support Bridgeport Families | 501(c)(3) Tax-Deductible",
  description:
    "Donate to Park City Initiative and feed a Bridgeport family tonight. 100% tax-deductible. Give once or monthly to support food, youth, and community programs.",
  path: "/donate",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Donate", href: "/donate" },
];

const zeffyFormId = process.env.NEXT_PUBLIC_ZEFFY_FORM_ID ?? "ZEFFY-FORM-ID-PLACEHOLDER";

export default function DonatePage() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DonateAction",
            recipient: { "@type": "Organization", name: SITE.name },
            description: "Donate to Park City Initiative to support food, youth, and community programs in Bridgeport, CT.",
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
      <PageHero title="Your Gift Changes Everything for a Bridgeport Family." tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <DonatePanel />
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Give Securely Online
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-brand-gray">
          Donations are processed securely through Zeffy, a 0%-platform-fee donation
          processor built for nonprofits. Replace the placeholder Zeffy form ID in the
          environment variables once your account is set up.
        </p>
        <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="Donate to Park City Initiative"
            src={`https://www.zeffy.com/en-US/donation-form/${zeffyFormId}`}
            width="100%"
            height="600"
            loading="lazy"
            style={{ border: 0 }}
          />
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Other Ways to Give
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-brand-charcoal">By Mail</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Send a check to Park City Initiative, {SITE.mailingAddress}.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-brand-charcoal">Matching Gifts</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Many employers match charitable donations. Check with your HR department to
              double your impact.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-brand-charcoal">In-Kind Donations</h3>
            <p className="mt-2 text-sm text-brand-gray">
              We accept non-perishable food, hygiene products, and new children&apos;s items.
              Contact us to arrange a drop-off.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="cream" padding="md">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <ShieldCheck className="h-10 w-10 text-brand-purple" aria-hidden="true" />
          <p className="font-semibold text-brand-charcoal">
            Park City Initiative is a verified 501(c)(3) nonprofit. EIN: {SITE.ein}
          </p>
          <p className="text-sm text-brand-gray">Secure &amp; tax-deductible.</p>
          <div className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-gray shadow-sm">
            Candid / GuideStar Seal — Placeholder
          </div>
          <p className="text-sm text-brand-gray">
            Questions about giving?{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-brand-purple underline">
              {SITE.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
