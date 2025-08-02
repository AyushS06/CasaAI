import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header1 } from '@/components/Header1'
import { BackgroundBeams } from '@/components/BackgroundBeams'
import { MacbookScroll } from '@/components/MacbookScroll'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundBeams className="opacity-30" />
      
      {/* New Header Component */}
      <Header1 />

      {/* Hero Section - Adjusted for fixed header */}
      <main className="container mx-auto px-4 py-16 mt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Smart Property Management with{' '}
                <span className="text-primary">AI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                CasaAI helps real estate investors manage properties, track investments, and maximize returns with intelligent automation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started Free</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/product">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* MacBook Scroll Animation Section */}
      <section className="relative z-10 mt-32">
        <MacbookScroll 
          title="Experience CasaAI on a MacBook"
          showGradient={true}
        />
      </section>
    </div>
  )
} 