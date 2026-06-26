import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { eventSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CountdownTimer from "@/components/sections/CountdownTimer";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { CalendarDays, MapPin, Target, Users } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Walk-A-Thon 2026 — Million Meal Walk | Park City Initiative | Bridgeport CT",
  description:
    "Join the PCI Walk-A-Thon 2026 — Million Meal Walk at Seaside Park in Bridgeport, CT on March 21, 2026. Walk, fundraise, and help us hit our $60,000 goal.",
  path: "/walk-a-thon",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Get Involved", href: "/volunteer" },
  { name: "Walk-A-Thon 2026", href: "/walk-a-thon" },
];

const eventStart = "2026-03-21T09:00:00-05:00";
const eventEnd = "2026-03-21T12:00:00-05:00";

const faqs = [
  {
    question: "When and where is the Walk-A-Thon?",
    answer: "Saturday, March 21, 2026, from 9:00 AM to 12:00 PM at Seaside Park, 1 Barnum Dyke, Bridgeport, CT 06604.",
  },
  {
    question: "How do I register?",
    answer: "Register as an individual walker or create/join a team using our secure Zeffy registration links below.",
  },
  {
    question: "Is there a fundraising minimum?",
    answer: "There's no minimum, but every dollar raised helps us reach our $60,000 goal to fund a year of meals.",
  },
  {
    question: "Can I bring my family?",
    answer: "Absolutely — the Walk-A-Thon is family-friendly and open to walkers of all ages.",
  },
  {
    question: "What if it rains?",
    answer: "The event will proceed rain or shine. Check our social media for any weather-related updates.",
  },
  {
    question: "How can my business sponsor the event?",
    answer: "Contact us through the form below to learn about sponsorship packages and benefits.",
  },
];

export default function WalkAThonPage() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            eventSchema({
              name: "PCI Walk-A-Thon 2026 — Million Meal Walk",
              startDate: eventStart,
              endDate: eventEnd,
              locationName: "Seaside Park",
              street: "1 Barnum Dyke",
              city: "Bridgeport",
              state: "CT",
              zip: "06604",
            })
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

      <div className="flex min-h-[60vh] items-center bg-gradient-to-br from-brand-purple to-brand-purple-dark px-4 pt-28 pb-12 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Walk-A-Thon 2026 — Million Meal Walk
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Saturday, March 21, 2026 · Seaside Park, Bridgeport, CT
          </p>
          <CountdownTimer targetDate={eventStart} />
        </div>
      </div>

      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="grid gap-6 sm:grid-cols-4">
          <Card>
            <CalendarDays className="h-7 w-7 text-brand-purple" aria-hidden="true" />
            <p className="mt-2 text-sm font-semibold text-brand-charcoal">March 21, 2026</p>
            <p className="text-xs text-brand-gray">9:00 AM – 12:00 PM</p>
          </Card>
          <Card>
            <MapPin className="h-7 w-7 text-brand-purple" aria-hidden="true" />
            <p className="mt-2 text-sm font-semibold text-brand-charcoal">Seaside Park</p>
            <p className="text-xs text-brand-gray">1 Barnum Dyke, Bridgeport, CT</p>
          </Card>
          <Card>
            <Target className="h-7 w-7 text-brand-purple" aria-hidden="true" />
            <p className="mt-2 text-sm font-semibold text-brand-charcoal">$60,000 Goal</p>
            <p className="text-xs text-brand-gray">Funds a year of meals</p>
          </Card>
          <Card>
            <Users className="h-7 w-7 text-brand-purple" aria-hidden="true" />
            <p className="mt-2 text-sm font-semibold text-brand-charcoal">300 Walkers</p>
            <p className="text-xs text-brand-gray">Goal participation</p>
          </Card>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          One Woman&apos;s Action Sparks One Million Meals
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-gray">
          In 1999, Bishop Jean Williams&apos;s request for help sparked a movement. Today, the
          Walk-A-Thon carries that same spirit forward — community members walking together to
          fund a full year of meals for Bridgeport families.
        </p>
      </Section>

      <Section background="white">
        <div className="grid gap-8 sm:grid-cols-3">
          <Card borderColor="gold">
            <h3 className="text-lg font-semibold text-brand-charcoal">Individual Walker</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Register as an individual and start your personal fundraising page.
            </p>
            <Button href="https://www.zeffy.com/en-US/ticketing/pci-walk-a-thon-2026" target="_blank" rel="noopener noreferrer" variant="primary" className="mt-4">
              Register to Walk
            </Button>
          </Card>
          <Card borderColor="purple">
            <h3 className="text-lg font-semibold text-brand-charcoal">Create or Join a Team</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Rally friends, family, or coworkers and fundraise together.
            </p>
            <Button href="https://www.zeffy.com/en-US/fundraising/pci-walk-a-thon-2026-teams" target="_blank" rel="noopener noreferrer" variant="primary" className="mt-4">
              Build a Team
            </Button>
          </Card>
          <Card borderColor="charcoal">
            <h3 className="text-lg font-semibold text-brand-charcoal">Become a Sponsor</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Sponsor the event and get your business name in front of hundreds of walkers.
            </p>
            <Button href="/donate" variant="primary" className="mt-4">
              Sponsor the Walk
            </Button>
          </Card>
        </div>
      </Section>

      <Section background="cream" padding="md">
        <h2 className="text-center font-heading text-2xl font-semibold text-brand-purple">
          Prizes
        </h2>
        <div className="mx-auto mt-6 grid max-w-2xl gap-4 text-center sm:grid-cols-3">
          <p className="rounded-lg bg-white p-4 text-sm font-semibold text-brand-charcoal shadow-sm">
            Best Team Spirit
          </p>
          <p className="rounded-lg bg-white p-4 text-sm font-semibold text-brand-charcoal shadow-sm">
            Best Costumes / Banners
          </p>
          <p className="rounded-lg bg-white p-4 text-sm font-semibold text-brand-charcoal shadow-sm">
            Highest Team Fundraiser
          </p>
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Frequently Asked Questions
        </h2>
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <Section background="purple" padding="md">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-white">
            Interested in Sponsoring?
          </h2>
          <div className="mt-6">
            <Button href="/contact" variant="gold" size="lg">
              Contact Us About Sponsorship
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
