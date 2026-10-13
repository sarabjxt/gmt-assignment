import Image from "next/image";
import { cn } from "cn";

const ratio = 3.4246575342; // width/height ratio

function Logo({ size = 75, className }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo.png"
      width={size * ratio}
      height={size}
      alt="Conejo Valley Family Counseling"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className={cn("h-auto", className)}
    />
  );
}

export { Logo };
