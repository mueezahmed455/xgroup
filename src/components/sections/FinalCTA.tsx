'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-surface)] to-[var(--bg-base)]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent-primary)] blur-[200px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get started
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Ready when your next process still lives in a{' '}
          <span className="text-[var(--accent-primary)]">spreadsheet.</span>
        </motion.h2>

        <motion.p
          className="font-body text-lg text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Forty minutes. We map the work, the client boundary, and the right plan.
          No pitch deck.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact">
            <Button variant="primary">Talk to the team</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
