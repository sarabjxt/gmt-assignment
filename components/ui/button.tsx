import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/**
 * Variants:
 * - primary / underline: The signature editorial underline button with sliding hover animation
 * - secondary / outline: Pill/oval outline button (e.g. Header Contact, Book now)
 * - solid: Filled pill button inverted on hover
 * - accent: Sage/teal pill accent button
 * - ghost: Borderless minimal text button
 *
 * Sizes:
 * - sm: Compact
 * - default: Standard medium (0.85rem, 0.12em tracking, 1.3rem/1rem padding for pills, 0.6rem for underline)
 * - lg: Prominent (0.95rem, 2rem/1.25rem padding for pills, 0.8rem for underline)
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center font-sans font-normal uppercase text-[0.8rem] tracking-[0.12em] leading-[1.2em] whitespace-nowrap cursor-pointer select-none outline-none transition-all ease-linear duration-100 focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Signature underline action button (e.g. "Book an Appointment", "Learn more about us")
        primary:
          "px-[1.22rem] py-[0.95rem] rounded-[100%] border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors duration-100",
        underline:
          "relative bg-transparent text-foreground py-[0.56rem] border-none rounded-none before:content-[''] before:absolute before:right-0 before:bottom-0 before:left-0 before:border-b before:border-border before:transition-[right] before:duration-1000 hover:before:right-full hover:bg-transparent hover:opacity-100",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Button({
  className,
  variant = "primary",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
