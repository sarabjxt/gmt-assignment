import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      className="relative w-full bg-hero-section overflow-x-clip"
    >
      <div className="hero-fluid-grid w-full">
        {/* Eyebrow Label */}
        <div className="hero-block-eyebrow flex items-center">
          <strong>
            <em className="font-sans font-normal not-italic uppercase tracking-widest whitespace-pre-wrap text-[0.94rem] text-foreground leading-[1.8em]">
              ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
            </em>
          </strong>
        </div>

        {/* Main Headline & Description */}
        <div className="hero-block-heading flex flex-col justify-start md:justify-center gap-7">
          <h1 className="font-heading font-light whitespace-pre-wrap text-foreground text-h1">
            Rebuild your foundation on solid ground and finally begin to &nbsp;
            <span className="whitespace-nowrap">
              <em className="font-script text-dark-accent text-[1em] leading-[0.7em] font-normal not-italic inline-block">
                thrive
              </em>
              .
            </span>
          </h1>
          <p className="font-sans whitespace-pre-wrap font-light text-foreground text-[1.02rem] leading-[1.8]">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>
        </div>

        {/* CTA Button */}
        <div className="hero-block-button flex items-center">
          <Button
            variant="underline"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Book an Appointment
          </Button>
        </div>

        {/* Left Primary Image - Family Therapy */}
        <div className="hero-block-image-left relative w-full h-full min-h-[304px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/hero-family.jpg"
            alt="family therapy"
            fill
            priority
            sizes="(max-width: 768px) 85vw, 42vw"
            className="object-cover object-center"
          />
          {/* Subtle warm overlay matching Squarespace theme styling */}
          <div
            className="absolute inset-0 bg-warm-accent/7 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Right Secondary Image - Child Therapy */}
        <div className="hero-block-image-right relative w-full h-full min-h-[199px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/hero-child.jpg"
            alt="child therapy"
            fill
            priority
            sizes="(max-width: 768px) 35vw, 15vw"
            className="object-cover object-[87%_56%]"
          />
          {/* Subtle warm overlay matching Squarespace theme styling */}
          <div
            className="absolute inset-0 bg-warm-accent/14 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
