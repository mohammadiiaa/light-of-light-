'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Star, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Share2
} from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "When someone shares a new idea to make things better for others, how do you usually respond?",
    options: [
      { text: "I listen carefully and encourage them to keep going", score: 5 },
      { text: "I ask questions to understand how I can help", score: 4 },
      { text: "I think about it quietly but don’t get involved", score: 3 },
      { text: "I’m skeptical and wait to see results first", score: 2 },
      { text: "I usually don’t pay much attention to such ideas", score: 1 }
    ]
  },
  {
    id: 2,
    question: "How often do you share positive ideas or motivate others to try something good?",
    options: [
      { text: "Often — I love inspiring people to do good", score: 5 },
      { text: "Sometimes — when the moment feels right", score: 4 },
      { text: "Occasionally — if I see a real opportunity", score: 3 },
      { text: "Rarely — I prefer to focus on my own tasks", score: 2 },
      { text: "Never — it’s not something I do", score: 1 }
    ]
  },
  {
    id: 3,
    question: "If a group is working on a community project, what role do you take?",
    options: [
      { text: "I actively participate and help organize", score: 5 },
      { text: "I encourage the group and spread the word", score: 4 },
      { text: "I support quietly behind the scenes", score: 3 },
      { text: "I observe but don’t take part", score: 2 },
      { text: "I avoid group efforts and focus on myself", score: 1 }
    ]
  },
  {
    id: 4,
    question: "What do you believe is the best way to encourage goodness in others?",
    options: [
      { text: "By setting a positive example myself", score: 5 },
      { text: "By offering kind words and encouragement", score: 4 },
      { text: "By sharing useful resources or ideas", score: 3 },
      { text: "By listening and letting others lead", score: 2 },
      { text: "By staying out of it and respecting choices", score: 1 }
    ]
  },
  {
    id: 5,
    question: "When faced with negativity or resistance to good ideas, how do you respond?",
    options: [
      { text: "I stay patient and keep promoting kindness", score: 5 },
      { text: "I try to understand concerns and address them", score: 4 },
      { text: "I avoid conflict but keep my beliefs", score: 3 },
      { text: "I sometimes give up if it’s too hard", score: 2 },
      { text: "I step away and focus on other things", score: 1 }
    ]
  },
  // Add more questions here
]

const results = {
  high: {
    title: "Exemplary Goodness",
    description: "Your actions consistently reflect a deep commitment to goodness and positive impact.",
    traits: [
      "Strong empathy",
      "Proactive kindness",
      "Moral courage",
      "Selfless service"
    ]
  },
  medium: {
    title: "Growing in Goodness",
    description: "You show good intentions and are developing your capacity for positive impact.",
    traits: [
      "Developing empathy",
      "Situational kindness",
      "Growing awareness",
      "Balanced approach"
    ]
  },
  low: {
    title: "Beginning the Journey",
    description: "You're at the start of your journey toward greater goodness and positive impact.",
    traits: [
      "Basic awareness",
      "Personal focus",
      "Learning opportunities",
      "Growth potential"
    ]
  }
}

export default function GoodnessTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Test of Goodness
            </h1>
            <p className="text-xl mb-8">
              Discover your capacity for goodness and positive impact
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
                  <div className="flex space-x-1">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index <= currentQuestion ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
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
                    className="w-full p-4 text-left border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
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
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.ceil(score / (questions.length * 5) * 5)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Your Traits</h3>
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
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Take Test Again</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
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