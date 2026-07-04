import {
  ShieldCheck,
  FileCheck,
  BadgeCheck,
  AlertTriangle,
  Landmark,
  TrendingUp,
  Wallet,
  Shield,
  Home,
  Percent,
  Compass,
  BarChart3,
  type LucideProps,
} from 'lucide-react'

export const iconMap: Record<string, React.FC<LucideProps>> = {
  'shield-check': ShieldCheck,
  'file-check': FileCheck,
  'badge-check': BadgeCheck,
  'alert-triangle': AlertTriangle,
  landmark: Landmark,
  'trending-up': TrendingUp,
  wallet: Wallet,
  shield: Shield,
  home: Home,
  percent: Percent,
  compass: Compass,
  'bar-chart-3': BarChart3,
}

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = iconMap[name] ?? Shield
  return <Cmp {...props} />
}
