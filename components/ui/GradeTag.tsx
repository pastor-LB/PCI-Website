interface GradeTagProps {
  label: string;
  className?: string;
}

export default function GradeTag({ label, className = "" }: GradeTagProps) {
  return (
    <span
      className={`inline-block rounded-md bg-brand-charcoal px-2 py-0.5 text-xs font-semibold text-white ${className}`}
    >
      {label}
    </span>
  );
}
