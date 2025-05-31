'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Heart,
  Brain,
  Shield,
  Clock
} from 'lucide-react'

const natureWisdomInfo = {
  overview: {
    title: "Nature's Wisdom: Healing for Body, Mind & Soul",
    description: `Since the dawn of human existence, nature has been our greatest healer and teacher.  
      Gifted by the Earth and created by the divine, hold secrets that nurture the body, calm the mind, and awaken the soul.  
      "And We send down from the sky pure water that We may bring forth thereby gardens and grain for harvest." (Quran 50:9)  
      These natural gifts come with a wisdom that science is just beginning to understand, revealing complex compounds that support inflammation control, immune strength, and mental clarity.`,
    benefits: [
      "Holistic healing for body, mind, and soul",
      "Gentle and minimal side effects",
      "Rooted in timeless natural and divine wisdom",
      "Supports mental clarity and emotional balance",
      "Enhances everyday vitality and well-being"
    ]
  },
  categories: [
    {
      id: 1,
      title: "Powerful Healing Herbs",
      icon: Leaf,
      description: `Plants that have stood the test of time, showing remarkable benefits in many cultures worldwide.  
        For example, Black Seed is called 'the remedy for all ailments except death', reflecting its deep significance.`,
      details: [
        "Black Seed (Nigella Sativa): Immune booster, anti-inflammatory",
        "Ginger (Zingiber officinale): Supports digestion, reduces nausea",
        "Turmeric (Curcuma longa): Natural antioxidant and anti-inflammatory",
        "Chamomile (Matricaria chamomilla): Calming and sleep aid",
        "Peppermint (Mentha piperita): Soothes digestive discomfort and headaches"
      ],
      usage: [
        "Infusions and teas to soothe and heal",
        "Essential oils for topical healing and aromatherapy",
        "Powdered forms in cooking and supplements",
        "Fresh leaves and roots for direct consumption",
        "Topical applications for skin and muscle relief"
      ]
    },
    {
      id: 2,
      title: "Science Meets Tradition",
      icon: Heart,
      description: `Modern research confirms many ancient insights. Active compounds in herbs interact with the body's biology, often modulating inflammation, oxidative stress, and hormonal balance, supporting both physical and mental health.`,
      details: [
        "Anti-inflammatory effects: Reducing harmful swelling and pain",
        "Immune system support: Enhancing natural defense",
        "Digestive health: Improving gut flora and nutrient absorption",
        "Respiratory benefits: Clearing airways and easing breathing",
        "Stress relief: Balancing the nervous system and mood"
      ],
      usage: [
        "Follow recommended dosages carefully",
        "Combine herbs for synergistic effects",
        "Best consumed fresh or minimally processed",
        "Store in cool, dry places to preserve potency",
        "Observe personal reactions and adjust use accordingly"
      ]
    }
  ],
  safety: [
    {
      title: "Precautions & Mindful Use",
      icon: Shield,
      points: [
        "Always consult your healthcare provider",
        "Be aware of potential allergies or sensitivities",
        "Ensure herbs are sourced from reputable suppliers",
        "Respect dosage limits and avoid self-medication",
        "Monitor for interactions with other medications"
      ]
    },
    {
      title: "Best Practices for Quality & Respect",
      icon: Clock,
      points: [
        "Choose fresh, organic, and sustainably harvested herbs",
        "Store herbs in airtight containers away from sunlight",
        "Use traditional preparation methods to honor the plant's essence",
        "Maintain a journal to track effects and improvements",
        "Approach healing as a holistic journey of body and spirit"
      ]
    }
  ]
}

export default function NatureWisdomPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<typeof natureWisdomInfo.categories[0] | null>(null)

  const filteredCategories = natureWisdomInfo.categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-extrabold mb-6">
              Nature's Wisdom
            </h1>
            <p className="text-2xl font-light">
              Healing for Body, Mind & Soul through Earth's Gifts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-5">{natureWisdomInfo.overview.title}</h2>
          <p className="text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
            {natureWisdomInfo.overview.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {natureWisdomInfo.overview.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-700" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Categories List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-semibold mb-8">Healing Categories</h2>
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full mb-6 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    whileHover={{ scale: 1.03 }}
                    className="bg-green-50 rounded-lg p-6 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                    onClick={() => setSelectedCategory(category)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if(e.key === 'Enter') setSelectedCategory(category) }}
                  >
                    <div className="flex items-start space-x-5">
                      <div className="p-4 bg-green-100 rounded-lg">
                        <category.icon className="w-8 h-8 text-green-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Safety Guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {natureWisdomInfo.safety.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <section.icon className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                  </div>
                  <ul className="space-y-4 list-disc list-inside text-gray-700">
                    {section.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <div className="space-y-10">
              {selectedCategory ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-md p-8"
                >
                  <div className="flex items-center space-x-5 mb-8">
                    <div className="p-4 bg-green-100 rounded-lg">
                      <selectedCategory.icon className="w-10 h-10 text-green-700" />
                    </div>
                    <h2 className="text-3xl font-semibold">{selectedCategory.title}</h2>
                  </div>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">{selectedCategory.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-5">Details</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-3 mb-10">
                    {selectedCategory.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-5">Usage Guidelines</h3>
                  <ul className="space-y-4">
                    {selectedCategory.usage.map((usage, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700">
                        <Clock className="w-5 h-5 text-green-700" />
                        <span>{usage}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500 italic">
                  Select a category to explore its healing wisdom.
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
