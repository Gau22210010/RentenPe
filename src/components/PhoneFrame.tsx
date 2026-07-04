import type { ReactNode } from 'react'

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center py-6 sm:py-10 px-2">
      <div className="relative w-[390px] max-w-full h-[844px] max-h-[92vh] bg-black rounded-[44px] shadow-2xl ring-1 ring-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50" />
        <div className="relative h-full w-full overflow-hidden">{children}</div>
      </div>
    </div>
  )
}
