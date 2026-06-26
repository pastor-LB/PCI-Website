"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        transparent ? "bg-transparent" : "bg-brand-purple shadow-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="font-heading text-xl font-bold sm:text-2xl">
            Park City Initiative
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const hasChildren = "children" in link && link.children;
            const active = pathname === link.href;
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenDropdown(link.label)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-brand-gold ${
                    active ? "border-b-2 border-brand-gold" : ""
                  }`}
                  aria-expanded={hasChildren ? openDropdown === link.label : undefined}
                  aria-haspopup={hasChildren ? "true" : undefined}
                >
                  {link.label}
                  {hasChildren ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                </Link>
                {hasChildren ? (
                  <div
                    className={`absolute left-0 top-full mt-2 w-56 rounded-lg bg-white py-2 shadow-lg transition-opacity duration-150 ${
                      openDropdown === link.label
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
                  >
                    {link.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-gray-light hover:text-brand-purple"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/get-help" variant="outline-white" size="sm">
            Get Help
          </Button>
          <Button href="/volunteer" variant="outline-white" size="sm">
            Volunteer
          </Button>
          <Button href="/donate" variant="gold" size="sm">
            Donate
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      <span className="sr-only">{SITE.tagline}</span>

      <div id="mobile-menu">
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}
