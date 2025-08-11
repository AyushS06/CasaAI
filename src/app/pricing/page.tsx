import { Header1 } from '@/components/Header'
import { AuroraBackground } from '@/components/AuroraBackground'
import SimplePricing from '@/components/sections/SimplePricing'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AuroraBackground className="absolute inset-0" />
      <Header1 />
      <main className="container mx-auto px-4 py-16 mt-20 relative z-10">
        <SimplePricing />
      </main>
    </div>
  )
} 