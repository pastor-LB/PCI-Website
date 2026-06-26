import type { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  tall?: boolean;
}

export default function PageHero({ title, subtitle, children, tall = false }: PageHeroProps) {
  return (
    <div
      className={`flex items-center bg-gradient-to-br from-brand-purple to-brand-purple-dark px-4 pt-28 pb-12 text-center sm:px-6 lg:px-8 ${
        tall ? "min-h-[60vh]" : "min-h-[40vh]"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-4 text-lg text-white/85">{subtitle}</p> : null}
        {children}
      </div>
    </div>
  );
}
