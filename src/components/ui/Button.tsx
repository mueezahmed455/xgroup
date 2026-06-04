'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
  onClick?: () => void
  ariaLabel?: string
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  ariaLabel,
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer'

  const variants =
    variant === 'primary'
      ? 'glass text-[var(--accent-primary)] border border-[var(--border-active)] hover:shadow-glow-strong'
      : 'text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)]'

  return (
    <motion.button
      className={`${base} ${variants} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  )
}
