import Link from "next/link";
import { Logo } from "@/components/logo";

const navigateLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/therapists-newbury-park" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact", href: "/contact" },
];

const teamLinks = [
  { title: "Jennifer Anderson", href: "/jennifer-anderson" },
  { title: "Heather Williams-Baumgart", href: "/heather-williams-baumgart" },
  { title: "Autumn Bodily", href: "/autumn-bodily" },
  { title: "Candace Bletscher", href: "/candace-bletscher" },
  { title: "Samantha Johnson", href: "/samantha-johnson" },
  { title: "Rosa Gomez", href: "/rosa-gomez" },
  { title: "Chad Flores", href: "/chad-flores" },
  { title: "Simran Sidhu", href: "/simran-sidhu" },
  { title: "Jessica Jauregui", href: "/jessica-jauregui" },
];

export function Footer() {
  return (
    <footer className="w-full">
      {/* Upper Main Footer */}
      <div className="w-full bg-background overflow-x-clip py-[5vmax]">
        <div className="footer-fluid-grid w-full">
          {/* Brand Logo */}
          <div className="footer-block-logo flex items-start">
            <Link href="/" aria-label="Conejo Valley Family Counseling Home">
              <Logo size={90} className="w-full h-auto" />
            </Link>
          </div>

          {/* Practice Description */}
          <div className="footer-block-desc flex flex-col justify-start px-[6%]">
            <p className="font-sans font-light text-foreground text-[1.05rem] leading-[1.8]">
              We want to make getting started simple. You’re welcome to come
              into our office in Newbury Park or schedule virtual appointments
              from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Navigate Column */}
          <div className="footer-block-navigate flex flex-col justify-start">
            <p className="font-sans font-normal uppercase tracking-[0.12em] text-[0.85rem] md:text-[0.94rem] leading-[1.8em] text-foreground mb-3">
              Navigate
            </p>
            <nav
              aria-label="Footer Navigation"
              className="flex flex-col gap-1.5"
            >
              {navigateLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="font-sans font-light text-[0.92rem] text-foreground hover:opacity-70 transition-opacity leading-[1.8]"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Our Team Column */}
          <div className="footer-block-team flex flex-col justify-start">
            <p className="font-sans font-normal uppercase tracking-[0.12em] text-[0.85rem] md:text-[0.94rem] leading-[1.8em] text-foreground mb-3">
              Our Team
            </p>
            <nav aria-label="Our Team Links" className="flex flex-col gap-1.5">
              {teamLinks.map((member) => (
                <Link
                  key={member.title}
                  href={member.href}
                  className="font-sans font-light text-[0.92rem] text-foreground hover:opacity-70 transition-opacity leading-[1.8]"
                >
                  {member.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="footer-block-contact flex flex-col justify-start">
            <p className="font-sans font-normal uppercase tracking-[0.12em] text-[0.85rem] md:text-[0.94rem] leading-[1.8em] text-foreground mb-3">
              Contact
            </p>
            <div className="font-sans font-light text-[0.92rem] text-foreground leading-[1.8] flex flex-col gap-3">
              <p>
                925 Broadbeck Dr
                <br />
                Suites 200 and 225
                <br />
                Newbury Park, CA 91320
                <br />
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="hover:opacity-70 transition-opacity"
                >
                  info@conejovalleycounseling.com
                </a>
              </p>
              <p>
                <a
                  href="tel:8052423120"
                  className="hover:opacity-70 transition-opacity"
                >
                  805.242.3120
                </a>
              </p>
              <em className="text-[0.92rem] pt-1">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark,
                &amp; Simi Valley
              </em>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Disclaimer Bar */}
      <div className="w-full bg-dark-accent text-white py-3 px-[6vw] lg:px-[5vw]">
        <div className="max-w-[1800px] mx-auto flex items-center justify-start text-[0.9rem] font-sans font-light">
          <p className="whitespace-pre-wrap leading-relaxed">
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            {" | "}
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
            {" | Website by "}
            <a
              href="https://walkerstrategyco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Walker Strategy Co.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
