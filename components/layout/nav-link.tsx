import Link from "next/link";
import { type ComponentProps } from "react";
import { cn } from "cn";

interface NavLinkProps extends ComponentProps<typeof Link> {
  isActive?: boolean;
}

export function NavLink({
  href,
  children,
  className,
  isActive = false,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      data-active={isActive ? "true" : undefined}
      className={cn(
        "font-sans text-[0.845rem] font-normal uppercase tracking-widest py-[0.1em] text-foreground leading-[1.8em] whitespace-nowrap",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
