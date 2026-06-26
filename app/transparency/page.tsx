import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata: Metadata = generatePageMetadata({
  title: "Financial Transparency & Annual Report | Park City Initiative 501(c)(3)",
  description:
    "Park City Initiative is committed to financial transparency. View our 501(c)(3) status, EIN, and annual report information.",
  path: "/transparency",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Transparency", href: "/transparency" },
];

export default function TransparencyPage() {
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
      <PageHero title="Financial Transparency & Annual Report" />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <p className="mx-auto max-w-3xl text-center text-brand-gray">
          We believe accountability to our community is part of our mission. Below you&apos;ll find
          our organizational basics, annual report, and financial information.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <Card>
            <p className="text-sm font-semibold text-brand-gray">EIN</p>
            <p className="text-lg font-bold text-brand-charcoal">{SITE.ein}</p>
          </Card>
          <Card>
            <p className="text-sm font-semibold text-brand-gray">Status</p>
            <p className="text-lg font-bold text-brand-charcoal">501(c)(3) Nonprofit</p>
          </Card>
          <Card>
            <p className="text-sm font-semibold text-brand-gray">Founded</p>
            <p className="text-lg font-bold text-brand-charcoal">{SITE.founded}</p>
          </Card>
          <Card>
            <p className="text-sm font-semibold text-brand-gray">Incorporated</p>
            <p className="text-lg font-bold text-brand-charcoal">State of Connecticut</p>
          </Card>
        </div>
      </Section>

      <Section background="cream">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-lg">
          <h2 className="font-heading text-2xl font-semibold text-brand-purple">
            2025 Annual Report — Coming Soon
          </h2>
          <p className="mt-2 text-sm text-brand-gray">
            Our full annual report will be available here as a downloadable PDF.
          </p>
          <a
            href="#"
            className="mt-4 inline-block rounded-lg bg-brand-purple px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white opacity-70"
            aria-disabled="true"
          >
            Download PDF (Coming Soon)
          </a>
        </div>
      </Section>

      <Section background="white">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-brand-gray">
            View our full nonprofit profile on{" "}
            <a href="#" className="font-semibold text-brand-purple underline">
              Candid / GuideStar
            </a>{" "}
            (link placeholder).
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl shadow-sm">
            <thead className="bg-brand-purple text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm">Category</th>
                <th className="px-4 py-3 text-left text-sm">2025 (Placeholder)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-gray/20 bg-white">
              <tr>
                <td className="px-4 py-3 text-sm text-brand-gray">Program Expenses</td>
                <td className="px-4 py-3 text-sm text-brand-gray">— TBD —</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-brand-gray">Administrative Expenses</td>
                <td className="px-4 py-3 text-sm text-brand-gray">— TBD —</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-brand-gray">Fundraising Expenses</td>
                <td className="px-4 py-3 text-sm text-brand-gray">— TBD —</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-brand-gray">
          Questions about our finances? Contact{" "}
          <a href={`mailto:${SITE.infoEmail}`} className="font-semibold text-brand-purple underline">
            {SITE.infoEmail}
          </a>
        </p>
      </Section>
    </>
  );
}
