'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Sun,
  Moon,
  Leaf,
  Droplet,
  Search
} from 'lucide-react'

const healingPractices = [
  {
    id: 1,
    title: "Cupping Therapy",
    icon: Droplet,
    description: "Traditional healing practice using suction cups.",
    path: "/healing/cupping",
    color: "red"
  },
  {
    id: 2,
    title: "Herbal Medicine",
    icon: Leaf,
    description: "Natural remedies using medicinal plants.",
    path: "/healing/herbal",
    color: "green"
  },
  {
    id: 3,
    title: "Sun Therapy",
    icon: Sun,
    description: "Healing benefits of controlled sun exposure.",
    path: "/healing/sun",
    color: "amber"
  },
  {
    id: 4,
    title: "Moon Therapy",
    icon: Moon,
    description: "Lunar-based healing practices.",
    path: "/healing/moon",
    color: "blue"
  }
]

export default function HealingPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPractices = healingPractices.filter(practice =>
    practice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    practice.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healing Practices
            </h1>
            <p className="text-xl mb-8">
              Discover traditional and natural healing methods
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search healing practices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPractices.map((practice) => (
            <motion.a
              key={practice.id}
              href={practice.path}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer block"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 bg-${practice.color}-50 rounded-full`}>
                  <practice.icon className={`w-8 h-8 text-${practice.color}-600`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
                  <p className="text-gray-600">{practice.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Ad Section */}
      <div className="md:hidden bg-gray-100 p-4">
        <div className="bg-white rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Advertisement</p>
          <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Ad Space</span>
          </div>
        </div>
      </div>
    </div>
  )
} 