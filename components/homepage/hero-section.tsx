import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to Dr. Maya Reynolds Psychology Practice"
      className="relative w-full bg-surface-sage overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Quiet, Confident Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center mx-auto items-center text-center lg:text-left lg:items-start">
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
                className="sm:hidden"
              >
                Book a Consultation
              </Button>
              <Button
                variant="primary"
                size="lg"
                nativeButton={false}
                render={<a href="#contact" />}
                className="hidden sm:block"
              >
                Schedule a 15-Minute Consultation
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Composition with Dr. Maya Reynolds Portrait & Office Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Primary Portrait Card */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xs bg-muted">
                <Image
                  src="/images/dr-maya-reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="pt-4 text-center lg:hidden">
                <p className="font-heading text-lg sm:text-xl text-foreground font-normal">
                  Dr. Maya Reynolds, PsyD
                </p>
                <p className="font-sans text-sm text-muted-foreground font-light mt-0.5">
                  Licensed Clinical Psychologist · Santa Monica, CA &amp;
                  Telehealth Statewide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
