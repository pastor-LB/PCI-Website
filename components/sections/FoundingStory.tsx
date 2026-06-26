import { HeartHandshake, Truck, Trophy, Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import StoryTimeline from "./StoryTimeline";

const milestones = [
  {
    year: "1999",
    title: "A Partnership is Born",
    description:
      "Bishop Jean Williams asks her daughter, Mary Green, for help feeding hungry neighbors in Bridgeport — and Park City Initiative is born.",
    icon: HeartHandshake,
  },
  {
    year: "2003",
    title: "Connecting with CT Foodshare",
    description:
      "A partnership with Connecticut Foodshare expands the pantry's reach across the city.",
    icon: Truck,
  },
  {
    year: "2018",
    title: "Growing Impact",
    description: "686,000 lbs of food and 340,000+ meals distributed in a single year.",
    icon: Trophy,
  },
  {
    year: "2025",
    title: "One Million Meals a Year",
    description:
      "PCI now distributes over 1 million meals annually and opens the One-Stop-Shop Community Market.",
    icon: Sparkles,
  },
];

export default function FoundingStory() {
  return (
    <Section background="cream">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-brand-gold">
            Our Roots
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
            One Woman&apos;s Request. 22 Years of Impact.
          </h2>
          <p className="mt-4 text-brand-gray">
            In 1999, Bishop Jean Williams saw hungry families in her Bridgeport
            neighborhood and asked her daughter, Mary Green, for help. That simple request
            sparked a partnership with Connecticut Foodshare and grew into Park City
            Initiative — an organization now distributing over one million meals a year.
          </p>
          <blockquote className="mt-6 border-l-4 border-brand-gold pl-4 font-heading text-xl italic text-brand-purple">
            &ldquo;We started with a few bags of groceries. Today, we feed a city.&rdquo;
          </blockquote>
          <div className="mt-6">
            <Button href="/our-story" variant="primary">
              See Our Full Journey →
            </Button>
          </div>
        </div>
        <StoryTimeline milestones={milestones} />
      </div>
    </Section>
  );
}
