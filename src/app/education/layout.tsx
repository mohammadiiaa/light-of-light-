'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BookOpen, 
  Sun,
  Moon,
  Leaf,
  Droplet,
  Star,
  ChevronDown
} from 'lucide-react'

const educationLinks = [
  {
    title: "Names of God",
    path: "/education/names",
    icon: Star
  },
  {
    title: "Natural Signs",
    path: "/education/natural-signs",
    icon: Sun
  },
  {
    title: "Honey Benefits",
    path: "/education/honey",
    icon: Droplet
  },
  {
    title: "Onions & Garlic",
    path: "/education/onions-garlic",
    icon: Leaf
  }
]

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sub Navigation Bar */}
      <nav className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {educationLinks.map((link) => {
                const isActive = pathname === link.path
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.title}</span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden flex items-center space-x-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <BookOpen className="w-6 h-6" />
              <span>Education</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${
                isMobileMenuOpen ? 'rotate-180' : ''
              }`} />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-2">
                {educationLinks.map((link) => {
                  const isActive = pathname === link.path
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.title}</span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
} 