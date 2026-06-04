'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const navLinks = [
  { href: '/platform', label: 'Platform' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-[var(--border-subtle)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-[var(--accent-primary)]">
            X.Group
n          </span>
          <span className="font-mono text-xs text-[var(--text-muted)] hidden sm:inline">
            International
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="primary" className="py-2 px-5 text-xs">
              Book a Demo
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <motion.span
            className="w-6 h-px bg-[var(--text-primary)] block"
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-px bg-[var(--text-primary)] block"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-6 h-px bg-[var(--text-primary)] block"
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass border-t border-[var(--border-subtle)]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" className="w-full py-3 text-xs">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
