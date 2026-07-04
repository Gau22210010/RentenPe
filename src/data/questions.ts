import type { QuizQuestion } from '../types'

export const questions: QuizQuestion[] = [
  {
    id: 'peace-of-mind',
    question: 'What gives you the biggest peace of mind?',
    options: [
      { label: 'Knowing my tenant is trustworthy', archetype: 'guardian' },
      { label: 'Rent arriving on time', archetype: 'cashflow' },
      { label: 'Knowing my property is gaining value', archetype: 'growth' },
    ],
  },
  {
    id: 'notification',
    question: 'Which notification makes you happiest?',
    options: [
      { label: 'Tenant verified', archetype: 'guardian' },
      { label: 'Rent received', archetype: 'cashflow' },
      { label: 'Property value updated', archetype: 'growth' },
    ],
  },
  {
    id: 'automatic',
    question: 'If one thing could happen automatically...',
    options: [
      { label: 'Tenant verification', archetype: 'guardian' },
      { label: 'Rent reminders', archetype: 'cashflow' },
      { label: 'Market opportunity alerts', archetype: 'growth' },
    ],
  },
  {
    id: 'dashboard',
    question: 'Which dashboard would help you most?',
    options: [
      { label: 'Tenant Trust', archetype: 'guardian' },
      { label: 'Payment Health', archetype: 'cashflow' },
      { label: 'Growth & Yield', archetype: 'growth' },
    ],
  },
  {
    id: 'worry',
    question: "What's more likely to keep you up at night?",
    options: [
      { label: 'A tenant I can’t fully trust', archetype: 'guardian' },
      { label: 'A missed or delayed payment', archetype: 'cashflow' },
      { label: 'Money left on the table', archetype: 'growth' },
    ],
  },
  {
    id: 'success',
    question: 'A great year as a landlord looks like...',
    options: [
      { label: 'Zero disputes, clean agreements', archetype: 'guardian' },
      { label: 'Every rent cycle predictable', archetype: 'cashflow' },
      { label: 'Portfolio worth noticeably more', archetype: 'growth' },
    ],
  },
]
