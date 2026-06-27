import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { SITE, FOOTER_QUICK_LINKS, FOOTER_PROGRAM_LINKS } from "@/lib/constants";
import NewsletterForm from "@/components/forms/NewsletterForm";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.83c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.24 2.43.42a4.9 4.9 0 0 1 1.77 1.15c.55.55.9 1.1 1.15 1.77.18.46.36 1.26.42 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.97-.42 2.43a4.9 4.9 0 0 1-1.15 1.77c-.55.55-1.1.9-1.77 1.15-.46.18-1.26.36-2.43.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.24-2.43-.42a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.18-.46-.36-1.26-.42-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.24-1.97.42-2.43a4.9 4.9 0 0 1 1.15-1.77 4.9 4.9 0 0 1 1.77-1.15c.46-.18 1.26-.36 2.43-.42C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.82.34a3.1 3.1 0 0 0-1.15.75c-.36.36-.58.7-.75 1.15-.14.34-.3.86-.34 1.82C3.15 8.5 3.14 8.85 3.14 12s.01 3.5.07 4.73c.04.96.2 1.48.34 1.82a3.1 3.1 0 0 0 .75 1.15c.36.36.7.58 1.15.75.34.14.86.3 1.82.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.82-.34a3.1 3.1 0 0 0 1.15-.75c.36-.36.58-.7.75-1.15.14-.34.3-.86.34-1.82.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.82a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.34-.14-.86-.3-1.82-.34C15.5 4.01 15.15 4 12 4Zm0 3.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm5.6-2.2a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-purple-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="font-heading text-xl font-bold">{SITE.name}</span>
          <p className="mt-3 text-sm text-white/70">{SITE.tagline}</p>
          <p className="mt-4 text-xs text-white/60">
            Park City Initiative Corp. is a registered 501(c)(3) nonprofit organization. All
            donations are tax-deductible to the full extent allowed by law.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Park City Initiative on Facebook"
              className="rounded-full bg-white/10 p-2 hover:bg-brand-gold hover:text-brand-purple-dark"
            >
              <FacebookIcon />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Park City Initiative on Instagram"
              className="rounded-full bg-white/10 p-2 hover:bg-brand-gold hover:text-brand-purple-dark"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com/company/park-city-initiative/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Park City Initiative on LinkedIn"
              className="rounded-full bg-white/10 p-2 hover:bg-brand-gold hover:text-brand-purple-dark"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://youtube.com/@parkcityinitiative"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Park City Initiative on YouTube"
              className="rounded-full bg-white/10 p-2 hover:bg-brand-gold hover:text-brand-purple-dark"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-brand-gold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-brand-gold">Programs</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {FOOTER_PROGRAM_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-brand-gold">Contact</h3>
          <ul className="mt-3 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{SITE.address.full}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${SITE.phone}`} className="hover:text-brand-gold">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-brand-gold">
                {SITE.email}
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <NewsletterForm compact />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-xs text-white/60 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p>&copy; 2026 Park City Initiative Corp. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/privacy" className="hover:text-brand-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-gold">
              Terms of Use
            </Link>
            <Link href="/transparency" className="hover:text-brand-gold">
              Transparency / Annual Report
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
