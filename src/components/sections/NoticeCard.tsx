import Link from "next/link";
import { AlertTriangle, Calendar, Paperclip, ChevronRight } from "lucide-react";
import type { NoticePreview } from "@/types";
import { formatDateShort, noticeCategoryConfig } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface NoticeCardProps {
  notice: NoticePreview;
  variant?: "default" | "compact";
}

export default function NoticeCard({ notice, variant = "default" }: NoticeCardProps) {
  const categoryConfig = noticeCategoryConfig[notice.category] ?? noticeCategoryConfig.general;

  if (variant === "compact") {
    return (
      <Link
        href={`/notices/${notice.slug.current}`}
        className="group flex items-start gap-3 rounded-xl p-3 hover:bg-neutral-50 transition-colors"
      >
        {notice.isImportant && (
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-neutral-800 group-hover:text-primary-900">
            {notice.title}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">{formatDateShort(notice.publishedAt)}</p>
        </div>
        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-neutral-400 group-hover:text-primary-900 transition-transform group-hover:translate-x-0.5" />
      </Link>
    );
  }

  return (
    <Link
      href={`/notices/${notice.slug.current}`}
      className="group block rounded-2xl border border-neutral-200 bg-white p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
              categoryConfig.bg,
              categoryConfig.color
            )}
          >
            {categoryConfig.label}
          </span>
          {notice.isImportant && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
              <AlertTriangle className="h-3 w-3" />
              Important
            </span>
          )}
        </div>
        <ChevronRight className="h-4 w-4 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-900" />
      </div>

      <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary-900 transition-colors line-clamp-2">
        {notice.title}
      </h3>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-neutral-500">
        <Calendar className="h-3.5 w-3.5" />
        {formatDateShort(notice.publishedAt)}
      </div>
    </Link>
  );
}