"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Droplet,
  Heart,
  Brain,
  Shield,
  Search,
  BookOpen,
  Share2,
} from "lucide-react";

const honeyBenefits = [
  {
    id: 1,
    title: "Spiritual Significance",
    icon: BookOpen,
    description: "Honey's mention in the Quran and its spiritual importance.",
    details: [
      "\"There comes forth from their bellies a drink of varying color, wherein is healing for men.\" — Quran 16:69",
      "Honey is one of the few foods explicitly mentioned in the Quran, reflecting its special status.",
      "Symbolizes divine wisdom, purity, and mercy — gifts from the Creator’s intricate design.",
      "Bees represent a model of community, discipline, and harmony, reflecting natural order.",
      "Historically, honey has been used by prophets and spiritual seekers as a source of nourishment and healing.",
      "The sweetness of honey parallels the sweetness of faith — both uplift the soul.",
    ],
  },
  {
    id: 2,
    title: "Physical Health",
    icon: Heart,
    description: "The numerous physical health benefits of honey.",
    details: [
      "Rich in natural antioxidants such as flavonoids and phenolic acids, protecting cells from damage.",
      "\"And We send down from the Quran that which is a healing and a mercy...\" — Quran 17:82",
      "Honey supports the immune system by enhancing white blood cell function, key to fighting infections.",
      "Its natural sugars provide quick, sustained energy fueling muscle strength and endurance.",
      "Acts as a gentle cleanser for the digestive tract, promoting gut health and nutrient absorption.",
      "The enzymes in honey help soothe throat irritation, making it beneficial for respiratory strength.",
      "Honey’s anti-inflammatory properties aid in reducing chronic inflammation, improving overall vitality.",
    ],
  },
  {
    id: 3,
    title: "Mental Benefits",
    icon: Brain,
    description: "How honey benefits mental health and cognitive function.",
    details: [
      "Glucose in honey is an important fuel source for brain cells, improving concentration and memory.",
      "Its calming properties help reduce anxiety and stress, promoting mental clarity.",
      "\"Verily in the remembrance of Allah do hearts find rest.\" — Quran 13:28",
      "Honey supports neurotransmitter balance, which enhances mood and emotional resilience.",
      "Improved sleep quality through honey consumption supports memory consolidation and mental recovery.",
      "The sweet taste can trigger positive emotional responses, linking nutrition to mental wellbeing.",
      "Engaging the heart and intellect together helps cultivate a balanced, healthy mind.",
    ],
  },
  {
    id: 4,
    title: "Medicinal Uses",
    icon: Shield,
    description: "Traditional and modern medicinal applications of honey.",
    details: [
      "Honey’s antibacterial properties are due to hydrogen peroxide and natural acidity, effective in wound healing.",
      "Scientific studies confirm honey’s efficacy against antibiotic-resistant bacteria.",
      "Used historically as a natural salve, honey accelerates tissue repair and reduces scarring.",
      "Aids digestion by promoting healthy gut flora, easing indigestion and ulcers.",
      "Its soothing effect helps reduce throat inflammation and cough symptoms.",
      "Natural anti-inflammatory agents in honey help manage conditions like arthritis and skin inflammations.",
      "The Quran highlights that God has provided cures in nature, encouraging seeking natural remedies (Quran 26:80).",
    ],
  },
];

export default function HoneyBenefitsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBenefit, setSelectedBenefit] = useState<
    typeof honeyBenefits[0] | null
  >(null);

  const filteredBenefits = honeyBenefits.filter(
    (benefit) =>
      benefit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      benefit.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits of Honey
            </h1>
            <p className="text-xl mb-8">
              Explore how honey, as described in the Quran and confirmed by
              science, nourishes the body and uplifts the spirit.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search honey benefits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredBenefits.map((benefit) => (
                <motion.div
                  key={benefit.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
                  onClick={() => setSelectedBenefit(benefit)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              {selectedBenefit ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <selectedBenefit.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h2 className="text-2xl font-bold">{selectedBenefit.title}</h2>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Overview</h3>
                    <p className="text-gray-600 mb-6">
                      {selectedBenefit.description}
                    </p>

                    <h3 className="font-semibold mb-4">Key Points</h3>
                    <ul className="space-y-3">
                      {selectedBenefit.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4">
                    <button className="p-2 text-gray-600 hover:text-amber-600">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  Select a benefit to view details
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-gray-100 p-4">
        <div className="bg-white rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Advertisement</p>
          <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Ad Space</span>
          </div>
        </div>
      </div>
    </div>
  );
}
