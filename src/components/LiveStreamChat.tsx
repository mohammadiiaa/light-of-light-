'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Send, User, MessageSquare } from 'lucide-react'

interface ChatMessage {
  id: string
  user: string
  message: string
  timestamp: Date
}

export default function LiveStreamChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const wsRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL || 'ws://localhost:3001')
    wsRef.current = ws

    ws.onopen = () => {
      setIsConnected(true)
      console.log('Connected to WebSocket')
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)

      if (data.type === 'history' && Array.isArray(data.messages)) {
        setMessages(data.messages)
      } else if (data.type === 'message' && data.data) {
        setMessages((prev) => [...prev, data.data])
      } else {
        console.warn('Unknown message type received:', data)
      }
    }

    ws.onclose = () => {
      setIsConnected(false)
      console.log('Disconnected from WebSocket')
    }

    return () => {
      ws.close()
    }
  }, [])

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return

    const message: ChatMessage = {
      id: Date.now().toString(),
      user: 'Anonymous', // Replace with actual user name when auth is implemented
      message: newMessage.trim(),
      timestamp: new Date()
    }

    wsRef.current.send(JSON.stringify(message))
    setNewMessage('')
  }

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5 text-amber-500" aria-hidden="true" />
          <h2 className="text-lg font-semibold text-gray-900">Live Chat</h2>
          <span 
            className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}
            aria-label={isConnected ? 'Connected' : 'Disconnected'}
          />
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className="flex items-start space-x-3"
            role="listitem"
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <User className="w-4 h-4 text-amber-600" aria-hidden="true" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">{msg.user}</span>
                <span className="text-xs text-gray-800">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm text-gray-800 mt-1">{msg.message}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form 
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-200"
        role="form"
        aria-label="Chat message form"
      >
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            aria-label="Message input"
            maxLength={300}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
            disabled={!isConnected || !newMessage.trim()}
          >
            <span className="sr-only">Send message</span>
            <Send className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  )
}
