import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-ink-raise px-3 py-1 font-mono text-xs text-zinc-400">
      {children}
    </span>
  );
}
