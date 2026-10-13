export function SpecialtiesSection() {
  return (
    <section
      id="services"
      aria-label="Therapy Services & Specialties in Santa Monica"
      className="relative w-full bg-surface-sage py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-accent font-medium mb-4">
            Areas of Focus
          </p>
          <h2 className="font-heading font-light text-foreground text-h2 mb-6">
            Paced, evidence-based care tailored to{" "}
            <span className="text-primary">your needs</span>.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            I specialize in three core areas where anxiety, unresolved trauma,
            and professional burnout intersect—integrating practical tools with
            depth-oriented psychological healing.
          </p>
        </div>

        {/* 3 Spacious Editorial Columns (No SaaS cards, no mono tags, pure breathing room) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 pt-10 border-t border-border/50">
          {/* Specialty 1 */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-normal text-foreground text-h3 mb-4">
                Anxiety, Panic &amp; Constant Worry
              </h3>
              <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-6">
                For adults quietly struggling with constant worry, tight chest,
                difficulty sleeping, and the feeling that you are perpetually
                bracing for something to go wrong. Together, we demystify the
                panic cycle using CBT and somatic calming tools to help your
                nervous system step out of fight-or-flight.
              </p>
            </div>
            <p className="font-sans text-xs text-accent font-medium tracking-wide">
              CBT · Somatic Grounding · Nervous System Relief
            </p>
          </div>

          {/* Specialty 2 */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-normal text-foreground text-h3 mb-4">
                Trauma &amp; EMDR Therapy
              </h3>
              <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-6">
                Whether working through single-incident trauma or complex,
                long-standing patterns from childhood and past relationships,
                our work is paced with deep care. We use EMDR to safely
                reprocess distressing memories so they no longer disrupt your
                present life.
              </p>
            </div>
            <p className="font-sans text-xs text-accent font-medium tracking-wide">
              EMDR · Safety First · Stabilization &amp; Reprocessing
            </p>
          </div>

          {/* Specialty 3 */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-normal text-foreground text-h3 mb-4">
                Burnout &amp; High-Pressure Support
              </h3>
              <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-6">
                For entrepreneurs, creatives, and executives exhausted by years
                of pushing through stress and high internal expectations.
                Therapy provides a dedicated space to slow down, dismantle harsh
                perfectionism, and build a sustainable rhythm for your life.
              </p>
            </div>
            <p className="font-sans text-xs text-accent font-medium tracking-wide">
              Perfectionism · Identity Reconnection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
