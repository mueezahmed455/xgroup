'use client'

import { motion } from 'framer-motion'

const team = [
  {
    name: 'Mueez',
    role: 'Founder & lead engineer',
    copy: 'Built the engine. Still ships the isolation layer. London.',
    initials: 'M',
  },
  {
    name: 'Elena Voss',
    role: 'Head of customer operations',
    copy: 'Turns a first graph into a weekly operating rhythm. Ex-3PL.',
    initials: 'EV',
  },
  {
    name: 'Arun Shah',
    role: 'Principal architect',
    copy: 'Tenancy, keys, and the control plane. Previously payments infra.',
    initials: 'AS',
  },
]

export default function Team() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="glow-line mb-0" />
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">
            Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            A small company, built like{' '}
            <span className="text-[var(--accent-primary)]">infrastructure.</span>
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] mt-6 max-w-xl">
            Incorporated in London. Shipping with clients in four countries. No
            theatre — operators and engineers in the same room.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="glass rounded-lg p-8 gradient-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center font-display text-lg font-bold text-[var(--accent-primary)] mb-6">
                {member.initials}
              </div>
              <h3 className="font-display text-xl font-bold">{member.name}</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">
                {member.role}
              </p>
              <p className="font-mono text-sm text-[var(--text-secondary)] leading-relaxed mt-4">
                {member.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
