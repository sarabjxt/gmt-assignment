import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to Dr. Maya Reynolds Psychology Practice"
      className="relative w-full bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Quiet, Confident Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Simple, understated location mark */}
            <p className="font-sans text-xs tracking-[0.18em] uppercase text-accent font-medium mb-6">
              Santa Monica, California · Telehealth Across CA
            </p>

            {/* H1 Headline */}
            <h1 className="font-heading font-normal text-foreground text-h1 mb-6">
              Therapy for adults who feel functional on the outside,{" "}
              <span className="text-primary">yet exhausted within</span>.
            </h1>

            {/* Subtext: warm, unhurried, spacious */}
            <p className="font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-[52ch] mb-10">
              Grounded, evidence-based care for anxiety, trauma, and
              high-pressure burnout. Combining practical tools with deep
              emotional healing in a quiet Santa Monica sanctuary.
            </p>

            {/* Clean single action */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <Button
                variant="primary"
                size="lg"
                nativeButton={false}
                render={<a href="#contact" />}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Composition with Dr. Maya Reynolds Portrait & Office Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Primary Portrait Card */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-border/80 bg-muted">
                <Image
                  src="/images/dr-maya-reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                {/* Embedded therapist card tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm">
                  <p className="font-heading text-lg text-foreground font-normal leading-tight">
                    Dr. Maya Reynolds, PsyD
                  </p>
                  <p className="font-sans text-xs text-muted-foreground mt-0.5">
                    Licensed Clinical Psychologist · Santa Monica, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
