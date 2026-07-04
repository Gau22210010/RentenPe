import { motion } from 'framer-motion'
import { Bell, ChevronRight, FileSignature, Share2, ReceiptText } from 'lucide-react'
import Logo from '../components/Logo'
import ProgressRing from '../components/ProgressRing'
import ContributorList from '../components/ContributorList'
import WidgetCard from '../components/WidgetCard'
import type { Archetype } from '../types'

export default function Dashboard({
  archetype,
  onOpenToolkit,
}: {
  archetype: Archetype
  onOpenToolkit: () => void
}) {
  return (
    <div className="h-full overflow-y-auto no-scrollbar px-6 pt-14 pb-32">
      <div className="flex items-center justify-between mb-8">
        <Logo size="sm" />
        <button className="relative w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
          <Bell size={16} className="text-white/70" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-crimson" />
        </button>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white/40 text-[13px]"
      >
        {archetype.name}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="font-display text-[22px] text-white mt-1 text-balance max-w-[260px]"
      >
        {archetype.tagline}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mt-6 bg-surface-raised border border-white/5 rounded-xl3 p-5 shadow-card"
      >
        <div className="flex items-center gap-5">
          <ProgressRing
            value={archetype.primaryScoreValue}
            color={archetype.accent}
            glow={archetype.accentGlow}
            size={120}
            strokeWidth={9}
          />
          <div className="flex-1">
            <p className="text-[13px] text-white/40">Primary score</p>
            <p className="font-display text-[18px] text-white mt-0.5">{archetype.primaryScoreLabel}</p>
            <ContributorList items={archetype.contributors} />
          </div>
        </div>
      </motion.div>

      <div className="flex items-center justify-between mt-8 mb-3">
        <p className="text-white/40 text-[13px] uppercase tracking-wide">Quick actions</p>
      </div>
      <div className="flex items-center justify-between px-2">
        <QuickAction icon={<FileSignature size={19} />} label="Agreement" />
        <QuickAction icon={<ReceiptText size={19} />} label="Rent Status" />
        <QuickAction icon={<Share2 size={19} />} label="Invite" />
      </div>

      <p className="text-white/40 text-[13px] uppercase tracking-wide mt-8 mb-3">Made for you</p>
      <div className="grid grid-cols-2 gap-3">
        {archetype.widgets.map((w, i) => (
          <WidgetCard
            key={w.id}
            title={w.title}
            value={w.value}
            sub={w.sub}
            icon={w.icon}
            accent={archetype.accent}
            index={i}
          />
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpenToolkit}
        className="w-full mt-6 rounded-xl3 p-5 flex items-center justify-between border border-white/10"
        style={{
          background: `linear-gradient(120deg, ${archetype.accent}1a, transparent 70%)`,
        }}
      >
        <div className="text-left">
          <p className="text-[13px] text-white/40">Tailored for a {archetype.name.replace('The ', '')}</p>
          <p className="font-display text-[16px] text-white mt-0.5">Unlock the {archetype.toolkitName}</p>
        </div>
        <ChevronRight size={18} color={archetype.accent} />
      </motion.button>
    </div>
  )
}

function QuickAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-surface-raised border border-white/5 flex items-center justify-center text-gold-200">
        {icon}
      </div>
      <span className="text-[11px] text-white/50">{label}</span>
    </button>
  )
}
