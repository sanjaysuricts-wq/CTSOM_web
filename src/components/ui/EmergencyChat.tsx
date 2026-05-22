

import { useCallback, useEffect, useRef, useState } from 'react'
import { X, Send, MessageCircle, Phone, Clock, Loader2, User, FileText, Download } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import { shouldAutoEscalate, getEscalationMessage } from '@/lib/chatHelpers'

// WhatsApp utility function
const openWhatsApp = (message?: string) => {
  const defaultMessage = `Hello! I need emergency assistance from CTS Offshore & Marine.`
  const text = encodeURIComponent(message || defaultMessage)
  const url = `https://wa.me/${COMPANY.whatsapp}?text=${text}`
  window.open(url, '_blank')
}
interface Message {
  role: 'assistant' | 'user' | 'agent'
  content: string
  timestamp?: Date
  fileUrl?: string
  fileName?: string
  fileType?: string
}
const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: `Hello! I'm the CTS Offshore & Marine AI assistant. I'm here to help with:\n\n• General service inquiries\n• Company information\n• Emergency support\n• Connecting you with specialists\n\nHow can I assist you today?\n\n💬 For urgent matters, call ${COMPANY.phone} (${COMPANY.availability})`,
}

// Generate unique session ID
const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export default function EmergencyChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(() => generateSessionId())
  const [humanMode, setHumanMode] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  // Listen for the footer button click
  useEffect(() => {
    const handler = () => setIsOpen(true)
    const btn = document.getElementById('emergency-contact-btn')
    btn?.addEventListener('click', handler)
    return () => btn?.removeEventListener('click', handler)
  }, [])

  // Listen for global open-chat events (header, CTA, etc.)
  useEffect(() => {
    const handler = () => setIsOpen(true)
    window.addEventListener('open-emergency-chat', handler)
    return () => window.removeEventListener('open-emergency-chat', handler)
  }, [])

  // Save session to backend
  const saveSession = useCallback(async (updatedMessages: Message[]) => {
    try {
      await fetch('/api/chat/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          messages: updatedMessages.map(m => ({
            ...m,
            timestamp: m.timestamp || new Date()
          })),
          status: humanMode ? 'human_assigned' : 'active',
        }),
      })
    } catch (error) {
      console.error('Failed to save session:', error)
    }
  }, [sessionId, humanMode])

  // Poll for human agent responses
  useEffect(() => {
    if (!humanMode || !isOpen) return

    const pollInterval = setInterval(async () => {
      try {
        const res = await fetch(`/api/chat/sessions?sessionId=${sessionId}`)
        const data = await res.json()
        const session = data.sessions?.find((s: any) => s.id === sessionId)
        
        if (session && session.messages.length > messages.length) {
          setMessages(session.messages)
        }
      } catch (error) {
        console.error('Failed to poll for updates:', error)
      }
    }, 3000) // Poll every 3 seconds

    return () => clearInterval(pollInterval)
  }, [humanMode, isOpen, sessionId, messages.length])

  const requestHumanAgent = async () => {
    setHumanMode(true)
    const systemMsg: Message = {
      role: 'assistant',
      content: '🟢 Connecting you with a human agent... Please wait a moment.',
      timestamp: new Date()
    }
    const updatedMessages = [...messages, systemMsg]
    setMessages(updatedMessages)
    
    await fetch('/api/chat/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        messages: updatedMessages,
        status: 'waiting_human',
      }),
    })
  }

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMsg: Message = {
      role: 'user',
      content: trimmed,
      timestamp: new Date()
    }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')

    // Save to session
    await saveSession(updatedMessages)

    // If in human mode, don't call AI
    if (humanMode) {
      return
    }

    // Check if should auto-escalate based on keywords
    const { shouldEscalate, reason } = shouldAutoEscalate(trimmed, messages)
    
    if (shouldEscalate) {
      // Show escalation message
      const escalationMsg: Message = {
        role: 'assistant',
        content: getEscalationMessage(reason),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, escalationMsg])
      
      // Auto-escalate after 1.5 seconds
      setTimeout(() => {
        requestHumanAgent()
      }, 1500)
      
      return // Don't call AI
    }

    setIsLoading(true)

    // Build API messages (skip the hardcoded initial greeting)
    const apiMessages = updatedMessages
      .slice(1)
      .map((m) => ({ role: m.role === 'agent' ? 'assistant' : m.role, content: m.content }))

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      if (!res.ok || !res.body) {
        throw new Error('Chat request failed')
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''

      // Add empty assistant message to stream into
      setMessages((prev) => [...prev, { role: 'assistant', content: '', timestamp: new Date() }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        assistantContent += decoder.decode(value, { stream: true })
        const snapshot = assistantContent
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: snapshot, timestamp: new Date() }
          return updated
        })
      }

      // Check if AI wants to escalate to human
      if (assistantContent.includes('[ESCALATE]')) {
        // Clean the response (remove [ESCALATE] tag)
        const cleanContent = assistantContent.replace(/\[ESCALATE\]/g, '').trim()
        
        // Update the message without the tag
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            role: 'assistant',
            content: cleanContent,
            timestamp: new Date()
          }
          return updated
        })
        
        // Auto-escalate to human after 1.5 seconds
        setTimeout(() => {
          requestHumanAgent()
        }, 1500)
        
        // Save with clean content
        await saveSession([...updatedMessages, { role: 'assistant', content: cleanContent, timestamp: new Date() }])
      } else {
        // Save final AI response normally
        await saveSession([...updatedMessages, { role: 'assistant', content: assistantContent, timestamp: new Date() }])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `I'm having trouble connecting right now. Please call us directly at ${COMPANY.phone} — we're available ${COMPANY.availability}.\n\nOr email ${COMPANY.email} for immediate assistance.`,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition-all duration-300 hover:bg-accent-400 hover:shadow-xl"
        aria-label="24/7 Chat Support"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <MessageCircle className="h-6 w-6 text-primary" />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-sm font-bold text-white">
                24/7 Chat Support
              </h3>
              <div className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${humanMode ? 'bg-blue-400' : 'bg-green-400'}`} />
                <span className="font-body text-xs text-white/70">
                  {humanMode ? 'Human Agent' : 'AI Assistant'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!humanMode && (
                <button
                  onClick={requestHumanAgent}
                  className="rounded-lg bg-white/10 px-3 py-1.5 font-body text-[10px] font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Talk to Human
                </button>
              )}
              <div className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1">
                <Clock className="h-3 w-3 text-accent" />
                <span className="font-body text-[10px] font-semibold text-accent">24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-3">
            <p className="mb-2 font-body text-xs font-medium text-neutral-600">
              Quick Contact Options:
            </p>
            <div className="flex gap-2">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 font-body text-xs font-semibold text-primary transition-all hover:border-primary hover:bg-primary hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                Call
              </a>
              <button
                onClick={() => {
                  const lastUserMessage = messages
                    .filter(m => m.role === 'user')
                    .pop()?.content
                  openWhatsApp(lastUserMessage)
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 font-body text-xs font-semibold text-green-700 transition-all hover:border-green-500 hover:bg-green-500 hover:text-white"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 font-body text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-br-md bg-primary text-white'
                        : msg.role === 'agent'
                        ? 'rounded-bl-md bg-blue-100 text-blue-900 border-2 border-blue-300'
                        : 'rounded-bl-md bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    {msg.role === 'agent' && (
                      <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-blue-700">
                        <User className="h-3 w-3" />
                        Human Agent
                      </div>
                    )}
                    {msg.content.split('\n').map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < msg.content.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                    {msg.fileUrl && (
                      <div className="mt-2 pt-2 border-t border-current/20">
                        <a
                          href={msg.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 text-xs font-semibold hover:underline ${
                            msg.role === 'user' ? 'text-white' : 'text-blue-600'
                          }`}
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
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-neutral-100 px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin text-neutral-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-neutral-100 px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How can we help you today?"
                disabled={isLoading}
                className="flex-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 font-body text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white transition-colors hover:bg-primary-600 disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
