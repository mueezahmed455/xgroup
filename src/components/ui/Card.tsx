'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`glass rounded-lg p-6 gradient-border ${className}`}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
    >
      {children}
    </motion.div>
  )
}
