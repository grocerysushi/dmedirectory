'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin } from 'lucide-react'

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void
  className?: string
}

export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query, location)
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for DME companies, equipment, services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        <div className="flex-1 md:max-w-xs relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="City, State or ZIP"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        <Button type="submit" size="lg" className="h-12 px-8">
          Search
        </Button>
      </div>
    </form>
  )
}