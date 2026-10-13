"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { HeaderBurger } from "@/components/layout/header-burger";
import { MobileDrawer } from "@/components/layout/mobile-drawer";

const mobileSingleLinksTop = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Approach",
    href: "#approach",
  },
  {
    title: "Specialties",
    href: "#services",
  },
] as const;

const mobileSingleLinksBottom = [
  {
    title: "Office",
    href: "#office",
  },
  {
    title: "FAQs",
    href: "#faqs",
  },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full bg-background/85 backdrop-blur-lg transition-colors">
      <div className="max-w-7xl mx-auto w-full flex items-center gap-4 px-6 md:px-12 pt-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="inline-block shrink-0"
          aria-label="Dr. Maya Reynolds, PsyD - Home"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-8 ml-auto mr-4 text-sm font-normal text-foreground/90 tracking-wide"
          aria-label="Main Navigation"
        >
          <a href="#about" className="hover:text-accent transition-colors py-1">
            About
          </a>
          <a
            href="#services"
            className="hover:text-accent transition-colors py-1"
          >
            Specialties
          </a>
          <a
            href="#approach"
            className="hover:text-accent transition-colors py-1"
          >
            Approach
          </a>
          <a
            href="#office"
            className="hover:text-accent transition-colors py-1"
          >
            Office
          </a>
          <a href="#faqs" className="hover:text-accent transition-colors py-1">
            FAQs
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="primary"
            size="sm"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Schedule a Consultation
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center ml-auto">
          <HeaderBurger
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            ariaLabel={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        singleLinksTop={mobileSingleLinksTop}
        singleLinksBottom={mobileSingleLinksBottom}
        contactHref="#contact"
      />
    </header>
  );
}
