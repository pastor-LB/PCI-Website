import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "gold" | "purple" | "white";
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  gold: "bg-brand-gold/15 text-brand-gold-dark",
  purple: "bg-brand-purple/10 text-brand-purple",
  white: "bg-white/15 text-white",
};

export default function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
