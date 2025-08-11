import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header1 } from '@/components/Header1'
import { AuroraBackground } from '@/components/AuroraBackground'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import SimplePricing from '@/components/sections/SimplePricing'
import FAQSection from '@/components/sections/FAQSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'

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
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                 Manage properties anytime & anywhere with {' '}
                <span className="text-primary">CasaAI</span>
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
                <Link href="#product">Learn More</Link>
              </Button>
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Overview</CardTitle>
                  <CardDescription>Unified view of properties, performance, and KPIs.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Monitor occupancy, cash flow, and expenses in real time with clear trend insights.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automated Workflows</CardTitle>
                  <CardDescription>Save time with AI-assisted operations.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Automate reminders, rent roll, maintenance triage, and investor updates.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>Make better decisions with rich analytics.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Underwrite, compare scenarios, and track returns across markets and assets.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="scroll-mt-28">
          <FeaturesSection />
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