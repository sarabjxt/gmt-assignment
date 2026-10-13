"use client";

import { cn } from "cn";

interface HeaderBurgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

export function HeaderBurger({
  isOpen,
  onClick,
  className,
  ariaLabel = "Toggle menu",
}: HeaderBurgerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={ariaLabel}
      className={cn(
        "relative inline-block cursor-pointer bg-transparent border-none py-px px-1.5 select-none z-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground",
        className,
      )}
    >
      <div className="relative flex items-center justify-center w-[35px] h-[35px]">
        <div className="w-full h-full relative">
          {/* Top Bun */}
          <span
            className={cn(
              "absolute inset-x-0 inset-y-0 m-auto block h-px bg-foreground transition-all duration-250 ease-[cubic-bezier(0.2,0.6,0.3,1)] will-change-transform",
              isOpen
                ? "w-[28px] translate-x-[3.5px] -rotate-135"
                : "w-full -translate-y-[9.5px] rotate-0",
            )}
          />
          {/* Patty (middle line) */}
          <span
            className={cn(
              "absolute inset-x-0 inset-y-0 m-auto block h-px w-full bg-foreground transition-all duration-250 ease-[cubic-bezier(0.2,0.6,0.3,1)] will-change-transform",
              isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100",
            )}
          />
          {/* Bottom Bun */}
          <span
            className={cn(
              "absolute inset-x-0 inset-y-0 m-auto block h-px bg-foreground transition-all duration-250 ease-[cubic-bezier(0.2,0.6,0.3,1)] will-change-transform",
              isOpen
                ? "w-[28px] translate-x-[3.5px] rotate-135"
                : "w-full translate-y-[9.5px] rotate-0",
            )}
          />
        </div>
      </div>
    </button>
  );
}
