"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";

export interface MobileFolder {
  id: string;
  title: string;
  links: readonly { title: string; href: string }[];
}

export interface MobileSingleLink {
  title: string;
  href: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  singleLinksTop?: readonly MobileSingleLink[];
  folders?: readonly MobileFolder[];
  singleLinksBottom?: readonly MobileSingleLink[];
  contactHref?: string;
}

export function MobileDrawer({
  isOpen,
  onClose,
  singleLinksTop = [{ title: "About", href: "#" }],
  folders = [],
  singleLinksBottom = [{ title: "FAQs", href: "#" }],
  contactHref = "/contact",
}: MobileDrawerProps) {
  const [activeFolderId, setActiveFolderId] = useState<string | null>(null);

  // Reset folder view when drawer closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setActiveFolderId(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle escape key to close menu
  const handleKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeFolderId !== null) {
          setActiveFolderId(null);
        } else {
          onClose();
        }
      }
    },
    [activeFolderId, onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className={cn(
        "absolute top-full left-0 right-0 w-full h-[calc(100vh-100%)] h-[calc(100dvh-100%)] bg-background border-b border-border z-40 flex flex-col justify-between transition-all duration-300 ease-in-out lg:hidden overflow-hidden",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto visible"
          : "opacity-0 translate-y-4 pointer-events-none invisible",
      )}
    >
      {/* Main sliding panels container */}
      <div
        className={cn(
          "relative flex-1 w-full flex flex-col justify-center overflow-hidden",
        )}
      >
        {/* Root navigation list */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col px-[5vw] transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform overflow-y-auto py-6",
            activeFolderId === null
              ? "translate-x-0 pointer-events-auto"
              : "-translate-x-full pointer-events-none",
          )}
        >
          <div className="flex flex-col mt-[1vw]">
            {singleLinksTop.map((link) => (
              <div key={link.title}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="inline-block font-heading text-[5.5vmin] m-[3.5vw] font-light leading-none tracking-tight text-foreground hover:text-accent transition-colors"
                >
                  {link.title}
                </Link>
              </div>
            ))}

            {folders.map((folder) => (
              <div key={folder.id}>
                <button
                  type="button"
                  onClick={() => setActiveFolderId(folder.id)}
                  className="flex items-center justify-between font-heading text-[5.5vmin] m-[3.5vw] font-light leading-none tracking-tight text-foreground cursor-pointer bg-transparent border-none p-0 text-left hover:text-accent transition-colors"
                >
                  {folder.title}
                </button>
              </div>
            ))}

            {singleLinksBottom.map((link) => (
              <div key={link.title}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="inline-block font-heading text-[5.5vmin] m-[3.5vw] font-light leading-none tracking-tight text-foreground hover:text-accent transition-colors"
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA Button */}
          <div className="px-[5vw] pb-[6vw] pt-6">
            <Button
              variant="primary"
              className="w-full"
              nativeButton={false}
              render={<Link href={contactHref} onClick={onClose} />}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
