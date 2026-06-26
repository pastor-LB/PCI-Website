"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="absolute inset-0 bg-brand-purple-dark/95" onClick={onClose} />
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            className="relative z-10 flex h-full flex-col overflow-y-auto bg-brand-purple-dark px-6 py-6"
          >
            <div className="flex justify-end">
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-md p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="mt-8 flex flex-1 flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="border-b border-white/10 py-3">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between text-lg font-semibold text-white"
                  >
                    {link.label}
                    {"children" in link && link.children ? (
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    ) : null}
                  </Link>
                  {"children" in link && link.children ? (
                    <div className="mt-2 flex flex-col gap-2 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="text-sm text-white/80 hover:text-brand-gold"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/get-help" variant="outline-white" onClick={onClose}>
                Get Help
              </Button>
              <Button href="/volunteer" variant="outline-white" onClick={onClose}>
                Volunteer
              </Button>
              <Button href="/donate" variant="gold" onClick={onClose}>
                Donate
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
