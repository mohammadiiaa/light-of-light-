'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  BookOpen, 
  Leaf, 
  Heart, 
  MessageSquare, 
  Menu,
  X,
  Video,
  User,
  TestTube
} from 'lucide-react'

const mobileNavItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Verses', href: '/verses', icon: BookOpen },
  { name: 'Nature', href: '/nature', icon: Leaf },
  { name: 'Healing', href: '/healing', icon: Heart },
  { name: 'Forum', href: '/forum', icon: MessageSquare },
  { name: 'Live', href: '/live-stream', icon: Video },
  { name: 'Tests', href: '/tests', icon: TestTube },
  { name: 'Admin', href: '/admin', icon: User },
]

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      {/* Bottom Navigation Bar */}
      <div className="flex justify-around items-center h-16">
        {mobileNavItems.slice(0, 4).map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center justify-center w-full h-full text-gray-800 hover:text-blue-600 transition-colors"
            aria-label={item.name}
          >
            <item.icon className="w-6 h-6" aria-hidden="true" />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col items-center justify-center w-full h-full text-gray-800 hover:text-blue-600 transition-colors"
          aria-label="Open more menu"
          aria-expanded={isMenuOpen}
          aria-controls="more-menu"
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
          <span className="text-xs mt-1">More</span>
        </button>
      </div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            className="fixed inset-0 bg-white z-50"
            id="more-menu"
            role="menu"
            aria-label="More navigation options"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                    role="menuitem"
                    aria-label={item.name}
                  >
                    <item.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 