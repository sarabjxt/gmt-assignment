import { cn } from "cn";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <div
      className={cn("inline-flex flex-col text-left select-none", className)}
    >
      <span
        className={cn(
          "font-heading text-[1.4rem] sm:text-[1.5rem] font-normal tracking-tight leading-none",
          light ? "text-white" : "text-foreground",
        )}
      >
        Dr. Maya Reynolds,{" "}
        <span className="text-[0.9em] font-light opacity-90">PsyD</span>
      </span>
      <span
        className={cn(
          "font-sans text-[0.65rem] font-medium tracking-[0.16em] uppercase mt-1.5",
          light ? "text-white/65" : "text-accent",
        )}
      >
        Clinical Psychology
      </span>
    </div>
  );
}
