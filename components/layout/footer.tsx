import Link from "next/link";
import { Logo } from "@/components/logo";

const navigationLinks = [
  { title: "About Dr. Maya", href: "#about" },
  { title: "Services & Specialties", href: "#services" },
  { title: "Approach & Modalities", href: "#approach" },
  { title: "Santa Monica Office", href: "#office" },
  { title: "Frequently Asked Questions", href: "#faqs" },
  { title: "Schedule a Consultation", href: "#contact" },
];

const specialtiesLinks = [
  { title: "Anxiety & Panic Therapy", href: "#services" },
  { title: "Trauma & EMDR Therapy", href: "#services" },
  { title: "Executive & Creative Burnout", href: "#services" },
  { title: "Body-Oriented Somatic Work", href: "#approach" },
  { title: "Cognitive Behavioral Therapy (CBT)", href: "#approach" },
  { title: "Mindfulness-Based Stabilization", href: "#approach" },
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-warm text-foreground border-t border-border/40">
      {/* Upper Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <Link
              href="/"
              aria-label="Dr. Maya Reynolds, PsyD - Home"
              className="inline-block mb-6 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
            >
              <Logo />
            </Link>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[32ch] mb-6 font-light">
              Grounded, collaborative therapy for adults navigating anxiety,
              panic, trauma, and high-pressure burnout. Combining evidence-based
              tools with depth-oriented care.
            </p>
            <div className="text-muted-foreground/80 text-xs font-light space-y-1">
              <p>Licensed Clinical Psychologist · State of California</p>
              <p>
                In-person sessions in Santa Monica &amp; California telehealth
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-accent font-medium mb-5">
              Explore
            </h4>
            <nav
              aria-label="Footer Navigation"
              className="flex flex-col gap-2.5"
            >
              {navigationLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Specialties Column */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-accent font-medium mb-5">
              Specialties
            </h4>
            <nav
              aria-label="Specialties Links"
              className="flex flex-col gap-2.5"
            >
              {specialtiesLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Practice Location & Contact */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-accent font-medium mb-5">
              Practice Setting
            </h4>
            <div className="font-sans text-sm text-muted-foreground leading-relaxed flex flex-col gap-2.5 font-light">
              <address className="not-italic">
                <span className="font-normal text-foreground block mb-0.5">
                  Santa Monica Office
                </span>
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </address>
              <p className="text-xs text-muted-foreground/80 pt-1">
                Quiet, sunlit space near the coast. Serving Santa Monica,
                Venice, Brentwood, and statewide via secure California
                telehealth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Disclaimer Bar */}
      <div className="w-full border-t border-border/50 py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground font-light gap-4">
          <p>
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Good Faith Estimate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
