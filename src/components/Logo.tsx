export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: 'w-7 h-7 text-[11px]', md: 'w-9 h-9 text-sm', lg: 'w-14 h-14 text-xl' }[size]
  const textSize = { sm: 'text-sm', md: 'text-lg', lg: 'text-3xl' }[size]

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${dims} rounded-full bg-gold-gradient flex items-center justify-center font-display font-semibold text-black shadow-goldGlow`}
      >
        R
      </div>
      <span className={`font-display ${textSize} tracking-wide`}>
        <span className="text-gold-300">RENTEN</span>
        <span className="text-white">PE</span>
      </span>
    </div>
  )
}
