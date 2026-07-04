import { motion } from 'framer-motion'
import { Icon } from './IconMap'

export default function WidgetCard({
  title,
  value,
  sub,
  icon,
  accent,
  index = 0,
}: {
  title: string
  value: string
  sub: string
  icon: string
  accent: string
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="bg-surface-raised rounded-xl2 p-4 shadow-card border border-white/5 flex flex-col gap-3"
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${accent}1f` }}
      >
        <Icon name={icon} size={17} color={accent} strokeWidth={2} />
      </div>
      <div>
        <p className="text-lg font-display font-semibold leading-none">{value}</p>
        <p className="text-[13px] text-white/70 mt-1.5">{title}</p>
        <p className="text-[11px] text-white/35 mt-0.5">{sub}</p>
      </div>
    </motion.div>
  )
}
