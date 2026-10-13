"use client";

import Link from "next/link";
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type KeyboardEvent,
} from "react";
import { cn } from "cn";

export interface NavDropdownLink {
  readonly title: string;
  readonly href: string;
}

interface NavDropdownProps {
  title: string;
  links: readonly NavDropdownLink[];
  className?: string;
}

export function NavDropdown({ title, links, className }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 120);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative group inline-flex items-center", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onKeyDown={handleKeyDown}
        className="font-sans text-[0.845rem] font-normal uppercase tracking-widest text-foreground leading-[1.8em] whitespace-nowrap cursor-pointer select-none bg-transparent border-none p-0 flex items-center"
      >
        <span>{title}</span>
      </button>

      {isOpen ? (
        <div
          role="menu"
          className="absolute right-[-0.81em] top-full min-w-[200px] bg-hero-section text-right py-0 z-50 transition-opacity duration-150 animate-in fade-in"
        >
          {links.map((link) => (
            <div key={link.title} role="none" className="text-right">
              <Link
                href={link.href}
                role="menuitem"
                className="inline-block py-[0.75em] px-[1em] text-[0.845rem] font-sans font-normal uppercase tracking-widest text-foreground whitespace-nowrap text-right hover:border-b hover:border-border transition-colors duration-150 leading-[1.3]"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
