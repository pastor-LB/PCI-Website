"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactSchema, type ContactFormData } from "@/lib/validations";

const subjects = [
  "General Inquiry",
  "Volunteer Question",
  "Donation Question",
  "Partnership / Sponsorship",
  "Media Inquiry",
  "Share My Story",
  "Other",
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      toast.success("Message sent! We'll get back to you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-brand-gray/30 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-firstName" className="text-sm font-semibold text-brand-charcoal">
            First Name*
          </label>
          <input id="c-firstName" className={inputClass} {...register("firstName")} />
          {errors.firstName ? <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p> : null}
        </div>
        <div>
          <label htmlFor="c-lastName" className="text-sm font-semibold text-brand-charcoal">
            Last Name*
          </label>
          <input id="c-lastName" className={inputClass} {...register("lastName")} />
          {errors.lastName ? <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-email" className="text-sm font-semibold text-brand-charcoal">
            Email*
          </label>
          <input id="c-email" type="email" className={inputClass} {...register("email")} />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
        </div>
        <div>
          <label htmlFor="c-phone" className="text-sm font-semibold text-brand-charcoal">
            Phone (optional)
          </label>
          <input id="c-phone" type="tel" className={inputClass} {...register("phone")} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-semibold text-brand-charcoal">
          Subject*
        </label>
        <select id="subject" className={inputClass} {...register("subject")}>
          <option value="">Select...</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        {errors.subject ? <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-brand-charcoal">
          Message*
        </label>
        <textarea id="message" rows={5} maxLength={2000} className={inputClass} {...register("message")} />
        {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-brand-purple px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-brand-purple-light disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
