'use client'

import { useEffect, useState } from 'react'
import { Phone, Mail, Clock, User, MessageCircle, Send, CheckCircle, Paperclip, X, FileText, Download } from 'lucide-react'

interface ChatSession {
  id: string
  messages: Array<{
    role: string
    content: string
    timestamp: Date
    fileUrl?: string
    fileName?: string
    fileType?: string
  }>
  status: 'active' | 'waiting_human' | 'human_assigned' | 'resolved'
  userInfo?: {
    name?: string
    email?: string
    phone?: string
  }
  assignedAgent?: string
  createdAt: Date
  updatedAt: Date
}

export default function EmergencyChatAdmin() {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null)
  const [replyMessage, setReplyMessage] = useState('')
  const [agentName, setAgentName] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  // Fetch sessions every 5 seconds
  useEffect(() => {
    fetchSessions()
    const interval = setInterval(fetchSessions, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchSessions = async () => {
    try {
      const res = await fetch('/api/chat/sessions')
      const data = await res.json()
      setSessions(data.sessions || [])
    } catch (error) {
      console.error('Failed to fetch sessions:', error)
    }
  }

  const assignToMe = async (session: ChatSession) => {
    if (!agentName) {
      alert('Please enter your name first')
      return
    }

    try {
      await fetch('/api/chat/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: session.id,
          status: 'human_assigned',
          assignedAgent: agentName,
        }),
      })
      fetchSessions()
      setSelectedSession({ ...session, status: 'human_assigned', assignedAgent: agentName })
    } catch (error) {
      console.error('Failed to assign session:', error)
    }
  }

  const handleFileUpload = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    setUploading(true)
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error || 'Upload failed')
      }

      const data = await res.json()
      return data
    } catch (error) {
      console.error('Upload error:', error)
      alert(error instanceof Error ? error.message : 'Failed to upload file')
      return null
    } finally {
      setUploading(false)
    }
  }

  const sendReply = async () => {
    if (!selectedSession || (!replyMessage.trim() && !selectedFile)) return

    setLoading(true)
    try {
      let fileData = null
      
      // Upload file if selected
      if (selectedFile) {
        fileData = await handleFileUpload(selectedFile)
        if (!fileData) {
          setLoading(false)
          return
        }
      }

      const newMessage = {
        role: 'agent',
        content: replyMessage || (fileData ? 'Sent a file' : ''),
        timestamp: new Date(),
        ...(fileData && {
          fileUrl: fileData.url,
          fileName: fileData.fileName,
          fileType: fileData.fileType,
        }),
      }

      await fetch('/api/chat/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: selectedSession.id,
          messages: [...selectedSession.messages, newMessage],
        }),
      })

      setReplyMessage('')
      setSelectedFile(null)
      fetchSessions()
    } catch (error) {
      console.error('Failed to send reply:', error)
    } finally {
      setLoading(false)
    }
  }

  const resolveSession = async (sessionId: string) => {
    try {
      await fetch('/api/chat/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          status: 'resolved',
        }),
      })
      fetchSessions()
      setSelectedSession(null)
    } catch (error) {
      console.error('Failed to resolve session:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800'
      case 'waiting_human':
        return 'bg-yellow-100 text-yellow-800'
      case 'human_assigned':
        return 'bg-green-100 text-green-800'
      case 'resolved':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Emergency Chat Admin</h1>
            <p className="text-sm text-gray-600">Manage live emergency conversations</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Your name (agent)"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-green-700">Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sessions List */}
        <div className="w-96 border-r border-gray-200 bg-white overflow-y-auto">
          <div className="border-b border-gray-200 px-4 py-3">
            <h2 className="font-semibold text-gray-900">Active Sessions ({sessions.length})</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => setSelectedSession(session)}
                className={`w-full px-4 py-4 text-left transition-colors hover:bg-gray-50 ${
                  selectedSession?.id === session.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-gray-400" />
                      <span className="font-medium text-gray-900">
                        {session.userInfo?.name || `Session ${session.id.slice(0, 8)}`}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {session.messages[session.messages.length - 1]?.content || 'No messages'}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(session.status)}`}>
                        {session.status.replace('_', ' ')}
                      </span>
                      {session.assignedAgent && (
                        <span className="text-xs text-gray-500">
                          → {session.assignedAgent}
                        </span>
                      )}
                    </div>
                  </div>
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>
              </button>
            ))}
            {sessions.length === 0 && (
              <div className="px-4 py-8 text-center text-gray-500">
                <MessageCircle className="mx-auto h-12 w-12 text-gray-300" />
                <p className="mt-2 text-sm">No active sessions</p>
              </div>
            )}
          </div>
        </div>

        {/* Chat View */}
        <div className="flex-1 flex flex-col bg-white">
          {selectedSession ? (
            <>
              {/* Chat Header */}
              <div className="border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {selectedSession.userInfo?.name || 'Anonymous User'}
                    </h3>
                    <div className="mt-1 flex items-center gap-4 text-sm text-gray-600">
                      {selectedSession.userInfo?.email && (
                        <div className="flex items-center gap-1">
                          <Mail className="h-3.5 w-3.5" />
                          {selectedSession.userInfo.email}
                        </div>
                      )}
                      {selectedSession.userInfo?.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="h-3.5 w-3.5" />
                          {selectedSession.userInfo.phone}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedSession.status !== 'human_assigned' && (
                      <button
                        onClick={() => assignToMe(selectedSession)}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      >
                        Assign to Me
                      </button>
                    )}
                    <button
                      onClick={() => resolveSession(selectedSession.id)}
                      className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-4">
                  {selectedSession.messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                          msg.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : msg.role === 'agent'
                            ? 'bg-green-100 text-green-900'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                        {msg.fileUrl && (
                          <div className="mt-2 pt-2 border-t border-current/20">
                            <a
                              href={msg.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-xs font-semibold hover:underline"
                            >
                              {msg.fileType?.startsWith('image/') ? (
                                <>
                                  <FileText className="h-4 w-4" />
                                  <span>📷 {msg.fileName || 'Image'}</span>
                                </>
                              ) : (
                                <>
                                  <Download className="h-4 w-4" />
                                  <span>📎 {msg.fileName || 'Download File'}</span>
                                </>
                              )}
                            </a>
                            {msg.fileType?.startsWith('image/') && (
                              <img
                                src={msg.fileUrl}
                                alt={msg.fileName || 'Attachment'}
                                className="mt-2 max-w-full rounded-lg"
                                style={{ maxHeight: '200px' }}
                              />
                            )}
                          </div>
                        )}
                        <p className="mt-1 text-xs opacity-70">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reply Input */}
              {selectedSession.status === 'human_assigned' && (
                <div className="border-t border-gray-200 px-6 py-4">
                  {selectedFile && (
                    <div className="mb-3 flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2">
                      <Paperclip className="h-4 w-4 text-blue-600" />
                      <span className="flex-1 text-sm text-blue-900">{selectedFile.name}</span>
                      <button
                        onClick={() => setSelectedFile(null)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      id="file-upload"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) setSelectedFile(file)
                      }}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600"
                    >
                      <Paperclip className="h-5 w-5" />
                    </label>
                    <input
                      type="text"
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendReply()}
                      placeholder="Type your reply..."
                      disabled={loading || uploading}
                      className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                    <button
                      onClick={sendReply}
                      disabled={(!replyMessage.trim() && !selectedFile) || loading || uploading}
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
                    >
                      {uploading || loading ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <Send className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              <div className="text-center">
                <User className="mx-auto h-16 w-16 text-gray-300" />
                <p className="mt-4 text-lg font-medium">Select a session to view</p>
                <p className="mt-1 text-sm">Choose a conversation from the left panel</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Made with Bob
