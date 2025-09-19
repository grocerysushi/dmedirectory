import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Globe, Mail, Star, CheckCircle } from 'lucide-react'
import { Company } from '@/lib/database.types'

interface CompanyPageProps {
  params: Promise<{ id: string }>
}

async function getCompany(id: string): Promise<Company | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('companies')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching company:', error)
    return null
  }

  return data
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { id } = await params
  const company = await getCompany(id)

  if (!company) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {company.name}
                  </h1>
                  {company.verified && (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">Verified</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>
                    {company.address}, {company.city}, {company.state} {company.zip_code}
                  </span>
                </div>

                {company.description && (
                  <p className="text-gray-700 text-lg mb-4">
                    {company.description}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-semibold">4.5</span>
                  <span className="text-gray-600 text-sm ml-1">(24 reviews)</span>
                </div>

                <div className="flex gap-2">
                  {company.phone && (
                    <Button size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  )}
                  {company.website && (
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Website
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services & Equipment */}
            {company.services && company.services.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Equipment & Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {company.services.map((service) => (
                      <Badge key={service} variant="secondary" className="justify-center py-2">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Certifications */}
            {company.certifications && company.certifications.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Certifications & Accreditations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {company.certifications.map((cert) => (
                      <div key={cert} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Placeholder reviews */}
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="font-medium">John D.</span>
                      <span className="text-gray-500 text-sm">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700">
                      Excellent service and very helpful staff. They delivered my wheelchair quickly and made sure everything was properly adjusted.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="font-medium">Sarah M.</span>
                      <span className="text-gray-500 text-sm">1 month ago</span>
                    </div>
                    <p className="text-gray-700">
                      Good selection of equipment and competitive prices. The staff was knowledgeable about insurance coverage.
                    </p>
                  </div>

                  <Button variant="outline" className="w-full">
                    View All Reviews
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {company.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-gray-600">{company.phone}</div>
                    </div>
                  </div>
                )}

                {company.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">{company.email}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-600">
                      {company.address}<br />
                      {company.city}, {company.state} {company.zip_code}
                    </div>
                  </div>
                </div>

                {company.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium">Website</div>
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}