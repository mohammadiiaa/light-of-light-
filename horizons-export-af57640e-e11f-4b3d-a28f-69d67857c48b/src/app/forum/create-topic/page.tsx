'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { addTopic } from '@/app/forum/forumData'

export default function CreateTopic() {
  const router = useRouter()
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!category || !title || !content) {
      alert('Please fill all required fields')
      setIsSubmitting(false)
      return
    }

    try {
      // Add the new topic to data
      await addTopic({ category, title, content, tags })
      
      // Redirect back to forum page
      router.push('/forum')
    } catch (error) {
      console.error('Error creating topic:', error)
      alert('Failed to create topic. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        href="/forum" 
        className="inline-flex items-center text-gray-800 hover:text-gray-900 mb-6"
        aria-label="Back to forum"
      >
        <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
        Back to Forum
      </Link>

      <h1 className="text-3xl font-bold mb-8">Create New Topic</h1>

      <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Create new topic form">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-800 mb-2">
            Category
          </label>
          <select
            id="category"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            aria-required="true"
          >
            <option value="">Select a category</option>
            <option value="General Discussion">General Discussion</option>
            <option value="Spiritual Growth">Spiritual Growth</option>
          </select>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-800 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="Enter your topic title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-800 mb-2">
            Content
          </label>
          <textarea
            id="content"
            rows={8}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="Write your topic content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-800 mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="e.g., healing, prayer, wellness"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
            aria-label="Create topic"
          >
            {isSubmitting ? 'Creating...' : 'Create Topic'}
          </button>
        </div>
      </form>
    </div>
  )
}
