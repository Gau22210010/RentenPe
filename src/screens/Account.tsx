import { motion } from 'framer-motion'
import { ShieldCheck, Landmark, Compass, RotateCcw } from 'lucide-react'
import type { Archetype } from '../types'

const archetypeIcon = { guardian: ShieldCheck, cashflow: Landmark, growth: Compass } as const

export default function Account({ archetype, onRetake }: { archetype: Archetype; onRetake: () => void }) {
  const ArchIcon = archetypeIcon[archetype.id]

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-6 pt-14 pb-32">
      <p className="text-white/40 text-[13px]">Account</p>
      <h1 className="font-display text-[24px] text-white mt-1">Gaurang</h1>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-6 rounded-xl3 p-5 border border-white/10 flex items-center gap-4"
        style={{ background: `linear-gradient(135deg, ${archetype.accent}22, transparent 70%)` }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${archetype.accent}22` }}
        >
          <ArchIcon size={20} color={archetype.accent} />
        </div>
        <div>
          <p className="text-[12px] text-white/40">Your Landlord DNA</p>
          <p className="font-display text-[16px] text-white mt-0.5">{archetype.name}</p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileTap={{ scale: 0.98 }}
        onClick={onRetake}
        className="w-full mt-4 rounded-xl2 p-4 flex items-center gap-3 bg-surface-raised border border-white/5 text-left"
      >
        <RotateCcw size={16} className="text-white/50" />
        <span className="text-[14px] text-white/80">Retake Landlord DNA quiz</span>
      </motion.button>
    </div>
  )
}
