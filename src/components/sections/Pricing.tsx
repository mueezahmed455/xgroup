'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import type { PricingTier } from '@/types'
import Link from 'next/link'

const tiers: PricingTier[] = [
  { name: 'Starter', price: '£499', period: '/month', description: 'For growing businesses ready to automate their first workflows.', features: ['5 active workflows', '2 team members', '10,000 executions/month', 'Email support', 'Basic analytics'], popular: false, cta: 'Get Started' },
  { name: 'Growth', price: '£1,499', period: '/month', description: 'For scaling teams that need multi-tenant power and real-time insights.', features: ['Unlimited workflows', '10 team members', '100,000 executions/month', 'Priority support', 'Advanced analytics', 'Multi-tenant isolation', 'Custom integrations'], popular: true, cta: 'Get Started' },
  { name: 'Enterprise', price: 'Custom', period: '', description: 'For organisations that demand the highest level of control and compliance.', features: ['Everything in Growth', 'Unlimited team members', 'Unlimited executions', 'Dedicated support engineer', 'Custom SLA', 'On-premise deployment option', 'SOC 2 compliance', 'Custom training'], popular: false, cta: 'Contact Sales' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">Pricing</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">Simple, <span className="text-[var(--accent-primary)]">Transparent</span> Pricing</h2>
          <p className="font-body text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">No hidden fees. No surprise charges. Pick the tier that matches your ambition.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className={"glass rounded-lg p-8 h-full flex flex-col " + (tier.popular ? 'border border-[var(--accent-primary)] animate-pulse-glow relative' : 'gradient-border')}>
                {tier.popular && (<span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-widest bg-[var(--accent-primary)] text-[var(--bg-base)] px-4 py-1 rounded-full">Most Popular</span>)}
                <h3 className="font-display text-xl font-bold mb-2">{tier.name}</h3>
                <p className="font-mono text-xs text-[var(--text-secondary)] mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">{tier.price}</span>
                  {tier.period && (<span className="font-mono text-sm text-[var(--text-muted)]">{tier.period}</span>)}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-[var(--accent-primary)] mt-0.5">✓</span>
                      <span className="font-mono text-xs text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant={tier.popular ? 'primary' : 'ghost'} className="w-full">{tier.cta}</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
