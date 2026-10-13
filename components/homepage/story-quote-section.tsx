import Image from "next/image";

export function StoryQuoteSection() {
  return (
    <section
      aria-label="Therapeutic Philosophy Quote"
      className="relative w-full bg-accent py-24 lg:py-36 border-t border-b border-border/40 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground mb-8">
          Core Therapeutic Philosophy
        </p>

        <blockquote className="font-heading font-light text-accent-foreground text-h2 mb-10">
          &ldquo;Therapy works best when you feel deeply respected, understood,
          and actively involved in the process. My goal is not just symptom
          relief, but helping you develop lasting insight, resilience, and a
          stronger, kinder relationship with yourself.&rdquo;
        </blockquote>

        <div className="flex flex-col items-center justify-center">
          <div className="size-14 rounded-full overflow-hidden border border-border/80 mb-3 shadow-xs">
            <Image
              src="/images/dr-maya-reynolds.png"
              alt="Dr. Maya Reynolds, PsyD"
              width={56}
              height={56}
              className="object-cover object-top size-full"
            />
          </div>
          <cite className="not-italic font-heading text-lg text-background font-normal">
            Dr. Maya Reynolds, PsyD
          </cite>
          <span className="font-sans text-xs text-muted font-light tracking-wide mt-0.5">
            Licensed Clinical Psychologist · Santa Monica, CA
          </span>
        </div>
      </div>
    </section>
  );
}
