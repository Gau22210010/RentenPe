export type ArchetypeId = 'guardian' | 'cashflow' | 'growth'

export interface QuizOption {
  label: string
  archetype: ArchetypeId
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
}

export interface ContributorItem {
  label: string
  met: boolean
}

export interface DashboardWidget {
  id: string
  title: string
  value: string
  sub: string
  icon: string
}

export interface JourneyMilestone {
  id: string
  title: string
  detail: string
  done: boolean
}

export interface CommunityTopic {
  id: string
  title: string
  replies: number
  tag: string
}

export interface ToolkitFeature {
  id: string
  title: string
  detail: string
}

export interface Archetype {
  id: ArchetypeId
  name: string
  tagline: string
  description: string
  strength: string
  blindSpot: string
  motivation: string
  accent: string
  accentSoft: string
  accentGlow: string
  primaryScoreLabel: string
  primaryScoreValue: number
  contributors: ContributorItem[]
  widgets: DashboardWidget[]
  journey: JourneyMilestone[]
  communityName: string
  communityTopics: CommunityTopic[]
  socialProof: string[]
  toolkitName: string
  toolkitFeatures: ToolkitFeature[]
  freeFeatures: string[]
  toolkitPrice: string
}

export type Role = 'landlord' | 'tenant'

export type Stage =
  | 'welcome'
  | 'tenant-placeholder'
  | 'dna-intro'
  | 'quiz'
  | 'reveal'
  | 'app'

export type AppTab = 'home' | 'journey' | 'community' | 'toolkit' | 'account'
