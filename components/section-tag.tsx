export function SectionTag({
  children,
  centered = false,
}: {
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[2px] text-green-light mb-5 ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="w-8 h-0.5 bg-gradient-to-r from-green-bright to-green-light rounded-sm" />
      {children}
    </div>
  )
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-heading text-[clamp(28px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-foreground max-sm:tracking-[-1px] ${className}`}
    >
      {children}
    </h2>
  )
}
