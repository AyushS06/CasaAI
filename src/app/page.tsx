import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header1 } from '@/components/Header1'
import { BackgroundBeams } from '@/components/BackgroundBeams'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundBeams className="opacity-30" />
      
      {/* Header */}
      <Header1 />

      <main className="container mx-auto px-4 py-16 mt-20 relative z-10 space-y-32">
        {/* Home Section */}
        <section id="home" className="scroll-mt-28">
          <div className="max-w-4xl mx-auto text-center space-y-8">
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

        {/* Pricing Section */}
        <section id="pricing" className="scroll-mt-28">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Pricing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent pricing that grows with you.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-white/10">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For getting started</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$0</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>Up to 10 units</li>
                    <li>Basic analytics</li>
                    <li>Email support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/signup">Start for free</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-white/10">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing portfolios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$49<span className="text-base font-normal">/mo</span></div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>Up to 100 units</li>
                    <li>Advanced analytics</li>
                    <li>Workflow automation</li>
                    <li>Priority support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/signup">Upgrade</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-white/10">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Custom needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">Custom</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>Unlimited units</li>
                    <li>Dedicated success manager</li>
                    <li>Custom integrations</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Contact sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 