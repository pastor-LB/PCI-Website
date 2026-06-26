import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Use",
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
        <div className="mx-auto max-w-3xl space-y-8 text-brand-gray">
          <div>
            <h2 className="text-xl font-bold text-brand-purple mb-3">Acceptance of Terms</h2>
            <p>
              By accessing and using {SITE.url} (the &ldquo;Site&rdquo;), you agree to be bound by these
              Terms of Use. If you do not agree with any part of these terms, please discontinue use of
              the Site immediately.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Permitted Use</h3>
            <p className="mb-2">You agree to use this Site only for lawful purposes and in ways that do not:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Infringe upon anyone's rights or violate any law</li>
              <li>Harass, threaten, or cause harm to any person or entity</li>
              <li>Transmit malicious code, viruses, or any other harmful materials</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the operation of the Site</li>
              <li>Collect or track personal information of others without consent</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Intellectual Property Rights</h3>
            <p className="mb-2">
              All content on this Site, including text, graphics, logos, images, and software, is the
              property of Park City Initiative Corp. or its content suppliers and is protected by
              copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may view and print content for personal, non-commercial use only. Any other use,
              reproduction, or distribution without written permission is prohibited.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Disclaimer of Warranties</h3>
            <p>
              The Site and all content are provided &ldquo;as is&rdquo; without warranty of any kind. Park City
              Initiative makes no representations or warranties, express or implied, regarding the Site's
              operation or the information, content, or materials included on the Site. To the fullest
              extent permissible by law, Park City Initiative disclaims all warranties, express or implied,
              including but not limited to merchantability and fitness for a particular purpose.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Limitation of Liability</h3>
            <p>
              In no event shall Park City Initiative be liable for any damages (including, without limitation,
              indirect, incidental, special, or consequential damages) arising out of or in connection with
              your use of or inability to use the Site, even if advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Third-Party Links</h3>
            <p>
              The Site may contain links to third-party websites. Park City Initiative is not responsible
              for the content, accuracy, or practices of linked sites. Your use of third-party sites is at
              your own risk and subject to their terms and policies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Donation & Payment Terms</h3>
            <p className="mb-2">
              Donations made through our Site are processed securely through third-party payment processors.
              By making a donation, you represent that:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>You are authorized to use the payment method provided</li>
              <li>The information you provide is accurate and complete</li>
              <li>You understand the donation is non-refundable, except where required by law</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Modifications to Terms</h3>
            <p>
              Park City Initiative reserves the right to modify these Terms of Use at any time. Changes
              will be effective immediately upon posting to the Site. Your continued use of the Site
              following any modification constitutes your acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Severability</h3>
            <p>
              If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining
              provisions shall continue in full force and effect.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Governing Law</h3>
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of the State of
              Connecticut, without regard to its conflict of law principles.
            </p>
          </div>

          <div className="bg-brand-purple/5 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-brand-purple mb-2">Contact Us</h3>
            <p>
              If you have questions about these Terms of Use, please contact us at{" "}
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
            Last updated: June 26, 2026. Park City Initiative reserves the right to update these terms at any time.
          </p>
        </div>
      </Section>
    </>
  );
}
