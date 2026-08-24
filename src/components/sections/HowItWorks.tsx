'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '@/lib/gsap'

const steps = [
  {
    number: '01',
    title: 'Connect',
    description:
      'Plug in the systems you already run. ERP, CRM, warehouse, ledger, messaging. The fabric speaks their language on day one.',
  },
  {
    number: '02',
    title: 'Compose',
    description:
      'Draw the path a job should take. Conditions, human approvals, compensating actions. The engine stores it as a durable graph.',
  },
  {
    number: '03',
    title: 'Run',
    description:
      'Deploy across tenants. Retries, idempotency, and dead-letter handling are defaults — not plugins you remember later.',
  },
  {
    number: '04',
    title: 'Prove',
    description:
      'Every execution is attributable. Audit trails, cost per tenant, and SLOs your board can read without a decoder ring.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return

    const ctx = gsap.context(() => {
      const track = trackRef.current!
      const totalScroll = track.scrollWidth - window.innerWidth + 100

      gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => '+=' + totalScroll,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">
            How it works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Live in four steps, not a{' '}
            <span className="text-[var(--accent-primary)]">six-month programme.</span>
          </h2>
        </motion.div>
      </div>

      <div ref={trackRef} className="flex gap-8 px-6 pb-24">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="flex-shrink-0 w-[350px] md:w-[450px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="glass rounded-lg p-8 gradient-border h-full">
              <span className="font-mono text-5xl font-bold text-[var(--accent-primary)] opacity-30">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-bold mt-4 mb-4">{step.title}</h3>
              <p className="font-mono text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-12 left-6 right-6 max-w-7xl mx-auto">
        <div className="h-px bg-[var(--border-subtle)]">
          <div className="h-full bg-[var(--accent-primary)] w-1/4 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
