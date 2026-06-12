import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { NoticeCategory } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  });
}

export function formatDateShort(dateString: string): string {
  return formatDate(dateString, { year: "numeric", month: "short", day: "numeric" });
}

export const noticeCategoryConfig: Record<
  NoticeCategory,
  { label: string; color: string; bg: string }
> = {
  academic: { label: "Academic", color: "text-blue-700", bg: "bg-blue-50" },
  events: { label: "Events", color: "text-emerald-700", bg: "bg-emerald-50" },
  examinations: { label: "Examinations", color: "text-red-700", bg: "bg-red-50" },
  admissions: { label: "Admissions", color: "text-purple-700", bg: "bg-purple-50" },
  holiday: { label: "Holiday", color: "text-orange-700", bg: "bg-orange-50" },
  general: { label: "General", color: "text-gray-700", bg: "bg-gray-100" },
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "…";
}

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "School Name";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourschool.edu.in";

export function buildPageTitle(title: string): string {
  return `${title} | ${SITE_NAME}`;
}