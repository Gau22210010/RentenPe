import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Screen from '../components/Screen'
import BottomNav from '../components/BottomNav'
import Dashboard from './Dashboard'
import Journey from './Journey'
import Community from './Community'
import Toolkit from './Toolkit'
import Account from './Account'
import type { Archetype, AppTab } from '../types'

export default function AppShell({
  archetype,
  onRetakeQuiz,
}: {
  archetype: Archetype
  onRetakeQuiz: () => void
}) {
  const [tab, setTab] = useState<AppTab>('home')

  return (
    <Screen className="bg-ink">
      <div className="h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            {tab === 'home' && <Dashboard archetype={archetype} onOpenToolkit={() => setTab('toolkit')} />}
            {tab === 'journey' && <Journey archetype={archetype} />}
            {tab === 'community' && <Community archetype={archetype} />}
            {tab === 'toolkit' && <Toolkit archetype={archetype} />}
            {tab === 'account' && <Account archetype={archetype} onRetake={onRetakeQuiz} />}
          </motion.div>
        </AnimatePresence>
      </div>
      <BottomNav active={tab} onChange={setTab} accent={archetype.accent} />
    </Screen>
  )
}
