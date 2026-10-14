import Image from "next/image";

export function WhoWeHelpSection() {
  return (
    <section
      id="about"
      aria-label="About Dr. Maya Reynolds, PsyD"
      className="relative w-full bg-background py-24 lg:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Authentic Sunlit Office Imagery */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/2] max-h-[600px] w-full rounded-2xl overflow-hidden shadow-sm bg-secondary/30">
              <Image
                src="/images/office-2.jpg"
                alt="Dr. Maya Reynolds serene Santa Monica office with natural sunlight and plants"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
            <p className="font-sans text-xs text-muted-foreground font-light text-center mt-3">
              123th Street 45 W, Santa Monica, California
            </p>
          </div>

          {/* Right Column: Grounded Editorial Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <p className="font-sans text-xs tracking-[0.18em] uppercase text-accent font-medium mb-4">
              About the Practice
            </p>

            <h2 className="font-heading font-light text-foreground text-h2 mb-8">
              A collaborative space to slow down, reflect, and{" "}
              <span className="text-primary">reconnect</span>.
            </h2>

            <div className="space-y-6 font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-[56ch]">
              <p>
                I am a licensed clinical psychologist based in Santa Monica,
                California. My work focuses on anxiety, panic, trauma, and
                burnout—supporting adults who often feel functional on the
                outside while quietly carrying immense internal pressure.
              </p>
              <p>
                Sessions are structured enough to feel supportive and tangible,
                while leaving room for depth and emotional reflection. Rather
                than offering one-size-fits-all advice, we work together to
                understand both the emotional and physiological sides of what
                you are experiencing.
              </p>
              <p>
                Therapy works best when you feel genuinely respected,
                understood, and actively in charge of your own process. My goal
                is not just temporary relief, but helping you build resilience
                and a stronger relationship with yourself over time.
              </p>
            </div>

            <div className="pt-8 mt-4 border-t border-border/50">
              <p className="font-heading text-lg text-foreground font-normal">
                Dr. Maya Reynolds, PsyD
              </p>
              <p className="font-sans text-xs text-muted-foreground font-light mt-0.5">
                Licensed Clinical Psychologist · Santa Monica, CA &amp;
                California Telehealth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
