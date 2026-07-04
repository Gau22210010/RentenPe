import { motion } from 'framer-motion'

export default function ProgressRing({
  value,
  color,
  glow,
  size = 168,
  strokeWidth = 12,
  label,
  sub,
}: {
  value: number
  color: string
  glow: string
  size?: number
  strokeWidth?: number
  label?: string
  sub?: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - value / 100) }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ filter: `drop-shadow(0 0 10px ${glow})` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-4xl font-display font-semibold text-white"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {value}%
        </motion.span>
        {label && <span className="text-[11px] text-white/50 mt-1 text-center px-4 leading-tight">{label}</span>}
        {sub && <span className="text-[10px] text-white/30 mt-0.5">{sub}</span>}
      </div>
    </div>
  )
}
