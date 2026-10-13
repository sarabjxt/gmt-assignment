import Image from "next/image";

export function JourneySection() {
  return (
    <section
      aria-label="Honoring Your Journey"
      className="relative w-full bg-background overflow-x-clip py-[6vmax]"
    >
      <div className="journey-fluid-grid w-full">
        {/* Left Full-Bleed Path Image */}
        <div className="journey-block-image relative w-full h-full min-h-[304px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/honoring-journey.jpg"
            alt="Couple walking along scenic ocean pathway"
            fill
            sizes="(max-width: 768px) 90vw, 55vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-image-block-overlay pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Right Headline */}
        <div className="journey-block-heading flex items-center md:items-end pb-4">
          <h2 className="font-heading font-light text-foreground text-h2 leading-[1.3]">
            Honoring where you’ve been{" "}
            <span className="font-script text-dark-accent font-normal not-italic text-[1em]">
              &amp;
            </span>{" "}
            helping shape where you’re headed.
          </h2>
        </div>
      </div>
    </section>
  );
}
