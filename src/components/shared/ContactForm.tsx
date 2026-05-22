'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SERVICE_PAGES } from '@/lib/constants'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  serviceInterest: string
  message: string
  gdprConsent: boolean
  honeypot: string
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceInterest: '',
      message: '',
      gdprConsent: false,
      honeypot: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check - if filled, silently reject
    if (data.honeypot) return 
      setSubmitStatus('success')

    setSubmitStatus('loading')

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    try {
      // No actual API call - just show success

      const res = await fetch('/api/chat/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed')
      setSubmitStatus('success')
      reset()
    } catch(error) {
      setSubmitStatus('error')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl bg-white p-12 text-center shadow-sm">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
          <CheckCircle className="h-8 w-8 text-accent-700" />
        </div>
        <h3 className="mb-2 font-heading text-xl font-semibold text-primary">
          Message Sent Successfully
        </h3>
        <p className="mb-6 text-neutral-600">
          Thank you for your enquiry. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-sm font-semibold text-primary underline underline-offset-2 transition-colors hover:text-accent-600"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6 rounded-xl bg-white p-8 shadow-sm"
    >
      {/* Honeypot field - hidden from users */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="honeypot">Do not fill this field</label>
        <input
          id="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('honeypot')}
        />
      </div>

      {/* Error banner */}
      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      {/* Name & Email row */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-primary-800"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your full name"
            className={cn(
              'w-full rounded-lg border px-4 py-3 text-sm text-primary-800 placeholder:text-neutral-500 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30',
              errors.name ? 'border-red-400' : 'border-neutral-300'
            )}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-primary-800"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="your@email.com"
            className={cn(
              'w-full rounded-lg border px-4 py-3 text-sm text-primary-800 placeholder:text-neutral-500 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30',
              errors.email ? 'border-red-400' : 'border-neutral-300'
            )}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone & Company row */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Phone */}
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-1.5 block text-sm font-medium text-primary-800"
          >
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+44 20 7100 0000"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm text-primary-800 placeholder:text-neutral-500 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            {...register('phone')}
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="contact-company"
            className="mb-1.5 block text-sm font-medium text-primary-800"
          >
            Company
          </label>
          <input
            id="contact-company"
            type="text"
            placeholder="Your company name"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm text-primary-800 placeholder:text-neutral-500 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            {...register('company')}
          />
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <label
          htmlFor="contact-service"
          className="mb-1.5 block text-sm font-medium text-primary-800"
        >
          Service of Interest
        </label>
        <select
          id="contact-service"
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-primary-800 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          {...register('serviceInterest')}
        >
          <option value="">Select a service...</option>
          {SERVICE_PAGES.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-primary-800"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your requirements..."
          className={cn(
            'w-full resize-y rounded-lg border px-4 py-3 text-sm text-primary-800 placeholder:text-neutral-500 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30',
            errors.message ? 'border-red-400' : 'border-neutral-300'
          )}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* GDPR Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className={cn(
              'mt-1 h-4 w-4 rounded border-neutral-300 text-primary accent-primary focus:ring-accent',
              errors.gdprConsent && 'border-red-400'
            )}
            {...register('gdprConsent', {
              required: 'You must consent to data processing to submit this form',
            })}
          />
          <span className="text-sm text-neutral-600">
            I consent to CTS Offshore and Marine processing my personal data in
            accordance with the{' '}
            <a
              href="/privacy"
              className="font-medium text-primary underline underline-offset-2 hover:text-accent-600"
            >
              Privacy Policy
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.gdprConsent && (
          <p className="mt-1 text-xs text-red-500">{errors.gdprConsent.message}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className={cn(
          'inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-heading font-semibold text-primary transition-all duration-200 hover:bg-accent-400 hover:scale-[1.01] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.99] sm:w-auto',
          submitStatus === 'loading' && 'cursor-not-allowed opacity-70'
        )}
      >
        {submitStatus === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
