"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Per-dropdown timer ref — adds a 120ms grace period so the gap
  // between trigger and panel doesn't instantly close the menu
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close everything on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Hover helpers with delay
  function handleMenuEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }

  function handleMenuLeave() {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 120); // 120ms grace period
  }

  // Check if link is active
  function isActive(href: string): boolean {
    return pathname === href;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-purple shadow-lg">
      <div ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold text-lg tracking-wide hover:text-brand-gold transition-colors"
            aria-label="Park City Initiative — Home"
          >
            Park City Initiative
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((item) => {
              const hasChildren = "children" in item && item.children;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150
                      ${
                        isActive(item.href)
                          ? "text-brand-gold"
                          : "text-white hover:bg-white/10 hover:text-brand-gold"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(item.label)}
                  onMouseLeave={handleMenuLeave}
                >
                  {/* Trigger button */}
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                    className={`
                      flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium
                      transition-colors duration-150
                      ${
                        openMenu === item.label
                          ? "bg-white/10 text-brand-gold"
                          : "text-white hover:bg-white/10 hover:text-brand-gold"
                      }
                    `}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  {openMenu === item.label && (
                    <div
                      className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                      role="menu"
                      aria-label={`${item.label} submenu`}
                    >
                      {/* Invisible top strip that bridges any sub-pixel gap */}
                      <div
                        className="h-1 bg-brand-purple"
                        aria-hidden="true"
                      />

                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setOpenMenu(null)}
                          className={`
                            block px-4 py-3 text-sm font-medium border-b border-gray-100
                            last:border-0 transition-colors duration-100
                            ${
                              isActive(child.href)
                                ? "bg-brand-purple/10 text-brand-purple font-semibold"
                                : "text-gray-700 hover:bg-brand-purple hover:text-white"
                            }
                          `}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/get-help"
              className="px-4 py-2 text-sm font-semibold text-white border border-white/40
                         rounded-md hover:bg-white/10 transition-colors"
            >
              GET HELP
            </Link>
            <Link
              href="/volunteer"
              className="px-4 py-2 text-sm font-semibold text-white border border-white/40
                         rounded-md hover:bg-white/10 transition-colors"
            >
              VOLUNTEER
            </Link>
            <Link
              href="/donate?monthly=true"
              className="px-4 py-2 text-sm font-semibold text-white border border-brand-gold/60
                         rounded-md hover:border-brand-gold hover:bg-brand-gold/10 transition-colors"
            >
              GIVE MONTHLY
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2 text-sm font-semibold text-brand-purple bg-brand-gold
                         rounded-md hover:opacity-90 transition-opacity"
            >
              DONATE
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t border-white/20 pb-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((item) => {
              const hasChildren = "children" in item && item.children;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      block px-4 py-3 font-medium transition-colors
                      ${
                        isActive(item.href)
                          ? "text-brand-gold"
                          : "text-white hover:bg-white/10"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label}>
                  {/* Mobile section header — tap to toggle sub-items */}
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                    aria-expanded={openMenu === item.label}
                    className="w-full flex items-center justify-between px-4 py-3
                               text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMenu === item.label && (
                    <div className="bg-white/5 border-l-2 border-brand-gold ml-4">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileOpen(false);
                          }}
                          className={`
                            block px-4 py-3 text-sm transition-colors
                            ${
                              isActive(child.href)
                                ? "text-brand-gold font-semibold"
                                : "text-white/80 hover:text-white"
                            }
                          `}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-2 px-4 pt-4 border-t border-white/20 mt-2">
              <Link
                href="/get-help"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 text-white border border-white/40 rounded-md
                           font-semibold hover:bg-white/10 transition-colors"
              >
                GET HELP
              </Link>
              <Link
                href="/volunteer"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 text-white border border-white/40 rounded-md
                           font-semibold hover:bg-white/10 transition-colors"
              >
                VOLUNTEER
              </Link>
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 text-brand-purple bg-brand-gold rounded-md
                           font-semibold hover:opacity-90 transition-opacity"
              >
                DONATE
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
