import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({ name: item.name, url: `${SITE.url}${item.href}` }));

  return (
    <nav aria-label="Breadcrumb" className="bg-brand-gray-light py-3">
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(schemaItems)) }}
      />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 text-sm text-brand-gray sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 ? <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" /> : null}
            {index === items.length - 1 ? (
              <span className="font-medium text-brand-purple">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-brand-purple hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
