"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { getHelpSchema, type GetHelpFormData } from "@/lib/validations";

const helpTypes = [
  "Food Pantry / Community Market",
  "Senior Care Box Delivery",
  "Mobile Pantry",
  "Youth Program",
  "Crisis Resources",
  "Other",
];

const bestTimes = ["Morning", "Afternoon", "Evening", "Anytime"];

export default function GetHelpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GetHelpFormData>({ resolver: zodResolver(getHelpSchema) });

  async function onSubmit(data: GetHelpFormData) {
    try {
      const res = await fetch("/api/get-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      toast.success("Request received. We'll contact you within 24 hours.");
      reset();
    } catch {
      toast.error("Something went wrong. Please call us at 203-873-0260.");
    }
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-brand-gray/30 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-semibold text-brand-charcoal">
            First Name*
          </label>
          <input id="firstName" className={inputClass} aria-describedby={errors.firstName ? "firstName-error" : undefined} {...register("firstName")} />
          {errors.firstName ? (
            <p id="firstName-error" className="mt-1 text-xs text-red-600">
              {errors.firstName.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-semibold text-brand-charcoal">
            Last Name*
          </label>
          <input id="lastName" className={inputClass} aria-describedby={errors.lastName ? "lastName-error" : undefined} {...register("lastName")} />
          {errors.lastName ? (
            <p id="lastName-error" className="mt-1 text-xs text-red-600">
              {errors.lastName.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-brand-charcoal">
            Phone*
          </label>
          <input id="phone" type="tel" className={inputClass} aria-describedby={errors.phone ? "phone-error" : undefined} {...register("phone")} />
          {errors.phone ? (
            <p id="phone-error" className="mt-1 text-xs text-red-600">
              {errors.phone.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-brand-charcoal">
            Email (optional)
          </label>
          <input id="email" type="email" className={inputClass} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="address" className="text-sm font-semibold text-brand-charcoal">
            Address (optional)
          </label>
          <input id="address" className={inputClass} {...register("address")} />
        </div>
        <div>
          <label htmlFor="city" className="text-sm font-semibold text-brand-charcoal">
            City
          </label>
          <input id="city" className={inputClass} {...register("city")} />
        </div>
        <div>
          <label htmlFor="zip" className="text-sm font-semibold text-brand-charcoal">
            ZIP*
          </label>
          <input id="zip" className={inputClass} aria-describedby={errors.zip ? "zip-error" : undefined} {...register("zip")} />
          {errors.zip ? (
            <p id="zip-error" className="mt-1 text-xs text-red-600">
              {errors.zip.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="householdSize" className="text-sm font-semibold text-brand-charcoal">
            Household Size*
          </label>
          <select id="householdSize" className={inputClass} {...register("householdSize")}>
            <option value="">Select...</option>
            {["1", "2", "3", "4", "5", "6", "7+"].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.householdSize ? (
            <p className="mt-1 text-xs text-red-600">{errors.householdSize.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="bestTime" className="text-sm font-semibold text-brand-charcoal">
            Best Time to Reach You
          </label>
          <select id="bestTime" className={inputClass} {...register("bestTime")}>
            <option value="">Select...</option>
            {bestTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-brand-charcoal">
          Type of Help Needed*
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {helpTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm text-brand-gray">
              <input type="checkbox" value={type} className="rounded text-brand-purple focus:ring-brand-gold" {...register("helpType")} />
              {type}
            </label>
          ))}
        </div>
        {errors.helpType ? <p className="mt-1 text-xs text-red-600">{errors.helpType.message}</p> : null}
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-brand-charcoal">
          Are you new or returning?*
        </legend>
        <div className="mt-2 flex gap-6">
          <label className="flex items-center gap-2 text-sm text-brand-gray">
            <input type="radio" value="new" className="text-brand-purple focus:ring-brand-gold" {...register("status")} />
            New
          </label>
          <label className="flex items-center gap-2 text-sm text-brand-gray">
            <input type="radio" value="returning" className="text-brand-purple focus:ring-brand-gold" {...register("status")} />
            Returning
          </label>
        </div>
        {errors.status ? <p className="mt-1 text-xs text-red-600">{errors.status.message}</p> : null}
      </fieldset>

      <div>
        <label htmlFor="notes" className="text-sm font-semibold text-brand-charcoal">
          Additional Notes (optional)
        </label>
        <textarea id="notes" rows={3} maxLength={500} className={inputClass} {...register("notes")} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-brand-purple px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-brand-purple-light disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Request Help — We'll Contact You Within 24 Hours"}
      </button>
    </form>
  );
}
