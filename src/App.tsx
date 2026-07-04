import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PhoneFrame from './components/PhoneFrame'
import Welcome from './screens/Welcome'
import TenantPlaceholder from './screens/TenantPlaceholder'
import DNAIntro from './screens/DNAIntro'
import Quiz from './screens/Quiz'
import Reveal from './screens/Reveal'
import AppShell from './screens/AppShell'
import { archetypes, scoreQuiz } from './data/archetypes'
import type { ArchetypeId, Role, Stage } from './types'

export default function App() {
  const [stage, setStage] = useState<Stage>('welcome')
  const [role, setRole] = useState<Role | null>(null)
  const [archetypeId, setArchetypeId] = useState<ArchetypeId | null>(null)
  const [flowKey, setFlowKey] = useState(0)

  const handleRoleSelect = (selected: Role) => {
    setRole(selected)
    setStage(selected === 'landlord' ? 'dna-intro' : 'tenant-placeholder')
  }

  const handleQuizComplete = (answers: ArchetypeId[]) => {
    setArchetypeId(scoreQuiz(answers))
    setStage('reveal')
  }

  const reset = () => {
    setRole(null)
    setArchetypeId(null)
    setFlowKey((k) => k + 1)
    setStage('welcome')
  }

  const retakeQuiz = () => {
    setFlowKey((k) => k + 1)
    setStage('dna-intro')
  }

  return (
    <PhoneFrame>
      <AnimatePresence initial={false}>
        {stage === 'welcome' && <Welcome key={`welcome-${flowKey}`} onSelect={handleRoleSelect} />}
        {stage === 'tenant-placeholder' && <TenantPlaceholder key={`tenant-${flowKey}`} onBack={reset} />}
        {stage === 'dna-intro' && <DNAIntro key={`dna-intro-${flowKey}`} onBegin={() => setStage('quiz')} />}
        {stage === 'quiz' && <Quiz key={`quiz-${flowKey}`} onComplete={handleQuizComplete} />}
        {stage === 'reveal' && archetypeId && (
          <Reveal key={`reveal-${flowKey}`} archetype={archetypes[archetypeId]} onContinue={() => setStage('app')} />
        )}
        {stage === 'app' && archetypeId && (
          <AppShell key={`app-${flowKey}`} archetype={archetypes[archetypeId]} onRetakeQuiz={retakeQuiz} />
        )}
      </AnimatePresence>
    </PhoneFrame>
  )
}
