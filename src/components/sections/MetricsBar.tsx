'use client'

import { motion } from 'framer-motion'

interface MetricDisplay {
  displayValue: string
  label: string
}

const metrics: MetricDisplay[] = [
  { displayValue: '12+', label: 'Active Clients' },
  { displayValue: '99.97%', label: 'Uptime' },
  { displayValue: '\u00a30', label: 'Wasted on Manual Ops' },
  { displayValue: '4', label: 'Countries Served' },
]

export default function MetricsBar() {
  return (
    <section className="relative py-16">
      <div className="glow-line mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="text-center py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-mono text-3xl md:text-4xl font-bold text-[var(--accent-primary)]">
                {metric.displayValue}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mt-2">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="glow-line mt-16" />
    </section>
  )
}
