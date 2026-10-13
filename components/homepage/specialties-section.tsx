import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SpecialtiesSection() {
  return (
    <section
      aria-label="Our Specialties"
      className="relative w-full bg-background overflow-x-clip py-[6vmax]"
    >
      <div className="specialties-fluid-grid w-full">
        {/* Section Heading */}
        <div className="spec-block-title flex items-center">
          <h3 className="font-heading font-light text-foreground text-h3">
            Our &nbsp;
            <span className="font-script text-dark-accent font-normal not-italic text-[1em]">
              specialties
            </span>
            &nbsp; include…
          </h3>
        </div>

        {/* Specialty 1: Trauma */}
        <div className="spec-block-1-text flex flex-col justify-start">
          <h4 className="font-heading font-light text-[1.4rem] md:text-[1.6rem] text-foreground mb-6">
            Trauma
          </h4>
          <p className="font-sans font-light text-foreground text-[0.98rem] leading-[1.8]">
            We don’t always know when and how we’ve experienced trauma. In
            therapy, we’ll work together to help you process your past,
            understand what’s causing you to stay “stuck,” and regain a sense of
            safety, control, and hope. You don’t have to carry your burdens
            alone.
          </p>
        </div>
        <div className="spec-block-1-btn flex items-center">
          <Button
            variant="underline"
            nativeButton={false}
            render={<Link href="/trauma-counseling-newbury-park" />}
          >
            Learn more
          </Button>
        </div>

        {/* Specialty 2: Dissociation */}
        <div className="spec-block-2-text flex flex-col justify-start">
          <h4 className="font-heading font-light text-[1.4rem] md:text-[1.6rem] text-foreground mb-6">
            Dissociation
          </h4>
          <p className="font-sans font-light text-foreground text-[0.98rem] leading-[1.8]">
            The feeling of losing time, hearing conflicting voices, or
            questioning your sense of self can be overwhelming. In therapy,
            we’ll help you understand these experiences, recognize your own
            triggers, and create a sense of balance and identity so that you can
            feel more grounded.
          </p>
        </div>
        <div className="spec-block-2-btn flex items-center">
          <Button
            variant="underline"
            nativeButton={false}
            render={
              <Link href="/dissociative-identity-disorder-therapist-newbury-park" />
            }
          >
            Learn more
          </Button>
        </div>

        {/* Specialty 3: EMDR */}
        <div className="spec-block-3-text flex flex-col justify-start">
          <h4 className="font-heading font-light text-[1.4rem] md:text-[1.6rem] text-foreground mb-6">
            EMDR
          </h4>
          <p className="font-sans font-light text-foreground text-[0.98rem] leading-[1.8]">
            Eye Movement Desensitization and Reprocessing (EMDR) is a powerful
            therapeutic technique that helps process and heal trauma by
            reworking how painful memories are stored in your brain. This allows
            you to find relief and move toward lasting healing.
          </p>
        </div>
        <div className="spec-block-3-btn flex items-center">
          <Button
            variant="underline"
            nativeButton={false}
            render={<Link href="/emdr-therapy-newbury-park" />}
          >
            Learn more
          </Button>
        </div>

        {/* Specialty 4: Special Needs Parenting */}
        <div className="spec-block-4-text flex flex-col justify-start">
          <h4 className="font-heading font-light text-[1.4rem] md:text-[1.6rem] text-foreground mb-6">
            Special Needs Parenting
          </h4>
          <p className="font-sans font-light text-foreground text-[0.98rem] leading-[1.8]">
            Parenting a child with special needs presents unique challenges and
            complex emotions. We provide compassionate support through lived
            experience and expertise to help you navigate this journey with
            tools, understanding, and self-care.
          </p>
        </div>
        <div className="spec-block-4-btn flex items-center">
          <Button
            variant="underline"
            nativeButton={false}
            render={
              <Link href="/counseling-special-needs-parents-newbury-park" />
            }
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
