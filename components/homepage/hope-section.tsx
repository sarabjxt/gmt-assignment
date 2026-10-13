import Image from "next/image";

export function HopeSection() {
  return (
    <section
      aria-label="Hope and Counseling Support"
      className="relative w-full bg-hero-section overflow-x-clip min-h-[70vh] py-[7vmax]"
    >
      <div className="hope-fluid-grid w-full">
        {/* Main Headline */}
        <div className="hope-block-heading flex items-start">
          <h2 className="font-heading font-light whitespace-pre-wrap text-foreground text-h2">
            You’re holding onto hope that life can be better than it is right
            now.
          </h2>
        </div>

        {/* Left Editorial Column: Eyebrow Callout & Supporting Paragraph */}
        <div className="hope-block-body-left flex flex-col justify-start gap-4">
          <p className="font-sans font-normal uppercase tracking-[0.12em] text-[0.85rem] md:text-[0.94rem] text-foreground leading-[1.8em]">
            At Conejo Valley Family Counseling we want to make that hope a
            reality.
          </p>
          <p className="font-sans font-light text-foreground text-[1.02rem] leading-[1.8]">
            Whether you&apos;re an adult seeking personal growth, looking to
            work through your trauma, a couple working on your relationship, or
            a parent looking for support for your child, we provide a
            compassionate and safe space to help you navigate all of life’s ups
            and downs.
          </p>
        </div>

        {/* Right Editorial Column: Mission & Validation Paragraph */}
        <div className="hope-block-body-right flex flex-col justify-start">
          <p className="font-sans font-light text-foreground text-[1.02rem] leading-[1.8]">
            First and foremost, we believe what you’re going through is real,
            valid, and worthy of support. Our team offers clients in the Newbury
            Park area and across CA an environment to discover a new life and a
            deeper sense of self in the midst of their struggles. As we tap into
            the power of connection and understanding, you can find your
            footing again and take a transformative path forward.
          </p>
        </div>

        {/* Right Tall Feature Image - Sandy Beach & Waves */}
        <div className="hope-block-image relative w-full h-full min-h-[234px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/hope-beach.jpg"
            alt="Sandy beach with gentle ocean waves and a cloudy sky."
            fill
            sizes="(max-width: 768px) 88vw, 35vw"
            className="object-cover object-center"
          />
          {/* Subtle warm overlay matching Squarespace theme styling */}
          <div
            className="absolute inset-0 bg-warm-accent/15 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

