import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn("text-2xl md:text-4xl text-primary uppercase", className)}
    >
      Dr.Koshakov
    </span>
  )
}
