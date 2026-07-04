import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import Screen from '../components/Screen'
import { questions } from '../data/questions'
import type { ArchetypeId, QuizOption } from '../types'

export default function Quiz({ onComplete }: { onComplete: (answers: ArchetypeId[]) => void }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<ArchetypeId[]>([])
  const [direction, setDirection] = useState(1)
  const advancing = useRef(false)

  const current = questions[step]
  const isLast = step === questions.length - 1

  const pick = (option: QuizOption) => {
    if (advancing.current) return
    advancing.current = true
    const next = [...answers.slice(0, step), option.archetype]
    setAnswers(next)
    setTimeout(() => {
      if (isLast) {
        onComplete(next)
      } else {
        setDirection(1)
        setStep((s) => s + 1)
        advancing.current = false
      }
    }, 320)
  }

  const goBack = () => {
    if (step === 0) return
    advancing.current = false
    setDirection(-1)
    setStep((s) => s - 1)
  }

  if (!current) return null

  return (
    <Screen className="bg-ink flex flex-col px-6 pt-14 pb-10">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={goBack}
          className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 ${
            step === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <ChevronLeft size={16} className="text-white/70" />
        </button>
        <div className="flex-1 flex gap-1.5">
          {questions.map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gold-gradient"
                initial={{ width: 0 }}
                animate={{ width: i <= step ? '100%' : '0%' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -32 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <p className="text-white/40 text-[13px] mb-2">
              Question {step + 1} of {questions.length}
            </p>
            <h2 className="font-display text-[26px] leading-[1.25] text-white text-balance mb-8">
              {current.question}
            </h2>

            <div className="flex flex-col gap-3">
              {current.options.map((option, i) => (
                <motion.button
                  key={option.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => pick(option)}
                  className={`text-left px-5 py-4 rounded-xl2 border transition-colors ${
                    answers[step] === option.archetype
                      ? 'border-gold-300/60 bg-gold-900/20'
                      : 'border-white/10 bg-surface-raised active:bg-surface'
                  }`}
                >
                  <span className="text-[15px] text-white/90">{option.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Screen>
  )
}
