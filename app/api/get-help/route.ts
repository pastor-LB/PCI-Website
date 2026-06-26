import { NextResponse } from "next/server";
import { getHelpSchema } from "@/lib/validations";
import { SITE } from "@/lib/constants";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = getHelpSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.issues }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ success: true });
  }

  const { firstName, lastName, email } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.EMAIL_TO ?? SITE.email;

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.EMAIL_FROM ?? "PCI Website <noreply@parkcityinitiative.org>",
        to: emailTo,
        subject: `New Help Request — ${firstName} ${lastName}`,
        text: JSON.stringify(parsed.data, null, 2),
      });

      if (email) {
        await resend.emails.send({
          from: process.env.EMAIL_FROM ?? "Park City Initiative <noreply@parkcityinitiative.org>",
          to: email,
          subject: "We received your request — Park City Initiative",
          text: "Thank you for reaching out to Park City Initiative. A team member will contact you within 24 hours.",
        });
      }
    } catch (error) {
      console.error("Resend email failed", error);
    }
  } else {
    console.log("New Get Help request (no RESEND_API_KEY configured):", parsed.data);
  }

  return NextResponse.json({ success: true });
}
