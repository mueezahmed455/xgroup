'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'
import type { ContactFormData } from '@/types'

const ContactScene = dynamic(() => import('@/components/three/ContactScene'), { ssr: false })

const useCases = [
  'Workflow Automation',
  'Multi-Tenant Setup',
  'Client Portal',
  'API Integration',
  'Custom Solution',
]

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    message: '',
    useCase: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = useCallback(async () => {
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to send')

      setStatus('success')
      setFormData({ name: '', company: '', email: '', message: '', useCase: '' })
    } catch {
      setStatus('error')
    }
  }, [formData])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSubmit()
      }
    },
    [handleSubmit],
  )

  const inputClasses =
    'w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-md px-4 py-3 font-mono text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors'

  return (
    <main>
      <Nav />

      <section className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">
              Contact
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Let&apos;s <span className="text-[var(--accent-primary)]">Talk</span>
            </h1>
            <p className="font-body text-lg text-[var(--text-secondary)] mb-12 max-w-md">
              Tell us about your automation needs. We will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2 block">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onKeyDown={handleKeyDown}
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  onKeyDown={handleKeyDown}
                  className={inputClasses}
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2 block">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onKeyDown={handleKeyDown}
                  className={inputClasses}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2 block">
                  Use Case
                </label>
                <select
                  value={formData.useCase}
                  onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                  className={inputClasses}
                >
                  <option value="">Select a use case</option>
                  {useCases.map((uc) => (
                    <option key={uc} value={uc}>{uc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2 block">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onKeyDown={handleKeyDown}
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                variant="primary"
                className="w-full"
                onClick={handleSubmit}
                ariaLabel="Send contact message"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <p className="font-mono text-sm text-[var(--accent-primary)] text-center">
                  Message sent successfully. We will be in touch soon.
                </p>
              )}

              {status === 'error' && (
                <p className="font-mono text-sm text-[var(--accent-danger)] text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block h-[600px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactScene />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
