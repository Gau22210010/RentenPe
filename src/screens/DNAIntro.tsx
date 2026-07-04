import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import PrimaryButton from '../components/PrimaryButton'

export default function DNAIntro({ onBegin }: { onBegin: () => void }) {
  return (
    <Screen className="bg-ink flex flex-col px-6 pt-16 pb-10">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <DNAIllustration />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gold-300 text-sm font-medium tracking-wide mt-8"
        >
          Landlord DNA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[30px] leading-[1.2] text-white mt-3 text-balance max-w-[300px]"
        >
          Let's personalise RentenPe for you.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="text-white/45 text-[15px] mt-4 leading-relaxed max-w-[260px]"
        >
          Answer 5 quick questions.
          <br />
          Less than 30 seconds.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.5 }}
      >
        <PrimaryButton onClick={onBegin}>Begin</PrimaryButton>
      </motion.div>
    </Screen>
  )
}

function DNAIllustration() {
  const colors = ['#5b8def', '#3fc98a', '#e2a33e']
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {colors.map((c, i) => (
        <motion.div
          key={c}
          className="absolute rounded-full"
          style={{
            width: 140 - i * 34,
            height: 140 - i * 34,
            border: `1.5px solid ${c}55`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14 + i * 6, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 10,
              height: 10,
              backgroundColor: c,
              top: -5,
              left: '50%',
              marginLeft: -5,
              boxShadow: `0 0 12px ${c}`,
            }}
          />
        </motion.div>
      ))}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-14 h-14 rounded-full bg-gold-gradient shadow-goldGlow flex items-center justify-center font-display text-black text-xl font-semibold"
      >
        R
      </motion.div>
    </div>
  )
}
