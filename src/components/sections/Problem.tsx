'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    number: '01',
    title: 'Work lives in inboxes',
    description:
      'Handoffs die in email. Nobody can say where a job is, who owns it, or what it cost last month.',
  },
  {
    number: '02',
    title: 'Tools do not talk',
    description:
      'CRM, ledger, warehouse, and chat each hold a fragment. The real process is a person copying between tabs.',
  },
  {
    number: '03',
    title: 'Clients expect a product',
    description:
      'If you run operations for other firms, they want a portal and an audit trail — not a shared spreadsheet.',
  },
]

export default function Problem() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">
            The gap
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Growing firms still run on{' '}
            <span className="text-[var(--accent-primary)]">heroic people.</span>
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] mt-6 max-w-xl">
            Software multiplied the tools. It did not give you an operating layer.
            X.Group is that layer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.number}
              className="glass rounded-lg p-8 gradient-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-mono text-xs text-[var(--text-muted)]">{item.number}</span>
              <h3 className="font-display text-xl font-bold mt-4 mb-3">{item.title}</h3>
              <p className="font-mono text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
