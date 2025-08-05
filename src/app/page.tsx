import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header1 } from '@/components/animations/Header1'
import { BackgroundBeams } from '@/components/animations/BackgroundBeams'
import { ContainerScroll } from '@/components/animations/ContainerScroll'
import { GoogleGeminiContainer } from '@/components/animations/google-gemini-container'
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundBeams className="opacity-30" />
      
      {/* New Header Component */}
      <Header1 />

      {/* Google Gemini Effect Animation */}
      <section className="relative z-10">
        <GoogleGeminiContainer
          title="AI-Powered Property Management"
          description="Watch as our intelligent algorithms trace the path to smarter real estate investment"
        />
      </section>

      {/* Container Scroll Animation */}
      <section className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="text-center space-y-4">
            </div>
          }
        >
          <div className="h-full w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
              {/* Property Overview */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Properties</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total</span>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Occupied</span>
                    <span className="font-medium text-green-600">22</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Vacant</span>
                    <span className="font-medium text-orange-600">2</span>
                  </div>
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Monthly Revenue</h3>
                <div className="space-y-2">
                  <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-end justify-center">
                    <div className="text-white text-sm font-medium mb-1">$45,230</div>
                  </div>
                  <div className="text-center">
                    <span className="text-green-600 text-sm font-medium">+12.5%</span>
                    <span className="text-muted-foreground text-xs ml-1">vs last month</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Recent Activity</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>New tenant signed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Maintenance completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Payment received</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      <Analytics />
    </div>
  )
} 