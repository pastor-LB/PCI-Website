import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  background?: "white" | "cream" | "purple" | "gray-light" | "charcoal";
  padding?: "sm" | "md" | "lg";
  container?: boolean;
  className?: string;
  id?: string;
}

const bgClasses: Record<NonNullable<SectionProps["background"]>, string> = {
  white: "bg-white",
  cream: "bg-brand-cream",
  purple: "bg-brand-purple text-white",
  "gray-light": "bg-brand-gray-light",
  charcoal: "bg-brand-charcoal text-white",
};

const paddingClasses: Record<NonNullable<SectionProps["padding"]>, string> = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-24",
};

export default function Section({
  children,
  background = "white",
  padding = "lg",
  container = true,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${bgClasses[background]} ${paddingClasses[padding]} ${className}`}>
      {container ? <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div> : children}
    </section>
  );
}
