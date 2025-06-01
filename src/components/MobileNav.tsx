'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, BookOpen, Sparkles, Leaf, HeartPulse } from 'lucide-react'
import { usePathname } from 'next/navigation'
import CookieConsent from './CookieConsent' // adjust path if needed

const mainLinks = [
  { title: "Verses of God", icon: <BookOpen className="w-5 h-5" />, path: "/verses" },
  { title: "99 Names of God", icon: <Sparkles className="w-5 h-5" />, path: "/names-of-god" },
  { title: "Nature's Signs", icon: <Leaf className="w-5 h-5" />, path: "/nature-universe" },
  { title: "Holistic Healing", icon: <HeartPulse className="w-5 h-5" />, path: "/healing-facts" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <>
      <nav className="md:hidden bg-white border-b" role="navigation" aria-label="Mobile navigation">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-amber-600">
            Light of Light
          </Link>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="text-xl font-bold text-amber-600">
                Light of Light
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  aria-label="Search"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </form>

            {/* Navigation Links */}
            <div className="space-y-4">
              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    pathname === link.path
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={toggleMenu}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>

            {/* Additional Links */}
            <div className="mt-8 pt-8 border-t">
              <Link
                href="/privacy-policy"
                className="block py-2 text-gray-700 hover:text-amber-600"
                onClick={toggleMenu}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block py-2 text-gray-700 hover:text-amber-600"
                onClick={toggleMenu}
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-amber-600"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <CookieConsent />
    </>
  )
}
