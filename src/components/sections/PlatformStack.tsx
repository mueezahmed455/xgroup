'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import type { PlatformFeature } from '@/types'

const features: PlatformFeature[] = [
  {
    title: 'Workflow Automation',
    description:
      'Design and deploy complex multi-step workflows with a visual builder that scales across your entire organisation.',
    icon: '\u26a1',
  },
  {
    title: 'Multi-Tenant Architecture',
    description:
      'Complete data isolation per client. Each tenant operates in its own secure partition with zero cross-contamination.',
    icon: '\ud83c\udfd7\ufe0f',
  },
  {
    title: 'Real-Time Analytics',
    description:
      'Live dashboards with sub-second latency. Monitor throughput, error rates, and cost optimisation in real time.',
    icon: '\ud83d\udcca',
  },
  {
    title: 'API Integrations',
    description:
      'Pre-built connectors for 200+ services. REST, GraphQL, webhooks — connect anything in minutes.',
    icon: '\ud83d\udd17',
  },
  {
    title: 'Client Portals',
    description:
      'White-label dashboards for your clients. Self-service controls, billing, and real-time status visibility.',
    icon: '\ud83d\udee1\ufe0f',
  },
  {
    title: 'AI-Powered Triggers',
    description:
      'Intelligent event detection that adapts to patterns. Anomaly detection, predictive scaling, and smart routing.',
    icon: '\ud83e\udde0',
  },
]

export default function PlatformStack() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">
            The Stack
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Built for <span className="text-[var(--accent-primary)]">Scale</span>
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            Every component engineered for reliability, performance, and enterprise-grade security.
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
                <div className="text-3xl mb-4">{feature.icon}</div>
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
