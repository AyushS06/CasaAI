"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header1 } from '@/components/Header'
import { AuroraBackground } from '@/components/AuroraBackground'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo'
import { PointerHighlightDemo } from '@/components/PointerHighlightDemo'
import { HeroSectionOne } from '@/components/HeroSectionOne'
import { BookDemoButton } from '@/components/BookDemoButton'
import dynamic from 'next/dynamic'

// Dynamic imports for better bundle splitting
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), {
  loading: () => <div className="animate-pulse">Loading FAQ...</div>
})

export default function HomePage() {
  // Handle hash navigation on page load
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 100);
      }
    }
  }, []);

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
            </div>
            <HeroSectionOne/>
            <PointerHighlightDemo />
            <BookDemoButton />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="scroll-mt-28">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the powerful features that make CasaAI the ultimate property management solution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
                <p className="text-muted-foreground">Get intelligent recommendations and insights to optimize your property portfolio.</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xl font-semibold mb-4">Automated Workflows</h3>
                <p className="text-muted-foreground">Streamline your property management with automated processes and workflows.</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
                <p className="text-muted-foreground">Monitor your properties with comprehensive real-time analytics and reporting.</p>
              </div>
            </div>
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