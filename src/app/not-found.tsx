import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-base)]">
      <div className="text-center px-6">
        <h1 className="font-display text-8xl font-bold text-[var(--accent-primary)] mb-4">404</h1>
        <p className="font-body text-xl text-[var(--text-secondary)] mb-8">
          This page does not exist. Perhaps you took a wrong turn in the automation pipeline.
        </p>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
