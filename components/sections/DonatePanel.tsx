"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const getTierDescription = (amount: number, frequency: "once" | "monthly") => {
  const descriptions: Record<number, { once: string; monthly: string }> = {
    25: {
      once: "Feeds a child at S.C.A.M.P. for a week",
      monthly: "Feeds a child at S.C.A.M.P. for an entire year",
    },
    75: {
      once: "Provides a week of groceries for a family of 4",
      monthly: "Provides 52 weeks of groceries for a family of 4",
    },
    150: {
      once: "Sponsors a senior care box delivery for a month",
      monthly: "Sponsors 12 senior care box deliveries per year",
    },
    500: {
      once: "Funds a Mobile Pantry stop for a neighborhood",
      monthly: "Funds 12 Mobile Pantry stops per year",
    },
  };
  return descriptions[amount]?.[frequency] || "";
};

const tiers = [
  { amount: 25 },
  { amount: 75 },
  { amount: 150 },
  { amount: 500 },
];

function DonatePanelInner() {
  const searchParams = useSearchParams();
  const initialAmount = searchParams.get("amount");
  const initialFrequency = searchParams.get("frequency") === "once" ? "once" : "monthly";

  const [selected, setSelected] = useState<number | "custom" | null>(
    initialAmount ? Number(initialAmount) : null
  );
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">(initialFrequency);

  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <div className="inline-flex rounded-full bg-brand-gray-light p-1">
          <button
            onClick={() => setFrequency("monthly")}
            className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all ${
              frequency === "monthly"
                ? "bg-brand-gold text-brand-purple-dark shadow-lg scale-105"
                : "bg-transparent text-brand-charcoal hover:bg-white"
            }`}
          >
            Give Monthly
            <span className="ml-2 text-xs">⭐ Recommended</span>
          </button>
          <button
            onClick={() => setFrequency("once")}
            className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all ${
              frequency === "once" ? "bg-brand-purple text-white" : "text-brand-charcoal hover:bg-white"
            }`}
          >
            Give Once
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-4">
        {tiers.map((tier) => (
          <button
            key={tier.amount}
            onClick={() => setSelected(tier.amount)}
            className={`rounded-2xl border-2 p-6 text-center shadow-md transition-colors ${
              selected === tier.amount
                ? "border-brand-gold bg-brand-gold/10"
                : "border-transparent bg-white"
            }`}
          >
            <p className="font-heading text-3xl font-bold text-brand-purple">${tier.amount}</p>
            <p className="text-xs text-brand-gold font-semibold mb-1">
              {frequency === "monthly" ? "PER MONTH" : "ONE-TIME"}
            </p>
            <p className="mt-2 text-sm text-brand-gray">{getTierDescription(tier.amount, frequency)}</p>
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <label htmlFor="customAmount" className="text-sm font-semibold text-brand-charcoal">
          Or enter a custom amount
        </label>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-bold text-brand-gray">$</span>
          <input
            id="customAmount"
            type="number"
            min={1}
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelected("custom");
            }}
            className="w-full rounded-lg border border-brand-gray/30 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
            placeholder="Custom amount"
          />
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-brand-gray">
        Selected: {selected === "custom" ? `$${customAmount || "0"}` : selected ? `$${selected}` : "—"}{" "}
        {frequency === "monthly" ? "per month" : "one-time"}. Complete your gift securely below.
      </p>
    </div>
  );
}

export default function DonatePanel() {
  return (
    <Suspense fallback={<div className="h-64" />}>
      <DonatePanelInner />
    </Suspense>
  );
}
