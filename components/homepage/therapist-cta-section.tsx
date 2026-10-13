"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function TherapistCtaSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Schedule a Consultation with Dr. Maya Reynolds"
      className="relative w-full bg-background py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Reassurance & Practice Details */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <p className="font-sans text-xs tracking-[0.18em] uppercase text-accent font-medium mb-4">
              Begin With A Conversation
            </p>

            <h2 className="font-heading font-light text-foreground text-h2 mb-6">
              Take the first step toward feeling{" "}
              <span className="italic text-primary">grounded again</span>.
            </h2>

            <p className="font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-[50ch]">
              Coming to therapy is a courageous decision. I offer a
              complimentary 15-minute phone consultation so we can speak
              briefly, discuss what you are experiencing, and determine whether
              my practice is the right fit for your needs.
            </p>

            {/* Direct practice details without bulky icon-in-a-box components */}
            <div className="space-y-6 pt-6 border-t border-border/50 max-w-[48ch]">
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-accent font-medium mb-1">
                  Santa Monica Office
                </p>
                <p className="font-sans text-sm sm:text-base text-foreground font-light">
                  123th Street 45 W, Santa Monica, CA 90401
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-accent font-medium mb-1">
                  California Telehealth
                </p>
                <p className="font-sans text-sm sm:text-base text-foreground font-light">
                  Secure video appointments available to clients statewide
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-accent font-medium mb-1">
                  Response Time
                </p>
                <p className="font-sans text-sm sm:text-base text-muted-foreground font-light">
                  All inquiries receive a personal response within 24–48
                  business hours.
                </p>
              </div>
            </div>

            {/* Minimal doctor attribution */}
            <div className="flex items-center gap-3.5 pt-8 mt-4 border-t border-border/50">
              <div className="size-11 rounded-full overflow-hidden border border-border shrink-0">
                <Image
                  src="/images/dr-maya-reynolds.png"
                  alt="Dr. Maya Reynolds"
                  width={44}
                  height={44}
                  className="object-cover object-top size-full"
                />
              </div>
              <div>
                <p className="font-heading text-base text-foreground font-normal">
                  Dr. Maya Reynolds, PsyD
                </p>
                <p className="font-sans text-xs text-muted-foreground font-light">
                  Licensed Clinical Psychologist · Santa Monica, CA
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Frictionless Consultation Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-surface-warm border border-border/70 shadow-xs">
              <h3 className="font-heading font-normal text-foreground text-h3 mb-2">
                Request a Consultation
              </h3>
              <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed mb-6">
                Share a few brief details below and I will be in touch to
                coordinate your 15-minute phone consultation.
              </p>

              {formSubmitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-10 px-6 rounded-xl bg-background border border-border/70 text-center space-y-3"
                >
                  <div className="size-10 rounded-full bg-secondary/80 text-primary flex items-center justify-center mx-auto text-lg">
                    ✓
                  </div>
                  <h4 className="font-heading text-xl text-foreground font-normal">
                    Inquiry Received
                  </h4>
                  <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed max-w-[36ch] mx-auto">
                    Thank you for reaching out. Dr. Reynolds will follow up
                    within 24–48 business hours to schedule your consultation
                    call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block font-sans text-xs font-medium uppercase tracking-wider text-foreground mb-1.5"
                    >
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-contact"
                      className="block font-sans text-xs font-medium uppercase tracking-wider text-foreground mb-1.5"
                    >
                      Email Address or Phone{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <input
                      id="client-contact"
                      type="text"
                      required
                      placeholder="jane@example.com or (310) 555-0192"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-preference"
                      className="block font-sans text-xs font-medium uppercase tracking-wider text-foreground mb-1.5"
                    >
                      Preferred Format
                    </label>
                    <select
                      id="client-preference"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="undecided">Open to either</option>
                      <option value="in-person">
                        In-Person (Santa Monica Office)
                      </option>
                      <option value="telehealth">
                        California Telehealth (Virtual)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="client-message"
                      className="block font-sans text-xs font-medium uppercase tracking-wider text-foreground mb-1.5"
                    >
                      What brings you to therapy? (Optional)
                    </label>
                    <textarea
                      id="client-message"
                      rows={3}
                      placeholder="Share a brief note about what you are currently navigating..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>

                  <p className="text-[0.72rem] text-muted-foreground font-light leading-relaxed">
                    Confidentiality note: Inquiries submitted here are private
                    and never shared. This form does not establish an immediate
                    patient-therapist relationship.
                  </p>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full py-3.5 text-sm"
                  >
                    Schedule a Consultation
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
