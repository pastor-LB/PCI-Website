import Section from "@/components/ui/Section";

const partners = ["CT Foodshare", "United Way", "Chase Bank", "Hartford Healthcare", "First County Bank"];

export default function PartnerLogos() {
  return (
    <Section background="gray-light" padding="md">
      <h2 className="text-center text-xl font-semibold text-brand-charcoal">
        Trusted Partners &amp; Funders
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-6">
        {partners.map((partner) => (
          <div
            key={partner}
            className="flex h-20 items-center justify-center rounded-xl bg-white px-6 text-center text-sm font-bold text-brand-gray shadow-sm lg:w-48"
          >
            {partner}
          </div>
        ))}
      </div>
    </Section>
  );
}
