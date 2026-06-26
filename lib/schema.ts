import { SITE } from "./constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "NGO"],
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/images/pci-logo.svg`,
    description:
      "Park City Initiative is a 501(c)(3) nonprofit in Bridgeport, CT providing food assistance, youth programs, and community development services.",
    foundingDate: String(SITE.founded),
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Bridgeport",
      sameAs: "https://en.wikipedia.org/wiki/Bridgeport,_Connecticut",
    },
    sameAs: [SITE.social.facebook, SITE.social.instagram],
    nonprofitStatus: "Nonprofit501c3",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    image: `${SITE.url}/og-image.jpg`,
    "@id": SITE.url,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Thursday"],
        opens: "10:00",
        closes: "13:00",
      },
    ],
  };
}

interface EventInput {
  name: string;
  startDate: string;
  endDate: string;
  locationName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export function eventSchema(event: EventInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      "@type": "Place",
      name: event.locationName,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.street,
        addressLocality: event.city,
        addressRegion: event.state,
        postalCode: event.zip,
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE.name,
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  };
}

export function webPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
