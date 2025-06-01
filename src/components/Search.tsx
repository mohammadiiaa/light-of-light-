'use client'

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
        setShowResults(true)
      }
    }

    fetchResults()
  }, [debouncedQuery])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) setShowResults(true)
  }

  return (
    <div className="relative w-full max-w-xl">
      <form onSubmit={handleSearch} className="flex items-center gap-2 border px-3 py-2 rounded-md shadow-sm bg-white">
        <SearchIcon className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          className="flex-1 outline-none bg-transparent text-sm"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setShowResults(false)
              setResults([])
            }}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Search Results */}
      {showResults && (query || isLoading) && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border max-h-96 overflow-y-auto z-50">
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
                  <div className="flex gap-2 mt-2 flex-wrap">
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
