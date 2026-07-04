import { motion } from 'framer-motion'
import { Home, Sparkles, Users, Gem, UserRound } from 'lucide-react'
import type { AppTab } from '../types'

const items: { id: AppTab; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'journey', label: 'Journey', icon: Sparkles },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'toolkit', label: 'Toolkit', icon: Gem },
  { id: 'account', label: 'Account', icon: UserRound },
]

export default function BottomNav({
  active,
  onChange,
  accent,
}: {
  active: AppTab
  onChange: (tab: AppTab) => void
  accent: string
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 px-2 pt-2 pb-6 z-40">
      <div className="flex items-center justify-between">
        {items.map(({ id, label, icon: IconCmp }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="flex-1 flex flex-col items-center gap-1 py-1 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute -top-2 w-8 h-8 rounded-full blur-md opacity-40"
                  style={{ backgroundColor: accent }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <IconCmp
                size={20}
                strokeWidth={isActive ? 2.4 : 1.8}
                color={isActive ? accent : 'rgba(255,255,255,0.4)'}
                className="relative z-10"
              />
              <span
                className="text-[10px] relative z-10"
                style={{ color: isActive ? accent : 'rgba(255,255,255,0.4)' }}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
