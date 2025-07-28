import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Apartment',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      '3 tokens per day',
      'Manage up to 1 property',
      'Start 1 investment proposal',
      'Create 1 listing',
      'Add up to 4 tenants',
      'Basic Support'
    ],
    popular: false
  },
  {
    name: 'Condo',
    price: '$10',
    period: '/month',
    description: 'Great for growing portfolios',
    features: [
      'Everything in Apartment plan, plus',
      'Manage up to 3 properties',
      'Start 3 investment proposals',
      'Create 3 listings',
      'Add up to 12 tenants',
      'Credits rollover'
    ],
    popular: false
  },
  {
    name: 'House',
    price: '$20',
    period: '/month',
    description: 'For serious investors',
    features: [
      'Everything in Condo plan, plus',
      'Manage up to 5 properties',
      'Start 5 investment proposals',
      'Create 5 listings',
      'Add up to 20 tenants',
      'Customizable metrics on dashboard'
    ],
    popular: true
  },
  {
    name: 'Mansion',
    price: 'Flexible billing',
    description: 'For enterprise needs',
    features: [
      'Everything in House plan, plus',
      'Unlimited properties, proposals, and listings',
      'Unlimited tenants',
      '99.99% SLA',
      'Advanced Support (Dedicated Slack Channel)',
      'Onboarding service'
    ],
    popular: false
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your property management needs. All plans include our core AI features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Separator />
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.name === 'Mansion' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Have questions? <Link href="/contact" className="text-primary underline">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  )
} 