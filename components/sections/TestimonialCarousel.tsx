"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/ui/Section";

// PLACEHOLDER testimonials — replace with real community voices.
const testimonials = [
  {
    quote:
      "When I lost my job, the food pantry made sure my kids never went without dinner. I'll never forget that kindness.",
    name: "Maria S.",
    role: "Community Market Guest",
  },
  {
    quote:
      "S.C.A.M.P. gave my son somewhere safe and fun to go all summer, and he came home talking about his goals for the first time.",
    name: "Darnell W.",
    role: "Parent, S.C.A.M.P. Family",
  },
  {
    quote:
      "Volunteering at PCI changed how I see my own neighborhood. We're not just handing out food — we're building relationships.",
    name: "Pat R.",
    role: "PCI Volunteer",
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isHovering) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi, isHovering]);

  return (
    <Section background="white">
      <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
        Voices from Our Community
      </h2>
      <div
        className="mt-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <div className="flex h-full flex-col rounded-2xl bg-brand-gray-light p-6 shadow-md">
                  <Quote className="h-7 w-7 text-brand-gold" aria-hidden="true" />
                  <p className="mt-3 flex-1 italic text-brand-charcoal">&ldquo;{t.quote}&rdquo;</p>
                  <hr className="my-4 border-brand-gray/20" />
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple text-sm font-bold text-white"
                      aria-hidden="true"
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-brand-charcoal">{t.name}</p>
                      <p className="text-sm text-brand-gray">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous testimonial"
            className="rounded-full border border-brand-gray/30 p-2 hover:bg-brand-gray-light"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, index) => (
              <button
                key={t.name}
                onClick={() => scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === selectedIndex ? "bg-brand-gold" : "bg-brand-gray/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next testimonial"
            className="rounded-full border border-brand-gray/30 p-2 hover:bg-brand-gray-light"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link href="/contact" className="font-semibold text-brand-purple hover:text-brand-gold">
            Share Your Story →
          </Link>
        </div>
      </div>
    </Section>
  );
}
