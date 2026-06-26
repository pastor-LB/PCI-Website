"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { volunteerSchema, type VolunteerFormData } from "@/lib/validations";

const interests = [
  "Food Pantry",
  "Youth Programs",
  "Adopt-A-Block",
  "Admin",
  "Special Events",
  "Professional Skills",
];

const availabilityOptions = ["Mon–Fri AM", "Mon–Fri PM", "Saturdays", "Flexible"];

export default function VolunteerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerFormData>({ resolver: zodResolver(volunteerSchema) });

  async function onSubmit(data: VolunteerFormData) {
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      toast.success("Thank you! Your volunteer application has been submitted.");
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
          <label htmlFor="v-firstName" className="text-sm font-semibold text-brand-charcoal">
            First Name*
          </label>
          <input id="v-firstName" className={inputClass} {...register("firstName")} />
          {errors.firstName ? <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p> : null}
        </div>
        <div>
          <label htmlFor="v-lastName" className="text-sm font-semibold text-brand-charcoal">
            Last Name*
          </label>
          <input id="v-lastName" className={inputClass} {...register("lastName")} />
          {errors.lastName ? <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="v-email" className="text-sm font-semibold text-brand-charcoal">
            Email*
          </label>
          <input id="v-email" type="email" className={inputClass} {...register("email")} />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
        </div>
        <div>
          <label htmlFor="v-phone" className="text-sm font-semibold text-brand-charcoal">
            Phone*
          </label>
          <input id="v-phone" type="tel" className={inputClass} {...register("phone")} />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="ageRange" className="text-sm font-semibold text-brand-charcoal">
          Age Range*
        </label>
        <select id="ageRange" className={inputClass} {...register("ageRange")}>
          <option value="">Select...</option>
          {["Under 18", "18-24", "25-34", "35-49", "50-64", "65+"].map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        {errors.ageRange ? <p className="mt-1 text-xs text-red-600">{errors.ageRange.message}</p> : null}
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-brand-charcoal">Area of Interest*</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {interests.map((interest) => (
            <label key={interest} className="flex items-center gap-2 text-sm text-brand-gray">
              <input type="checkbox" value={interest} className="rounded text-brand-purple focus:ring-brand-gold" {...register("interests")} />
              {interest}
            </label>
          ))}
        </div>
        {errors.interests ? <p className="mt-1 text-xs text-red-600">{errors.interests.message}</p> : null}
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-brand-charcoal">Availability*</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {availabilityOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-brand-gray">
              <input type="checkbox" value={option} className="rounded text-brand-purple focus:ring-brand-gold" {...register("availability")} />
              {option}
            </label>
          ))}
        </div>
        {errors.availability ? <p className="mt-1 text-xs text-red-600">{errors.availability.message}</p> : null}
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-brand-charcoal">
          Have you volunteered with us before?*
        </legend>
        <div className="mt-2 flex gap-6">
          <label className="flex items-center gap-2 text-sm text-brand-gray">
            <input type="radio" value="yes" className="text-brand-purple focus:ring-brand-gold" {...register("volunteeredBefore")} />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-brand-gray">
            <input type="radio" value="no" className="text-brand-purple focus:ring-brand-gold" {...register("volunteeredBefore")} />
            No
          </label>
        </div>
        {errors.volunteeredBefore ? <p className="mt-1 text-xs text-red-600">{errors.volunteeredBefore.message}</p> : null}
      </fieldset>

      <div>
        <label htmlFor="about" className="text-sm font-semibold text-brand-charcoal">
          Tell us about yourself*
        </label>
        <textarea id="about" rows={4} maxLength={1000} className={inputClass} {...register("about")} />
        {errors.about ? <p className="mt-1 text-xs text-red-600">{errors.about.message}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="emergencyContactName" className="text-sm font-semibold text-brand-charcoal">
            Emergency Contact Name (optional)
          </label>
          <input id="emergencyContactName" className={inputClass} {...register("emergencyContactName")} />
        </div>
        <div>
          <label htmlFor="emergencyContactPhone" className="text-sm font-semibold text-brand-charcoal">
            Emergency Contact Phone (optional)
          </label>
          <input id="emergencyContactPhone" className={inputClass} {...register("emergencyContactPhone")} />
        </div>
      </div>

      <div>
        <label htmlFor="hearAboutUs" className="text-sm font-semibold text-brand-charcoal">
          How did you hear about us?
        </label>
        <select id="hearAboutUs" className={inputClass} {...register("hearAboutUs")}>
          <option value="">Select...</option>
          {["Social Media", "Friend or Family", "Church", "Event", "Search Engine", "Other"].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-brand-purple px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-brand-purple-light disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit My Volunteer Application"}
      </button>
    </form>
  );
}
