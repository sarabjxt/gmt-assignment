"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const [currentFolder, setCurrentFolder] = useState<MobileFolder | null>(
    () => folders.find((f) => f.id === activeFolderId) ?? null,
  );
  const [prevActiveFolderId, setPrevActiveFolderId] = useState(activeFolderId);

  if (activeFolderId !== prevActiveFolderId) {
    setPrevActiveFolderId(activeFolderId);
    if (activeFolderId !== null) {
      const match = folders.find((f) => f.id === activeFolderId) ?? null;
      if (match) {
        setCurrentFolder(match);
      }
    }
  }

  const displayedFolder =
    folders.find((f) => f.id === activeFolderId) ?? currentFolder;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className={cn(
        "absolute top-full left-0 right-0 w-full h-[calc(100vh-100%)] h-[calc(100dvh-100%)] bg-hero-section z-40 flex flex-col justify-between transition-all duration-300 ease-in-out lg:hidden overflow-hidden",
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
            "absolute inset-0 flex flex-col justify-center px-[5vw] transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform overflow-y-auto py-6",
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
                  className="inline-block font-sans text-[6.6vmin] m-[5vw] font-normal uppercase leading-none tracking-wide text-foreground"
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
                  className="flex font-sans text-[6.6vmin] m-[5vw] font-normal uppercase leading-none tracking-wide text-foreground cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  {folder.title}
                  <span className="ml-0.5 -mt-1.5 size-[6.6vmin]">
                    <ChevronRight
                      strokeWidth={0.5}
                      className="size-[8vmin] shrink-0 opacity-80"
                    />
                  </span>
                </button>
              </div>
            ))}

            {singleLinksBottom.map((link) => (
              <div key={link.title}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="inline-block font-sans text-[6.6vmin] m-[5vw] font-normal uppercase leading-none tracking-wide text-foreground"
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA Button */}
          <div className="px-[5vw] pb-[6vw] pt-4">
            <Button
              variant="primary"
              className="min-w-[210px]"
              nativeButton={false}
              render={<Link href={contactHref} onClick={onClose} />}
            >
              Contact
            </Button>
          </div>
        </div>

        {/* Subfolder list */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform overflow-y-auto pb-6",
            activeFolderId !== null
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none",
          )}
        >
          {displayedFolder ? (
            <div className="flex flex-col overflow-y-auto">
              <div className="px-[5vw]">
                <button
                  type="button"
                  onClick={() => setActiveFolderId(null)}
                  className="inline-flex items-center gap-1.5 font-sans text-[6.6vmin] uppercase tracking-wide text-foreground/50 cursor-pointer bg-transparent border-none p-0 m-[5vw] text-left"
                >
                  <span className="mr-1 -mt-3.5 size-[6.6vmin]">
                    <ChevronLeft
                      strokeWidth={0.5}
                      className="size-[8vmin] shrink-0 opacity-80"
                    />
                  </span>
                  <span>Back</span>
                </button>
              </div>

              <div className="flex flex-col mx-[5vw]">
                {displayedFolder.links.map((link) => (
                  <div key={link.title}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="inline-block font-sans text-[6.6vmin] m-[5vw] font-normal uppercase leading-none tracking-wide text-foreground"
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
