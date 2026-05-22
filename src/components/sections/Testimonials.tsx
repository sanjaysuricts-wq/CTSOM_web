// 'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = TESTIMONIALS.length

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  // Auto-rotate
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(next, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, next])

  const testimonial = TESTIMONIALS[current]

  return (
    <section
      className="relative overflow-hidden bg-primary py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative accent quote mark */}
      <div className="absolute left-8 top-8 opacity-5 md:left-16 md:top-12">
        <Quote className="h-40 w-40 text-accent md:h-64 md:w-64" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center font-heading text-3xl font-bold text-white sm:text-4xl"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative mx-auto max-w-3xl">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 md:-left-16"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 md:-right-16"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonial content */}
          <div className="min-h-[250px] text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' as const }}
                className="flex flex-col items-center"
              >
                {/* Quote icon */}
                <Quote className="mb-6 h-10 w-10 text-accent" />

                {/* Quote text */}
                <blockquote className="mb-8 font-body text-lg leading-relaxed text-white/90 md:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <span className="font-heading text-base font-bold text-white">
                    {testimonial.author}
                  </span>
                  <span className="mt-1 font-body text-sm text-accent">
                    {testimonial.company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  idx === current
                    ? 'w-8 bg-accent'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
