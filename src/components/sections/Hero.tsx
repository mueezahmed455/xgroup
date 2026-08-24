'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Button from '@/components/ui/Button'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[var(--bg-base)]" />,
})
const ParticleField = dynamic(() => import('@/components/three/ParticleField'), {
  ssr: false,
  loading: () => null,
})

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headingRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power4.out',
        delay: 0.3,
      })

      gsap.from(subRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power4.out',
        delay: 0.6,
      })

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power4.out',
        delay: 0.9,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroCanvas />
      <ParticleField />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-base)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
          London · Automation for growing firms
        </p>
        <h1
          ref={headingRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
        >
          The operating layer
          <br />
          <span className="text-[var(--accent-primary)]">for your company.</span>
        </h1>

        <p
          ref={subRef}
          className="font-body text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          X.Group replaces the spreadsheet, the inbox, and the night shift with one
          control plane — isolated, observable, and ready for clients.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button variant="primary">Get started</Button>
          </Link>
          <Link href="/platform">
            <Button variant="ghost">See the product</Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--accent-primary)] to-transparent" />
      </div>
    </section>
  )
}
