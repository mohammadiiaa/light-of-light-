'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Shield,
  Search,
  BookOpen,
  Share2,
  Clock,
  AlertTriangle,
  Users
} from 'lucide-react'

const cuppingInfo = {
  overview: {
    title: "Cupping Therapy: A Tradition Rooted in Nature and Divine Wisdom",
    description: (
      <>
        <p>
          Cupping therapy is more than a healing method; it reflects the harmony between body, nature, and spiritual wisdom. Its roots trace back to Islamic medicine, where the Quran speaks to the wonders of creation — from the heavens above to the intricate design within us.
        </p>
        <p>
          Consider how the sun and moon govern day and night, creating balance and rhythm, as highlighted in the Quran:
          <br />
          <em>"It is He who made the sun to be a shining glory and the moon to be a light (of beauty), and measured out stages for her; that ye might know the number of years and the count (of time)." (Quran 10:5)</em>
        </p>
        <p>
          Modern science confirms that blood circulation is vital for health, transporting nutrients and removing toxins — a concept cupping therapy promotes through improved blood flow and detoxification.
        </p>
        <p>
          Through gentle suction and strategic application, cupping supports the body's natural healing, reflecting a deep respect for the balance and wisdom in creation — a reminder that our bodies are a miraculous universe unto themselves.
        </p>
      </>
    ),
    benefits: [
      "Enhances blood circulation to revitalize the body",
      "Eases muscle tension, fostering relaxation and comfort",
      "Reduces inflammation by supporting the immune response",
      "Promotes detoxification, aiding the body's natural cleansing",
      "Supports holistic wellness rooted in both tradition and science"
    ]
  },
  types: [
    {
      id: 1,
      title: "Dry Cupping",
      icon: Shield,
      description: "Traditional method using suction only.",
      details: [
        "Uses glass or plastic cups",
        "Creates vacuum effect",
        "No bloodletting",
        "Suitable for beginners",
        "Minimal side effects"
      ]
    },
    {
      id: 2,
      title: "Wet Cupping",
      icon: Heart,
      description: "Combines suction with controlled bloodletting.",
      details: [
        "Small incisions made",
        "Removes stagnant blood",
        "More intensive treatment",
        "Requires expertise",
        "Specific conditions only"
      ]
    }
  ],
  safety: [
    {
      title: "Precautions",
      icon: AlertTriangle,
      points: [
        "Consult healthcare provider",
        "Check for contraindications",
        "Verify practitioner credentials",
        "Ensure sterile equipment",
        "Monitor for adverse reactions"
      ]
    },
    {
      title: "Aftercare",
      icon: Clock,
      points: [
        "Rest for 24-48 hours",
        "Stay hydrated",
        "Avoid extreme temperatures",
        "Keep marks clean",
        "Monitor healing process"
      ]
    }
  ],
  practitioners: {
    title: "Finding a Practitioner",
    icon: Users,
    guidelines: [
      "Check qualifications and certifications",
      "Verify experience and expertise",
      "Read reviews and testimonials",
      "Ensure proper hygiene practices",
      "Ask about treatment approach"
    ]
  }
}

export default function CuppingTherapyPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<typeof cuppingInfo.types[0] | null>(null)

  const filteredTypes = cuppingInfo.types.filter(type =>
    type.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    type.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cupping Therapy
            </h1>
            <p className="text-xl mb-8">
              Discover the traditional healing practice of cupping therapy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">{cuppingInfo.overview.title}</h2>
          <div className="text-gray-700 mb-6">{cuppingInfo.overview.description}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {cuppingInfo.overview.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wisdom from Quran and Science Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 my-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Wisdom from the Quran and Science</h2>
          <p className="text-gray-700 mb-4">
            The Quran beautifully invites us to observe and reflect upon the world around us, encouraging a balance of intellect, heart, and spirit. For example, it says:
          </p>
          <blockquote className="italic text-gray-600 mb-6 border-l-4 border-red-600 pl-4">
            "Do you not see that Allah causes the night to enter the day and causes the day to enter the night..." (Quran 31:29)
          </blockquote>
          <p className="text-gray-700 mb-4">
            This cosmic dance between day and night is a symbol of balance, a principle echoed in the natural rhythms of our bodies. Just as the sun’s energy sustains life, cupping therapy harnesses gentle energy to restore harmony within us.
          </p>
          <p className="text-gray-700 mb-4">
            Science tells us that improved blood circulation brings oxygen and nutrients to tissues, boosts the immune system, and helps eliminate waste products. Cupping’s vacuum effect stimulates these processes naturally, embodying an ancient wisdom now supported by modern understanding.
          </p>
          <p className="text-gray-700 font-semibold text-center mt-8">
            Embracing cupping is a journey to appreciate the marvels within and beyond ourselves — a fusion of faith, reason, and care for the miraculous body entrusted to us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Types List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Types of Cupping</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTypes.map((type) => (
                  <motion.div
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-lg p-6 cursor-pointer"
                    onClick={() => setSelectedType(type)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <type.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Safety Guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cuppingInfo.safety.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <section.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-600">
                    {section.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 h-max">
            {selectedType ? (
              <>
                <h2 className="text-2xl font-bold mb-4">{selectedType.title} Details</h2>
                <ul className="list-disc list-inside text-gray-700">
                  {selectedType.details.map((detail, idx) => (
                    <li key={idx} className="mb-2">{detail}</li>
                  ))}
                </ul>
                <button
                  className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={() => setSelectedType(null)}
                >
                  Close
                </button>
              </>
            ) : (
              <p className="text-gray-600">Select a cupping type to see details here.</p>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="mt-10">
          <input
            type="text"
            placeholder="Search types..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Practitioners Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-red-50 rounded-lg">
              <cuppingInfo.practitioners.icon className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold">{cuppingInfo.practitioners.title}</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            {cuppingInfo.practitioners.guidelines.map((guideline, idx) => (
              <li key={idx} className="mb-2">{guideline}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
