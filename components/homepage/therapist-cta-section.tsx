import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TherapistCtaSection() {
  return (
    <section
      aria-label="Schedule an Appointment"
      className="relative w-full bg-hero-section overflow-x-clip py-[6vmax]"
    >
      <div className="therapist-cta-grid w-full">
        {/* Left Side Portrait Image */}
        <div className="therapist-img-left relative w-full h-full min-h-[304px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/therapist-fit-1.jpg"
            alt="Counseling session conversation"
            fill
            sizes="(max-width: 768px) 80vw, 20vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-warm-accent/15 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Center Eyebrow */}
        <div className="therapist-cta-eyebrow flex items-center">
          <p className="font-sans font-normal uppercase tracking-[0.12em] text-[0.85rem] md:text-[0.94rem] text-foreground leading-[1.8em]">
            SCHEDULE AN APPOINTMENT
          </p>
        </div>

        {/* Center Heading */}
        <div className="therapist-cta-heading flex items-start">
          <h2 className="font-heading font-light text-foreground text-h2">
            Find a therapist who is the right fit for &nbsp;
            <span className="font-script text-dark-accent font-normal not-italic text-[1em]">
              you
            </span>
            .
          </h2>
        </div>

        {/* Center Description */}
        <div className="therapist-cta-body flex flex-col justify-start">
          <p className="font-sans font-light text-foreground text-[1.02rem] leading-[1.8] mb-4">
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand that
            your journey is personal, and we&apos;re here to support you with
            care and understanding every step of the way. Each member of our
            team brings dedicated expertise and a commitment to support you in
            your struggles. We want you to feel prioritized, understood, and
            empowered.
          </p>
          <p className="font-sans font-light text-foreground text-[1.02rem] leading-[1.8]">
            Click the button below to schedule an appointment.
          </p>
        </div>

        {/* Center Action Button */}
        <div className="therapist-cta-btn flex items-center">
          <Button
            variant="primary"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Book now
          </Button>
        </div>

        {/* Right Side Portrait Image */}
        <div className="therapist-img-right relative w-full h-full min-h-[304px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/therapist-fit-2.jpg"
            alt="Therapist listening with warmth"
            fill
            sizes="(max-width: 768px) 80vw, 38vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-warm-accent/15 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
