import { Header1 } from '@/components/Header1'
import { AuroraBackground } from '@/components/AuroraBackground'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AuroraBackground className="absolute inset-0" />
      <Header1 />
      <main className="container mx-auto px-4 py-16 mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">Changelog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track the latest updates and improvements to CasaAI.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Version 1.0.0 */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CardTitle>Version 1.0.0</CardTitle>
                  <Badge variant="default">Latest</Badge>
                </div>
                <CardDescription>December 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">✨ New Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Initial release of CasaAI property management platform</li>
                    <li>Portfolio overview dashboard</li>
                    <li>Automated workflow management</li>
                    <li>Advanced analytics and reporting</li>
                    <li>Theme switching (light/dark mode)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">🔧 Improvements</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Responsive design for all devices</li>
                    <li>Optimized bundle size and performance</li>
                    <li>Enhanced user experience with smooth animations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.9.0 */}
            <Card>
              <CardHeader>
                <CardTitle>Version 0.9.0</CardTitle>
                <CardDescription>November 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">✨ New Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Beta release with core functionality</li>
                    <li>Property listing and management</li>
                    <li>Basic analytics dashboard</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.8.0 */}
            <Card>
              <CardHeader>
                <CardTitle>Version 0.8.0</CardTitle>
                <CardDescription>October 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">✨ New Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Alpha release with basic UI components</li>
                    <li>User authentication system</li>
                    <li>Property data structure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 