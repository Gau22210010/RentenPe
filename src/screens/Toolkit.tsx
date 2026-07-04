import { motion } from 'framer-motion'
import { Gem, Check, Minus } from 'lucide-react'
import PrimaryButton from '../components/PrimaryButton'
import type { Archetype } from '../types'

export default function Toolkit({ archetype }: { archetype: Archetype }) {
  const rows = [
    ...archetype.freeFeatures.map((label) => ({ label, free: true })),
    ...archetype.toolkitFeatures.map((f) => ({ label: f.title, free: false })),
  ]

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-6 pt-14 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ backgroundColor: `${archetype.accent}22` }}
        >
          <Gem size={26} color={archetype.accent} />
        </div>
        <p className="text-white/40 text-[13px]">Built for {archetype.name}</p>
        <h1 className="font-display text-[26px] text-white mt-1 text-balance max-w-[280px]">
          Unlock the {archetype.toolkitName}
        </h1>
        <p className="text-white/45 text-[14px] mt-3 leading-relaxed max-w-[280px]">
          A set of tools chosen specifically for what matters most to you: {archetype.motivation.toLowerCase()}.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.45 }}
        className="mt-8 rounded-xl3 border border-white/10 overflow-hidden"
      >
        <div className="grid grid-cols-[1fr_72px_88px] items-center px-4 py-3 border-b border-white/5">
          <span className="text-[11px] text-white/40 uppercase tracking-wide">Plan</span>
          <span className="text-[12px] text-white/50 text-center">Free</span>
          <span className="text-[12px] text-center font-medium" style={{ color: archetype.accent }}>
            {archetype.toolkitName.split(' ')[0]}
          </span>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-[1fr_72px_88px] items-center px-4 py-3 ${
              i !== rows.length - 1 ? 'border-b border-white/5' : ''
            }`}
          >
            <span className="text-[13px] text-white/75 pr-2 leading-snug">{row.label}</span>
            <span className="flex justify-center">
              {row.free ? (
                <Check size={14} className="text-white/40" strokeWidth={2.6} />
              ) : (
                <Minus size={14} className="text-white/15" />
              )}
            </span>
            <span className="flex justify-center">
              <Check size={14} color={archetype.accent} strokeWidth={2.8} />
            </span>
          </div>
        ))}
        <div className="px-4 py-3 bg-white/[0.02] flex items-center justify-between">
          <span className="text-[12px] text-white/40">Price</span>
          <span className="text-[13px] font-medium" style={{ color: archetype.accent }}>
            {archetype.toolkitPrice}
          </span>
        </div>
      </motion.div>

      <p className="text-white/30 text-[12px] mt-5 mb-2 uppercase tracking-wide">What's included</p>
      <div className="flex flex-col gap-3">
        {archetype.toolkitFeatures.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
            className="bg-surface-raised border border-white/5 rounded-xl2 p-4 flex items-start gap-3"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ backgroundColor: `${archetype.accent}22` }}
            >
              <Check size={13} color={archetype.accent} strokeWidth={3} />
            </div>
            <div>
              <p className="text-[14.5px] text-white/90 font-medium">{f.title}</p>
              <p className="text-[12.5px] text-white/40 mt-0.5">{f.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8"
      >
        <PrimaryButton>Unlock the {archetype.toolkitName}</PrimaryButton>
        <p className="text-center text-white/25 text-[12px] mt-3">Cancel anytime · Tailored to your archetype</p>
      </motion.div>
    </div>
  )
}
