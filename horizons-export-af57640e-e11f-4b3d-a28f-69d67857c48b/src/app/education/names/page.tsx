'use client'

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Heart, Share2, Bookmark } from 'lucide-react'

const namesOfGod = [
  {
    name: 'Ar-Rahman',
    meaning: 'The Most Gracious',
    description: 'The One who is most merciful and compassionate to all creation.',
  },
  {
    name: 'Ar-Raheem',
    meaning: 'The Most Merciful',
    description: 'The One who shows mercy to the believers in the Hereafter.',
  },
  {
    name: 'Al-Malik',
    meaning: 'The King',
    description: 'The One who is the absolute ruler and owner of everything.',
  },
  // Add more names as needed
]

export default function NamesOfGod() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedName, setSelectedName] = useState<typeof namesOfGod[0] | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredNames = namesOfGod.filter(name => 
    name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    name.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleFavorite = (index: number) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">The 99 Names of God</h1>
      
      <div className="prose prose-lg mb-8">
        <p>
          The 99 Names of God (Asma ul Husna) represent the different attributes and qualities of God.
          Each name reflects a unique aspect of divine nature and helps us understand the greatness of God.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNames.map((name, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-amber-600 mb-2">
              {name.name}
            </h2>
            <h3 className="text-lg text-gray-700 mb-3">{name.meaning}</h3>
            <p className="text-gray-600">{name.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-amber-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Reflection</h2>
        <p className="text-gray-700">
          Take time to reflect on these names and their meanings. Understanding these attributes
          helps us develop a deeper connection with God and appreciate the divine wisdom in creation.
        </p>
      </div>
    </div>
  )
} 