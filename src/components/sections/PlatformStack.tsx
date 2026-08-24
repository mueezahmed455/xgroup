'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import type { PlatformFeature } from '@/types'

const features: PlatformFeature[] = [
  {
    title: 'Workflow engine',
    description:
      'Design multi-step automations with branching, retries, and parallel workers. Visual when you want it. Code when you need it.',
    icon: '01',
  },
  {
    title: 'Multi-tenant isolation',
    description:
      'Every client runs in a sealed partition. Data, compute, and logs never cross a tenant boundary — by construction.',
    icon: '02',
  },
  {
    title: 'Real-time control plane',
    description:
      'Sub-second dashboards for throughput, error budget, and cost. Spot a bottleneck before it becomes an outage.',
    icon: '03',
  },
  {
    title: 'Integration fabric',
    description:
      'Pre-built connectors for 200+ services. REST, GraphQL, webhooks — connect anything in minutes.',
    icon: '04',
  },
  {
    title: 'Client portals',
    description:
      'White-label dashboards for your clients. Self-service controls, billing, and real-time status visibility.',
    icon: '05',
  },
  {
    title: 'Adaptive triggers',
    description:
      'Pattern-aware event detection, anomaly routing, and predictive scale-out so workflows fire on signal — not on a timer.',
    icon: '06',
  },
]

export default function PlatformStack() {
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
            Product
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            One system for how the company{' '}
            <span className="text-[var(--accent-primary)]">actually runs.</span>
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] mt-6 max-w-xl">
            Workflows, tenants, and proof — so operations can scale like a product,
            not like a headcount plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <div className="font-mono text-xs text-[var(--text-muted)] mb-4">{feature.icon}</div>
                <h3 className="font-display text-lg font-bold mb-3">{feature.title}</h3>
                <p className="font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
