import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Screen({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute inset-0 ${className}`}
    >
      {children}
    </motion.div>
  )
}
