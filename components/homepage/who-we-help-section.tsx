import Image from "next/image";
import Link from "next/link";

export function WhoWeHelpSection() {
  return (
    <section
      aria-label="Who We Help"
      className="relative w-full bg-background overflow-x-clip py-[6vmax]"
    >
      <div className="who-help-fluid-grid w-full">
        {/* Section Headline */}
        <div className="who-help-heading flex items-start md:items-center">
          <h2 className="font-heading font-light text-foreground text-h2">
            Who we &nbsp;
            <span className="font-script text-dark-accent font-normal not-italic text-[1em]">
              help
            </span>
          </h2>
        </div>

        {/* Card 1: Adults */}
        <div className="who-help-img-adults relative w-full h-full min-h-[304px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/who-we-help-adults.jpg"
            alt="Adult individual therapy"
            fill
            sizes="(max-width: 768px) 88vw, 30vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-image-block-overlay pointer-events-none"
            aria-hidden="true"
          />
        </div>
        <div className="who-help-text-adults flex flex-col justify-start">
          <h3 className="font-heading font-light text-[1.4rem] md:text-[1.6rem] text-foreground mb-3">
            Adults
          </h3>
          <p className="font-sans font-light text-foreground text-[0.98rem] leading-[1.8]">
            Feeling stuck or overwhelmed? We help adults find clarity, build
            resilience, and move forward with confidence by addressing the root
            causes of anxiety, stress, and emotional pain.
          </p>
        </div>

        {/* Card 2: Couples */}
        <div className="who-help-img-couples relative w-full h-full min-h-[304px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/who-we-help-couples.jpg"
            alt="Couples relationship therapy"
            fill
            sizes="(max-width: 768px) 88vw, 30vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-image-block-overlay pointer-events-none"
            aria-hidden="true"
          />
        </div>
        <div className="who-help-text-couples flex flex-col justify-start">
          <h3 className="font-heading font-light text-[1.4rem] md:text-[1.6rem] text-foreground mb-3">
            <Link
              href="/couples-therapy"
              className="hover:opacity-75 transition-opacity"
            >
              Couples
            </Link>
          </h3>
          <p className="font-sans font-light text-foreground text-[0.98rem] leading-[1.8]">
            Relationships require effort, and we’re here to help you strengthen
            yours. We guide couples through challenges like communication
            breakdowns and trust issues, helping you rebuild intimacy and
            strengthen your relationship.
          </p>
        </div>

        {/* Card 3: Children & Teens */}
        <div className="who-help-img-teens relative w-full h-full min-h-[304px] md:min-h-0 overflow-hidden">
          <Image
            src="/images/who-we-help-teens.jpg"
            alt="Child and adolescent counseling"
            fill
            sizes="(max-width: 768px) 88vw, 30vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-image-block-overlay pointer-events-none"
            aria-hidden="true"
          />
        </div>
        <div className="who-help-text-teens flex flex-col justify-start">
          <h3 className="font-heading font-light text-[1.4rem] md:text-[1.6rem] text-foreground mb-3">
            <Link
              href="/children-and-teens"
              className="hover:opacity-75 transition-opacity"
            >
              Children
            </Link>{" "}
            &amp; Teens
          </h3>
          <p className="font-sans font-light text-foreground text-[0.98rem] leading-[1.8]">
            Kids need support, too. We help them process big emotions, cope with
            challenging family situations, build coping skills, and feel
            understood, while also working closely with their parents to create
            a nurturing environment.
          </p>
        </div>
      </div>
    </section>
  );
}
