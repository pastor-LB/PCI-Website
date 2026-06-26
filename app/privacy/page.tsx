import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
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
        <div className="mx-auto max-w-3xl space-y-8 text-brand-gray">
          <div>
            <h2 className="text-xl font-bold text-brand-purple mb-3">Our Commitment to Privacy</h2>
            <p>
              Park City Initiative (&ldquo;PCI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting
              your personal information. This privacy policy explains how we collect, use, and safeguard
              the information you provide through our website and services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Information We Collect</h3>
            <p className="mb-2">We collect information you voluntarily provide through:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Contact forms and inquiries</li>
              <li>Volunteer application forms</li>
              <li>Get Help/food assistance request forms</li>
              <li>Newsletter signup forms</li>
              <li>Donation processing through third-party payment processors</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">How We Use Your Information</h3>
            <p className="mb-2">We use the information you provide to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Respond to your inquiries and requests</li>
              <li>Process volunteer applications and send program information</li>
              <li>Coordinate food assistance and other services</li>
              <li>Send newsletters or updates you have opted into</li>
              <li>Process donations and send receipts</li>
              <li>Improve our services and website functionality</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Data Protection & Third Parties</h3>
            <p className="mb-2">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
              However, we may share information with:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Payment processors (for secure donation processing)</li>
              <li>Service providers who assist us in operations</li>
              <li>Law enforcement, only when required by law</li>
            </ul>
            <p className="mt-3">Our website uses standard security measures to protect your information.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Cookies & Website Technology</h3>
            <p>
              Our website may use cookies and analytics tools (such as Google Analytics) to understand
              how visitors use our site and improve our services. You can control cookie settings through
              your browser. No personally identifiable information is collected through cookies unless
              you voluntarily provide it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Data Retention</h3>
            <p>
              We retain personal information only as long as necessary to provide our services or as
              required by law. Donation and volunteer records are maintained in accordance with nonprofit
              accounting and operational standards. You may request deletion of your information at any time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Your Rights</h3>
            <p>
              You have the right to access, update, or request deletion of your personal information.
              You may also unsubscribe from our newsletter at any time by using the link in the email
              or by contacting us directly.
            </p>
          </div>

          <div className="bg-brand-purple/5 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-brand-purple mb-2">Questions or Concerns?</h3>
            <p>
              If you have questions about our privacy practices or wish to exercise your rights,
              please contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-brand-purple hover:underline">
                {SITE.email}
              </a>{" "}
              or{" "}
              <a href={`tel:${SITE.phone}`} className="font-semibold text-brand-purple hover:underline">
                {SITE.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-brand-gray/70 border-t pt-4">
            Last updated: June 26, 2026. Park City Initiative reserves the right to update this policy at any time.
          </p>
        </div>
      </Section>
    </>
  );
}
