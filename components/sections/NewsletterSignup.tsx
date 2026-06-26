import Section from "@/components/ui/Section";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function NewsletterSignup() {
  return (
    <Section background="cream" padding="md">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="font-heading text-2xl font-semibold text-brand-purple">
          Stay Connected to the Mission
        </h3>
        <p className="mt-2 text-brand-gray">
          Get program updates, volunteer opportunities, and event invitations delivered to
          your inbox.
        </p>
        <div className="mt-6 [&_input]:text-brand-charcoal [&_input]:bg-white [&_input]:border-brand-gray/30 [&_input]:placeholder:text-brand-gray">
          <NewsletterForm />
        </div>
        <p className="mt-3 text-xs text-brand-gray">We never spam.</p>
      </div>
    </Section>
  );
}
