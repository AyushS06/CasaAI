import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header1 } from '@/components/Header'
import { AuroraBackground } from '@/components/AuroraBackground'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo'
import { PointerHighlightDemo } from '@/components/PointerHighlightDemo'
import { HeroSectionOne } from '@/components/HeroSectionOne'
import dynamic from 'next/dynamic'

// Dynamic imports for better bundle splitting
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), {
  loading: () => <div className="animate-pulse">Loading FAQ...</div>
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <AuroraBackground className="absolute inset-0" />
      
      {/* Header */}
      <Header1 />

      <main className="container mx-auto px-4 py-16 mt-20 relative z-10 space-y-32">
        {/* Home Section */}
        <section id="home" className="scroll-mt-28">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <TextGenerateEffectDemo />
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="scroll-mt-28">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Product</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to operate and scale your property portfolio.
              </p>
            </div>
            <HeroSectionOne/>
            <PointerHighlightDemo />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="scroll-mt-28">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about CasaAI.
              </p>
            </div>
            <FAQSection />
          </div>
        </section>

        {/* Pricing moved to dedicated page: /pricing */}
      </main>
    </div>
  )
} 