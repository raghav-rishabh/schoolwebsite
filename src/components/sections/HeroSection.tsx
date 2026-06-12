import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import type { HomePage } from "@/types";
import { urlFor } from "@/lib/sanity";

interface HeroSectionProps {
  data: Pick<
    HomePage,
    "heroTitle" | "heroSubtitle" | "heroImage" | "heroCtaLabel" | "heroCtaLink" | "featuredStats"
  >;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { heroTitle, heroSubtitle, heroImage, heroCtaLabel, heroCtaLink, featuredStats } = data;
  const bgUrl = heroImage ? urlFor(heroImage).width(1920).quality(90).url() : null;

  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      {/* Background image */}
      {bgUrl && (
        <Image
          src={bgUrl}
          alt="School campus"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />

      {/* Top gold accent */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gold-gradient" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-gold-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-300 border border-gold-400/30">
            Established 1984 · CBSE & IB Affiliated
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl">
            {heroTitle ?? "Nurturing Excellence,\nGlobal Citizens"}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl max-w-xl">
            {heroSubtitle ?? "Where heritage meets innovation. Providing world-class education that prepares students for tomorrow's challenges."}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={heroCtaLink ?? "/admissions"}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-8 py-4 text-base font-bold text-primary-950 shadow-glow-gold transition-all hover:bg-gold-300 active:scale-95"
            >
              {heroCtaLabel ?? "Begin Enrollment"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary-900">
                <Play className="h-3 w-3 ml-0.5" />
              </span>
              Watch Campus Tour
            </button>
          </div>
        </div>

        {/* Stats */}
        {featuredStats && featuredStats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {featuredStats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="font-display text-3xl font-bold text-gold-400">{stat.value}</p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent" />
    </section>
  );
}