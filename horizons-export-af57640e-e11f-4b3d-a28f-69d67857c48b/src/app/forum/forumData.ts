interface Topic {
  id: string
  category: string
  title: string
  content: string
  tags: string
  createdAt: Date
  author: string
}

// In-memory storage for topics (replace with database in production)
let topics: Topic[] = []

export const addTopic = async (topicData: Omit<Topic, 'id' | 'createdAt' | 'author'>): Promise<Topic> => {
  const newTopic: Topic = {
    id: Date.now().toString(),
    ...topicData,
    createdAt: new Date(),
    author: 'Anonymous' // Replace with actual user when auth is implemented
  }
  
  topics.push(newTopic)
  return newTopic
}

export const getTopics = async (): Promise<Topic[]> => {
  return topics
}

export const getTopicById = async (id: string): Promise<Topic | undefined> => {
  return topics.find(topic => topic.id === id)
}

export const getTopicsByCategory = async (category: string): Promise<Topic[]> => {
  return topics.filter(topic => topic.category === category)
}

export default {
  addTopic,
  getTopics,
  getTopicById,
  getTopicsByCategory
} 