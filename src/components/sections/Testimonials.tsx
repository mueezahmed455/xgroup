'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    quote:
      'X.Group eliminated 14 hours of manual work per week across our operations team. The ROI was visible within the first month.',
    author: 'Sarah Chen',
    role: 'Head of Operations',
    company: 'Meridian Logistics',
  },
  {
    quote:
      'We went from managing 3 client environments to 40 \u2014 without hiring a single additional engineer. That is the power of proper automation infrastructure.',
    author: 'James Okoro',
    role: 'CTO',
    company: 'Nexus Digital',
  },
  {
    quote:
      'The multi-tenant isolation gave our enterprise clients the confidence they needed. Zero data incidents in 18 months of production.',
    author: 'Priya Sharma',
    role: 'VP of Engineering',
    company: 'Axiom Corp',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">
            Built for Real Business
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Trusted by <span className="text-[var(--accent-primary)]">Industry</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-lg p-8 md:p-12 min-h-[280px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="font-body text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed mb-8">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-display text-sm font-bold text-[var(--accent-primary)]">
                    {testimonials[active].author}
                  </p>
                  <p className="font-mono text-xs text-[var(--text-muted)]">
                    {testimonials[active].role}, {testimonials[active].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'bg-[var(--accent-primary)] w-8'
                    : 'bg-[var(--text-muted)] hover:bg-[var(--text-secondary)]'
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client logo marquee */}
        <div className="mt-20 overflow-hidden">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] text-center mb-8">
            Trusted by teams at
          </p>
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-16 mr-16">
                  {['Meridian', 'Nexus', 'Axiom', 'Vertex', 'Pinnacle', 'Quantum'].map((name) => (
                    <span
                      key={`${name}-${setIndex}`}
                      className="font-display text-lg text-[var(--text-muted)] opacity-50"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
