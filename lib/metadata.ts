import type { Metadata } from "next";
import { SITE } from "./constants";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: PageMetadataInput): Metadata {
  const url = `${SITE.url}${path}`;
  const image = ogImage ?? `${SITE.url}/og-image.jpg`;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
