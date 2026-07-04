import { motion } from 'framer-motion'
import { Users2 } from 'lucide-react'
import Screen from '../components/Screen'
import PrimaryButton from '../components/PrimaryButton'

export default function TenantPlaceholder({ onBack }: { onBack: () => void }) {
  return (
    <Screen className="bg-ink flex flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6"
      >
        <Users2 size={26} className="text-gold-200" />
      </motion.div>
      <h2 className="font-display text-2xl text-white mb-2">Continuing as a Tenant</h2>
      <p className="text-white/45 text-[14px] leading-relaxed max-w-[260px] mb-8">
        This follows RentenPe's existing tenant experience — unchanged by Landlord DNA.
      </p>
      <PrimaryButton variant="dark" onClick={onBack}>
        Back to start
      </PrimaryButton>
    </Screen>
  )
}
