"use client";

import Image from "next/image";
import type { SanityImage as SanityImageType } from "@/types";
import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";

interface SanityImageProps {
  image: SanityImageType;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export default function SanityImage({
  image,
  alt,
  width = 800,
  height = 600,
  fill,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 85,
}: SanityImageProps) {
  if (!image?.asset?._ref) {
    return (
      <div
        className={cn("bg-neutral-200 flex items-center justify-center", className)}
        style={!fill ? { width, height } : undefined}
      >
        <span className="text-neutral-400 text-sm">No image</span>
      </div>
    );
  }

  const builder = urlFor(image).quality(quality);

  if (fill) {
    return (
      <Image
        src={builder.url()}
        alt={image.alt ?? alt}
        fill
        className={cn("object-cover", className)}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={builder.width(width).height(height).url()}
      alt={image.alt ?? alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}