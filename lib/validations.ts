import { z } from "zod";

export const getHelpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  address: z.string().optional().or(z.literal("")),
  city: z.string().optional().or(z.literal("")),
  zip: z.string().regex(/^\d{5}$/, "Enter a valid 5-digit ZIP code"),
  householdSize: z.string().min(1, "Household size is required"),
  helpType: z.array(z.string()).min(1, "Select at least one type of help"),
  status: z.enum(["new", "returning"], {
    message: "Please select new or returning",
  }),
  bestTime: z.string().optional().or(z.literal("")),
  notes: z.string().max(500, "Notes must be 500 characters or fewer").optional().or(z.literal("")),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type GetHelpFormData = z.infer<typeof getHelpSchema>;

export const volunteerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  ageRange: z.string().min(1, "Age range is required"),
  interests: z.array(z.string()).min(1, "Select at least one area of interest"),
  availability: z.array(z.string()).min(1, "Select at least one availability option"),
  volunteeredBefore: z.enum(["yes", "no"], {
    message: "Please select yes or no",
  }),
  about: z
    .string()
    .min(50, "Please tell us a bit more (at least 50 characters)")
    .max(1000, "Please keep this under 1000 characters"),
  emergencyContactName: z.string().optional().or(z.literal("")),
  emergencyContactPhone: z.string().optional().or(z.literal("")),
  hearAboutUs: z.string().optional().or(z.literal("")),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type VolunteerFormData = z.infer<typeof volunteerSchema>;

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional().or(z.literal("")),
  subject: z.string().min(1, "Please choose a subject"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be 2000 characters or fewer"),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email"),
  firstName: z.string().optional().or(z.literal("")),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
