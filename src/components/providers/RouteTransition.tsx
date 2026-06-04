'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function RouteTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
