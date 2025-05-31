import { NextResponse } from 'next/server'

// Mock database of content
const contentDatabase = [
  {
    id: 1,
    title: 'The Benefits of Honey',
    content: 'Honey has been used for centuries as a natural remedy...',
    category: 'healing',
    tags: ['honey', 'natural-remedy', 'healing'],
  },
  {
    id: 2,
    title: 'Names of God',
    content: 'The 99 names of God represent different attributes...',
    category: 'education',
    tags: ['names', 'attributes', 'divine'],
  },
  // Add more content items here
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const category = searchParams.get('category')

  if (!query) {
    return NextResponse.json({ error: 'Search query is required. Please provide a valid query.' }, { status: 400 });
  }

  // Simple search implementation
  const results = contentDatabase.filter(item => {
    const matchesQuery = 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    
    const matchesCategory = category ? item.category === category : true

    return matchesQuery && matchesCategory
  })

  return NextResponse.json({
    results,
    total: results.length,
    query,
    category,
  })
}