import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function PrimaryButton({
  children,
  onClick,
  variant = 'gold',
  className = '',
}: {
  children: ReactNode
  onClick?: () => void
  variant?: 'gold' | 'dark' | 'outline'
  className?: string
}) {
  const styles = {
    gold: 'bg-gold-gradient text-black shadow-goldGlow',
    dark: 'bg-surface-raised text-white border border-white/10',
    outline: 'bg-transparent text-white border border-white/20',
  }[variant]

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`w-full rounded-xl2 py-3.5 font-semibold text-[15px] tracking-tight ${styles} ${className}`}
    >
      {children}
    </motion.button>
  )
}
