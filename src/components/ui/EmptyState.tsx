import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export default function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 text-center", className)}>
      {icon && (
        <div className="mb-4 rounded-2xl bg-neutral-100 p-5 text-neutral-400">{icon}</div>
      )}
      <h3 className="text-lg font-semibold text-neutral-800">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-neutral-500">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}