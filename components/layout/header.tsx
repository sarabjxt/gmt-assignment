"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/layout/nav-link";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { HeaderBurger } from "@/components/layout/header-burger";
import { MobileDrawer } from "@/components/layout/mobile-drawer";

const ourTeamsLinks = [
  {
    title: "Jennifer Anderson, LMFT",
    href: "#",
  },
  {
    title: "Candace Bletscher, AMFT",
    href: "#",
  },
  {
    title: "Heather Williams-Baumgart, AMFT",
    href: "#",
  },
  {
    title: "Samantha Johnson, AMFT",
    href: "#",
  },
  {
    title: "Autumn Bodily, AMFT",
    href: "#",
  },
  {
    title: "Rosa Gomez, AMFT",
    href: "#",
  },
  {
    title: "Chad Flores, AMFT",
    href: "#",
  },
  {
    title: "Simran Sidhu, AMFT",
    href: "#",
  },
  {
    title: "Jessica Jauregui, MA, AMFT",
    href: "#",
  },
] as const;

const specialtiesLinks = [
  {
    title: "Dissociation",
    href: "#",
  },
  {
    title: "Trauma",
    href: "#",
  },
  {
    title: "Special Needs Parenting",
    href: "#",
  },
  {
    title: "Couples",
    href: "#",
  },
  {
    title: "Children & Teens",
    href: "#",
  },
  {
    title: "Anxiety & Depression",
    href: "#",
  },
  {
    title: "Adoption",
    href: "#",
  },
] as const;

const methodsLinks = [
  {
    title: "EMDR",
    href: "#",
  },
  {
    title: "Brainspotting",
    href: "#",
  },
  {
    title: "Somatic Therapy",
    href: "#",
  },
  {
    title: "Parts Work Therapy",
    href: "#",
  },
] as const;

const mobileFolders = [
  {
    id: "our-team",
    title: "Our Team",
    links: ourTeamsLinks,
  },
  {
    id: "specialties",
    title: "Specialties",
    links: specialtiesLinks,
  },
  {
    id: "methods",
    title: "Methods",
    links: methodsLinks,
  },
] as const;

const mobileSingleLinksTop = [
  {
    title: "About",
    href: "#",
  },
] as const;

const mobileSingleLinksBottom = [
  {
    title: "FAQs",
    href: "#",
  },
] as const;

function Navbar() {
  return (
    <nav className="flex items-center gap-[2.5vw]" aria-label="Main Navigation">
      <NavLink href="#">About</NavLink>
      <NavDropdown title="Our Team" links={ourTeamsLinks} />
      <NavDropdown title="Specialties" links={specialtiesLinks} />
      <NavDropdown title="Methods" links={methodsLinks} />
      <NavLink href="#">FAQs</NavLink>
    </nav>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-hero-section relative z-30">
      <div className="max-w-[1800px] mx-auto w-full flex items-center justify-between px-[5vw] py-[1.4vw]">
        {/* Brand Logo */}
        <Link href="/" className="inline-block shrink-0" aria-label="Home">
          <Logo className="hidden lg:block" size={75} />
          <Logo className="hidden md:block lg:hidden" size={75} />
          <Logo className="block md:hidden" size={70} />
        </Link>

        {/* Desktop Navbar & Action CTA */}
        <div className="hidden lg:flex items-center gap-[2.5vw] ml-auto">
          <Navbar />
          <Button
            variant="primary"
            nativeButton={false}
            render={<Link href="#" />}
          >
            Contact
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <HeaderBurger
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            ariaLabel={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          />
        </div>
      </div>

      {/* Responsive Mobile Multi-level Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        singleLinksTop={mobileSingleLinksTop}
        folders={mobileFolders}
        singleLinksBottom={mobileSingleLinksBottom}
        contactHref="#"
      />
    </header>
  );
}

export { Header, Navbar };
