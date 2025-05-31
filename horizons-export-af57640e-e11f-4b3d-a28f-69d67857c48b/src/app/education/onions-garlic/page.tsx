'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Heart, 
  Shield,
  Search,
  BookOpen,
  Share2,
  Clock
} from 'lucide-react'

const foodItems = [
  {
    id: 1,
    title: "Onions",
    icon: Leaf,
    description: "The significance and benefits of onions in Islamic tradition.",
    details: [
      "Mentioned in Hadith for their healing properties",
      "Rich in antioxidants and vitamins",
      "Natural immune system booster",
      "Anti-inflammatory properties",
      "Supports heart health"
    ],
    usage: [
      "Raw consumption for maximum benefits",
      "Cooking with other vegetables",
      "Traditional remedies",
      "Seasonal consumption",
      "Storage methods"
    ]
  },
  {
    id: 2,
    title: "Garlic",
    icon: Shield,
    description: "The importance and health benefits of garlic.",
    details: [
      "Prophetic medicine recommendations",
      "Natural antibiotic properties",
      "Cardiovascular health support",
      "Immune system enhancement",
      "Anti-microbial effects"
    ],
    usage: [
      "Raw consumption guidelines",
      "Cooking applications",
      "Medicinal preparations",
      "Storage recommendations",
      "Timing of consumption"
    ]
  }
]

export default function OnionsGarlicPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItem, setSelectedItem] = useState<typeof foodItems[0] | null>(null)

  const filteredItems = foodItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Onions & Garlic
            </h1>
            <p className="text-xl mb-8">
              Discover the significance and health benefits of onions and garlic in Islamic tradition
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
              placeholder="Search onions and garlic benefits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              {selectedItem ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <selectedItem.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Overview</h3>
                    <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                    
                    <h3 className="font-semibold mb-4">Health Benefits</h3>
                    <ul className="space-y-3 mb-6">
                      {selectedItem.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-semibold mb-4">Usage Guidelines</h3>
                    <ul className="space-y-3">
                      {selectedItem.usage.map((usage, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Clock className="w-4 h-4 text-green-600 mt-1" />
                          <span className="text-gray-600">{usage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4">
                    <button className="p-2 text-gray-600 hover:text-green-600">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  Select an item to view details
                </div>
              )}
            </div>
          </div>
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