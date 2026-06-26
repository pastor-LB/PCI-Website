import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Park City Initiative | Bridgeport CT Nonprofit",
  description:
    "Contact Park City Initiative in Bridgeport, CT. Reach out about volunteering, donating, partnerships, or general questions.",
  path: "/contact",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
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
      <div className="flex min-h-[35vh] items-center bg-gradient-to-br from-brand-purple to-brand-purple-dark px-4 pt-28 pb-12 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            We&apos;d Love to Hear From You
          </h1>
        </div>
      </div>

      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-brand-charcoal">Send Us a Message</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-brand-charcoal">Contact Information</h2>
            <ul className="mt-4 space-y-4 text-sm text-brand-gray">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-purple" aria-hidden="true" />
                <span>{SITE.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-purple" aria-hidden="true" />
                <a href={`tel:${SITE.phone}`} className="hover:text-brand-purple">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-purple" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-purple">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 aspect-video overflow-hidden rounded-lg shadow-md">
              <iframe
                title="Map to Park City Initiative"
                src="https://www.google.com/maps?q=857+Howard+Ave+Bridgeport+CT+06605&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
