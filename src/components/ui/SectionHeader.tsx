import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em]",
            dark ? "text-gold-400" : "text-gold-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-tight md:text-4xl",
          dark ? "text-white" : "text-primary-900",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-base leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-white/70" : "text-neutral-600"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full",
          align === "center" ? "mx-auto" : "ml-0",
          dark ? "bg-gold-400" : "bg-gold-500"
        )}
      />
    </div>
  );
}