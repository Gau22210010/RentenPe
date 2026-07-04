import type { Archetype, ArchetypeId } from '../types'

export const archetypes: Record<ArchetypeId, Archetype> = {
  guardian: {
    id: 'guardian',
    name: 'The Guardian',
    tagline: 'You protect before you profit.',
    description:
      'You sleep well when your tenant is verified and your agreement is airtight. Trust, not just rent, is your currency.',
    strength: 'You catch risk early — disputes rarely blindside you.',
    blindSpot: 'You can under-value the upside of a good property.',
    motivation: 'Trustworthy tenants and legal peace of mind',
    accent: '#5b8def',
    accentSoft: '#3a5a9e',
    accentGlow: '#8fb3ff',
    primaryScoreLabel: 'Property Confidence',
    primaryScoreValue: 86,
    contributors: [
      { label: 'Verified tenant', met: true },
      { label: 'Active agreement', met: true },
      { label: 'On-time payments', met: true },
      { label: 'Insurance expires soon', met: false },
    ],
    widgets: [
      { id: 'tenant-trust', title: 'Tenant Trust', value: '92', sub: 'Background & ID verified', icon: 'shield-check' },
      { id: 'agreement-health', title: 'Agreement Health', value: 'Strong', sub: 'Renews in 4 months', icon: 'file-check' },
      { id: 'verification', title: 'Verification Status', value: 'Complete', sub: 'All checks passed', icon: 'badge-check' },
      { id: 'risk', title: 'Risk Alerts', value: '1 open', sub: 'Insurance renewal due', icon: 'alert-triangle' },
    ],
    journey: [
      { id: 'first-property', title: 'First Property', detail: 'Added your first rental', done: true },
      { id: 'first-tenant', title: 'First Verified Tenant', detail: 'Identity & background checked', done: true },
      { id: 'first-rent', title: 'First Successful Rent', detail: 'Collected without a delay', done: true },
      { id: 'first-renewal', title: 'First Agreement Renewal', detail: 'Tenant chose to stay', done: true },
      { id: 'twelve-months', title: '12 Months Stable Rent', detail: 'No missed cycles in a year', done: false },
      { id: 'trusted-tenant', title: '24 Months Trusted Tenant', detail: 'Same tenant, two years running', done: false },
    ],
    communityName: 'Guardian Community',
    communityTopics: [
      { id: 't1', title: 'Best way to background-check a new tenant', replies: 214, tag: 'Verification' },
      { id: 't2', title: 'What to do when a tenant disputes an agreement clause', replies: 98, tag: 'Legal' },
      { id: 't3', title: 'Renewal checklist before signing again', replies: 156, tag: 'Agreements' },
    ],
    socialProof: [
      '91% of Guardians verify tenants before signing',
      '87% of Guardians renew agreements with a legal review',
    ],
    toolkitName: 'Guardian Toolkit',
    toolkitFeatures: [
      { id: 'f1', title: 'Priority tenant background checks', detail: 'Deeper verification, faster turnaround' },
      { id: 'f2', title: 'Legal document review', detail: 'Every agreement checked before signing' },
      { id: 'f3', title: 'Risk alert engine', detail: 'Early warnings on disputes and lapses' },
      { id: 'f4', title: 'Dedicated legal helpline', detail: 'Talk to a housing law expert anytime' },
    ],
    freeFeatures: ['Basic tenant ID check', 'Standard agreement templates', 'Rent collection'],
    toolkitPrice: '₹499/month',
  },
  cashflow: {
    id: 'cashflow',
    name: 'The Cashflow Keeper',
    tagline: 'You plan around what rent makes possible.',
    description:
      'Your property is part of a bigger financial picture. Predictable rent means a predictable life — EMIs included.',
    strength: 'You rarely get caught off guard by a cashflow gap.',
    blindSpot: 'You can miss long-term growth while optimising for stability.',
    motivation: 'Financial confidence and predictable cashflow',
    accent: '#3fc98a',
    accentSoft: '#2c8f63',
    accentGlow: '#7de3b3',
    primaryScoreLabel: 'EMI Confidence',
    primaryScoreValue: 91,
    contributors: [
      { label: 'Rent covers EMI', met: true },
      { label: 'On-time payments streak', met: true },
      { label: 'Rent Protect active', met: true },
      { label: 'Next payment unconfirmed', met: false },
    ],
    widgets: [
      { id: 'emi-confidence', title: 'EMI Confidence', value: '91%', sub: 'Rent comfortably covers EMI', icon: 'landmark' },
      { id: 'rent-prediction', title: 'Rent Prediction', value: 'On track', sub: 'Next payment in 6 days', icon: 'trending-up' },
      { id: 'cashflow-health', title: 'Cashflow Health', value: 'Healthy', sub: '3 months of buffer', icon: 'wallet' },
      { id: 'rent-protect', title: 'Rent Protect', value: 'Active', sub: 'Covered against delays', icon: 'shield' },
    ],
    journey: [
      { id: 'first-property', title: 'First Property', detail: 'Added your first rental', done: true },
      { id: 'first-tenant', title: 'First Verified Tenant', detail: 'Identity & background checked', done: true },
      { id: 'first-rent', title: 'First Successful Rent', detail: 'Collected without a delay', done: true },
      { id: 'first-renewal', title: 'First Agreement Renewal', detail: 'Tenant chose to stay', done: true },
      { id: 'twelve-months', title: '12 Months Stable Rent', detail: 'No missed cycles in a year', done: false },
      { id: 'trusted-tenant', title: '24 Months Trusted Tenant', detail: 'Same tenant, two years running', done: false },
    ],
    communityName: 'Cashflow Community',
    communityTopics: [
      { id: 't1', title: 'How others handle a delayed rent month', replies: 187, tag: 'Rent Delays' },
      { id: 't2', title: 'Matching EMI schedule to rent cycles', replies: 132, tag: 'EMI' },
      { id: 't3', title: 'Building a 3-month cashflow buffer', replies: 121, tag: 'Cashflow' },
    ],
    socialProof: [
      '78% of Cashflow Keepers use Rent Protect',
      '85% say EMI Confidence changed how they plan the year',
    ],
    toolkitName: 'Cashflow Toolkit',
    toolkitFeatures: [
      { id: 'f1', title: 'Rent Protect coverage', detail: 'Get paid even if a tenant delays' },
      { id: 'f2', title: 'EMI-linked rent planning', detail: 'Align due dates with your loan schedule' },
      { id: 'f3', title: 'Predictive rent forecasting', detail: 'Know your cashflow weeks in advance' },
      { id: 'f4', title: 'Priority payout processing', detail: 'Faster settlement into your account' },
    ],
    freeFeatures: ['Basic rent reminders', 'Standard agreement templates', 'Rent collection'],
    toolkitPrice: '₹499/month',
  },
  growth: {
    id: 'growth',
    name: 'The Growth Builder',
    tagline: 'You see property as a portfolio, not a possession.',
    description:
      'Rent is nice, but appreciation is the point. You want to know what your property is becoming, not just what it earns today.',
    strength: 'You spot opportunity before most landlords do.',
    blindSpot: 'You can underweight the day-to-day protection your portfolio needs.',
    motivation: 'Growing long-term wealth',
    accent: '#e2a33e',
    accentSoft: '#a9752a',
    accentGlow: '#f6c876',
    primaryScoreLabel: 'Growth Health',
    primaryScoreValue: 78,
    contributors: [
      { label: 'Rental yield tracked', met: true },
      { label: 'Market comparison run', met: true },
      { label: 'Expansion plan started', met: false },
      { label: 'Portfolio insurance review', met: false },
    ],
    widgets: [
      { id: 'property-health', title: 'Property Health', value: 'Good', sub: 'No pending maintenance', icon: 'home' },
      { id: 'rental-yield', title: 'Rental Yield', value: '4.8%', sub: 'Above area average', icon: 'percent' },
      { id: 'expansion', title: 'Expansion Opportunities', value: '3 new', sub: 'Matched to your budget', icon: 'compass' },
      { id: 'market-intel', title: 'Market Intelligence', value: '+6.2%', sub: 'Area value, last 12 months', icon: 'bar-chart-3' },
    ],
    journey: [
      { id: 'first-property', title: 'First Property', detail: 'Added your first rental', done: true },
      { id: 'first-tenant', title: 'First Verified Tenant', detail: 'Identity & background checked', done: true },
      { id: 'first-rent', title: 'First Successful Rent', detail: 'Collected without a delay', done: true },
      { id: 'first-renewal', title: 'First Agreement Renewal', detail: 'Tenant chose to stay', done: true },
      { id: 'twelve-months', title: '12 Months Stable Rent', detail: 'No missed cycles in a year', done: false },
      { id: 'trusted-tenant', title: '24 Months Trusted Tenant', detail: 'Same tenant, two years running', done: false },
    ],
    communityName: 'Growth Community',
    communityTopics: [
      { id: 't1', title: 'Best emerging investment areas this year', replies: 261, tag: 'Investment Areas' },
      { id: 't2', title: 'How to read rental yield vs. appreciation', replies: 143, tag: 'Rental Yield' },
      { id: 't3', title: 'When landlords chose to expand their portfolio', replies: 176, tag: 'Expansion' },
    ],
    socialProof: [
      '72% of Growth Builders renewed agreements early this year',
      '64% are actively tracking a second property',
    ],
    toolkitName: 'Builder Toolkit',
    toolkitFeatures: [
      { id: 'f1', title: 'Portfolio-wide yield tracking', detail: 'See every property’s return in one view' },
      { id: 'f2', title: 'Market intelligence reports', detail: 'Curated data on emerging areas' },
      { id: 'f3', title: 'Expansion matchmaking', detail: 'New listings matched to your goals' },
      { id: 'f4', title: 'Growth advisory calls', detail: 'Quarterly session with a portfolio advisor' },
    ],
    freeFeatures: ['Basic property listing', 'Standard agreement templates', 'Rent collection'],
    toolkitPrice: '₹499/month',
  },
}

export function scoreQuiz(answers: ArchetypeId[]): ArchetypeId {
  const counts: Record<ArchetypeId, number> = { guardian: 0, cashflow: 0, growth: 0 }
  answers.forEach((a) => (counts[a] += 1))
  return (Object.keys(counts) as ArchetypeId[]).reduce(
    (best, key) => (counts[key] > counts[best] ? key : best),
    'guardian' as ArchetypeId,
  )
}
