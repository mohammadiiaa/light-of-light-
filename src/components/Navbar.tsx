'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, Lightbulb, ChevronDown, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education', submenu: [
    { name: 'Names of God', href: '/education/names' },
    { name: 'Natural Signs', href: '/education/natural-signs' },
    { name: 'Honey Benefits', href: '/education/honey' },
    { name: 'Onions & Garlic', href: '/education/onions-garlic' }
  ] },
  { name: 'Healing', href: '/healing', submenu: [
    { name: 'Cupping Therapy', href: '/healing/cupping' },
    { name: 'Herbal Medicine', href: '/healing/herbal' },
    { name: 'Sun Therapy', href: '/healing/sun' },
    { name: 'Moon Therapy', href: '/healing/moon' }
  ] },
  { name: 'Live Stream', href: '/live-stream', submenu: [
    { name: 'Current Stream', href: '/live-stream/current' },
    { name: 'Schedule', href: '/live-stream/schedule' },
    { name: 'Past Streams', href: '/live-stream/archive' }
  ] },
  { name: 'Interactive', href: '/interactive', submenu: [
    { name: 'Goodness Test', href: '/interactive/goodness' },
    { name: 'Law Test', href: '/interactive/law' },
    { name: 'Nature Quiz', href: '/interactive/nature' },
    { name: 'Forum', href: '/forum' }
  ] }
]

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const pathname = usePathname()

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)
    setShowLanguageMenu(false)
  }

  return (
    <nav className="bg-white shadow-md" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Lightbulb className="h-8 w-8 text-amber-500" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-900">Light of Light</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-gray-900 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                  onMouseEnter={() => setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                  aria-expanded={activeSubmenu === item.name}
                  aria-haspopup={item.submenu ? "true" : "false"}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-1 inline" aria-hidden="true" />}
                </Link>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    role="menu"
                    aria-label={`${item.name} submenu`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-900 hover:bg-amber-50 hover:text-amber-600"
                        role="menuitem"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-1 text-gray-900 hover:text-amber-600"
                aria-label="Select language"
                aria-expanded={showLanguageMenu}
                aria-controls="language-menu"
              >
                <Globe className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === currentLanguage)?.name}
                </span>
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>

              {showLanguageMenu && (
                <div 
                  id="language-menu" 
                  className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 z-50"
                  role="menu"
                  aria-label="Language options"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-amber-50 hover:text-amber-600"
                      role="menuitem"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-amber-600 hover:bg-amber-50 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.href
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-900 hover:text-amber-600 hover:bg-amber-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-900 hover:text-amber-600"
                          onClick={() => setIsOpen(false)}
                          role="menuitem"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-900 mb-2">Language</div>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code)
                        setIsOpen(false)
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        currentLanguage === lang.code
                          ? 'bg-amber-50 text-amber-600'
                          : 'text-gray-900 hover:bg-amber-50 hover:text-amber-600'
                      }`}
                      role="menuitem"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 