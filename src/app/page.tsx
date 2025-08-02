import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header1 } from '@/components/Header1'
import { BackgroundBeams } from '@/components/BackgroundBeams'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundBeams className="opacity-30" />
      
      {/* New Header Component */}
      <Header1 />

      {/* Hero Section - Adjusted for fixed header */}
      <main className="container mx-auto px-4 py-16 mt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Smart Property Management with{' '}
                <span className="text-primary">AI</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                CasaAI helps real estate investors manage properties, track investments, and maximize returns with intelligent automation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started Free</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/product">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Hero Graphics */}
          <div className="relative">
            <Card className="p-8 bg-black/50 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl">Dashboard Preview</CardTitle>
                <CardDescription>
                  See your properties at a glance with our intelligent dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border border-white/10">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-primary text-2xl">🏠</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Interactive Dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 