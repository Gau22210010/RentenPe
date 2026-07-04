import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Landmark, Compass, EyeOff, Target } from 'lucide-react'
import Screen from '../components/Screen'
import PrimaryButton from '../components/PrimaryButton'
import type { Archetype } from '../types'

const archetypeIcon = {
  guardian: ShieldCheck,
  cashflow: Landmark,
  growth: Compass,
} as const

export default function Reveal({ archetype, onContinue }: { archetype: Archetype; onContinue: () => void }) {
  const ArchIcon = archetypeIcon[archetype.id]

  return (
    <Screen className="bg-ink overflow-y-auto no-scrollbar">
      <div className="px-6 pt-14 pb-10 flex flex-col min-h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-1.5 justify-center text-white/40 text-[13px] mb-6"
        >
          <Sparkles size={13} />
          Your Landlord DNA result
        </motion.div>

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-28 h-28 rounded-full flex items-center justify-center mb-6"
            style={{
              background: `radial-gradient(circle, ${archetype.accent}33 0%, transparent 70%)`,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: `1.5px solid ${archetype.accent}55` }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${archetype.accent}22` }}
            >
              <ArchIcon size={34} color={archetype.accent} strokeWidth={1.8} />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white/40 text-[13px] tracking-wide"
          >
            You are
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[32px] leading-tight mt-1"
            style={{ color: archetype.accent }}
          >
            {archetype.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-white/85 font-display text-[17px] mt-2 text-balance max-w-[280px]"
          >
            {archetype.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-white/45 text-[14px] mt-3 leading-relaxed max-w-[290px]"
          >
            {archetype.description}
          </motion.p>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <InfoRow
            icon={<Target size={16} />}
            label="Primary motivation"
            text={archetype.motivation}
            accent={archetype.accent}
            delay={0.85}
          />
          <InfoRow
            icon={<ShieldCheck size={16} />}
            label="Your strength"
            text={archetype.strength}
            accent={archetype.accent}
            delay={0.98}
          />
          <InfoRow
            icon={<EyeOff size={16} />}
            label="Your blind spot"
            text={archetype.blindSpot}
            accent={archetype.accent}
            delay={1.11}
          />
        </div>

        <div className="flex-1" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center text-white/60 text-[13px] mt-8 mb-4"
        >
          Your RentenPe experience has now been personalised.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <PrimaryButton onClick={onContinue}>Enter my RentenPe</PrimaryButton>
        </motion.div>
      </div>
    </Screen>
  )
}

function InfoRow({
  icon,
  label,
  text,
  accent,
  delay,
}: {
  icon: React.ReactNode
  label: string
  text: string
  accent: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="bg-surface-raised border border-white/5 rounded-xl2 p-4 flex items-start gap-3"
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: `${accent}22`, color: accent }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[11px] text-white/40 uppercase tracking-wide">{label}</p>
        <p className="text-[14px] text-white/85 mt-0.5 leading-snug">{text}</p>
      </div>
    </motion.div>
  )
}
