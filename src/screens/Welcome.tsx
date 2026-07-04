import { useState } from 'react'
import { motion } from 'framer-motion'
import { KeyRound, Users2, ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'
import Screen from '../components/Screen'
import type { Role } from '../types'

export default function Welcome({ onSelect }: { onSelect: (role: Role) => void }) {
  const [picked, setPicked] = useState<Role | null>(null)

  const choose = (role: Role) => {
    setPicked(role)
    setTimeout(() => onSelect(role), 480)
  }

  return (
    <Screen className="bg-ink flex flex-col px-6 pt-14 pb-10">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo size="md" />
      </motion.div>

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-gold-300 text-sm font-medium tracking-wide mb-3">Welcome to RentenPe</p>
          <h1 className="font-display text-[34px] leading-[1.15] text-white text-balance">
            Who are you?
          </h1>
          <p className="text-white/50 text-[15px] mt-3 leading-relaxed max-w-[280px]">
            We'll tailor everything you see next to what matters to you.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 mt-10">
          <RoleCard
            role="landlord"
            title="I'm a Landlord"
            desc="Manage properties, tenants & rent"
            icon={<KeyRound size={22} />}
            picked={picked}
            delay={0.3}
            onClick={() => choose('landlord')}
          />
          <RoleCard
            role="tenant"
            title="I'm a Tenant"
            desc="Pay rent & manage my agreement"
            icon={<Users2 size={22} />}
            picked={picked}
            delay={0.4}
            onClick={() => choose('tenant')}
          />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-white/25 text-xs"
      >
        Takes less than 30 seconds
      </motion.p>
    </Screen>
  )
}

function RoleCard({
  title,
  desc,
  icon,
  role,
  picked,
  delay,
  onClick,
}: {
  title: string
  desc: string
  icon: React.ReactNode
  role: Role
  picked: Role | null
  delay: number
  onClick: () => void
}) {
  const isPicked = picked === role
  const isDimmed = picked !== null && !isPicked

  return (
    <motion.button
      initial={{ opacity: 0, y: 18 }}
      animate={{
        opacity: isDimmed ? 0.35 : 1,
        y: 0,
        scale: isPicked ? 1.02 : 1,
      }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative flex items-center gap-4 rounded-xl3 p-5 text-left border transition-colors ${
        isPicked
          ? 'border-gold-300/60 bg-gold-900/20'
          : 'border-white/10 bg-surface-raised'
      }`}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
          isPicked ? 'bg-gold-gradient text-black' : 'bg-white/5 text-gold-200'
        }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-display text-[17px] text-white">{title}</p>
        <p className="text-white/45 text-[13px] mt-0.5">{desc}</p>
      </div>
      <ArrowRight size={18} className={isPicked ? 'text-gold-300' : 'text-white/25'} />
    </motion.button>
  )
}
