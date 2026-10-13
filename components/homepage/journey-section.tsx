import Image from "next/image";

export function JourneySection() {
  return (
    <section
      id="office"
      aria-label="Santa Monica Office Space & California Telehealth"
      className="relative w-full bg-surface-warm py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-accent font-medium mb-4">
            Practice Setting
          </p>
          <h2 className="font-heading font-light text-foreground text-h2 mb-6">
            A quiet sanctuary in Santa Monica,{" "}
            <span className="text-primary">and virtual across California</span>.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            The environment of therapy matters. My office is an intentionally
            uncluttered, sunlit space designed to feel calm and
            grounding—helping you exhale the moment you arrive.
          </p>
        </div>

        {/* Generous Hero Office Image */}
        <div className="relative w-full aspect-[16/9] max-h-[540px] rounded-2xl overflow-hidden shadow-sm bg-secondary/30 mb-16">
          <Image
            src="/images/office-1.jpg"
            alt="Sunlit Santa Monica therapy office with comfortable seating, plants, and natural light"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center"
          />
        </div>

        {/* Two Quiet Location Explanations (Editorial 2-Column Split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8 border-t border-border/50">
          <div>
            <h3 className="font-heading font-normal text-foreground text-h3 mb-4">
              In-Person in Santa Monica
            </h3>
            <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-4">
              Located at 123th Street 45 W, Santa Monica, CA 90401. A private,
              peaceful space with natural coastal light and comfortable,
              unhurried seating. Easily accessible from Venice, Brentwood,
              Westwood, and Pacific Palisades.
            </p>
            <span className="font-sans text-xs text-accent font-medium tracking-wide">
              Private Office · Natural Daylight · Grounding Atmosphere
            </span>
          </div>

          <div>
            <h3 className="font-heading font-normal text-foreground text-h3 mb-4">
              Statewide California Telehealth
            </h3>
            <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-4">
              For busy professionals or clients residing across California—from
              Silicon Valley and the Bay Area to San Diego—I offer secure,
              HIPAA-compliant video sessions with the same depth, structure, and
              relational warmth as meeting in person.
            </p>
            <span className="font-sans text-xs text-accent font-medium tracking-wide">
              Licensed in California · Secure &amp; Confidential Video
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
