'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface FilterState {
  state: string
  services: string[]
  verified: boolean
}

interface SearchFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

const DME_SERVICES = [
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
]

export function SearchFilters({ filters, onFiltersChange }: SearchFiltersProps) {
  const handleServiceToggle = (service: string) => {
    const newServices = filters.services.includes(service)
      ? filters.services.filter(s => s !== service)
      : [...filters.services, service]

    onFiltersChange({
      ...filters,
      services: newServices
    })
  }

  const clearFilters = () => {
    onFiltersChange({
      state: '',
      services: [],
      verified: false
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* State Filter */}
          <div>
            <Label htmlFor="state-select" className="text-sm font-medium">
              State
            </Label>
            <Select
              value={filters.state}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, state: value })
              }
            >
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="All states" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All states</SelectItem>
                {US_STATES.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Services Filter */}
          <div>
            <Label className="text-sm font-medium">Equipment & Services</Label>
            <div className="mt-2 space-y-2 max-h-48 overflow-y-auto">
              {DME_SERVICES.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={filters.services.includes(service)}
                    onCheckedChange={() => handleServiceToggle(service)}
                  />
                  <Label
                    htmlFor={service}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Filter */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="verified"
              checked={filters.verified}
              onCheckedChange={(checked) =>
                onFiltersChange({ ...filters, verified: checked as boolean })
              }
            />
            <Label htmlFor="verified" className="text-sm font-normal cursor-pointer">
              Verified providers only
            </Label>
          </div>

          <Button
            variant="outline"
            onClick={clearFilters}
            className="w-full"
          >
            Clear Filters
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}