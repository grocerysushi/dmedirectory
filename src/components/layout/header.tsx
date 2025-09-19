import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">DME</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Directory</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/companies" className="text-gray-600 hover:text-gray-900">
              Companies
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-gray-900">
              Categories
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Add Company
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}