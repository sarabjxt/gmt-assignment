import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HowWeWorkSection() {
  return (
    <section
      aria-label="How We Work"
      className="relative w-full bg-warm-accent overflow-x-clip"
    >
      <div className="work-fluid-grid w-full">
        {/* Eyebrow Label */}
        <div className="work-block-eyebrow flex items-center">
          <p className="font-sans font-normal uppercase tracking-[0.12em] text-[0.85rem] md:text-[0.94rem] text-foreground leading-[1.8em]">
            HOW WE WORK
          </p>
        </div>

        {/* Section Heading */}
        <div className="work-block-heading flex items-start">
          <h2 className="font-heading font-light text-foreground text-h2">
            We’re here to make a difference.
          </h2>
        </div>

        {/* Right Feature Image - Counseling Team */}
        <div className="work-block-image relative w-full h-full min-h-[304px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/make-difference.jpg"
            alt="Counseling team in office"
            fill
            sizes="(max-width: 768px) 88vw, 30vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-warm-accent/15 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Left Column Text */}
        <div className="work-block-body-left flex flex-col justify-start">
          <p className="font-sans font-normal uppercase tracking-[0.12em] text-[0.85rem] md:text-[0.94rem] text-foreground leading-[1.8em] mb-4">
            The clients we work with are balancing so many things at once, it’s
            often hard for them to put themselves first.
          </p>
          <p className="font-sans font-light text-foreground text-[1.02rem] leading-[1.8]">
            Here, your needs are always top priority. Our team takes the time to
            deeply listen to our clients in order to truly understand their
            story and their struggles. We recognize that no two people are the
            same and that personalized therapy means an intentional, tailored
            approach. (You won’t find anything “one-size-fits-all” here.) If
            you’re ready to do the work, we’re ready to help.
          </p>
        </div>

        {/* Right Column Text */}
        <div className="work-block-body-right flex flex-col justify-start">
          <p className="font-sans font-light text-foreground text-[1.02rem] leading-[1.8]">
            Sometimes we may gently challenge you to look at things differently
            and other times we may explore your emotions, all while encouraging
            you to practice what you’ve learned in your daily life. We take what
            we do seriously because we know how important it is for you to heal
            from what’s hurting you, discover a fulfilling life, and build
            meaning relationships. Our goal is to walk alongside you in this
            journey, offering support and guidance as you uncover your strengths
            and embrace what the future can hold for you.
          </p>
        </div>

        {/* CTA Button */}
        <div className="work-block-button flex items-center">
          <Button
            variant="underline"
            nativeButton={false}
            render={<Link href="/therapists-newbury-park" />}
          >
            Learn more about us
          </Button>
        </div>
      </div>
    </section>
  );
}
