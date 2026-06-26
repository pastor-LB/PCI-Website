import Section from "@/components/ui/Section";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "CT Foodshare",
    url: "https://www.ctfoodshare.org",
    description: "Connecticut's largest food bank",
  },
  {
    name: "United Way",
    url: "https://www.unitedwayconnect.org",
    description: "Supporting communities across Connecticut",
  },
  {
    name: "Chase Bank",
    url: "https://www.chase.com",
    description: "Financial services partner",
  },
  {
    name: "Hartford Healthcare",
    url: "https://www.hartfordhealthcare.org",
    description: "Healthcare leadership & support",
  },
  {
    name: "First County Bank",
    url: "https://www.firstcountybank.com",
    description: "Community banking partner",
  },
];

export default function PartnerLogos() {
  return (
    <Section background="white" padding="lg">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-purple mb-3">
            Trusted Partners &amp; Funders
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Park City Initiative is grateful for the partnerships and support from leading organizations across Connecticut that make our work possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full"
            >
              <div
                className="h-full flex flex-col items-center justify-center p-6 rounded-2xl
                           bg-gradient-to-br from-brand-purple/5 to-brand-gold/5
                           border-2 border-brand-gray/10
                           hover:border-brand-gold hover:shadow-lg
                           transition-all duration-300
                           hover:scale-105 hover:from-brand-purple/10 hover:to-brand-gold/10"
              >
                <div className="text-center space-y-3 flex flex-col items-center">
                  <h3 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-purple transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-brand-gray group-hover:text-brand-charcoal transition-colors">
                    {partner.description}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-brand-gold group-hover:text-brand-purple transition-colors">
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Visit Website
                    </span>
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 p-6 bg-brand-purple/5 rounded-2xl border border-brand-purple/10">
          <p className="text-center text-sm text-brand-gray">
            <span className="font-semibold text-brand-purple">Interested in partnering?</span>
            <br />
            Contact us to learn about sponsorship and collaboration opportunities.
          </p>
          <div className="text-center mt-4">
            <a
              href="/contact"
              className="inline-block px-6 py-2.5 bg-brand-purple text-white rounded-lg
                         hover:bg-brand-purple/90 transition-colors font-medium text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
