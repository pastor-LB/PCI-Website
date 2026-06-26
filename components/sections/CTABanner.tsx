import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  heading: string;
  subtext?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function CTABanner({
  heading,
  subtext,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTABannerProps) {
  return (
    <Section background="purple" padding="md">
      <div className="text-center">
        <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">{heading}</h2>
        {subtext ? <p className="mt-3 text-white/80">{subtext}</p> : null}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="gold" size="lg">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant="outline-white" size="lg">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
