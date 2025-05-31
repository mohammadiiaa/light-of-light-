'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Lightbulb, BookOpen, Sparkles, Leaf, HeartPulse, TrendingUp, ExternalLink, ArrowRight, Heart, Video, Users, MessageSquare } from 'lucide-react'
import AdSection from '@/components/AdSection'

const mainFeatureCards = [
  { title: "Verses of God", icon: <BookOpen className="w-10 h-10 text-amber-500" />, description: "Explore curated verses and reflections.", gradient: "from-yellow-400 to-amber-500", path: "/verses" },
  { title: "99 Names of God", icon: <Sparkles className="w-10 h-10 text-sky-500" />, description: "Discover divine attributes and their meanings.", gradient: "from-sky-400 to-blue-500", path: "/names-of-god" },
  { title: "Nature's Signs", icon: <Leaf className="w-10 h-10 text-green-500" />, description: "Reflect on the wonders of creation.", gradient: "from-green-400 to-emerald-500", path: "/nature-universe" },
  { title: "Holistic Healing", icon: <HeartPulse className="w-10 h-10 text-red-500" />, description: "Learn about natural remedies and well-being.", gradient: "from-red-400 to-rose-500", path: "/healing-facts" },
]

const features = [
  {
    name: 'Divine Names',
    description: 'Explore the 99 names of Allah and their meanings',
    icon: BookOpen,
    href: '/education/names',
  },
  {
    name: 'Natural Healing',
    description: 'Discover natural remedies and healing practices',
    icon: Heart,
    href: '/healing',
  },
  {
    name: 'Live Streams',
    description: 'Join our live sessions and discussions',
    icon: Video,
    href: '/live-stream',
  },
  {
    name: 'Community',
    description: 'Connect with like-minded individuals',
    icon: Users,
    href: '/forum',
  },
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [response, setResponse] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) {
      setResponse("Please enter a topic or question to explore the depths of wisdom.")
      return
    }
    setResponse(`Searching for insights related to: "${searchTerm}". (Full interactive responses are being polished and will arrive soon!)`)
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Light of Light
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Your interactive sanctuary for exploring divine wisdom, nature's signs, holistic healing, and fostering inner growth.
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for wisdom..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            aria-label="Search input"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Search
          </button>
        </div>
      </form>

      {/* Top Ad Section */}
      <AdSection position="top" />

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
        {features.map((feature) => (
          <Link
            key={feature.name}
            href={feature.href}
            className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <feature.icon className="h-8 w-8 text-amber-500" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
            <span className="absolute top-4 right-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        ))}
      </div>

      {/* Content Ad Section */}
      <AdSection position="content" />

      {/* Recent Activity Section */}
      <div className="mt-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Add your recent activity cards here */}
        </div>
      </div>

      {/* Bottom Ad Section */}
      <AdSection position="bottom" />

      {/* Hostinger Text */}
      <div className="text-center py-4 text-gray-600">
        Hostinger
      </div>
    </div>
  )
} 