"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1600&q=80"
        // TODO: Replace with actual PCI photography
        alt="Volunteers and community members at a Park City Initiative event in Bridgeport"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/90 to-brand-purple-dark/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="white">Serving Bridgeport Since 1999</Badge>
          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Over 1 Million Meals. One Bridgeport at a Time.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Park City Initiative fights food insecurity, builds youth leadership, and
            strengthens neighborhoods across Bridgeport, Connecticut — one meal, one child,
            and one block at a time.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/donate" variant="gold" size="lg">
              Donate Now
            </Button>
            <Button href="/get-help" variant="outline-white" size="lg">
              Get Help
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/80">
            ✓ 501(c)(3) Verified &nbsp;|&nbsp; ✓ 22 Years of Service &nbsp;|&nbsp; ✓ 900+
            Families Served Weekly
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white"
        aria-hidden="true"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
