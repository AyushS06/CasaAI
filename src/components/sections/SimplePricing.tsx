"use client";
import NumberFlow from '@number-flow/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const plans = [
  {
    id: 'Apartment',
    name: 'Apartment',
    price: {
      monthly: 0,
      yearly: 0,
    },
    description:
      'Perfect for anyone starting out in real estate.',
    features: [
      'Manage 1 property',
      'Send 1 investment proposal',
      'List 1 property',
      'Add up to 4 tenants',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    id: 'Condo',
    name: 'Condo',
    price: {
      monthly: 5,
      yearly: 48,
    },
    description: 'Made for anyone who wants to grow their real estate portfolio.',
    features: [
      'Manage up to 3 properties',
      'Send 3 investment proposals',
      'List 3 properties',
      'Add up to 12 tenants',
      'Custom metrics',
    ],
    cta: 'Subscribe to Pro',
    popular: true,
  },
  {
    id: 'House',
    name: 'House',
    price: {
      monthly: 10,
      yearly: 80,
    },
    description: 'Designed for enterprise large scale property portfolios.',
    features: [
      'Manage up to 5 properties',
      'Send 5 investment proposals',
      'List 5 properties',
      'Add up to 20 tenants',
      'Advanced support',
    ],
    cta: 'Start Business Plan',
  },
  {
    id: 'Mansion',
    name: 'Mansion',
    price: {
      monthly: 15,
      yearly: 144,
    },
    description: 'Ideal for companies with multiple properties.',
    features: [
      'Unlimited properties',
      'Unlimited proposals',
      'Unlimited listings',
      'Unlimited tenants',
      'Advanced AI insights',
    ],
    cta: 'Contact Sales',
  },
];

const Example = () => {
  const [frequency, setFrequency] = useState<string>('monthly');
  return (
    <div className="not-prose flex flex-col gap-16 px-8 py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="mb-0 text-balance font-medium text-5xl !tracking-tighter">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto mt-0 mb-0 max-w-2xl text-balance text-lg text-muted-foreground">
          Managing a business is hard enough, so why not make your life easier?
          Our pricing plans are simple, transparent and scale with you.
        </p>
        <Tabs defaultValue={frequency} onValueChange={setFrequency}>
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">
              Yearly
              <Badge variant="secondary" className="ml-2">20% off</Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="mt-8 grid w-full max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              className={cn(
                'relative w-full text-left',
                plan.popular && 'ring-2 ring-primary'
              )}
              key={plan.id}
            >
              {plan.popular && (
                <Badge className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 rounded-full">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-medium text-xl">
                  {plan.name}
                </CardTitle>
                <CardDescription>
                  <p>{plan.description}</p>
                  <NumberFlow
                    className="font-medium text-foreground"
                    format={{
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                    }}
                    suffix={`/month, billed ${frequency}.`}
                    value={
                      plan.price[
                        frequency as keyof typeof plan.price
                      ] as number
                    }
                  />
                  {plan.id === 'Apartment' ? (
                    <p className="mt-2 text-sm text-blue-600 dark:text-white font-medium">
                      Includes
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-blue-600 dark:text-white font-medium">
                      Everything in {plan.id === 'Condo' ? 'Apartment' : plan.id === 'House' ? 'Condo' : 'House'} plan &
                    </p>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                {plan.features.map((feature, index) => (
                  <div
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                    key={index}
                  >
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    {feature}
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'secondary'}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Example;