import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";

// NOTE: To connect a real list provider, wire up Mailchimp (MAILCHIMP_API_KEY,
// MAILCHIMP_LIST_ID, MAILCHIMP_SERVER_PREFIX) or Resend Audiences here.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.issues }, { status: 400 });
  }

  const mailchimpKey = process.env.MAILCHIMP_API_KEY;
  const mailchimpList = process.env.MAILCHIMP_LIST_ID;
  const mailchimpPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (mailchimpKey && mailchimpList && mailchimpPrefix) {
    try {
      await fetch(
        `https://${mailchimpPrefix}.api.mailchimp.com/3.0/lists/${mailchimpList}/members`,
        {
          method: "POST",
          headers: {
            Authorization: `apikey ${mailchimpKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: parsed.data.email,
            status: "subscribed",
            merge_fields: { FNAME: parsed.data.firstName ?? "" },
          }),
        }
      );
    } catch (error) {
      console.error("Mailchimp subscribe failed", error);
    }
  } else {
    console.log("New newsletter signup (no Mailchimp credentials configured):", parsed.data);
  }

  return NextResponse.json({ success: true });
}
