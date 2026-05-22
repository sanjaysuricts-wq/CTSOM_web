// Chat helper functions for emergency chat

export const EMERGENCY_KEYWORDS = [
  'emergency',
  'urgent',
  'breakdown',
  'failure',
  'failed',
  'stopped working',
  'not working',
  'broken',
  'critical',
  'immediate',
  'asap',
  'help now',
  'right now',
  'quickly',
  'fast',
  'danger',
  'safety',
  'accident',
  'leak',
  'fire',
  'explosion',
]

export const COMPLEX_KEYWORDS = [
  'quotation',
  'quote for',
  'pricing for',
  'price for',
  'cost for',
  'how much for',
  'how much does',
  'how much will',
  'contract for',
  'need a quote',
  'get a quote',
  'send quote',
  'provide quote',
  'detailed quote',
  'specific price',
  'exact cost',
]

export const COMPLAINT_KEYWORDS = [
  'complaint',
  'unhappy',
  'disappointed',
  'terrible',
  'awful',
  'bad service',
  'poor',
  'unsatisfied',
  'refund',
  'cancel',
]

interface Message {
  role: string
  content: string
  timestamp?: Date
}

export const shouldAutoEscalate = (
  message: string,
  messageHistory: Message[]
): { shouldEscalate: boolean; reason: string } => {
  const lowerMessage = message.toLowerCase()

  // 1. Check for emergency keywords - BUT DON'T auto-escalate immediately
  // Let the AI collect information first through the questionnaire
  const hasEmergency = EMERGENCY_KEYWORDS.some((keyword) =>
    lowerMessage.includes(keyword)
  )
  
  // Only auto-escalate emergency if AI has already collected info (look for [ESCALATE] in history)
  if (hasEmergency) {
    const aiMessages = messageHistory.filter((m) => m.role === 'assistant')
    const hasCollectedInfo = aiMessages.some((m) =>
      m.content.includes('may I have your name') ||
      m.content.includes('May I have your name')
    )
    
    // If AI hasn't started collecting info yet, let it handle the questionnaire
    // Don't auto-escalate on first emergency mention
    if (!hasCollectedInfo) {
      return { shouldEscalate: false, reason: 'emergency_questionnaire_needed' }
    }
  }

  // 2. Check for complex/pricing requests - immediate escalation
  const hasComplex = COMPLEX_KEYWORDS.some((keyword) =>
    lowerMessage.includes(keyword)
  )
  if (hasComplex) {
    return { shouldEscalate: true, reason: 'complex_request' }
  }

  // 3. Check for complaints - immediate escalation
  const hasComplaint = COMPLAINT_KEYWORDS.some((keyword) =>
    lowerMessage.includes(keyword)
  )
  if (hasComplaint) {
    return { shouldEscalate: true, reason: 'complaint_detected' }
  }

  // 4. Check message count (too many back-and-forth)
  const userMessageCount = messageHistory.filter((m) => m.role === 'user').length
  if (userMessageCount >= 10) {
    return { shouldEscalate: true, reason: 'too_many_messages' }
  }

  return { shouldEscalate: false, reason: 'none' }
}

export const getEscalationMessage = (reason: string): string => {
  switch (reason) {
    case 'emergency_detected':
      return '🚨 I detect this is an emergency. Connecting you with our emergency response team immediately...'
    case 'complex_request':
      return '💼 This requires our specialist team. Let me connect you with an expert who can help...'
    case 'complaint_detected':
      return '🤝 I understand your concern. Let me connect you with a team member who can assist you properly...'
    case 'too_many_messages':
      return '👤 Let me connect you with a human agent who can provide more detailed assistance...'
    default:
      return '👤 Connecting you with a human agent...'
  }
}

// Made with Bob
