const modalities = [
  {
    name: "Cognitive-Behavioral Therapy (CBT)",
    subtitle: "Practical Cognitive Tools",
    description:
      "Identifies the mental patterns, catastrophic projections, and perfectionistic standards that drive chronic stress—building actionable tools to interrupt anxious cycles in daily life.",
  },
  {
    name: "EMDR Therapy",
    subtitle: "Trauma Memory Reprocessing",
    description:
      "An extensively researched modality that allows the brain to reprocess unresolved and distressing memories. Rather than endlessly talking through the past, EMDR relieves the emotional charge stored in your nervous system.",
  },
  {
    name: "Mindfulness-Based Practices",
    subtitle: "Present-Moment Centering",
    description:
      "Cultivates non-judgmental awareness to help you observe internal sensations and thoughts without being hijacked by them, breaking compulsive overthinking and mental fatigue.",
  },
  {
    name: "Body-Oriented & Somatic Work",
    subtitle: "Nervous System Regulation",
    description:
      "Stress and trauma live directly in the physical body. We integrate somatic techniques that soften muscular tension, regulate breathing, and help your autonomic nervous system step out of fight-or-flight.",
  },
];

export function HowWeWorkSection() {
  return (
    <section
      id="approach"
      aria-label="Therapeutic Approach & Evidence-Based Modalities"
      className="relative w-full bg-background py-24 lg:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-accent font-medium mb-4">
            Therapeutic Modalities
          </p>
          <h2 className="font-heading font-light text-foreground text-h2 mb-6">
            Integrating evidence-based science with{" "}
            <span className="italic text-primary">relational depth</span>.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Every person&apos;s nervous system is unique. Therapy is not a rigid
            formula—it is a thoughtful integration of proven clinical methods
            paced to ensure you always feel grounded and secure.
          </p>
        </div>

        {/* 4 Modalities (Clean 2-Column Editorial Grid with Hairline Dividers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-10 border-t border-border/50">
          {modalities.map((item) => (
            <div key={item.name} className="flex flex-col justify-start">
              <span className="font-sans text-xs tracking-wider uppercase text-accent font-medium mb-2">
                {item.subtitle}
              </span>
              <h3 className="font-heading font-normal text-foreground text-h3 mb-3">
                {item.name}
              </h3>
              <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
