'use client'
import React, { useEffect, useState } from 'react'
import { Plus, MessageSquare, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { getTopics } from './forumData'

interface Topic {
  id: string
  category: string
  title: string
  content: string
  tags: string
  createdAt: Date
  author: string
}

const categories = [
  {
    id: 1,
    name: 'General Discussion',
    description: 'Open discussions about various topics',
    topics: 156,
    posts: 1234,
  },
  {
    id: 2,
    name: 'Healing & Wellness',
    description: 'Share experiences and knowledge about natural healing',
    topics: 89,
    posts: 567,
  },
  {
    id: 3,
    name: 'Spiritual Growth',
    description: 'Discuss spiritual development and personal growth',
    topics: 234,
    posts: 1890,
  },
]

export default function Forum() {
  const [topics, setTopics] = useState<Topic[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadTopics = async () => {
      try {
        const fetchedTopics = await getTopics()
        setTopics(fetchedTopics)
      } catch (error) {
        console.error('Error loading topics:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTopics()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Community Forum</h1>
        <Link
          href="/forum/create-topic"
          className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          aria-label="Create new topic"
        >
          <Plus className="w-5 h-5 mr-2 inline" aria-hidden="true" />
          Create New Topic
        </Link>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {categories.map(category => (
          <div
            key={category.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-800 mb-4">{category.description}</p>
            <div className="flex justify-between text-sm text-gray-800">
              <span className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" aria-hidden="true" />
                {category.topics} topics
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" aria-hidden="true" />
                {category.posts} posts
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Topics */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" aria-hidden="true" />
            Recent Topics
          </h2>
        </div>
        <div className="divide-y">
          {isLoading ? (
            <div className="p-4 text-center text-gray-800">Loading topics...</div>
          ) : topics.length === 0 ? (
            <div className="p-4 text-center text-gray-800">No topics yet. Be the first to create one!</div>
          ) : (
            topics.map(topic => (
              <div key={topic.id} className="p-4 hover:bg-gray-50">
                <Link href={`/forum/topic/${topic.id}`} className="block">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-amber-600 hover:text-amber-700">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-gray-800">
                        Posted by {topic.author} in {topic.category}
                      </p>
                    </div>
                    <div className="text-sm text-gray-800">
                      <div className="flex items-center mb-1">
                        <MessageSquare className="w-4 h-4 mr-1" aria-hidden="true" />
                        {topic.tags.split(',').length} tags
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" aria-hidden="true" />
                        {new Date(topic.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
} 