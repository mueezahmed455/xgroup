export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[var(--bg-base)] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[var(--accent-primary)] border-t-transparent rounded-full animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">Loading</span>
      </div>
    </div>
  )
}
