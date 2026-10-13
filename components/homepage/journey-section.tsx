import Image from "next/image";

export function JourneySection() {
  return (
    <section
      id="office"
      aria-label="Our Santa Monica Therapy Office & Telehealth Setting"
      className="relative w-full bg-surface-warm py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Supporting Copy */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">
            The Office Sanctuary
          </p>
          <h2 className="font-heading font-light text-foreground text-h2 mb-6">
            A quiet sanctuary designed for{" "}
            <span className="text-primary">comfort, privacy, and ease</span>.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            The physical environment of therapy is an intentional part of the
            healing process. Located near the coast in Santa Monica, my office
            is a private, calm space filled with natural daylight, comfortable
            seating, and an uncluttered atmosphere designed to help you exhale
            the moment you walk in. Clients often share that the room itself
            provides a welcome pause from the pace and noise of daily life.
          </p>
        </div>

        {/* 2 Authentic Profile Office Images (Side-by-Side Gallery) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16 lg:mb-20">
          {/* Office Image 1: Main Counseling Seating Area */}
          <div>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xs bg-secondary/40 border border-border/40 mb-3.5">
              <Image
                src="/images/office-1.jpg"
                alt="Dr. Maya Reynolds private Santa Monica therapy room with comfortable seating, plants, and natural light"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <p className="font-heading text-lg sm:text-xl text-foreground font-normal mb-1">
              Private Counseling Space
            </p>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
              Comfortable, unhurried seating surrounded by warm coastal daylight
              and quiet acoustic privacy.
            </p>
          </div>

          {/* Office Image 2: Sunlit Interior & Grounding Setting */}
          <div>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xs bg-secondary/40 border border-border/40 mb-3.5">
              <Image
                src="/images/office-2.jpg"
                alt="Sunlit Santa Monica therapy office interior with natural greenery and peaceful atmosphere"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <p className="font-heading text-lg sm:text-xl text-foreground font-normal mb-1">
              Grounded, Mindful Setting
            </p>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
              An uncluttered environment with living plants, soft textures, and
              room to reflect without feeling rushed.
            </p>
          </div>
        </div>

        {/* 3 Supporting Pillars: Location, In-Person / Hybrid, Safety & Privacy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pt-12 border-t border-border/50">
          {/* Pillar 1: Location Mention */}
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.16em] text-accent font-medium block mb-2">
              Location &amp; Setting
            </span>
            <h3 className="font-heading font-normal text-foreground text-h3 mb-3">
              Santa Monica, CA
            </h3>
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
              Located at{" "}
              <strong>123th Street 45 W, Santa Monica, CA 90401</strong>. A
              quiet coastal haven easily accessible from Venice, Brentwood,
              Westwood, and Pacific Palisades.
            </p>
          </div>

          {/* Pillar 2: In-Person / Hybrid Session Availability */}
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.16em] text-accent font-medium block mb-2">
              Session Formats
            </span>
            <h3 className="font-heading font-normal text-foreground text-h3 mb-3">
              In-Person &amp; Telehealth
            </h3>
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
              Choose between face-to-face sessions in Santa Monica or secure,
              HIPAA-compliant video therapy available to clients residing
              statewide across California.
            </p>
          </div>

          {/* Pillar 3: Emphasis on Safety, Comfort, and Privacy */}
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.16em] text-accent font-medium block mb-2">
              Therapeutic Foundation
            </span>
            <h3 className="font-heading font-normal text-foreground text-h3 mb-3">
              Safety &amp; Privacy
            </h3>
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
              Confidentiality and felt safety are foundational. The space is
              intentionally private, calm, and sound-managed so you can speak
              openly and without hesitation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
