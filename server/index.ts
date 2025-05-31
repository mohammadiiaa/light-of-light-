import { WebSocketServer, WebSocket } from 'ws'
import { createServer } from 'http'
import { MongoClient, Db } from 'mongodb'

// Configs
const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const DB_NAME = 'lightoflight'

// Define ChatMessage interface
interface ChatMessage {
  id: string
  user: string
  message: string
  timestamp: string // ISO string for easier handling
}

// Create HTTP server (can be extended with Express if needed)
const server = createServer()

// Create WebSocket server bound to HTTP server
const wss = new WebSocketServer({ server })

let db: Db | null = null

// Connect to MongoDB
MongoClient.connect(MONGODB_URI)
  .then(client => {
    console.log('Connected to MongoDB')
    db = client.db(DB_NAME)
  })
  .catch(err => {
    console.error('MongoDB connection error:', err)
  })

// Validate incoming message structure and size
function isValidMessage(msg: any): msg is ChatMessage {
  return (
    typeof msg.id === 'string' &&
    typeof msg.user === 'string' &&
    typeof msg.message === 'string' &&
    msg.message.length > 0 &&
    msg.message.length <= 300 && // Limit message length
    typeof msg.timestamp === 'string' &&
    !isNaN(Date.parse(msg.timestamp))
  )
}

// Placeholder sanitize function (implement your own sanitization here)
function sanitizeMessage(text: string): string {
  // For example, strip HTML tags or escape harmful characters
  // Here, simply trimming spaces
  return text.trim()
}

// Handle new WebSocket connections
wss.on('connection', async (ws: WebSocket) => {
  console.log('Client connected')

  // Send last 50 messages as chat history on new connection
  if (db) {
    try {
      const messages = await db
        .collection('messages')
        .find()
        .sort({ timestamp: -1 })
        .limit(50)
        .toArray()
      ws.send(JSON.stringify({ type: 'history', messages: messages.reverse() }))
    } catch (err) {
      console.error('Error fetching chat history:', err)
    }
  }

  ws.on('message', async (data: Buffer) => {
    try {
      const message = JSON.parse(data.toString())

      if (!isValidMessage(message)) {
        console.warn('Invalid message format received:', message)
        return
      }

      // Sanitize message content before storing/broadcasting
      message.message = sanitizeMessage(message.message)

      if (db) {
        await db.collection('messages').insertOne({
          ...message,
          timestamp: new Date(message.timestamp), // store as Date
        })
      }

      // Broadcast message to all connected clients with type 'message'
      const broadcastPayload = JSON.stringify({ type: 'message', data: message })

      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(broadcastPayload)
        }
      })
    } catch (error) {
      console.error('Error processing message:', error)
    }
  })

  ws.on('close', () => {
    console.log('Client disconnected')
  })
})

// Start the HTTP and WebSocket server
server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`)
})
