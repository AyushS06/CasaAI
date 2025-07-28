import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const serverCards = [
  {
    id: 1,
    name: 'Downtown Apartment',
    status: 'Active',
    image: '🏢',
    description: '2BR/2BA in prime location'
  },
  {
    id: 2,
    name: 'Suburban House',
    status: 'Maintenance',
    image: '🏠',
    description: '3BR/2BA with backyard'
  },
  {
    id: 3,
    name: 'Beach Condo',
    status: 'Available',
    image: '🏖️',
    description: '1BR/1BA ocean view'
  },
  {
    id: 4,
    name: 'City Loft',
    status: 'Rented',
    image: '🏙️',
    description: 'Studio in arts district'
  }
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Title */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">CasaAI Dashboard</span>
            </div>

            {/* User Info + Logout */}
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-muted-foreground">Welcome back,</span>
                <span className="ml-1 font-medium">John Doe</span>
              </div>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your properties and investments</p>
        </div>

        {/* Server Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serverCards.map((server) => (
            <Card key={server.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{server.image}</div>
                  <Badge 
                    variant={
                      server.status === 'Active' ? 'default' :
                      server.status === 'Maintenance' ? 'destructive' :
                      server.status === 'Available' ? 'secondary' :
                      'outline'
                    }
                  >
                    {server.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{server.name}</CardTitle>
                <CardDescription>{server.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monthly Rent</span>
                    <span className="font-medium">$2,500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Occupancy</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ROI</span>
                    <span className="font-medium text-green-600">8.5%</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/dashboard/add-property">Add New Property</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard/analytics">View Analytics</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard/settings">Settings</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 