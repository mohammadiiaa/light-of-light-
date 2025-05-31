'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Sun,
  Moon,
  Leaf,
  Droplet,
  Search,
  Star
} from 'lucide-react'

const educationTopics = [
  {
    id: 1,
    title: "Names of God",
    icon: Star,
    description: "Learn about the 99 names of Allah and their meanings.",
    path: "/education/names",
    color: "blue"
  },
  {
    id: 2,
    title: "Natural Signs",
    icon: Sun,
    description: "Understanding signs in nature and their significance.",
    path: "/education/natural-signs",
    color: "amber"
  },
  {
    id: 3,
    title: "Honey Benefits",
    icon: Droplet,
    description: "Discover the healing properties of honey.",
    path: "/education/honey",
    color: "yellow"
  },
  {
    id: 4,
    title: "Onions & Garlic",
    icon: Leaf,
    description: "Learn about the benefits and uses of onions and garlic.",
    path: "/education/onions-garlic",
    color: "green"
  }
]

export default function EducationPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTopics = educationTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Islamic Education
            </h1>
            <p className="text-xl mb-8">
              Discover knowledge and wisdom from Islamic teachings
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
              placeholder="Search educational topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTopics.map((topic) => (
            <motion.a
              key={topic.id}
              href={topic.path}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer block"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 bg-${topic.color}-50 rounded-full`}>
                  <topic.icon className={`w-8 h-8 text-${topic.color}-600`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
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