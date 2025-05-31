import React, { useState, useEffect } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import { useDebounce } from '@/hooks/useDebounce'

interface SearchResult {
  id: number
  title: string
  content: string
  category: string
  tags: string[]
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedQuery.trim()) {
        setResults([])
        return
      }

      setIsLoading(true)
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`)
        const data = await response.json()
        setResults(data.results)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [debouncedQuery])

  return (
    <div className="relative w-full max-w-xl">
      <form
        onSubmit={e => e.preventDefault()}
        className="relative"
      >
        <input
          type="text"
          aria-label="Search"
          value={query}
          onChange={e => {
            setQuery(e.target.value)
            setShowResults(true)
          }}
          placeholder="Search for wisdom..."
          className="w-full p-3 pl-10 pr-10 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </form>

      {/* Search Results */}
      {showResults && (query || isLoading) && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-800">
              Searching...
              <span role="status" aria-live="polite" className="sr-only">Loading</span>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y">
              {results.map(result => (
                <div
                  key={result.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    console.log('Selected result:', result)
                    setShowResults(false)
                  }}
                >
                  <h3 className="font-semibold text-amber-600">{result.title}</h3>
                  <p className="text-sm text-gray-800 mt-1 line-clamp-2">
                    {result.content}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {result.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-800">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
