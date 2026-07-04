import { motion } from 'framer-motion'
import { Check, TriangleAlert } from 'lucide-react'
import type { ContributorItem } from '../types'

export default function ContributorList({ items }: { items: ContributorItem[] }) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.08, duration: 0.35 }}
          className="flex items-center gap-2.5"
        >
          {item.met ? (
            <Check size={14} className="text-emerald-400 shrink-0" strokeWidth={3} />
          ) : (
            <TriangleAlert size={14} className="text-amber-400 shrink-0" strokeWidth={2.4} />
          )}
          <span className={`text-[13px] ${item.met ? 'text-white/70' : 'text-amber-300/80'}`}>{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
