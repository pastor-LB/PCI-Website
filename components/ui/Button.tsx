import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "gold" | "outline-white" | "outline-purple" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  rounded?: boolean;
  loading?: boolean;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-purple text-white hover:bg-brand-purple-light focus-visible:ring-brand-gold",
  gold: "bg-brand-gold text-brand-purple-dark hover:bg-brand-gold-light focus-visible:ring-brand-purple",
  "outline-white":
    "border-2 border-white text-white hover:bg-white hover:text-brand-purple focus-visible:ring-brand-gold",
  "outline-purple":
    "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white focus-visible:ring-brand-gold",
  ghost: "text-brand-purple hover:bg-brand-gray-light focus-visible:ring-brand-gold",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

function classes({
  variant = "primary",
  size = "md",
  rounded = false,
  className = "",
}: Pick<BaseProps, "variant" | "size" | "rounded" | "className">) {
  return [
    base,
    variantClasses[variant],
    sizeClasses[size],
    rounded ? "rounded-full" : "rounded-lg",
    className,
  ].join(" ");
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant, size, rounded, loading, children, className, ...rest } = props;

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={classes({ variant, size, rounded, className })}
      >
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={classes({ variant, size, rounded, className })}
      disabled={loading || buttonRest.disabled}
      {...buttonRest}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
      {children}
    </button>
  );
}
