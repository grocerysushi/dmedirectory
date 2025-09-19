import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Globe, Star, CheckCircle } from 'lucide-react'
import { Company } from '@/lib/database.types'

interface CompanyCardProps {
  company: Company
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Link
                href={`/companies/${company.id}`}
                className="text-xl font-semibold text-gray-900 hover:text-blue-600"
              >
                {company.name}
              </Link>
              {company.verified && (
                <CheckCircle className="h-5 w-5 text-green-600" />
              )}
            </div>

            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">
                {company.city}, {company.state} {company.zip_code}
              </span>
            </div>

            {company.description && (
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {company.description}
              </p>
            )}

            {company.services && company.services.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {company.services.slice(0, 3).map((service) => (
                  <Badge key={service} variant="secondary" className="text-xs">
                    {service}
                  </Badge>
                ))}
                {company.services.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{company.services.length - 3} more
                  </Badge>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm ml-1">4.5</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {company.phone && (
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>{company.phone}</span>
              </div>
            )}

            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-600"
              >
                <Globe className="h-4 w-4 mr-1" />
                <span>Website</span>
              </a>
            )}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/companies/${company.id}`}>
                View Details
              </Link>
            </Button>

            {company.phone && (
              <Button size="sm">
                <Phone className="h-4 w-4 mr-1" />
                Call Now
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}