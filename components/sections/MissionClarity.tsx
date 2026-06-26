import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function MissionClarity() {
  return (
    <Section background="white">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative h-72 overflow-hidden rounded-2xl shadow-lg sm:h-96">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80"
            // TODO: Replace with actual PCI photography
            alt="Happy diverse children smiling together in an urban community setting"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-brand-gold">
            Our Mission
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
            We don&apos;t just feed people. We build futures.
          </h2>
          <p className="mt-4 text-brand-gray">
            Food insecurity in Bridgeport is rarely an isolated problem — it&apos;s tangled
            up with the cycles of poverty, instability, and lost opportunity that keep
            families from moving forward. That&apos;s why Park City Initiative pairs
            emergency food assistance with youth development and community leadership
            training, addressing today&apos;s hunger while building tomorrow&apos;s
            resilience.
          </p>
          <p className="mt-4 text-brand-gray">
            Our vision is a Bridgeport where every child has the support to dream big,
            every senior is cared for, and every block has neighbors looking out for one
            another.
          </p>
          <div className="mt-6">
            <Button href="/our-story" variant="ghost" className="!px-0">
              Read Our Full Story →
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
