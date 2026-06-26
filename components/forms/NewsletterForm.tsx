"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validations";

interface NewsletterFormProps {
  compact?: boolean;
}

export default function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(data: NewsletterFormData) {
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      toast.success("You're subscribed! Thank you for joining the PCI community.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={compact ? "flex flex-col gap-2" : "flex flex-col gap-3 sm:flex-row"}>
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          {...register("email")}
        />
        {errors.email ? (
          <p id="newsletter-email-error" className="mt-1 text-xs text-brand-gold-light">
            {errors.email.message}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-brand-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-purple-dark hover:bg-brand-gold-light disabled:opacity-60"
      >
        Subscribe
      </button>
    </form>
  );
}
