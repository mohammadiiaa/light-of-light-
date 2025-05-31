'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Activity, 
  Scale,
  Leaf,
  Search
} from 'lucide-react'

const interactiveTopics = [
  {
    id: 'goodness',
    title: 'Goodness Test',
    icon: Activity,
    description: 'Test your understanding of goodness and moral values through interactive scenarios and questions.',
    path: '/interactive/goodness',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'law',
    title: 'Law Test',
    icon: Scale,
    description: 'Challenge your knowledge of divine laws and principles with comprehensive assessments.',
    path: '/interactive/law',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'nature',
    title: 'Nature Quiz',
    icon: Leaf,
    description: 'Explore your understanding of natural signs and their significance through engaging quizzes.',
    path: '/interactive/nature',
    color: 'from-green-500 to-green-600'
  }
]

export default function InteractivePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTopics = interactiveTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Interactive Learning
            </h1>
            <p className="text-lg md:text-xl text-green-100">
              Test your knowledge and understanding through engaging interactive experiences
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search interactive topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg shadow-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTopics.map((topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <Link href={topic.path}>
                <div className={`h-32 bg-gradient-to-r ${topic.color} flex items-center justify-center`}>
                  <topic.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600">
                    {topic.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Advertisement */}
      <div className="md:hidden bg-white border-t border-gray-200 p-4">
        <div className="text-center text-sm text-gray-500">
          Advertisement Space
        </div>
      </div>
    </div>
  )
} 