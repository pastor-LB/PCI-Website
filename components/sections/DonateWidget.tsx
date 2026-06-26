"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const tiers = [
  {
    amount: 25,
    description: "Feeds a child at S.C.A.M.P. for a week",
  },
  {
    amount: 75,
    description: "Provides a week of groceries for a family of 4",
  },
  {
    amount: 150,
    description: "Sponsors a senior care box delivery for a month",
  },
];

export default function DonateWidget() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  return (
    <Section background="purple">
      <h2 className="text-center font-heading text-3xl font-semibold text-white sm:text-4xl">
        Your Gift Feeds a Family Tonight.
      </h2>

      <div className="mt-6 flex justify-center">
        <div className="inline-flex rounded-full bg-white/10 p-1">
          <button
            onClick={() => setFrequency("once")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide ${
              frequency === "once" ? "bg-brand-gold text-brand-purple-dark" : "text-white"
            }`}
          >
            Give Once
          </button>
          <button
            onClick={() => setFrequency("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide ${
              frequency === "monthly" ? "bg-brand-gold text-brand-purple-dark" : "text-white"
            }`}
          >
            Give Monthly
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.amount} className="rounded-2xl bg-white p-6 text-center shadow-lg">
            <p className="font-heading text-3xl font-bold text-brand-purple">${tier.amount}</p>
            <p className="mt-2 text-sm text-brand-gray">{tier.description}</p>
            <div className="mt-4">
              <Button href={`/donate?amount=${tier.amount}&frequency=${frequency}`} variant="gold">
                Give ${tier.amount}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
