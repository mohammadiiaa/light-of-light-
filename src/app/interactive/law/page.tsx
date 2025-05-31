'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Scale, 
  BookOpen, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Share2,
  Bookmark
} from 'lucide-react'

const questions = [
  {
   id: 1,
  question: "How often do you reflect on whether your actions align with your inner sense of justice?",
  options: [
    { text: "Regularly; I use it to guide all my decisions", score: 5 },
    { text: "Sometimes, especially when faced with big choices", score: 3 },
    { text: "Almost never; I don’t often think about it", score: 2 },
    { text: "Rarely; I act mostly on instinct", score: 1 }
  ]
},
{
  id: 2,
  question: "When communicating with others, how much do you aim to inspire trust and goodwill?",
  options: [
    { text: "I always strive to speak in ways that build trust and kindness", score: 5 },
    { text: "I try most of the time but can get distracted", score: 3 },
    { text: "I focus more on being clear than kind", score: 2 },
    { text: "I don’t usually think about this", score: 1 }
  ]
},
{
  id: 3,
  question: "When faced with a difficult decision, how do you ensure your choice is content?",
  options: [
    { text: "I carefully think about what is right for everyone involved", score: 5 },
    { text: "I try to be fair but sometimes focus on what benefits me", score: 3 },
    { text: "I avoid making tough decisions when fairness is unclear", score: 2 },
    { text: "I often decide quickly without much thought", score: 1 }
  ]
},
{
  id: 4,
  question: "How do you usually speak when you disagree with someone?",
  options: [
    { text: "I express my thoughts calmly and respectfully", score: 5 },
    { text: "I sometimes get upset but try to stay polite", score: 3 },
    { text: "I often say what I feel without holding back", score: 2 },
    { text: "I avoid talking to prevent conflict", score: 1 }
    ]
  },
  // Add more questions here
]

const results = {
  high: {
    title: "Deep Understanding",
    description: "You demonstrate a strong understanding of Islamic principles and their application.",
    traits: [
      "Strong knowledge of sources",
      "Clear understanding of principles",
      "Ability to apply rulings",
      "Awareness of context"
    ]
  },
  medium: {
    title: "Growing Knowledge",
    description: "You have a good foundation and are developing your understanding of Islamic law.",
    traits: [
      "Basic knowledge of sources",
      "Understanding key principles",
      "Learning to apply rulings",
      "Developing awareness"
    ]
  },
  low: {
    title: "Beginning Learner",
    description: "You're at the start of your journey in understanding Islamic law and principles.",
    traits: [
      "Basic awareness",
      "Learning fundamentals",
      "Seeking knowledge",
      "Open to growth"
    ]
  }
}

export default function LawTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<number[]>([])

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const totalScore = newAnswers.reduce((a, b) => a + b, 0)
      setScore(totalScore)
      setShowResults(true)
    }
  }

  const toggleBookmark = (questionId: number) => {
    setBookmarkedQuestions(prev => 
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }

  const getResult = () => {
    const maxScore = questions.length * 5
    const percentage = (score / maxScore) * 100

    if (percentage >= 80) return results.high
    if (percentage >= 50) return results.medium
    return results.low
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setScore(0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Test of Law
            </h1>
            <p className="text-xl mb-8">
              Assess your understanding of Islamic principles and rulings
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
                  <button
                    onClick={() => toggleBookmark(questions[currentQuestion].id)}
                    className={`p-2 rounded-full ${
                      bookmarkedQuestions.includes(questions[currentQuestion].id)
                        ? 'text-yellow-500'
                        : 'text-gray-400 hover:text-yellow-500'
                    }`}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
                <h2 className="text-2xl font-semibold">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full p-4 text-left border rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
                  >
                    {option.text}
                  </button>
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
                    <Scale
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.ceil(score / (questions.length * 5) * 5)
                          ? 'text-green-500 fill-current'
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
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={resetTest}
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <span>Take Test Again</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
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