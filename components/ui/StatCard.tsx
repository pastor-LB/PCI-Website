"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  variant?: "gold-on-dark" | "purple-on-light";
}

function useCountUp(target: number, shouldStart: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start: number | null = null;
    let frame: number;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [shouldStart, target, duration]);

  return count;
}

export default function StatCard({
  value,
  label,
  icon,
  variant = "gold-on-dark",
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const numericMatch = value.match(/[\d,]+/);
  const numericTarget = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ""), 10) : null;
  const prefix = numericMatch ? value.slice(0, numericMatch.index) : "";
  const suffix = numericMatch
    ? value.slice((numericMatch.index ?? 0) + numericMatch[0].length)
    : value;

  const animatedCount = useCountUp(numericTarget ?? 0, inView);
  const displayCount = inView ? animatedCount : (numericTarget ?? 0);

  const isGold = variant === "gold-on-dark";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center px-4"
    >
      {icon ? (
        <span
          className={`mb-2 [&>svg]:h-8 [&>svg]:w-8 ${isGold ? "text-brand-gold" : "text-brand-purple"}`}
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      <span
        className={`font-heading text-3xl sm:text-4xl font-bold ${
          isGold ? "text-brand-gold" : "text-brand-purple"
        }`}
      >
        {numericTarget !== null ? `${prefix}${displayCount.toLocaleString()}${suffix}` : value}
      </span>
      <span className={`mt-1 text-sm sm:text-base ${isGold ? "text-white" : "text-brand-gray"}`}>
        {label}
      </span>
    </motion.div>
  );
}
