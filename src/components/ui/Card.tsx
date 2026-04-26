import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
