'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Sun, 
  Moon, 
  Cloud,
  CheckCircle, 
  XCircle,
  ArrowRight,
  Share2,
  Info
} from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "What is the significance of the crescent moon in Islamic tradition?",
    options: [
      { 
        text: "Marks the beginning of Islamic months", 
        score: 5, 
        correct: true,
        explanation: "The crescent moon is used to determine the start of Islamic months, particularly Ramadan and Hajj."
      },
      { 
        text: "Symbol of good luck", 
        score: 2,
        explanation: "While beautiful, this is not its primary significance in Islamic tradition."
      },
      { 
        text: "Represents night prayers", 
        score: 3,
        explanation: "While night prayers are important, this is not the primary meaning of the crescent moon."
      },
      { 
        text: "Decorative symbol only", 
        score: 1,
        explanation: "The crescent moon has deep religious and practical significance beyond decoration."
      }
    ]
  },
  {
    id: 2,
    question: "What is the significance of the direction of the Qibla?",
    options: [
      { 
        text: "Points to the Kaaba in Mecca", 
        score: 5, 
        correct: true,
        explanation: "The Qibla direction points to the Kaaba, the holiest site in Islam."
      },
      { 
        text: "Points to the rising sun", 
        score: 1,
        explanation: "The Qibla is not related to the sun's position."
      },
      { 
        text: "Points to the nearest mosque", 
        score: 2,
        explanation: "While mosques are important, they are not the reference point for Qibla."
      },
      { 
        text: "Points to the North", 
        score: 1,
        explanation: "The Qibla direction varies depending on your location relative to Mecca."
      }
    ]
  },
  // Add more questions here
]

const results = {
  high: {
    title: "Deep Understanding",
    description: "You demonstrate a strong understanding of natural signs and their significance in Islamic tradition.",
    traits: [
      "Knowledge of celestial signs",
      "Understanding of natural cycles",
      "Awareness of symbolic meanings",
      "Connection to tradition"
    ]
  },
  medium: {
    title: "Growing Knowledge",
    description: "You have a good foundation and are developing your understanding of natural signs.",
    traits: [
      "Basic knowledge of signs",
      "Understanding key concepts",
      "Learning traditions",
      "Developing awareness"
    ]
  },
  low: {
    title: "Beginning Learner",
    description: "You're at the start of your journey in understanding natural signs and their significance.",
    traits: [
      "Basic awareness",
      "Learning fundamentals",
      "Seeking knowledge",
      "Open to growth"
    ]
  }
}

export default function NatureQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleAnswer = (score: number, optionIndex: number) => {
    setSelectedOption(optionIndex)
    setShowExplanation(true)
    
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
        setShowExplanation(false)
        setSelectedOption(null)
      }, 2000)
    } else {
      const totalScore = newAnswers.reduce((a, b) => a + b, 0)
      setScore(totalScore)
      setShowResults(true)
    }
  }

  const getResult = () => {
    const maxScore = questions.length * 5
    const percentage = (score / maxScore) * 100

    if (percentage >= 80) return results.high
    if (percentage >= 50) return results.medium
    return results.low
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setScore(0)
    setShowExplanation(false)
    setSelectedOption(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nature Quiz
            </h1>
            <p className="text-xl mb-8">
              Test your knowledge of natural signs and their significance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {!showResults ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <div className="flex space-x-2">
                    <Leaf className="w-5 h-5 text-emerald-500" />
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <Moon className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handleAnswer(option.score, index)}
                      className={`w-full p-4 text-left border rounded-lg transition-colors ${
                        selectedOption === index
                          ? option.correct
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : 'hover:border-emerald-500 hover:bg-emerald-50'
                      }`}
                    >
                      {option.text}
                    </button>
                    {showExplanation && selectedOption === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-600"
                      >
                        <div className="flex items-start space-x-2">
                          <Info className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <p>{option.explanation}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">{getResult().title}</h2>
                <p className="text-gray-600 mb-6">{getResult().description}</p>
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Leaf
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.ceil(score / (questions.length * 5) * 5)
                          ? 'text-emerald-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Your Understanding</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getResult().traits.map((trait, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={resetQuiz}
                  className="flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <span>Take Quiz Again</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600">
                  <Share2 className="w-5 h-5" />
                  <span>Share Results</span>
                </button>
              </div>
            </motion.div>
          )}
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