import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  borderColor?: "gold" | "purple" | "charcoal" | "none";
}

const borderClasses: Record<NonNullable<CardProps["borderColor"]>, string> = {
  gold: "border-t-4 border-brand-gold",
  purple: "border-t-4 border-brand-purple",
  charcoal: "border-t-4 border-brand-charcoal",
  none: "",
};

export default function Card({ children, className = "", borderColor = "none" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 sm:p-8 ${borderClasses[borderColor]} ${className}`}
    >
      {children}
    </div>
  );
}
