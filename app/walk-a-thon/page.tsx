import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Heart, Calendar } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Walk-A-Thon — Park City Initiative",
  description:
    "Thank you to everyone who walked with us in 2026! The PCI Walk-A-Thon returns in 2027. Stay tuned for details.",
  path: "/walk-a-thon",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Get Involved", href: "/volunteer" },
  { name: "Walk-A-Thon", href: "/walk-a-thon" },
];

export default function WalkAThonPage() {
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

      <div className="flex min-h-[60vh] items-center bg-gradient-to-br from-brand-purple to-brand-purple-dark px-4 pt-28 pb-12 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Thank You, Walkers!
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Walk-A-Thon 2026 is complete — thank you to everyone who walked with us.
          </p>
        </div>
      </div>

      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <Heart className="mx-auto h-12 w-12 text-brand-gold" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-purple">
            Your Steps Made a Difference
          </h2>
          <p className="mt-4 text-brand-gray">
            On March 21, 2026, community members from across Bridgeport gathered at Seaside Park to walk for a cause. Together, we raised funds that will help us continue feeding families, supporting youth, and building stronger neighborhoods throughout our city.
          </p>
          <p className="mt-4 text-brand-gray">
            If you haven't already, you can still support our mission at any time.
          </p>
          <Button href="/donate" variant="gold" size="lg" className="mt-6">
            Make a Donation
          </Button>
        </div>
      </Section>

      <Section background="cream">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-lg">
          <Calendar className="mx-auto h-12 w-12 text-brand-purple" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-2xl font-semibold text-brand-purple">
            Walk-A-Thon 2027
          </h2>
          <p className="mt-4 text-brand-gray">
            Save the date for the 2027 Walk-A-Thon. We'll be back at Seaside Park with the same spirit of community and purpose. More details coming soon.
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-gold">
            Sign up for our newsletter to get updates
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="grid gap-8 sm:grid-cols-2">
          <Card borderColor="gold">
            <h3 className="text-lg font-semibold text-brand-charcoal">Want to Help Year-Round?</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Every donation helps us serve Bridgeport families. Donate today or join us as a volunteer.
            </p>
            <div className="mt-4 space-y-3">
              <Button href="/donate" variant="primary" className="w-full">
                Donate Now
              </Button>
              <Button href="/volunteer" variant="outline-purple" className="w-full">
                Volunteer
              </Button>
            </div>
          </Card>
          <Card borderColor="purple">
            <h3 className="text-lg font-semibold text-brand-charcoal">Questions or Feedback?</h3>
            <p className="mt-2 text-sm text-brand-gray">
              We'd love to hear from you. Reach out with questions, feedback, or sponsorship interest.
            </p>
            <Button href="/contact" variant="primary" className="mt-4 w-full">
              Get in Touch
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
}
