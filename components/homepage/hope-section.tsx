export function HopeSection() {
  return (
    <section
      aria-label="Who This Therapy Is For"
      className="relative w-full bg-surface-warm py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Centered Editorial Narrative */}
        <div className="max-w-3xl mx-auto sm:text-center mb-16 md:mb-24">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-accent font-medium mb-4">
            A Familiar Pattern
          </p>
          <h2 className="font-heading font-light text-foreground text-h2 mb-6">
            When being functional on the outside isn&apos;t the same as{" "}
            <span className="text-primary">feeling at peace</span>.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Many adults who come to my Santa Monica practice are thoughtful,
            capable, and high-achieving. But behind closed doors, they carry a
            quiet, continuous exhaustion—stuck in overthinking, physical
            tension, or always bracing for something to go wrong.
          </p>
        </div>

        {/* 3 Spacious Reflection Columns (No SaaS checkboxes, pure editorial breathing room) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-8 border-t border-border/50">
          <div>
            <span className="font-heading text-xl text-foreground font-normal block mb-3">
              Internal Pressure &amp; Overthinking
            </span>
            <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              Living with relentless mental chatter, analysis paralysis, and
              high expectations that make it hard to slow down or truly rest
              without guilt.
            </p>
          </div>

          <div>
            <span className="font-heading text-xl text-foreground font-normal block mb-3">
              Somatic &amp; Physical Tension
            </span>
            <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              Carrying stress in the body—tight shoulders, shallow breathing,
              digestive strain, or sleep disturbances from a nervous system
              stuck in fight-or-flight.
            </p>
          </div>

          <div>
            <span className="font-heading text-xl text-foreground font-normal block mb-3">
              The Weight of Past Experiences
            </span>
            <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              Single-incident trauma or long-standing relational patterns from
              earlier in life that continue to undermine your sense of safety,
              trust, and ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
