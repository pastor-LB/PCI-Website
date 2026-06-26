"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const total = target.getTime() - Date.now();
  const clamped = Math.max(total, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(new Date(targetDate)));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date(targetDate)));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units: { label: string; value: number }[] = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="mt-8 flex justify-center gap-4 sm:gap-6">
      {units.map((unit) => (
        <div key={unit.label} className="rounded-xl bg-white/10 px-4 py-3 text-center sm:px-6">
          <p className="font-heading text-3xl font-bold text-brand-gold sm:text-4xl">
            {unit.value}
          </p>
          <p className="text-xs uppercase tracking-wide text-white/80">{unit.label}</p>
        </div>
      ))}
    </div>
  );
}
