import { SearchBar } from '@/components/search/search-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, MapPin, Star, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Durable Medical Equipment
              <span className="text-blue-600 block">Providers Near You</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              The most comprehensive directory of DME providers across the United States.
              Search by equipment type, location, and services to find the right provider for your needs.
            </p>

            <SearchBar className="mb-8" />

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span>Popular searches:</span>
              <Link href="/search?q=wheelchairs" className="text-blue-600 hover:underline">
                Wheelchairs
              </Link>
              <Link href="/search?q=oxygen" className="text-blue-600 hover:underline">
                Oxygen Equipment
              </Link>
              <Link href="/search?q=cpap" className="text-blue-600 hover:underline">
                CPAP Machines
              </Link>
              <Link href="/search?q=hospital-beds" className="text-blue-600 hover:underline">
                Hospital Beds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose DME Directory?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it easy to find verified DME providers with the equipment and services you need.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Verified Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All providers are verified for licenses, certifications, and quality standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Nationwide Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find DME providers in all 50 states with detailed location and contact information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Reviews & Ratings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Read authentic reviews from other customers to make informed decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get help from our team of DME specialists to find the right equipment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Equipment Category
            </h2>
            <p className="text-lg text-gray-600">
              Find providers specializing in the equipment you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Wheelchairs',
              'Hospital Beds',
              'Oxygen Equipment',
              'CPAP/BiPAP',
              'Walkers & Canes',
              'Bathroom Safety',
              'Diabetic Supplies',
              'Prosthetics',
              'Home Monitoring',
              'Compression Garments'
            ].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="h-auto p-4 text-center justify-center"
                asChild
              >
                <Link href={`/categories/${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  {category}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Are you a DME Provider?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of providers reaching patients nationwide. List your company for free.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/add-company">
                Add Your Company
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}