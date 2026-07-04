import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { Archetype } from '../types'

export default function Journey({ archetype }: { archetype: Archetype }) {
  const doneCount = archetype.journey.filter((m) => m.done).length

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-6 pt-14 pb-32">
      <p className="text-white/40 text-[13px]">Your journey</p>
      <h1 className="font-display text-[24px] text-white mt-1">Landlord Journey</h1>
      <p className="text-white/45 text-[13px] mt-2 max-w-[280px] leading-relaxed">
        {doneCount} of {archetype.journey.length} milestones reached — real achievements, tracked as they happen.
      </p>

      <div className="relative mt-10 pl-2">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10" />
        {archetype.journey.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.09, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex gap-4 pb-8 last:pb-0"
          >
            <div
              className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                m.done ? '' : 'bg-surface-raised border border-white/10'
              }`}
              style={m.done ? { backgroundColor: archetype.accent } : undefined}
            >
              {m.done ? (
                <Check size={15} className="text-black" strokeWidth={3} />
              ) : (
                <div className="w-2 h-2 rounded-full bg-white/20" />
              )}
            </div>
            <div className={`pt-1 ${m.done ? '' : 'opacity-50'}`}>
              <p className="text-[15px] font-display text-white">{m.title}</p>
              <p className="text-[12.5px] text-white/45 mt-0.5">{m.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
