import { NextResponse } from 'next/server'

// In-memory storage (replace with database in production)
// Use Redis, PostgreSQL, or MongoDB for production
let chatSessions: Map<string, {
  id: string
  messages: Array<{ role: string; content: string; timestamp: Date }>
  status: 'active' | 'waiting_human' | 'human_assigned' | 'resolved'
  userInfo?: {
    name?: string
    email?: string
    phone?: string
  }
  assignedAgent?: string
  createdAt: Date
  updatedAt: Date
}> = new Map()

// GET - Fetch all active sessions (for admin dashboard)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')
  
  const sessions = Array.from(chatSessions.values())
    .filter(session => !status || session.status === status)
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
  
  return NextResponse.json({ sessions })
}

// POST - Create or update session
export async function POST(req: Request) {
  const { sessionId, messages, status, userInfo, assignedAgent } = await req.json()
  
  const existingSession = chatSessions.get(sessionId)
  
  const session = {
    id: sessionId,
    messages: messages || existingSession?.messages || [],
    status: status || existingSession?.status || 'active',
    userInfo: userInfo || existingSession?.userInfo,
    assignedAgent: assignedAgent || existingSession?.assignedAgent,
    createdAt: existingSession?.createdAt || new Date(),
    updatedAt: new Date(),
  }
  
  chatSessions.set(sessionId, session)
  
  return NextResponse.json({ success: true, session })
}

// DELETE - Clear old sessions (cleanup)
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get('sessionId')
  
  if (sessionId) {
    chatSessions.delete(sessionId)
    return NextResponse.json({ success: true, message: 'Session deleted' })
  }
  
  // Clear sessions older than 24 hours
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
  for (const [id, session] of chatSessions.entries()) {
    if (session.updatedAt < oneDayAgo && session.status === 'resolved') {
      chatSessions.delete(id)
    }
  }
  
  return NextResponse.json({ success: true, message: 'Old sessions cleared' })
}

// Made with Bob
