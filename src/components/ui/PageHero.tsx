import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SanityImage } from "@/types";
import { urlFor } from "@/lib/sanity";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  backgroundImage?: SanityImage;
  className?: string;
  compact?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  className,
  compact = false,
}: PageHeroProps) {
  const bgUrl = backgroundImage ? urlFor(backgroundImage).width(1920).url() : null;

  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-hero-gradient",
        compact ? "min-h-[240px] md:min-h-[300px]" : "min-h-[360px] md:min-h-[440px]",
        className
      )}
    >
      {bgUrl && (
        <Image
          src={bgUrl}
          alt={title}
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      )}

      {/* Decorative diagonal */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800/90" />

      {/* Gold accent bar */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gold-gradient" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/40">/</span>}
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <a href={crumb.href} className="text-white/60 hover:text-white transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-gold-300 font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}