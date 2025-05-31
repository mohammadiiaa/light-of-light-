'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sun, 
  Clock,
  Shield,
  Search,
  Heart,
  Brain,
  AlertTriangle,
  Calendar
} from 'lucide-react'

const sunTherapyInfo = {
  overview: {
    title: "Sun Therapy",
    description: "The healing benefits of controlled sun exposure.",
    benefits: [
      "Vitamin D synthesis",
      "Improved mood",
      "Better sleep",
      "Enhanced immunity",
      "Natural energy"
    ]
  },
  practices: [
    {
      id: 1,
      title: "Morning Sun",
      icon: Sun,
      description: "Benefits of early morning sun exposure.",
      details: [
        "Best time: 6-8 AM",
        "Gentle UV rays",
        "Sets circadian rhythm",
        "Boosts energy",
        "Life",
        "Improves mood"
      ],
      guidelines: [
        "Start with 5-10 minutes",
        "Gradually increase duration",
        "The east and the west belongs to God",
        "Expose skin moderately",
        "Stay hydrated"
      ]
    },
    {
      id: 2,
      title: "Afternoon Sun",
      icon: Clock,
      description: "Safe practices for midday sun exposure.",
      details: [
        "Limited exposure needed",
        "Strong UV radiation",
        "Vitamin D production",
        "Energy enhancement",
        "Skin protection crucial"
       
      ],
      guidelines: [
        "Short duration (5-15 min)",
        "Use sun protection",
        "Stay in shade when possible",
        "Wear protective clothing",
        "Monitor skin response"
      ]
    }
  ],
  safety: [
    {
      title: "Precautions",
      icon: AlertTriangle,
      points: [
        "Check UV index",
        "Use sunscreen",
        "Wear protective clothing",
        "Stay hydrated",
        "Monitor skin changes"
      ]
    },
    {
      title: "Best Times",
      icon: Calendar,
      points: [
        "Early morning (6-8 AM)",
        "Late afternoon (4-6 PM)",
        "Avoid peak hours (10 AM-4 PM)",
        "Consider season",
        "Check weather conditions"
      ]
    }
  ],
  benefits: {
    title: "Health Benefits",
    icon: Heart,
    categories: [
      {
        title: "Physical Benefits",
        points: [
          "Vitamin D production",
          "Bone health",
          "Immune system support",
          "Skin conditions",
          "Blood pressure regulation"
        ]
      },
      {
        title: "Mental Benefits",
        points: [
          "Mood enhancement",
          "Stress reduction",
          "Better sleep",
          "Increased energy",
          "Mental clarity"
        ]
      }
    ]
  }
}

export default function SunTherapyPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPractice, setSelectedPractice] = useState<typeof sunTherapyInfo.practices[0] | null>(null)

  const filteredPractices = sunTherapyInfo.practices.filter(practice =>
    practice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    practice.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sun Therapy
            </h1>
            <p className="text-xl mb-8">
              Discover the healing power of controlled sun exposure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">{sunTherapyInfo.overview.title}</h2>
          <p className="text-gray-600 mb-6">{sunTherapyInfo.overview.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {sunTherapyInfo.overview.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Practices List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Sun Exposure Practices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPractices.map((practice) => (
                  <motion.div
                    key={practice.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-lg p-6 cursor-pointer"
                    onClick={() => setSelectedPractice(practice)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <practice.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
                        <p className="text-gray-600">{practice.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Safety Guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sunTherapyInfo.safety.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-amber-50 rounded-lg">
                      <section.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {selectedPractice && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <selectedPractice.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h2 className="text-2xl font-bold">{selectedPractice.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{selectedPractice.description}</p>
                  
                  <h3 className="font-semibold mb-4">Key Points</h3>
                  <ul className="space-y-3 mb-6">
                    {selectedPractice.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-semibold mb-4">Guidelines</h3>
                  <ul className="space-y-3">
                    {selectedPractice.guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Clock className="w-4 h-4 text-amber-600 mt-1" />
                        <span className="text-gray-600">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Benefits Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <sunTherapyInfo.benefits.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold">{sunTherapyInfo.benefits.title}</h3>
                </div>
                {sunTherapyInfo.benefits.categories.map((category, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-semibold mb-2">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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