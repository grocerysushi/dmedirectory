'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { SearchBar } from '@/components/search/search-bar'
import { CompanyCard } from '@/components/companies/company-card'
import { SearchFilters } from '@/components/search/search-filters'
import { createClient } from '@/lib/supabase/client'
import { Company } from '@/lib/database.types'

function SearchContent() {
  const searchParams = useSearchParams()
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    state: '',
    services: [] as string[],
    verified: false
  })

  const query = searchParams.get('q') || ''
  const location = searchParams.get('location') || ''

  useEffect(() => {
    searchCompanies()
  }, [query, location, filters])

  const searchCompanies = async () => {
    setLoading(true)
    const supabase = createClient()

    let queryBuilder = supabase
      .from('companies')
      .select('*')
      .eq('verified', true)

    if (query) {
      queryBuilder = queryBuilder.or(`name.ilike.%${query}%,description.ilike.%${query}%,services.cs.{${query}}`)
    }

    if (location) {
      queryBuilder = queryBuilder.or(`city.ilike.%${location}%,state.ilike.%${location}%,zip_code.ilike.%${location}%`)
    }

    if (filters.state) {
      queryBuilder = queryBuilder.eq('state', filters.state)
    }

    if (filters.services.length > 0) {
      queryBuilder = queryBuilder.overlaps('services', filters.services)
    }

    if (filters.verified) {
      queryBuilder = queryBuilder.eq('verified', true)
    }

    const { data, error } = await queryBuilder.order('name')

    if (error) {
      console.error('Error searching companies:', error)
    } else {
      setCompanies(data || [])
    }

    setLoading(false)
  }

  const handleSearch = (newQuery: string, newLocation: string) => {
    const params = new URLSearchParams()
    if (newQuery) params.set('q', newQuery)
    if (newLocation) params.set('location', newLocation)

    window.history.pushState(null, '', `?${params.toString()}`)
    searchCompanies()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchBar
          onSearch={handleSearch}
          className="mb-6"
        />

        {(query || location) && (
          <div className="text-lg text-gray-600">
            {companies.length} results found
            {query && <span> for "{query}"</span>}
            {location && <span> in {location}</span>}
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64">
          <SearchFilters
            filters={filters}
            onFiltersChange={setFilters}
          />
        </aside>

        <main className="flex-1">
          {loading ? (
            <div className="grid gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-lg"></div>
                </div>
              ))}
            </div>
          ) : companies.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No companies found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or browse all categories.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}