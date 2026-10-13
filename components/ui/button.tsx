import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/**
 * - primary: Deep Coastal Cypress filled pill button with high contrast & tactile response
 * - secondary: Subtle border/tint pill button
 * - underline: Signature editorial underline action
 * - ghost: Borderless quiet interactive button
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center font-sans font-medium text-[0.82rem] tracking-[0.08em] leading-none whitespace-nowrap cursor-pointer select-none outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/92 transition-colors",
        secondary:
          "px-6 py-3.5 rounded-full border border-primary/20 bg-background text-foreground hover:bg-primary/5 hover:border-primary/40 transition-colors",
        outline:
          "px-5 py-3 rounded-full border border-border bg-transparent text-foreground hover:bg-secondary transition-colors",
        underline:
          "relative bg-transparent text-foreground py-2 border-none rounded-none before:content-[''] before:absolute before:right-0 before:bottom-0 before:left-0 before:border-b-2 before:border-accent before:transition-all before:duration-300 hover:before:left-0 hover:text-accent font-medium",
        ghost:
          "px-4 py-2 rounded-full text-foreground hover:bg-secondary hover:text-foreground transition-colors",
      },
      size: {
        sm: "text-[0.82rem] px-4 py-2.5",
        default: "text-[0.82rem] px-6 py-3.5",
        lg: "text-[0.9rem] px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
