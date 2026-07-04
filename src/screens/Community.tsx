import { motion } from 'framer-motion'
import { MessageCircle, TrendingUp } from 'lucide-react'
import type { Archetype } from '../types'

export default function Community({ archetype }: { archetype: Archetype }) {
  return (
    <div className="h-full overflow-y-auto no-scrollbar px-6 pt-14 pb-32">
      <p className="text-white/40 text-[13px]">Community</p>
      <h1 className="font-display text-[24px] text-white mt-1">{archetype.communityName}</h1>
      <p className="text-white/45 text-[13px] mt-2 max-w-[280px] leading-relaxed">
        Conversations with landlords who think like you do.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-6 rounded-xl3 p-5 border border-white/10"
        style={{ background: `linear-gradient(135deg, ${archetype.accent}22, transparent 70%)` }}
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={15} color={archetype.accent} />
          <p className="text-[12px] uppercase tracking-wide text-white/50">Landlords like you</p>
        </div>
        <div className="flex flex-col gap-2">
          {archetype.socialProof.map((s) => (
            <p key={s} className="text-[14px] text-white/85 leading-snug">
              {s}
            </p>
          ))}
        </div>
      </motion.div>

      <p className="text-white/40 text-[13px] uppercase tracking-wide mt-8 mb-3">Trending discussions</p>
      <div className="flex flex-col gap-3">
        {archetype.communityTopics.map((t, i) => (
          <motion.button
            key={t.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
            whileTap={{ scale: 0.98 }}
            className="text-left bg-surface-raised border border-white/5 rounded-xl2 p-4"
          >
            <span
              className="text-[11px] px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${archetype.accent}22`, color: archetype.accent }}
            >
              {t.tag}
            </span>
            <p className="text-[14.5px] text-white/90 mt-2.5 leading-snug">{t.title}</p>
            <div className="flex items-center gap-1.5 mt-2.5 text-white/35">
              <MessageCircle size={13} />
              <span className="text-[12px]">{t.replies} replies</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
